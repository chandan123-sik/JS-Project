const quotes = [
    "The best way to predict the future is to create it. – Peter Drucker",
    "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "Dream big and dare to fail. – Norman Vaughan",
    "Act as if what you do makes a difference. It does. – William James",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    "Life isn’t about finding yourself. Life is about creating yourself. – George Bernard Shaw",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
    "Don’t count the days, make the days count. – Muhammad Ali",
    "Everything you’ve ever wanted is on the other side of fear. – George Addair",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar"
  ];
  

function quotegenerate(){

const index = Math.floor(Math.random()*quotes.length); // this is generating a randow number.
const text = document.getElementById('quote');
text.innerHTML = quotes[index];

}
setInterval(quotegenerate,2000);

