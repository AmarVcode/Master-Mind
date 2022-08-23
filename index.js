
let mynumber=Math.random();
mynumber=mynumber*26;

mynumber=Math.floor(mynumber);
if(mynumber===0){
    mynumber=mynumber+1;
}
mynumber=mynumber*2;




function LetStart(){

let name=document.getElementById("name").value;
   if(name!==""){
    document.getElementById("formcontainer").innerHTML=null;
    event.preventDefault()
    

    let alertinfo=document.getElementById("alertinfo");

let alert1=document.createElement("div");
alert1.setAttribute("class", "alert alert-warning alert-dismissible fade show")
alert1.textContent="Hi, "+name +" .Let Start ,Pick Any Number Between 1 to Infinite ('Dont Forget Your Number'). Dont Tell Anyone Just In Your Mind ! Hence X = Your Number Right.-------------> First step is double the value of X";


let donebtn=document.createElement("button");
donebtn.innerText="Done";
donebtn.setAttribute("class", "gobtn");
donebtn.onclick=function(){
document.getElementById("alertinfo").innerHTML=null;

         
let alert3=document.createElement("div");
alert3.setAttribute("class", "alert alert-warning alert-dismissible fade show");
alert3.textContent="You are Smart Then by, My Thinking, But not Smart Then By me . Let, I will give you a number add that Number in your number ,my number was "+ mynumber+ ". Hence X=X+"+mynumber+"? "+"You can use Calculator if you need!";
let negdbtn=document.createElement("button");
negdbtn.innerText="Hmmm, Done";
negdbtn.setAttribute("class", "gobtn");
negdbtn.onclick=function(){
    document.getElementById("alertinfo").innerHTML=null;
             
let alert4=document.createElement("div");
alert4.setAttribute("class", "alert alert-warning alert-dismissible fade show");
alert4.textContent="We Almost Done, Just half the Value of X or X=X/2.  And Then Minus Your number from X ('Your Number is what number you Pick in Start of game between 1 to infinite')";

let negldbtn=document.createElement("button");
negldbtn.innerText="I know The value of X";
negldbtn.setAttribute("class", "gobtn");
negldbtn.onclick=function(){
    document.getElementById("alertinfo").innerHTML=null;
    let center=document.createElement("center");
    let head=document.createElement("h1");
    head.textContent="It Was "+mynumber/2;
    center.append(head)
    alertinfo.append(center);
}

alertinfo.append(alert4,negldbtn)

}
alertinfo.append(alert3,negdbtn)


let positivebtn=document.createElement("button");
positivebtn.innerText="Positive";
positivebtn.setAttribute("class", "gobtn");

alert2.append(negativebtn,positivebtn);
alertinfo.append(alert2)

}




alert1.append(donebtn);
alertinfo.append(alert1);


   }
   else{
    window.alert("Type Your Nick Name")
   }
}