var work = {
  "jobs": [{
             "employer": "Exou Inc.",
             "title": "Software Engineer",
             "location": "Palo Alto, CA",
             "dates": "July 2014 - Present",
             "description": "Designed and implemented mobile platform for school education"
           }, {
             "employer": "8x8 Inc.",
             "title": "Software Engineer",
             "location": "San Jose, CA",
             "dates": "Nov. 2012-July 2014",
             "description": "Designed and implemented backend server for virtual office"

           }, {
             "employer": "Hewlett Packard",
             "title": "Software Engineer",
             "location": "Sunnyvale, CA",
             "dates": "May 2006-Nov. 2012",
             "description": "Designed and implemented an application for data center automation in cloud platform using Java and Java script, Jquery, HTML5. Using Agile method to develop and Git repository tools" + "\n"

           }],
  //Display work json object in resume object
  display: function() {
    for (job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formettedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formettedEmployerTitle);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);

    }

  },

  //Find all location that I have worked
  locationizer: function(_work) {
    var allLocation = [];
    for (var work in _work.jobs) {
      var _workLoc = _work.jobs[work].location;
      allLocation.push(_workLoc);
    }
    return allLocation;

  }
}
//////////////////////////////////////////////////BIO/////////////////////////////////////////////////////////////////
var bio = {
  "name": "Lei Wang",
  "role": "Software Engineer",
  "contacts": {
    "mobile": "408-702-0212",
    "email": "lwang3rock@gmail.com",
    "github": "www.github.com/3rcok",
    "location": "Palo Alto,CA"
  },
  "welcomeMessage": "Welcome to my resume website",
  "skills": [
    "Java", "JS", "Node",  "MongoDB", "SQL"
  ],
  "bioPic": "images/LeiWang.jpeg",

  //Dispay bio json object in resume page
  display: function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);
    var formattedWeclome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWeclome);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);
    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
      }
    }
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

  }
}
//////////////////////////////////////////////////PROJET/////////////////////////////////////////////////////////////////
var projects = {
  "projects": [{
                 "title": "Admin Console",
                 "dates": "July 2013",
                 "description": "Implemented a website to manage mobile users, devices for schools. //n "+
                              "Using Node.js in server side running in Amazon EC2 cloud platform. //n" +
                              "For client side used Angular.js, HTML5, Twitter bootstrap framework.",
                 "images": ['./images/fry.jpg']

               }],
  //Display projects in resume page
  display: function() {
    for (project in projects.projects) {
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedTitle);
      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedDates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);
      if (projects.projects[project].images.length > 0) {
        for (image in projects.projects[project].images) {
          var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImages);
        }
      }

    }

  }
}
//////////////////////////////////////////////////EDUCATION/////////////////////////////////////////////////////////////////
var education = {
  "schools": [ {
                 "name": "Southeastern University",
                 "location": "Washington, DC",
                 "degree": "Master",
                 "majors": ["ComputerScience"],
                 "dates": "August 1999 - Jan 2001"

               }],
  "onlineCourses": [{
                      "title": "Startup Engineering",
                      "school": "Stanford",
                      "dates": "February 2013",
                      "url": "https://www.coursera.org/course/startup"
                    },{
                      "title": "MongoDB for Node.js Developers",
                      "school": "MongoDB",
                      "dates": "July 2014",
                      "url": "https://university.mongodb.com/courses/M101JS/about"
                    }],
  //Display education in my resume page
  display: function() {
    for (edu in education.schools) {
      $('#education').append(HTMLschoolStart);
      var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
      var formattedNameAndDegree = formattedName + formattedDegree;
      $(".education-entry:last").append(formattedNameAndDegree);
      var formattedDate = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
      $(".education-entry:last").append(formattedDate);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
      $(".education-entry:last").append(formattedLocation);
      if (education.schools[edu].majors.length > 0) {
        for (major in education.schools[edu].majors) {
          var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors[major]);
          $(".education-entry:last").append(formattedMajor);
        }
      }

    }
    //online classes
    $('#education').append(HTMLonlineClasses)
    for (online in education.onlineCourses) {
      $('#education').append(HTMLschoolStart);
      var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
      var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
      var formattedTitleAndSchool = formattedTitle + formattedSchool;
      $(".education-entry:last").append(formattedTitleAndSchool);
      var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
      $(".education-entry:last").append(formattedDate);
      var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
      $(".education-entry:last").append(formattedURL);

    }

  }
}

work.display();
bio.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
//$("#main").append( internationalizeButton );

