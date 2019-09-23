//Basicone

// function cristalGazer (numChild, partName, geoLoc, jobTitle) {
//      document.write ("You will be a "+jobTitle+" in "+geoLoc+" and married to "+partName+" with "+ numChild +" children");


// }

// cristalGazer (3,"Maria","Denver","Accountant");


//Basic2

// function ageCalculator (birthYear, currentYear) {
// 	document.write (" You are either "+(currentYear - birthYear)+" or "+(currentYear -birthYear -1));



// }

// ageCalculator(1986,2019);

// //Basic3
// function ageCalculator (Year) {
// 	document.write (" You are either "+Year +" or "+(Year-1));
// }

// ageCalculator(2019-1986);

//Basic4

// function degCon (deg) {
// 	 document.write (" 90 Grad sind " + deg*(Math.PI/180));
// 	}

// degCon(90)

//Basis5
// function calcBox (width,height,depth) {
	 
// 	 var area = width*height;
// 	 document.write(" Volumen of a box is " +(area*depth));

// 	 document.write(" The area is " + width*height)

// }


// calcBox(200,200,200)

//Basis6

try {
    var person = prompt("Please enter your name", "Harry Potter");
    document.getElementById("message").innerHTML=("Hello " + person + "! How are you today?");
}
catch (err){
	console.log(err.message);

}





