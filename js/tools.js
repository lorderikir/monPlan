//document onLoad instructions
$(document).ready(function(){
  $('.ui.checkbox').checkbox();
  $('.ui.dropdown').dropdown();
  storeData();
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
    if (unitDetails === false) {
      errorHandler('UNITCODENOTFOUND')
    } else {
      console.info('Success')
      console.log(unitDetails);
    }
  } else {
    errorHandler('UNITCODEEMPTY');
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

function addUnitDetails(unitCode, unitName,unitDescription){
  $('#unitDetCode').text(unitCode);
  $('#unitDetName').text(unitName);
  $('#unitDetDescrip').text(unitName);

}
