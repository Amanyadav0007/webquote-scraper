// Importing the fs(File System) module to read/write files on our computer
const fs = require("fs");

// Importing the axios library to make HTTP requests (like fetching web pages)
const axios = require("axios");

// Importing cheerio to parse and manipulate the HTML like jquery
const cheerio = require("cheerio");

const URL = "http://quotes.toscrape.com/";
let allQuotes = [];

async function scrapePage(URL) {
    try {
        const { data } = await axios.get(URL);
        const $ = cheerio.load(data);
        let contentArr = $(".quote");
        for (let i = 0; i < contentArr.length; i++) {
            const text = $(contentArr[i]).find(".text").text().trim();
            const author = $(contentArr[i]).find(".text").text().trim();

            const tags = [];

            $(contentArr[i]).find(".tags a.tag").each((i, el) => {
                tags.push($(el).text().trim());
            });
            allQuotes.push({
                text: text,
                author: author,
                tags: tags,
            });
        }

        let finalData = "";
        allQuotes.forEach((quote) => {
            finalData += `Text: ${quote.text}\n`;
            finalData += `Author: ${quote.author}\n`;
            finalData += `Tags: ${quote.tags.join(", ")}\n`;
            finalData += `\n`;
        });

        fs.writeFileSync("quoteScrap.txt", finalData);
        console.log("quoteScrap.txt saved successfully!");
    } catch (error) {
        console.log("Error scraping: ", error.message);
    }
}

scrapePage(URL);