var name = "Jaymast"
var formattedName = HTMLheaderName.replace("%data%", name);

var role = " Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


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
	"skills" : ["html", "illustrator", "tennis"]
};

var education ={
	"school":[
	{
		"name" : "WSCAD",
		"location" : "London",
		"degree": "BA",
	    "majors": ["photography"],
	    "dates": 2006,
	    "url": "http:www.apple.com"
	}
	],
	"onlineCourses" :[
	{
		"title" : "FEWD",
		"school" : "Udacity",
		"dates": 2016,
	    "url": "http:www.udacity.com"
	}
 	]
};

var work ={
	"jobs":[
	{
		"employer" : "Freelance",
		"title" : "Developer",
		"location": "HK",
	    "dates": "In Progress",
	    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	},
	{
		"employer" : "Tago",
		"title" : "Senior Developer",
		"location": "UK",
	    "dates": "In Progress",
	    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	},
	{
		"employer" : "SAt",
		"title" : "Junior Developer",
		"location": "UK",
	    "dates": "In Progress",
	    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	}
	]
};


var projects = {
"proj":[
	{
		"title" : "UX design",
		"dates" : 2016,
		"description": "UX for website",
		"images": ["https://img1.wsimg.com/fos/sales/cwh/8/images/cats-with-hats-shop-02.jpg", "https://img1.wsimg.com/fos/sales/cwh/8/images/cats-with-hats-shop-02.jpg"]
	}
	]
};


$("#topContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contact.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contact.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contact.location));

$("#header").append(HTMLbioPic.replace("%data%", bio.picture));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

if (bio.skills !== 0) {
	$("#header").append(HTMLskillsStart);
	$("#header").append(HTMLskills.replace("%data%", bio.skills [0]));
	$("#header").append(HTMLskills.replace("%data%", bio.skills [1]));
	$("#header").append(HTMLskills.replace("%data%", bio.skills [2]));
};

//OPTION 1 LOOP

// var totalJobs = work.jobs.length;
// console.log(totalJobs);

// for (jobs in work) {
// 	$("#workExperience").append(HTMLworkStart);
// 	for (i = 0; i < totalJobs; i++){
// 		$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work[jobs][i].employer) + HTMLworkTitle.replace("%data%", work[jobs][i].title));
// 		$(".work-entry:last").append(HTMLworkDates.replace("%data%", work[jobs][i].dates));
// 		$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work[jobs][i].location));
// 		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work[jobs][i].description));
// 	};
// };



//OPTION 2 LOOP

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
	$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
	$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));

};
