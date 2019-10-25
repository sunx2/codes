var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
var Client = function() {
    this.get = function(link , responses) {
        var https = new XMLHttpRequest();
        https.onreadystatechange = function() { 
            if (https.readyState == 4 && https.status == 200)
                responses(https.responseText);
        }

        https.open( "GET", link, true );            
        https.send( null );
    }
}

var decklistClient = new Client()
decklistClient.get("https://duelingnexus.com/assets/data/cards.json?v=72", function(response){
    console.log(response.text)
})