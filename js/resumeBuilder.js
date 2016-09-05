var bio = {
	"name" : "jamie cho",
	"role" : "Web developer",
	"contact" : {
		"mobile" : "56547887",
		"email" : "jay@dfskf.com",
		"github" : "jay8367",
		"location" : "Las Vegas, NV, United States"
	},
	"welcomeMessage" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
	"picture" : "http://d39kbiy71leyho.cloudfront.net/wp-content/uploads/2016/05/09170020/cats-politics-TN.jpg",
	"skills" : ["html", "illustrator", "tennis"]
};

var education ={
	"schools":[
	{
		"name" : "WSCAD",
		"location" : "New York, NY, United States",
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
		"location": "San Jose, CA, United States",
	    "dates": "In Progress",
	    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	},
	{
		"employer" : "Tago",
		"title" : "Senior Developer",
		"location": "San Francisco, CA, United States",
	    "dates": "In Progress",
	    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	},
	{
		"employer" : "SAt",
		"title" : "Junior Developer",
		"location": "New York, NY, United States",
	    "dates": "In Progress",
	    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	}
	]
};


var projects = {
"projs":[
	{
		"title" : "UX design",
		"dates" : 2016,
		"description": "UX for website",
		"image": ["http://i4.aroq.com/3/2015-11-16-10-57-img_0135_cropped_70.jpg", "https://thumbs.dreamstime.com/x/h-m-hennes-mauritz-ab-shop-logo-22511436.jpg"]
	},
	{
		"title" : "Graphic design",
		"dates" : 2015,
		"description": "Full branding for website",
		"image": ["http://therealdeal.com/wp-content/uploads/2015/05/HM-Herald-Center3.jpeg", "http://sustainability.hm.com/content/dam/hm/about/images/en/Editorial%20images/H&M%20Sustainability/Commitments/carriers_4x3.jpg/_jcr_content/renditions/original"]
	},
	]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


$("#topContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contact.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contact.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contact.location));

$("#header").append(HTMLbioPic.replace("%data%", bio.picture));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

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
work.display = function(){
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
};

work.display();

// Internationalise name function -------//


function inName(nameThing) {
	var surUpName = nameThing.substr(nameThing.indexOf(' ')+1).toUpperCase();
	var firstName = nameThing.substr(0,nameThing.indexOf(' '));
	console.log(firstName);
	var firstUpName = firstName.slice(0,1).toUpperCase() + firstName.slice(1).toLowerCase();
	console.log(firstUpName);
	return (firstUpName + " " + surUpName);
  };

// Internationalise name function -------//

projects.display = function(){
	for (proj in projects.projs) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projs[proj].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projs[proj].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projs[proj].description));
		$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projs[proj].image[0]));
		$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projs[proj].image[1]));
	}
};

projects.display();


// education.display = function(){
// 	for (school in education.schools) {
// 		$("#education").append(HTMLschoolStart);
// 		var formattedSchName = HTMLschoolName.replace("%data%", education.schools[school].name);
// 		var formattedSchDeg = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
// 		var formattedNameDeg = formattedSchName + formattedSchDeg;
// 		$(".education-entry:last").append(formattedNameDeg);
// 		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
// 		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
// 		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors[0]));
// 	},
// 	{
		
// 	for (onlineCourse in education.onlineCourses) {
// 		$("#education").append(HTMLonlineClasses);
// 		var formattedCrName = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
// 		var formattedCrSch = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
// 		var formattedCrNamsch = formattedCrName + formattedCrSch;
// 		$(".education-entry:last").append(formattedCrNamsch);
// 		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.schools[school].dates));
// 		}
// 	}
// };

// education.display();

// var HTMLonlineClasses = '<h3>Online Classes</h3>';
// var HTMLonlineTitle = '<a href="#">%data%';
// var HTMLonlineSchool = ' - %data%</a>';
// var HTMLonlineDates = '<div class="date-text">%data%</div>';
// var HTMLonlineURL = '<br><a href="#">%data%</a>';

// "onlineCourses" :[
// 	{
// 		"title" : "FEWD",
// 		"school" : "Udacity",
// 		"dates": 2016,
// 	    "url": "http:www.udacity.com"
// 	}

