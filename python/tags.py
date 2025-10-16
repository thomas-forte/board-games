import json
import logging

"""
This script loads tags from tags.json and formats them for src/assets/tags.json
"""

logger = logging.getLogger(__name__)


def load_tags() -> list[dict]:
    """
    Loads tags from tags.json and formats them for src/assets/tags.json
    """
    logger.info("Loading tags from tags.json")
    with open("tags.json", "r") as file:
        tags = json.load(file)
    logger.info(f"Loaded {len(tags)} tags from tags.json")

    tags_data = []
    for index, tag in enumerate(tags):
        tags_data.append(
            {
                "position": index,
                "name": tag,
                "tag": tag.lower().replace(" ", "_"),
            }
        )

    logger.info(f"Writing {len(tags_data)} tags to src/assets/tags.json")
    with open("../src/assets/tags.json", "w") as file:
        json.dump(tags_data, file)
    logger.info("Tags loaded and written to src/assets/tags.json")

    return tags_data
