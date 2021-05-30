const quote = document.getElementById("quote-text");
const author = document.getElementById("quote-author");
const newQuote = document.getElementById("new-quote");

let jsonData = "";
const getRandomQuote = () => {
  let rnum = Math.floor(Math.random() * jsonData.length);
  quote.innerHTML = jsonData[rnum].text;
  if (jsonData[rnum].author == null) {
    author.innerText = "Unknown";
  } else {
    author.innerText = jsonData[rnum].author;
  }
};

const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    //   json data
    jsonData = await data.json();
    getRandomQuote();
    console.log(jsonData[0]);
  } catch (error) {}
};

newQuote.addEventListener("click", () => {
  getQuotes();
});