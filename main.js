
function print(str) {
    let div = document.createElement("div");
    div.setAttribute("class", "human");
    div.innerText = str;
    let parent = document.getElementById("botnote");

    parent.append(div);
}

function botprint(str) {
    let div = document.createElement("div");
    div.setAttribute("class", "bot");
    div.innerText = str;
    let parent = document.getElementById("botnote");

    parent.append(div);
}

function error(str) {
    let div = document.createElement("div");
    div.setAttribute("class", "error");
    div.innerText = str;
    let parent = document.getElementById("botnote");

    parent.append(div);
}

let number = Math.random();
number = (number * 20) + 10;
number = Math.floor(number);
number = number * 2;
let username=""
let start = true;
let uname = false;
let done = false;
let y = false;
let z = false;
let result = false;
console.log(number)
function callbot() {
    let quest = document.getElementById("human").value;
    quest = quest.toLowerCase()
    if (start == true) {
        if (quest == "ready") {
            print("I am Ready, Lets Go......")
            botprint("Whats Your Name ?")
            botprint("Type Your Name.")
            start = false;
            uname = true;
            document.getElementById("human").value = "";
        }
        else {
            error("U Are Not Ready")
            error("Type ready")
        }
    }
    else if (uname == true) {
        if (quest == "") {
            error("Type Valid Name!")
        }
        else {
            username=quest;
            let str = "My Name is " + quest;
            let str2 = "Hi, " + quest +" , Read Question Properly";
            print(str)
            botprint(str2)
            botprint("Take Any Number in your Mind Between 1 to 100, Example 1,2,3..until 100.")
            botprint("Only One Number")
            botprint("Type Done and Enter")
            botprint("Don't Tell Anyone About Your Number Just In Your Mind")
            document.getElementById("human").value = "";
            uname = false;
            done = true;
        }

    }
    else if (done == true) {
        if (quest == "done") {
            print("I am Done")
            botprint("Let X = Your Number. U think in your Mind Don't Forget This Number")
            botprint("Let Y = X + X")
            botprint("Type Done and Enter")
            y = true;
            done = false;
            document.getElementById("human").value = "";

        }
        else {
            error("Type Done If U are Done")
        }
    }
    else if (y == true) {
        if (quest == "done") {
            print("I am Done")
            botprint("Let Y=Y + " + number)
            botprint("Type Done and Enter")
            y = false;
            z = true;
            document.getElementById("human").value = "";

        }
        else {
            error("Type Done If U are Done")
        }
    }
    else if (z == true) {
        if (quest == "done") {
            print("I am Done")
            botprint("Let Y = Y / 2. Example :- 20 = 10, 100 = 50, etc...")
            botprint("Type Done and Enter")
            z = false;
            result = true;
            document.getElementById("human").value = "";
        }
        else {
            error("Type Done If U are Done")
        }
    }
    else if (result == true) {
        if (quest == "done") {
            print("I am Done")
            botprint("Let Z = Y - X")
            botprint("Type Done and Enter, and Ready For SurPrize "+username)
            result = false;
            document.getElementById("human").value = "";
        }
        else {
            error("Type Done If U are Done")
        }
    }
    else {
        let str = "hence, Z is Equal to " + number / 2 + " ,😎 I am Right 😎 "+username;
        botprint(str)
        document.getElementById("last").classList.add("bg");
        document.getElementById("human").value = "";

    }

    window.scrollBy(0, 500)
}





function keynum(key) {
let char="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"


if (key == "Enter") {
        callbot()
    }
    else if (key == "Backspace") {
        let input = document.getElementById("human");
        let i = input.value;
        i = i.split("")
        i.pop()
        i = i.join("")
        input.value = i;
    }
    else{
        for(j=0;j<=char.length;j++){
            if(key==char[j]){
let input = document.getElementById("human");
        let i = input.value;
        i=i+char[j];
        input.value=i
            }
        
    }
}
}



function typed() {


    addEventListener("keydown", e => {
        console.log(e.key);
        let key = e.key;
        keynum(key)
    }
    )
}

typed()
