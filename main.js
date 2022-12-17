
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
number = number * 20;
number = Math.floor(number);
number = number * 2;

let start = true;
let uname = false;
let done = false;
let y = false;
let z = false;
let result = false;
console.log(number)
function callbot() {
    let quest = document.getElementById("human").value;
    if (start == true) {
        if (quest == "Ready" || quest == "ready") {
            print("I am Ready")
            botprint("Type Your Name ?")
            start = false;
            uname = true;
            document.getElementById("human").value = "";
        }
        else {
            error("U Are Not Ready")
        }
    }
    else if (uname == true) {
        if (quest == "") {
            error("Type Valid Name")
        }
        else {
            let str = "My Name is " + quest;
            let str2 = "Hi, " + quest;
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
        if (quest == "done" || quest == "Done") {
            print("I am Done")
            botprint("Let X = Your Number. U think in your Mind Don't Forget This Number")
            botprint("Let Y = X + X")
            botprint("Type Done and Enter")
            y = true;
            done = false;
        }
        else {
            error("Type Done If U are Done")
        }
    }
    else if (y == true) {
        if (quest == "done" || quest == "Done") {
            print("I am Done")
            botprint("Let Y=Y + " + number)
            botprint("Type Done and Enter")
            y = false;
            z = true;
        }
        else {
            error("Type Done If U are Done")
        }
    }
    else if (z == true) {
        if (quest == "done" || quest == "Done") {
            print("I am Done")
            botprint("Let Half The Value Of Y. Example :- 20=10, 100=50, etc...")
            botprint("Let Z = Y - X")
            botprint("Type Done and Enter")
            z = false;
            result = true;
        }
        else {
            error("Type Done If U are Done")
        }
    }
    else {
        let str = "hence, Z is Equal to " + number / 2 + " ,😎 I am Right 😎";
        botprint(str)
        document.getElementById("last").classList.add("bg");
    }
}





function keynum(key) {
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
        let input = document.getElementById("human");
        let i = input.value;
        i=i+key;
        input.value = i;
        
    }
}





addEventListener("keydown", e => {
    console.log(e.key);
    let key = e.key;
    keynum(key)
}
)

