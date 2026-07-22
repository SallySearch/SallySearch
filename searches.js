function openSearches(category, term) {

    let urls = [];


    if (category === "vinyl") {

        urls = [
            "https://www.discogs.com/search/?q=",
            "https://www.amazon.de/s?k=",
            "https://www.ebay.de/sch/i.html?_nkw=",
            "https://www.ebay.de/sch/i.html?_sofindtype=so&_nkw="
        ];

    }


    if (category === "lego_used" || category === "lego_new") {

        urls = [
            "https://www.ebay.de/sch/i.html?_nkw=",
            "https://www.ebay.de/sch/i.html?_sop=16&_nkw=",
            "https://www.bricklink.com/v2/search.page?q=",
            "https://www.amazon.de/s?k=",
            "https://www.brickset.com/search/?query="
        ];

    }


    urls.forEach(function(url) {

        window.open(
            url + encodeURIComponent(term),
            "_blank"
        );

    });

}
