document.addEventListener('DOMContentLoaded', () => {
  const quoteDisplay = document.getElementById('quoteDisplay');
  const newQuoteButton = document.getElementById('newQuote');

  const quotes = [
      { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Inspiration" },
      { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Life" },
      { text: "Your time is limited, don't waste it living someone else's life.", category: "Motivation" }
  ];

  function showRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const quote = quotes[randomIndex];
      quoteDisplay.innerText = `"${quote.text}" - ${quote.category}`;
  }

  function addQuote() {
      const newQuoteText = document.getElementById('newQuoteText').value.trim();
      const newQuoteCategory = document.getElementById('newQuoteCategory').value.trim();

      if (newQuoteText && newQuoteCategory) {
          const newQuote = { text: newQuoteText, category: newQuoteCategory };
          quotes.push(newQuote);
          document.getElementById('newQuoteText').value = '';
          document.getElementById('newQuoteCategory').value = '';
          alert('Quote added successfully!');
      } else {
          alert('Please enter both a quote and a category.');
      }
  }

  newQuoteButton.addEventListener('click', showRandomQuote);
  window.addQuote = addQuote; // Expose addQuote function to global scope
});