function toggleNavPanel(x){
var panel = document.getElementById(x), navarrow = document.getElementById("navarrow"), maxH="150px";
if(panel.style.height == maxH){
    panel.style.height = "0px";
    navarrow.innerHTML = "&#9662;";
} else {
    panel.style.height = maxH;
    navarrow.innerHTML = "&#9652;";
}
}
