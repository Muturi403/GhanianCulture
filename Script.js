// Business logic
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sartuday"];
var malesNames = ["Kwasi", "Kwandwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


// user interface logic
function findNames(e){
	e.preventDefault();
	// alert("e");
	var day = parseInt(document.getElementsById("day").value);
	var month = parseInt(document.getElementsById("month").value);
	var year = parseInt(document.getElementsById("year").value);
	var male = document.getElementById("male");
	var female = document.getElementById("female");

	if(day <= 0 || day > 31){
		alert("Enter valid day")
	}
	else if(month <=0 || month >12 || (month == 2 && day >29)){
		alert("Enter valid month..")
	}

	// var a = Math.floor((14 - month) / 12)
	// var y = year -a
	// var m = month + 12 * a - 2
	// var d = (day + y + Math.floor(y / 4) - )

	var newDate = new Date(day + "/" + month + "/" + year);
	var d = newDate.getDay()

	if (male.checked == true){
		alert("You were born on" + daysOfTheWeek[d] + "and your Akan name is:" + maleNames[d]);
		document.getElementById('akan').innerHTML = "You were born on " + daysOfTheWeek[d] + "and your Akan name is: " + maleNames[d] ;
	}
	else if (male.checked == true){
		alert("You were born on" + daysOfTheWeek[d] + "and your Akan name is:" + femaleNames[d]);
		document.getElementById('akan').innerHTML = "You were born on " + daysOfTheWeek[d] + "and your Akan name is: " + femaleNames[d] ;

		//do something
	}
}