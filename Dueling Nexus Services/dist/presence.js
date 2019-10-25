let presence = new Presence({
    clientId: "629585219564863501" 
});

var sock = "https://rawcdn.githack.com/LimitlessSocks/DuelingNexusUserScripts/1c3c8afe55f1981de04c8baffcab2c674d20dad6/beta/RefinedSearch/RefinedSearch.user.js"
var yubes = "https://rawcdn.githack.com/sunx2/JavaScripts/3d00363c184e3a41ec272e3b69d0e23882f40ed6/yubel.css"




presence.on("UpdateData", () => __awaiter(this, void 0, void 0, function* () {
  if (document.location.pathname.startsWith("/editor/") ) {
    if(localStorage.getItem("sock")=="yes"){
      if(document.getElementById("sockscript")==undefined){
        var node = document.createElement("script");
    node.id = "sockscript"
    node.src = sock
    node.type = "application/javascript"
    document.head.appendChild(node)
      }
      else{
      }
    }

    if(localStorage.getItem("yubel")=="yes"){
      if(document.getElementById("yubelscript")==undefined){
        var node = document.createElement("link");
        node.setAttribute('rel', 'stylesheet');
        node.setAttribute('type', 'text/css');
        node.setAttribute('href', yubes)
        node.setAttribute('id', "yubelscript")
    document.head.appendChild(node)
      }
      else{
      }
    }
  
  document.onkeyup = function(e){
      if (e.ctrlKey &&  e.which == 89){
        if(localStorage.getItem("sock")==null){
          localStorage.setItem("sock","yes")
          alert("sock script applied")
          document.location.reload()
        }
        else{
          localStorage.removeItem("sock")
          alert("sock script removed")
          document.location.reload()
        }
    }
    if (e.ctrlKey &&  e.which == 39){
      if(localStorage.getItem("yubel")==null){
        localStorage.setItem("yubel","yes")
        alert("yubel theme applied")
        document.location.reload()
      }
      else{
        localStorage.removeItem("yubel")
        alert("yubel theme removed")
        document.location.reload()
      }
  }
}
      

    }
}));