const EleventyFetch = require("@11ty/eleventy-fetch");
const Papa = require("papaparse");

module.exports = async function() {
    let url = "https://data.ontario.ca/dataset/38ddc983-1bf0-4bee-ad18-07dac8cfe884/resource/e010f610-c3d6-4f88-849b-6f8c11e98d9c/download/registered_marriage_officiants.csv"

    let file = await EleventyFetch(url, {
        duration: "1d",
        type: "csv"
    });

    let officiants = Papa.parse(file, {
        header: true,
        skipEmptyLines: true 
    }).data;

    return {
        officiants
    }
}