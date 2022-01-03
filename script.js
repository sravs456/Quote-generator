const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];
// show new quote
function newQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  if (!quote.author) {
    authorText.textContent = "Unknowm";
  } else {
    authorText.textContent = quote.author;
  }
  // check quote length
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classLength.add("long-quote");
  }

  quoteText.textContent = quote.text;
}
// Get Quotes from API
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Catch Error
  }
}

// tweet quote

function tweetQuote() {
  const twitterURL =
    "https://twitter.com/intent/tweet?text=${quoteText.textContent} - $(quoteText.textContent)";

    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);


// On load
getQuotes();
