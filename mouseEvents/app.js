// Use an addEventListener
//  to attach a "mouseover" and "mouseout" event to a h3 element.
//The h3 should change size when mouseovered

document.getElementById('capital').onmouseover = function() {
    mouseOver()
};
document.getElementById('capital').onmouseout = function() {
    mouseOut()
};

function mouseOver() {
    document.getElementById('capital').style.fontSize = '100px';
}

function mouseOut() {
    document.getElementById('capital').style.fontSize = '25px';
}




//Part II
// Use an addEventListener
//  to attach a "mouseover" and "mouseout" element that asks 
// and answers a trivia question



