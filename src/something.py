from serpapi import GoogleSearch
import os
import json

image_results = []

for query in ["Push"]:
    params = {
        # search engine. Google, Bing, Yahoo, Naver, Baidu...
        "engine": "google",
        "q": query,                       # search query
        "tbm": "isch",                    # image results
        "num": "100",                     # number of images per page
        # page number: 0 -> first page, 1 -> second...
        "ijn": 0,
        # your serpapi api key
        "api_key": "11ab8a6b8b424d56953b954fb51faf3e81722a76691757c7e5a3cc950e48d029"
    }

    search = GoogleSearch(params)         # where data extraction happens

    images_is_present = True
    while images_is_present:
        results = search.get_dict()       # JSON -> Python dictionary

        # checks for "Google hasn't returned any results for this query."
        if "error" not in results:
            for image in results["images_results"]:
                if image["original"] not in image_results:
                    print(image["original"])
                    image_results.append(image["original"])

            # update to the next page
            params["ijn"] += 1
        else:
            images_is_present = False
            print(results["error"])

print(json.dumps(image_results, indent=2))
print(len(image_results))
