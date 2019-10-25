// ==UserScript==
// @name   Duelingnexus Music Player
// @namespace    https://duelingnexus.com/
// @version      1.5
// @description  Creates a music player in duelingnexus
// @author       Ritorukyattoboi ( Ren )Ritorukyattoboi ( Ren ) #9066
// @grant        none
// @include      https://duelingnexus.com/game/*

// ==/UserScript==



const musicList = {
    all_we_know : "https://musicby24.com/upload/song/Cash Cash - Take Me Home (The Chainsmokers Remix)1540078327.mp3"
}
function isPlaying(audelem) { return !audelem.paused; }


let onstart = function(){
    var audioCtx = new AudioContext();
    audioCtx.close()
    //audio
    // menu 
    menu = document.createElement("div")
    menu.id = "musicMenu1"
    $("musicMenu1").hide()
    //items
    lb1 = document.createElement("label").innerHTML = "Song :"

    //button
    btn1 = document.createElement("button",{id:"helo"})
    btn1.innerHTML = "Music"
    btn1.id = "mButton"
    btn1.classList = "engine-button engine-button engine-button-default"
    document.getElementById("options-area").appendChild(btn1)
    btn1.onclick = function a(){
        $("musicMenu1").show()
    }
}

onstart()