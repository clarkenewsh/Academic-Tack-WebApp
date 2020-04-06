// HTML page sections
var dashboard = document.getElementById("dashboard");
var degreePage = document.getElementById("degree-page");
var modulePage = document.getElementById("module-page");
var assessmentPage = document.getElementById("assessment-page");


// HTML button links
var dashboardButton = document.getElementById("dashboard-button");
var degreesButton = document.getElementById("degree-button");
var moduleButton = document.getElementById("module-button");
var assessmentButton = document.getElementById("assessment-button");

// Container to hold JSON Data
var degreeContainer = document.getElementById('degree-container');
var moduleContainer = document.getElementById('module-container');
var assessmentContainer = document.getElementById('assessment-container');

// hide dashbaord and reveal degree path page with degree object json data
degreesButton.addEventListener("click", function(){
  degreePage.hidden = false;
  dashboard.hidden = true;
  var degreeRequest = new XMLHttpRequest();
  degreeRequest.open('GET', 'https://raw.githubusercontent.com/clarkenewsh/Academic-Tack-WebApp/master/degree.json');
  degreeRequest.onload = function() {
    console.log(degreeRequest.responseText);
    var degreeData = JSON.parse(degreeRequest.responseText);
    showDegreesSection(degreeData);
  };
  degreeRequest.send();
});



//Render HTML Degrees JSON data
function showDegreesSection(data){
  var htmlString = "";
   for(var i = 0; i < data.length; i++) {
    htmlString += '<div class="container">' + 
                      '<div class="card col">' +
                        '<div class="card-body">' +
                          '<h4>' + data[i].id + '</h4>' +
                          '<h5>' + data[i].name + '</h5>' +
                        '</div>' +
                      '</div>' +
                    '</div>';


  }
  degreeContainer.insertAdjacentHTML('beforeend', htmlString);
}



// hide dashbaord and reveal modules page
moduleButton.addEventListener("click", function(){
  dashboard.hidden = true;
  assessmentPage.hidden = true;
  modulePage.hidden = false;

  // GET modue json data 
  var moduleRequest = new XMLHttpRequest();
  moduleRequest.open('GET', 'https://raw.githubusercontent.com/clarkenewsh/Academic-Tack-WebApp/master/module.json');
  moduleRequest.onload = function() {
    console.log(moduleRequest.responseText);
    var moduleData = JSON.parse(moduleRequest.responseText);
    showModuleSection(moduleData);
  };
  moduleRequest.send();

});

//Render HTML Modules JSON data
function showModuleSection(mdata){
  var htmlString = "";
   for(var j = 0; j < mdata.length; j++) {
    htmlString += '<div class="container">' + 
                      '<div class="card col">' +
                        '<div class="card-body">' +
                          '<h4>' + mdata[j].module_id + '</h4>' +
                          '<h5>' + mdata[j].title + '</h5>' +
                          '<p>' + 'Hours of study:' + mdata[j].hours + '</p>' +
                        '</div>' +
                      '</div>' +
                    '</div>';
  }
  moduleContainer.insertAdjacentHTML('beforeend', htmlString);
}


// hide dashbaord and reveal assessments page
assessmentButton.addEventListener("click", function(){
  dashboard.hidden = true;
  modulePage.hidden = true;
  degreePage.hidden = true;
  assessmentPage.hidden = false;

  // GET assessment json data 
  var assessmentRequest = new XMLHttpRequest();
  assessmentRequest.open('GET', 'https://raw.githubusercontent.com/clarkenewsh/Academic-Tack-WebApp/master/assessment.json');
  assessmentRequest.onload = function() {
    console.log(assessmentRequest.responseText);
    var assessmentData = JSON.parse(assessmentRequest.responseText);
    showAssessmentSection(assessmentData);
  };
  assessmentRequest.send();

});

//Render HTML assessment JSON data
function showAssessmentSection(adata){
  var htmlString = "";
   for(var j = 0; j < adata.length; j++) {
    htmlString += '<div class="container">' + 
                      '<div class="card col">' +
                        '<div class="card-body">' +
                          '<h4>' + adata[j].module_id + '</h4>' +
                          '<h5>' + adata[j].assessment_id + '</h5>' +
                        '</div>' +
                      '</div>' +
                    '</div>';
  }
  assessmentContainer.insertAdjacentHTML('beforeend', htmlString);
}



// Return to dashboard functionality - reload content on refresh
dashboardButton.addEventListener("click", function(){
  dashboard.hidden = false;
  degreePage.hidden = true;
  modulePage.hidden = true;
  assessmentPage.hidden = true;
  window.location.reload();
});


// show dashboard on load. hide all other pages
degreePage.hidden = true;
modulePage.hidden = true;
assessmentPage.hidden = true;
dashboard.hidden = false;

