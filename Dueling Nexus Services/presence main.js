let presence = new Presence({
    clientId: "629585219564863501" 
});

function addStyleString(str) {
    var node = document.createElement('style');
    node.id="appended"
    node.innerHTML = str;
    document.body.appendChild(node);
}



function addDiv(str){
    var node = document.createElement("div");
    node.id = "modal"
    node.innerHTML = str
    document.body.appendChild(node)
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); 
    xmlHttp.send( null );
    return xmlHttp.responseText;
}


var url = "https://sunx2-service-api.glitch.me"

presence.on("UpdateData", () => __awaiter(this, void 0, void 0, function* () {
    if (document.location.pathname == "/home") {
        var name = document.getElementById("home-area").children[1].innerText.replace(".",'').split(",")[1]
        if (localStorage.getItem("name")==name){
        }
        else{
            localStorage.setItem("name",name)
        }

    }
    if(document.getElementById("appended")==null){
    
    addStyleString(".modal { display: none;  position: fixed; z-index: 1; padding-top: 100px;  left: 0;top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0);  background-color: rgba(0,0,0,0.4);  }.modal-content {background-color: #fefefe;margin: auto;padding: 20px;border: 1px solid #888;width: 80%;}.close {color: #aaaaaa;float: right;font-size: 28px;font-weight: bold;}.close:hover,.close:focus {color: #000;text-decoration: none;cursor: pointer;}.inlineM {display: inline; /* the default for span */width: 100px;height: 100px;padding: 5px;border: 1px solid blue;  background-color: pink; }.inlineN {display: inline-block;width: 100px;height: 100px;padding: 5px;border: 1px solid blue;    background-color: grey;  }")
    }


    if(document.getElementById("modal")==null){
    addDiv('<div id="modelIn" class="modal"><div id="modal-content" class="modal-content"><span class="close">&times;</span><p>Some text in the Modal..</p></div></div>')
        }


    var modal = document.getElementById("modelIn")

    document.onkeyup = function(e){
    if (e.ctrlKey &&  e.which == 89){
            modal.style.display = "block";
        }
    }
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
      var span = document.getElementsByClassName("close")[0]
      span.onclick = function() {
        modal.style.display = "none";
      }

      dataset = [["sky","ren"] , {"sky":['hello','8am'],"lin":[`<a href="${document.location.href}">[Game Link]</a>`,"9am"]} ]
      var friendoptions = ''
      for (i in dataset[0]){
          friendoptions += `<option value="${dataset[0][i]}">${dataset[0][i]}</option>`
      }
      var messages = ''
      //var actfriend = document.getElementById("friendos").value
      for (i in dataset[1]){
        messages+= `<b class='w3-third'>${i}</b><span class="w3-rest">${dataset[1][i][0]}(${dataset[1][i][1]})</span><br>`
      }


      console.log(friendoptions)
      var modal_contents = document.getElementById("modal-content")
      var name  = localStorage.getItem("name")

      modal_contents.innerHTML= `
      
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

      <hr>
        <b class="w3-center w3-text-teal w3-border">Friend system addon<b>
      <hr>

      <div class="w3-half w3-card-1 w3-text-teal"> Hello ${name}
      <div class="w3-row w3-container">
      <input id="msgtext" class="w3-third" type="text" class="w3-white" placeholder="write message">
      <hr>
      <select  id="friendos" class="w3-third w3-rest w3-white w3-text-orange w3-hover-orange w3-hover-text-white  w3-round ">${friendoptions}</select>
      <button id="sendmss" class="w3-third">Send</button>
      <button id="request-duel" class="w3-rest">Request Duel</button>
      </div>
      </div>



      <div class="w3-rest w3-text-orange w3-padding">
      <input class="w3-third w3-white w3-text-purple w3-hover-purple w3-hover-text-white  w3-round" placeholder="add friend"><button class="w3-white w3-text-blue w3-hover-blue w3-hover-text-white   w3-round-large w3-third">Search</button>
      <br>
      <div class="w3-row">
            ${messages}
      </div>
      </div>
      
      `
      function sendMSG(){
          var name = localStorage.getItem("name")
          var target = document.getElementById("friendos").value
          var msg = document.getElementById("msgtext").value
          alert(name+target+msg)
      }

      function sendLINK(){
        var name = localStorage.getItem("name")
        var target = document.getElementById("friendos").value
        var msg = `<a href="${document.location.href}">[Game Link]</a>`
        alert(name+target+msg)
      }
      document.getElementById("sendmss").addEventListener("click",sendMSG)
      document.getElementById("request-duel").addEventListener("click",sendLINK)

      


}));