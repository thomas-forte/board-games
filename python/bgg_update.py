import json
from boardgamegeek import BGGClient
from datetime import datetime

"""
This script updates the bggLastUpdate field in the scrape_list.json file.

Format:
{
    "nobleKnightId": "2147841575",
    "boardGameGeekId": "322197",
    "bggLastUpdate": "<ISO 8601 datetime>",
    "tags": ["top_games"]
}
"""

# Gather tags from tags.json and format them for src/assets/tags.json
with open("tags.json", "r") as file:
    tags = json.load(file)

tags_data = []
for index, tag in enumerate(tags):
    tags_data.append({
        "position": index,
        "name": tag,
        "tag": tag.lower().replace(" ", "_")
    })

with open("src/assets/tags.json", "w") as file:
    json.dump(tags_data, file)



with open("scrape_list.json", "r") as file:
    scrape_list = json.load(file)


chunk_size = 20
bgg_chunks = [scrape_list[i : i + chunk_size] for i in range(0, len(scrape_list), chunk_size)]

bgg = BGGClient()

data = []

now = datetime.now()

for bgg_chunk in bgg_chunks:
    game_list = [game.get("boardGameGeekId") for game in bgg_chunk if game.get("boardGameGeekId")]
    games = bgg.game_list(game_list)
    for game in games:
        scrape_list_index = next(i for i, item in enumerate(scrape_list) if item.get("boardGameGeekId") == str(game.id))
        scrape_list[scrape_list_index]["bggLastUpdate"] = now.isoformat()
        suggested_players={ k:i.get("best_rating") for k,i in game.suggested_players.get("results").items()}
        data.append({
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
            "tags": scrape_list[scrape_list_index].get("tags")
        })

with open("scrape_list.json", "w") as file:
    json.dump(scrape_list, file, indent=2)

with open("bgg_data.json", "w") as file:
    json.dump(data, file, indent=2)


