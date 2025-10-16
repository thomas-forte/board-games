import json
from datetime import datetime
import logging
import time

from boardgamegeek import BGGClient
from tags import load_tags
from fmt_bgg import (
    add_name_to_manual_data,
    format_game_data,
    add_manual_data_to_game_data,
)

"""
This script updates the bggLastUpdate field in the scrape_list.json file.
"""

CHUNK_SIZE = 20
NOW = datetime.now()


logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


load_tags()


logger.info("Loading scrape_list.json")
with open("scrape_list.json", "r") as file:
    scrape_list = json.load(file)
logger.info(f"Loaded {len(scrape_list)} games from scrape_list.json")

logger.info("Filtering scrape_list.json to only include games with a boardGameGeekId")
scrape_list = [game for game in scrape_list if game.get("boardGameGeekId")]
logger.info(f"Filtered to {len(scrape_list)} games with a boardGameGeekId")

bgg_chunks = [
    scrape_list[i : i + CHUNK_SIZE] for i in range(0, len(scrape_list), CHUNK_SIZE)
]
logger.info(f"Broken into {len(bgg_chunks)} chunks of max {CHUNK_SIZE} games")


bgg = BGGClient()
logger.info("Initialized BGGClient")

data = []
for bgg_chunk in bgg_chunks:

    game_list = [game.get("boardGameGeekId") for game in bgg_chunk]

    logger.info(f"Fetching {len(game_list)} games from BGG")
    start_time = time.time()
    results = bgg.game_list(game_list)
    logger.info(f"Fetched {len(results)} games in {time.time() - start_time} s")

    for bgg_game in results:

        scrape_list_index = next(
            i
            for i, item in enumerate(scrape_list)
            if item.get("boardGameGeekId") == str(bgg_game.id)
        )

        logger.info(f"Updating bggLastUpdate for game {bgg_game.id}")
        scrape_list[scrape_list_index]["bggLastUpdate"] = NOW.isoformat()

        add_name_to_manual_data(scrape_list[scrape_list_index], bgg_game)

        formatted_game_data = format_game_data(scrape_list[scrape_list_index], bgg_game)

        add_manual_data_to_game_data(
            formatted_game_data, scrape_list[scrape_list_index]
        )

        data.append(formatted_game_data)

# Write scrape_list.json
with open("scrape_list.json", "w") as file:
    json.dump(scrape_list, file, indent=2)

# Write scraped.json
with open("../src/assets/scraped.json", "w") as file:
    json.dump(data, file)
