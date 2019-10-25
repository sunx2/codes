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
    
    addStyleString(".modal {  display: none;  position: fixed; z-index: 1; padding-top: 100px;  left: 0;top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0);  background-color: rgba(0,0,0,0.4);  }.modal-content {opacity:0.9;background-color:#0f001a ; margin: auto;padding: 20px;border: 1px solid #888;width: 80%;}.close {color: #aaaaaa;float: right;font-size: 28px;font-weight: bold;}.close:hover,.close:focus {color: #000;text-decoration: none;cursor: pointer;}.inlineM {display: inline; /* the default for span */width: 100px;height: 100px;padding: 5px;border: 1px solid blue;  background-color: pink; }.inlineN {display: inline-block;width: 100px;height: 100px;padding: 5px;border: 1px solid blue;    background-color: grey;  }")
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
          friendoptions += `<option style="color:white" value="${dataset[0][i]}">${dataset[0][i]}</option>`
      }
      var messages = ''
      //var actfriend = document.getElementById("friendos").value
      for (i in dataset[1]){
        messages+= `<span style="color:blue">From: &nbsp;</span> <b style="display:inline-block  ; width:30% ; height 30%">${i}</b><span style="color:blue">Message: &nbsp;</span><span style="display:inline-block ; width:30% ; height 30%">${dataset[1][i][0]}</span> <span style="color:blue">Time: &nbsp;</span><span style="display:inline-block">${dataset[1][i][1]}</span><br>`
      }


      console.log(friendoptions)
      var modal_contents = document.getElementById("modal-content")
      var name  = localStorage.getItem("name")
      
      modal_contents.innerHTML= `
      
      <div >
      <div align="center"> Hello <big>${name}</big><hr>

      <br></div><div >
      <h3> Send Message </h3><br>
      <input id="msgtext" type="text"  placeholder="write message"  style="display:inline;color:white ;padding:5px 5px 5px 5px ;width:20%;height:30%">
      <select  id="friendos"  style="display:inline  ; color:white ;padding:5px 5px 5px 5px ;width:20%;height:30%" >${friendoptions}</select>
      <button id="sendmss" style="border-width: 0.1px;display:inline ;background-color:black;color:white;padding:5px 5px 5px 5px ;width:20%;height:30%" >Send</button>
      <button id="request-duel" style="border-width: 0.1px;display:inline ;background-color:black;color:white;padding:5px 5px 5px 5px ;width:20%;height:30%"" >Request Duel</button>
      </div>


      <br>
      <div >
      <h3> Add Friend </h3>
      <br>
      <input style="border-width: 0.1px;background-color:black;color:white;padding:5px 5px 5px 5px ;width:20%;height:30%" placeholder="Nexus Username"> &nbsp; <button style="border-width: 0.1px;background-color:black;color:white;padding:5px 5px 5px 5px ;width:20%;height:30%" >Search</button>
      <h3 align="center"> Messages </b>
      <hr>
      <div>
            ${messages}
      </div>
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