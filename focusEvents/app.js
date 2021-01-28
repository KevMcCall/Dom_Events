// When you enter the input field, a function is triggered which sets the background 
// color to skyBlue. When you leave the input field, 
// a function is triggered which sets the background color to grey.

function nameFocusFunction(x) {
    x.style.background = "skyBlue";
}

function nameBlurFunction(y) {
    y.style.background = "grey";
}