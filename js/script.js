function navegar(){
    var x = document.getElementById("navigation");

    if(x.className === "navigation"){

        x.className += " menujs";
        document.getElementById("treeline").innerHTML = "&Cross;";

    }else{
        x.className = "navigation";
        document.getElementById("treeline").innerHTML = "&#9776"
    }

}