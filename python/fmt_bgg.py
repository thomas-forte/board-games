import uuid


def add_name_to_manual_data(scrape_list_item: dict, bgg_game: dict) -> None:
    """
    Add the name to the manual data if it is not present
    """
    if hasattr(scrape_list_item, "manual_data"):
        if not hasattr(scrape_list_item["manual_data"], "name"):
            scrape_list_item["manual_data"]["name"] = bgg_game.name
    else:
        scrape_list_item["manual_data"] = {
            "name": bgg_game.name,
        }


def _format_players(bgg_game: dict) -> dict:
    """
    Format the players from the bgg game
    """
    suggested_players = {
        k: i.get("best_rating")
        for k, i in bgg_game.suggested_players.get("results").items()
    }

    return {
        "min": bgg_game.minplayers,
        "max": bgg_game.maxplayers,
        "best": max(suggested_players.items(), key=lambda i: i[1])[0],
    }


def _format_playtime(bgg_game: dict) -> dict:
    """
    Format the playtime from the bgg game
    """
    return {
        "min": bgg_game.minplaytime,
        "max": bgg_game.maxplaytime,
    }


def _format_bgg_url(bgg_game: dict) -> str:
    """
    Format the bgg url from the bgg game
    """
    return f"https://boardgamegeek.com/boardgame/{bgg_game.id}"


def _format_noble_knight_url(scrape_list_item: dict) -> str:
    """
    Format the noble knight url from the scrape list item
    """
    return f"https://www.nobleknight.com/P/{scrape_list_item.get('nobleKnightId')}"


def format_game_data(scrape_list_item: dict, bgg_game: dict) -> dict:
    """
    Format the game data from the scrape list item and bgg game
    """
    return {
        "id": str(uuid.uuid1(node=bgg_game.id)),
        "name": bgg_game.name,
        "publishers": bgg_game.publishers,
        "releaseYear": bgg_game.year,
        "bggRating": bgg_game.rating_average,
        "players": _format_players(bgg_game),
        "playtime": _format_playtime(bgg_game),
        "complexityRating": bgg_game.rating_average_weight,
        "bggUrl": _format_bgg_url(bgg_game),
        "nobleKnightUrl": _format_noble_knight_url(scrape_list_item),
        "tags": scrape_list_item.get("tags"),
    }


def add_manual_data_to_game_data(game_data: dict, scrape_list_item: dict) -> None:
    """
    Add the manual data to the game data
    """
    if not hasattr(scrape_list_item, "manual_data"):
        return

    if hasattr(scrape_list_item["manual_data"], "warfareLevel"):
        game_data["warfareLevel"] = scrape_list_item["manual_data"]["warfareLevel"]

    if hasattr(scrape_list_item["manual_data"], "officialUrl"):
        game_data["officialUrl"] = scrape_list_item["manual_data"]["officialUrl"]

    if hasattr(scrape_list_item["manual_data"], "rulesUrl"):
        game_data["rulesUrl"] = scrape_list_item["manual_data"]["rulesUrl"]

    if hasattr(scrape_list_item["manual_data"], "numberOfScenarios"):
        game_data["scenarios"] = scrape_list_item["manual_data"]["numberOfScenarios"]

    if hasattr(scrape_list_item["manual_data"], "counters"):
        game_data["counters"] = {}
        if hasattr(scrape_list_item["manual_data"]["counters"], "total"):
            game_data["counters"]["total"] = scrape_list_item["manual_data"][
                "counters"
            ]["total"]
        if hasattr(scrape_list_item["manual_data"]["counters"], "size"):
            game_data["counters"]["size"] = scrape_list_item["manual_data"]["counters"][
                "size"
            ]

    if hasattr(scrape_list_item["manual_data"], "maps"):
        game_data["maps"] = []
        for map_dimension, map_count in scrape_list_item["manual_data"]["maps"].items():
            game_data["maps"].append(
                {
                    "size": map_dimension,
                    "count": map_count,
                }
            )
