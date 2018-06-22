let count = 0;
var messages = ["Go go go!", "Just keep clicking!", "Is that the best you've got?", "OUCH!", "Damn you got some strong fingers.", 
"Don't stop!","ASDFGHJKL.", "Alrighttyy.", "Don't you have better things to do with your time?", "I like procrastinating too!", "Clickety clack.",
"PEW PEW PEW","That's a lot of clicking.", "I've never been touched like this before.","Your poor mousepad.","You like clicking me don't you?",
"Well, well, well...","You're still here?","*click* *click* *click*","Clickbait.","NA NA NA NA NA NA NA NA NA NA NA NA BATMAN.","Hey now, hey now, this is what dreaams are made of."
,"Things are getting pretty serious between us.","Hit me with your best shot!","*click* *click*","Okurrrrr.","Shhh.","Click me more!"];

function start() {
    count = 1;
    document.getElementById("count").innerHTML = count;
    setTimeout(function(){ 
        if (count < 100) {
            alert("Time's up! " + count + " clicks? Surely you can do better than that.");
        }
        else if (count < 200) {
            alert("Time's up! " + count + " clicks only? C'mon!")
        }
        else if (count < 300) {
            alert("Time's up! " + count + " clicks? Pretty average.")
        }
        else if (count < 400) {
            alert("Time's up! " + count + " clicks! Not bad.")
        }
        else {
            alert("Time's up! " + count + " clicks! Damn! You did good.")
        }
        location.reload()
    }, 60000);
    document.getElementById("btn").style.display = "none";
    document.getElementById("title").innerHTML = messages[Math.floor(Math.random()*messages.length)];
    document.getElementById("title").style.fontSize = "50px";
    document.getElementById("title").addEventListener('click', function (event) {
        count += 1;
        if (count % 5 === 0 && count % 100 !== 0 || count % 100 === 1) {
            document.getElementById("title").innerHTML = messages[Math.floor(Math.random()*messages.length)];
        }
        if (count % 100 === 0 && count > 0) {
            document.getElementById("title").style.color = "red";
            document.getElementById("title").style.fontStyle = "italic";
            document.getElementById("title").innerHTML = count + "!";
            document.getElementById("title").style.fontSize = "200px";
            document.getElementById("count").style.visibility = "hidden";
        } else {
            document.getElementById("title").style.fontSize = "50px";
            document.getElementById("count").style.visibility = "visible";
            document.getElementById("title").style.color = "black";
            document.getElementById("title").style.fontStyle = "normal";
        }
        document.getElementById("count").innerHTML = count;
    });
}


