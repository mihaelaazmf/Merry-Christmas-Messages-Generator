//store quotes in array
var quotes = [
  {content: "Christmas is about spending time with family and friends. It’s about creating happy memories that will last a lifetime. Merry Christmas to you and your family! "},
  {content: "May the closeness of friends, the comfort of home, and the unity of our nation, renew your spirits this festive season. Merry Christmas to your family. "},
  {content: "‘Tis the season to wish one another joy and love and peace. These are my wishes for you, Merry Christmas our dear friends, may you feel the love this special day. "},
  {content: "May this festive season sparkle and shine, may all of your wishes and dreams come true, and may you feel this happiness all year round. Merry Christmas! "},
  {content: "You make the stars shine brighter and the winter days warmer just by being in my life. Merry Christmas to my favorite person in the world. "},
  {content: "A lovely thing about Christmas is that it’s compulsory, like a thunderstorm and we all go through it together. Let’s buckle up and enjoy the ride. "},
  {content: "To a joyful present and a well-remembered past. Best wishes for Happy Holidays and a magnificent New Year. "},
  {content: "May this Christmas end the present year on a cheerful note and make way for a fresh and bright New Year. Here’s wishing you a Merry Christmas and a Happy New Year! "},
  {content: "This festive season is so much more than Christmas parties and gift giving. May your Christmas be filled with the true miracles and meaning of this beautiful time. "},
  {content: "May you feel all the love and joy I have for you throughout this festive season and all year round. Having you as my friend brings me great joy. "},
  {content: "Best friends are to a friendship like Christmas is to the other celebrations: always on top. Have a merry one. "},
  {content: "Christmas is a special time to enjoy with all your loved ones, spreading divinity and cheer around, Merry Christmas and a happy new year! "},
  {content: "Christmas is really a time for families to unite. It is a time to share all the laughter and cheers. Without you, this family will not be called a family. You complete our lives. Merry Christmas . . . !!! "},
  {content: "For your Christmas time, I wish you many blessings, much happiness, and even more love I am grateful for you and your thoughtfulness. "},
  {content: "May your heart and home be filled with all of the joys the festive season brings. Merry Christmas and a wonderful New Year! "},
  {content: "During this festive season of giving, let us take time to slow down and enjoy the simple things. May this wonderful time of the year touch your heart in a special way. Wishing you much happiness not just today, but throughout the New Year. "},
  {content: "May the joy and peace of Christmas be with you all through the Year. Wishing you a season of blessings from heaven above. Happy Christmas!! "},
]
function getQuote() {
//generate random number within array length
var randomNumber = Math.floor(Math.random() * quotes.length + 1);

//use random number to get quote and source, append to paragraph
var quoteContent = quotes[randomNumber].content;

document.getElementById("quote-text").innerHTML = quoteContent;

 
  // send to Tweet button
  $(".twitter-share-button").attr("href", 'https://twitter.com/intent/tweet?text=' + quoteContent  );
  
};