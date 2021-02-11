const todayQuote=document.querySelector(".js-quote");

const quotes=[
    "Be yourself; everyone else is already taken. ―Oscar Wilde",
    "So many books, so little time. ―Frank Zappa",
    "A friend is someone who knows all about you and still loves you. ―Elbert Hubbard",
    "You only live once, but if you do it right, once is enough. -Mae West",
    "The way to get started is to quit talking and begin doing. -Walt Disney",
    "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
    "Life is what happens when you're busy making other plans. -John Lennon"
];

function loadQuote(){
    const index = Math.floor(Math.random() *7);
    todayQuote.innerText='Todays Quote:\n'+ quotes[index];
}

function init(){
    loadQuote();
}

init();