// var awesomeThoughts = "I am JC awesome";

// var funThoughts = awesomeThoughts.replace("awesome","fun");

// console.log(funThoughts);

// $("#main").append(funThoughts);


var name = "Jaymast"
var formattedName = HTMLheaderName.replace("%data%", name);

var role = " Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// var bio = {
// 	"name" = "Jamie",
// 	"role" = "Web developer",
// 	"contact" = "jay@hotmail.com"
// 	"picture" = "http://d39kbiy71leyho.cloudfront.net/wp-content/uploads/2016/05/09170020/cats-politics-TN.jpg",
// 	"Welcome message" = "http://d39kbiy71leyho.cloudfront.net/wp-content/uploads/2016/05/09170020/cats-politics-TN.jpg",
// 	"Skills" = skill
// };

// $("#header").append("bio");
//...................

var bio = {
	"name" : "Jamie",
	"role" : "Web developer",
	"contact" : {
		"mobile" : "56547887",
		"email" : "jay@dfskf.com",
		"github" : "jay8367",
		"location" : "Hong Kong"
	},
	"welcomeMessage" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
	"picture" : "http://d39kbiy71leyho.cloudfront.net/wp-content/uploads/2016/05/09170020/cats-politics-TN.jpg",
	"Skills" : ["skill", "asdfs", "fddsf"]
};


$("#topContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contact.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contact.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contact.location));

$("#header").append(HTMLbioPic.replace("%data%", bio.picture));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

// var education ={
// 	"school":[
// 	{
// 		"name" : "WSCAD",
// 		"location" : "London",
// 		"degree": "BA",
// 	    "majors": ["photography"],
// 	    "dates": 2006,
// 	    "url": "http:www.apple.com"
// 	}
// 	],
// 	"onlineCourses" :[
// 	{
// 		"title" : "FEWD",
// 		"school" : "Udacity",
// 		"dates": 2016,
// 	    "url": "http:www.udacity.com"
// 	}
//  	]
// };

// var work ={
// 	"jobs":[
// 	{
// 		"employer" : "Freelance",
// 		"title" : "Developer",
// 		"location": "HK",
// 	    "dates": "In Progress",
// 	    "description": "All kinds of stuff"
// 	}
// 	]
// };



// var projects = {
// "proj":[
// 	{
// 		"title" : "UX design",
// 		"dates" : 2016,
// 		"description": "UX for website",
// 		"images": ["https://img1.wsimg.com/fos/sales/cwh/8/images/cats-with-hats-shop-02.jpg", "https://img1.wsimg.com/fos/sales/cwh/8/images/cats-with-hats-shop-02.jpg"]
// 	}
// 	]
// };
