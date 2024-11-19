function displayRandomQuote() {
    var oldRandomIndex=99;
    var randomIndex = generateRandomNumber();
       while(randomIndex==oldRandomIndex){ 
        
        var randomIndex = generateRandomNumber(); 

        var oldRandomIndex=randomIndex;
       }
    var randomQuote = quotes[randomIndex];  // Get the quote at that random index
    var demo= document.getElementById("demo");
    demo.innerText=randomQuote;
   
  }

    function generateRandomNumber() {
        var random = Math.random();  // Get a random number between 0 and 1
        var result = random * 10;    // Multiply by 10 to get a number between 0 and 10
        var wholeNumber = Math.floor(result);  // Round down to the nearest whole number
        return wholeNumber;  // Return the random number
      }
      var quotes = [
        "The only way to do great work is to love what you do. – Steve Jobs",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
        "It does not matter how slowly you go as long as you do not stop. – Confucius",
        "The purpose of our lives is to be happy. – Dalai Lama",
        "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
        "Life is what happens when you're busy making other plans. – John Lennon",
        "Get busy living or get busy dying. – Stephen King",
        "You miss 100% of the shots you don’t take. – Wayne Gretzky",
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
        "The best way to predict the future is to create it. – Abraham Lincoln"
      ];