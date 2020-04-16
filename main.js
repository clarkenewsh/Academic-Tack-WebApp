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
     
      // for(var ii = 0; ii < data.learning_outcomes.length; ii++) {
      //   console.log(data[i].learning_outcomes[ii]);
      // append html
      htmlString +=  
                  '<div class="card">' +
                    '<div class="card-body">' +
                      '<h4>' + 'ID: ' + data[i].degree_id + '</h4>' +
                      '<h4>' + data[i].title + '</h4>' +
                      '<div id="data-container">' +
                        '<div id=""module-data>' +
                          '<h6>' + 'Modules: ' + '</h6>' + 
                          '<li>' + data[i].modules[0]+ '</li>' +
                          '<li>' + data[i].modules[1]+ '</li>' +
                          '<li>' + data[i].modules[2]+ '</li>' +
                          '<li>' + data[i].modules[3]+ '</li>' +
                        '</div>' +
                        '<div id="learningOutcome-data" class="justify-content-end">' +
                          '<h6>' + 'Learning Outcomes: ' + '</h6>' + 
                          '<li>' + data[i].learning_outcomes[0]+ '</li>' +
                          '<li>' + data[i].learning_outcomes[1]+ '</li>' +
                          '<li>' + data[i].learning_outcomes[2]+ '</li>' +
                        '</div>' +
                        '<div id="exitAward-data">' + 
                          '<h6>' + 'Exit Awards: ' + '</h6>' +
                          '<li>' + data[i].exit_wards[0]+ '</li>' +
                          '<li>' + data[i].exit_wards[1]+ '</li>' +
                          '<li>' + data[i].exit_wards[2]+ '</li>' +
                        '</div>' +
                      '</div>' +
                  '</div>' +
                '</div>';
    
    } 
  // 
  // Insert html in degree section
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
    htmlString +=
                      '<div class="card col">' +
                        '<div class="card-body">' +
                          '<h5>' + mdata[j].module_id + '</h5>' +
                          '<h6>' + mdata[j].title + '</h6>' +
                        '<div id=""module-data>' +
                          '<h6>' + 'Modules: ' + '</h6>' + 
                          '<li>' + mdata[j].learning_outcomes[0]+ '</li>' +
                          '<li>' + mdata[j].learning_outcomes[1]+ '</li>' +
                          '<li>' + mdata[j].learning_outcomes[2]+ '</li>' +
                        '</div>' +
                          '<p>' + 'Hours of study:' + mdata[j].hours + '</p>' +
                          '<p>' + 'Credits:' + mdata[j].credits + '</p>' +
                        '</div>' +
                        '<div id=""assessment-data>' +
                          '<h6>' + 'Modules: ' + '</h6>' + 
                          '<li>' + mdata[j].assessments[0]+ '</li>' +
                          '<li>' + mdata[j].assessments[1]+ '</li>' +
                          '<li>' + mdata[j].assessments[2]+ '</li>' +
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
   for(var x = 0; x < adata.length; x++) {
    htmlString += '<div class="container">' + 
                      '<div class="card col">' +
                        '<div class="card-body">' +
                          '<h5>'+ 'Assessment: ' + adata[x].assessment_id + '</h5>' +
                        '</div>' +
                      '</div>' +
                    '</div>';
                    
  }
  
  assessmentContainer.insertAdjacentHTML('beforeend', htmlString);
}



// Return to dashboard functionality - reload content on refresh
dashboardButton.addEventListener("click", function(){
  window.location.reload();
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

