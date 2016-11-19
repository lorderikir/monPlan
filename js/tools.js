//document onLoad instructions
$(document).ready(function(){
  $('.ui.checkbox').checkbox();
  $('.ui.dropdown').dropdown();

  storeData();
  var content = JSON.parse(sessionStorage.getItem('basicDB'));
  $('.ui.search')
    .search({
      source : content,
      searchFields   : [
        'UnitCode'
      ],
      fields: [
        'UnitCode'
      ],
      searchFullText: false
    })  ;

  $('#SearchUnit').click(function(){
    $('#addUnit').modal('toggle');
  })
});



function storeData(){
  var xhr = new XMLHttpRequest();
  var url = "./units/extended.json"

  xhr.onreadystatechange = function() {
    if(this.readyState === 4 && this.status == 200){
      var data = JSON.parse(this.responseText);
      sessionStorage.setItem('basicDB',JSON.stringify(data));
      console.log('Success!');
    }
  };
  xhr.open("GET",url,true);
  xhr.send();
}

function parseCsvCallback(results,file){
  console.log(results)
}

function togglePrivacy(){
  $('#privacy').modal('toggle');
}

function toggleToS(){
  $('#termsOfUse').modal('toggle');
}

function findUnit() {
  var tgt = $('#unitCodeSearch').val();
  var searchArray = sessionStorage.getItem('basicDB')
  if (tgt !== null || tgt !== "") {
    var unitDetails = findUnitCode(tgt, JSON.parse(searchArray));
    console.log(unitDetails)
    if (unitDetails === false) {
      errorHandler('UNITCODENOTFOUND')
    } else {
      console.info('Success');
      var fullFaculty = faculty(unitDetails.Faculty)
      var unitHeader = tgt + " | " + "Faculty: " + fullFaculty;
      addUnitDetails(unitHeader, unitDetails.UnitName ,unitDetails.Description, unitDetails.Prerequisites, unitDetails.Prohibitions);
    }
  } else {
    errorHandler('UNITCODEEMPTY');
  }
}

function faculty(fac){
  if(fac === "buseco"){
    return "Business and Economics"
  } else if(fac === "ada"){
    return "Arts, Design and Architeecture"
  } else if(fac === "arts"){
    return "Arts"
  } else if(fac === "edu"){
    return "Education"
  } else if(fac === "eng"){
    return "Engineering"
  } else if(fac === "it"){
    return "Information Technology"
  } else if(fac === "law"){
    return "Law"
  } else if(fac === "med"){
    return "Medicine"
  } else if(fac === "pha"){
    return "Pharmacy and Pharmaceutical Sciences"
  } else if(fac === "sci"){
    return "Science"
  }
}

// Find target Course using Binary Search
function findUnitCode(target, array) {
  var lowerBound = 0;
  var upperBound = (array.length - 1);
  var currentbound;

  while (lowerBound <= upperBound){
    var middle = Math.floor((lowerBound + upperBound)/2) //integer dicision to find middle
    if(target === array[middle].UnitCode){
      var unitName = array[middle].UnitName;
      var unitFac = array[middle].Faculty;
      var descrip = array[middle].Sypnosis;
      var unitPreqs = array[middle].Preqs;
      var unitProhib = array[middle].Proh;

      var returnObject = {"UnitName": unitName,"Description": descrip, "Faculty": unitFac, "Prerequisites": unitPreqs, "Prohibitions":unitProhib}
      return returnObject
    } else {
      if(target < array[middle].UnitCode) {
        upperBound = middle - 1
      } else {
        lowerBound = middle + 1
      }
    }
  }
  return false
}

function addUnitDetails(unitCode, unitName,unitDescription, unitPreqs, unitProhib){
  $('#unitDetCode').text(unitCode);
  $('#unitDetName').text(unitName);
  $('#unitDetDescrip').text(unitDescription);
  $('#unitPreqs').text(unitPreqs);
  $('#unitProhibitions').text(unitProhib);

  $('#addUnitDetails').modal('toggle');
}
