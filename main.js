// HTML page sections
var dashboard = document.getElementById("dashboard");
var degreePage = document.getElementById("degree-page");
var modulePage = document.getElementById("module-page");
var assessmentPage = document.getElementById("assessment-page");


// HTML button links
var dashboardButton = document.getElementById("dashboard-button");
var degreesButton = document.getElementById("degrees-button");
var moduleButton = document.getElementById("module-button");
var assessmentButton = document.getElementById("assessment-button");


// hide dashbaord and reveal degree path page
degreesButton.addEventListener("click", function(){
  degreePage.hidden = false;
  dashboard.hidden = true;
  
});

// hide dashbaord and reveal modules page
moduleButton.addEventListener("click", function(){
  dashboard.hidden = true;
  assessmentPage.hidden = true;
  modulePage.hidden = false;
});

// hide dashbaord and reveal assessments page
assessmentButton.addEventListener("click", function(){
  dashboard.hidden = true;
  modulePage.hidden = true;
  degreePage.hidden = true;
  assessmentPage.hidden = false;
  
});


dashboardButton.addEventListener("click", function(){
  dashboard.hidden = false;
  degreePage.hidden = true;
  modulePage.hidden = true;
  assessmentPage.hidden = true;
 

});


// show dashboard on load. hide all other pages
degreePage.hidden = true;
modulePage.hidden = true;
assessmentPage.hidden = true;
dashboard.hidden = false;

