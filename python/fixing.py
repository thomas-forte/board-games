import json


with open("scrape_list.json", "r") as file:
    scrape_list = json.load(file)

with open("../src/assets/scraped.json", "r") as file:
    scraped = json.load(file)

for index, game in enumerate(scraped):
    bgg_id = game.get("bggUrl").split("/")[-1]
    scrape_list_game = next((g for g in scrape_list if g.get("boardGameGeekId") == str(bgg_id)), None)
    scraped[index]["warfareLevel"] = scrape_list_game.get("manual_data").get("warfareScale")

with open("../src/assets/scraped.json", "w") as file:
    json.dump(scraped, file)