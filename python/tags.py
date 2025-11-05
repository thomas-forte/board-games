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

    return tags_data


def write_tags(tags: list[dict]) -> None:
    """
    Writes tags to src/assets/tags.json
    """
    logger.info(f"Writing {len(tags)} tags to src/assets/tags.json")
    with open("../src/assets/tags.json", "w") as file:
        json.dump(tags, file)
    logger.info("Tags written to src/assets/tags.json")
