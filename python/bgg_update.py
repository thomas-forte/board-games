import json
from boardgamegeek import BGGClient
from datetime import datetime

"""
This script updates the bggLastUpdate field in the scrape_list.json file.
"""

# Gather tags from tags.json
with open("tags.json", "r") as file:
    tags = json.load(file)

# Format tags
tags_data = []
for index, tag in enumerate(tags):
    tags_data.append(
        {"position": index, "name": tag, "tag": tag.lower().replace(" ", "_")}
    )

# Write tags to src/assets/tags.json
with open("../src/assets/tags.json", "w") as file:
    json.dump(tags_data, file)


# Gather scrape_list.json
with open("scrape_list.json", "r") as file:
    scrape_list = json.load(file)

# Break scrape_list.json into chunks as needed for BGG API
CHUNK_SIZE = 20
bgg_chunks = [
    scrape_list[i : i + CHUNK_SIZE] for i in range(0, len(scrape_list), CHUNK_SIZE)
]

# Initialize variables
bgg = BGGClient()
data = []
now = datetime.now()

# Loop through chunks and format data
for bgg_chunk in bgg_chunks:
    game_list = [
        game.get("boardGameGeekId") for game in bgg_chunk if game.get("boardGameGeekId")
    ]
    games = bgg.game_list(game_list)
    for game in games:

        # find the index of the game in scrape_list.json
        scrape_list_index = next(
            i
            for i, item in enumerate(scrape_list)
            if item.get("boardGameGeekId") == str(game.id)
        )

        # update the bggLastUpdate field for updating the scrape_list.json
        scrape_list[scrape_list_index]["bggLastUpdate"] = now.isoformat()

        # update the manual_data field for updating the scrape_list.json
        if hasattr(scrape_list[scrape_list_index], "manual_data"):
            if "name" not in scrape_list[scrape_list_index]["manual_data"]:
                scrape_list[scrape_list_index]["manual_data"]["name"] = game.name
        else:
            scrape_list[scrape_list_index]["manual_data"] = {
                "name": game.name,
            }

        # format data for src/assets/scraped.json
        suggested_players = {
            k: i.get("best_rating")
            for k, i in game.suggested_players.get("results").items()
        }
        data.append(
            {
                "name": game.name,
                "publishers": game.publishers,
                "releaseYear": game.year,
                "bggRating": game.rating_average,
                "players": {
                    "min": game.minplayers,
                    "max": game.maxplayers,
                    "best": max(suggested_players.items(), key=lambda i: i[1])[0],
                },
                "playtime": {
                    "min": game.minplaytime,
                    "max": game.maxplaytime,
                },
                "complexityRating": game.rating_average_weight,
                "bggUrl": f"https://boardgamegeek.com/boardgame/{game.id}",
                "nobleKnightUrl": f"https://www.nobleknight.com/P/{scrape_list[scrape_list_index].get('nobleKnightId')}",
                "tags": scrape_list[scrape_list_index].get("tags"),
            }
        )

# Write scrape_list.json
with open("scrape_list.json", "w") as file:
    json.dump(scrape_list, file, indent=2)

# Write scraped.json
with open("../src/assets/scraped.json", "w") as file:
    json.dump(data, file)
