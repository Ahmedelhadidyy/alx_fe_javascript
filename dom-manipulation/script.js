const quoteDisplay = document.getElementById('quoteDisplay');
const newQuote = document.getElementById('newQuote');

const quotes = [
    { text: "Life is what happens when you're busy making other plans.", category: "Life" },
    { text: "The purpose of our lives is to be happy.", category: "Life" },
    { text: "Get busy living or get busy dying.", category: "Motivation" },
    { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", category: "Motivation" },
  ]

  
  const newQuoteText = document.getElementById('newQuoteText');
  const newQuoteCategory = document.getElementById('newQuoteCategory');
  const addQuotebtn = document.getElementById('addQuoteBtn');

function showRandomQuote(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.innerHTML = `<p>${randomQuote.text}</p><p><em>Category: ${randomQuote.category}</em></p>`;
}
//createElement appendChild
newQuote.addEventListener('click',showRandomQuote);

function addQuote(){
    if(newQuoteText.value === '' || newQuoteCategory.value === ''){
        alert('Please enter both a quote and a category.');
        newQuoteText.value = '';
        newQuoteCategory.value = '';
        
    } else {
      quotes.push({text: newQuoteText.value, category: newQuoteCategory.value });
      alert('Quote added successfully!');
      saveQuotes();
      newQuoteText.value = '';
      newQuoteCategory.value = '';
    }
}

function createAddQuoteForm(){
  addQuote();
}

function  saveQuotes(){
  localStorage.setItem('quotes',JSON.stringify(quotes))
}
function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    const importedQuotes = JSON.parse(event.target.result);
    quotes.push(...importedQuotes);
    saveQuotes();
    alert('Quotes imported successfully!');
  };
  fileReader.readAsText(event.target.files[0]);
}