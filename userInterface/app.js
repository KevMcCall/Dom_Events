// Using onload on an <img> element.
//  Alert "Must be 18+" immediately after an image has been loaded:
//Add prompts that asks the age and verifies it. 


function loadImage() {
    alert("Must be 18+")
};

var birthYear= prompt ('What Year Were You Born?');

if(birthYear < 2003) {
    alert("Welcome!!!");
    
}
else if(birthYear > 2003){
    alert ("Sorry Must Be 18+ To Enter");
}