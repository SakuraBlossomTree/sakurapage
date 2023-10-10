document.addEventListener('DOMContentLoaded', function() {

    const redirect = document.getElementById('redirect');

    document.getElementById("searchInput").addEventListener('keydown', function(event) {

        if(event.key == 'Enter'){
           
            var input = document.getElementById("searchInput").value;

            if (input == 'g' || input == 'git' || input == 'github'){

                window.location = "https://github.com";

            }

            else if (input == 'd' || input == 'dis' || input == 'discord'){

                window.location = "https://discord.com/app";

            }

            else if (input == 'c' || input == 'chat' || input == 'gpt' || input == 'cgpt' || input == 'chatgpt'){

                window.location = "https://chat.openai.com/chat";

            }

            else if (input == 'y' || input == 'yt' || input == "youtube"){

                window.location = "https://youtube.com";

            }

            else if (input == 'm' || input == 'mdn'){

                window.location = "https://developer.mozilla.org/en-US/";

            }

            else if (input == 'em' || input == 'gm' || input == 'mail' || input == 'gmail'){

                window.location = "https://gmail.com";

            }

            else if (input == 'wi' || input == 'wiki' || input == 'wikipedia'){

                window.location = "https://www.wikipedia.com"

            }

            else if (input == 'w' || input == "wh" || input == "whatsapp"){

                window.location = "https://web.whatsapp.com"

            }

            else {

                var result = 'https://www.duckduckgo.com/?hps=1&q=' + encodeURIComponent(input);
                window.location = result;

            }
            

        }
         
    });

    const quotes = [

        "Linux is only free if your time has no value.",
        "If Microsoft ever does applications for Linux it means I've won.",
        "If you need more than 3 levels of indentation, you're screwed anyway, and should fix your program.",
        "I do get my pizzas paid for by Linux indirectly.",
        "A lot of that momentum comes from the fact that Linux is free.",
        "Programmer: A machine that turns coffee into code.",
        "When I wrote this code, only God and I understood what I did. Now only God knows.",
        "Copy-and-Paste was programmed by programmers for programmers actually.",
        "Programming is like sex: One mistake and you have to support it for the rest of your life.",

    ]

    function loadRandomQuote() {

        const quoteDisplay = document.getElementById("quote-display");
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        quoteDisplay.innerHTML = randomQuote;

    }

    window.onload = loadRandomQuote;

   

});
