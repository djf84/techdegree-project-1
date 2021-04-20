/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
// Objective: meets expectations grade
// Create quotes array 

let quotes = [ 

{
  quote:  ' "Less than one percent of the information our brains receive through the senses actually reaches our awareness." ',
  source: 'Yongey Mingyur Rinpoche',
  citation: 'Joyful Wisdom',
  year: 2010
},

{
  quote:  ' "He had learned endurance from the Spartans, how far sheer will could take a man if he were sufficiently determined – and if no one ever told him it was all right to lie down and die." ',
  source: 'Conn Iggulden',
  citation: 'The Falcon of Sparta',
  year: 2018
},

{
  quote:  ' "Do not let yesterday take up too much of today. " ',
  source: 'Will Rogers'
},

{
  quote:  ' "It is not whether you get knocked down, it is whether you get up. " ',
  source: 'Vince Lombardi'
},

{
  quote:  ' "If you are working on something that you really care about, you do not have to be pushed. The vision pulls you." ',
  source: 'Steve Jobs'
}
];

// Create the `getRandomQuote` function

function getRandomQuote() {

  // 1. Create the random number variable
  
  const randomNumber = Math.ceil ( Math.random() * quotes.length - 1);
  console.log(randomNumber);

  // 2. Store the random quote in a variable

  let randomQuote = quotes[randomNumber]
  console.log(randomQuote);
  // 3. Return the variable storing the random quote object

  return randomQuote;
}

// Create the `printQuote` function

function printQuote() {

let quotes = getRandomQuote();

let elementQuote ='<p class="quote">' + quotes.quote + '</p>';
elementQuote +=  '<p class="source">' + quotes.source;

if (quotes.citation) {
  elementQuote += '<span class="citation">' + quotes.citation + '</span>';
}

if(quotes.year){
  elementQuote += `<span class='year'>${quotes.year}</span>`;
}

elementQuote += `</p>`;

document.getElementById('quote-box').innerHTML = elementQuote; 
}
 
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);