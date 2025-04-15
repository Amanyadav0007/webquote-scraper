# webquote-scraper
# 🕸️ Quote Scraper using Node.js & Cheerio

A fun web scraping project that collects motivational quotes from [quotes.toscrape.com](http://quotes.toscrape.com) using **Node.js**, **Axios**, and **Cheerio**. It also handles **pagination** to scrape quotes from all pages and saves the results in **readable TXT format**.

---

## 📌 Features

- Scrapes:
  - Quote Text
  - Author Name
  - Tags (keywords)
- Follows pagination to collect quotes from **all pages**
- Saves data in:
  - `quotes.txt` – clean, human-readable text
- Overwrites existing files on each run (fresh data every time)

---

## 🛠️ Tech Stack

- [Node.js](https://nodejs.org/)
- [Axios](https://www.npmjs.com/package/axios)
- [Cheerio](https://www.npmjs.com/package/cheerio)
- Built-in `fs` module for file handling

---

## 🚀 How to Run

1. **Clone the repo**  
   ```bash
   git clone [https://github.com/Amanyadav0007/webquote-scraper.git]
   cd webquote-scraper
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Run the script**  
   ```bash
   node script.js
   ```

4. **Check the output files:**
   - `quotes.txt`

---

## 📂 Project Structure

```
📦quote-scraper-node
 ┣ 📄 script.js         # Main scraping script
 ┣ 📄 quotes.txt       # Readable text output
 ┣ 📄 package.json     
 ┗ 📄 README.md
```

---

## 📚 What I Learned

- Basics of web scraping with Cheerio
- Working with pagination in scrapers
- File handling with Node.js
- Data formatting for readability
- Clean coding practices in JavaScript

---

## 🌐 Source Website

- [http://quotes.toscrape.com](http://quotes.toscrape.com)

---

## 👨‍💻 Author

- **Aman Yadav** [https://www.linkedin.com/in/curiouscoderaman/]

---

