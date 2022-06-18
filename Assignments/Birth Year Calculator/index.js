var dataname = document.getElementById('nameperson');


function calculate() {
    
    var number = document.getElementById("number").value;
    
    if (number == " " || number == 0) {
        alert("Please type a valid age!!");
    }else {
        var date = new Date().getFullYear();
        var birthYear = date - number;
    }   
    document.getElementById("year").innerHTML = "Year Born: " + birthYear;
    document.getElementById("year").style.color = "black";
}
document.getElementById("button").onclick = function () {
    var text = document.getElementById("text").value;
    if (text == " " || text == 0) {
        alert("Please type a valid name");
        
    }else {
       var h1 = document.getElementsByTagName('h1')[0].innerHTML =
        `Hello ${text}, <br> Your age is shown below` 
    }
    dataname.style.textAlign = 'center';
    calculate();
};