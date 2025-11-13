import json
import logging
import io

from PIL import Image
import requests

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)


def load_images() -> list[dict]:
    """
    Loads images from images.json and formats them for src/assets/images.json
    """
    logger.info("Loading images from images.json")
    with open("images.json", "r") as file:
        images = json.load(file)
    logger.info(f"Loaded {len(images)} images from images.json")

    for image in images:
        response = requests.get(image["imageUrl"])
        if response.status_code == 200:
            buffer = io.BytesIO(response.content)
            buffer.seek(0)
            with Image.open(buffer) as img:
                img = img.convert("RGB")
                img.thumbnail((300, 300))
                img.save(f"../public/images/{image['id']}.jpg")
            logger.debug(f"Downloaded image {image['id']}")
        else:
            logger.error(f"Failed to download image {image['id']}")
            continue

    return images


if __name__ == "__main__":
    load_images()
