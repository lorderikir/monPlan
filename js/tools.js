//document onLoad instructions
$(document).ready(function(){
  $('.ui.checkbox').checkbox();
  $('.ui.dropdown').dropdown();
  storeData();
});

function storeData(){
  var jsonObj = $.getJSON("./units/db.json");
  var searchArray = jsonObj.responseJSON;

  sessionStorage.setItem('basicDB',searchArray);
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
    var unitDetails = findUnitCode(tgt, searchArray);
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

//asume list is already sorted, use binary search
function findUnitCode(target, array) {
  var lowerBound = 0;
  var upperBound = (array.length - 1);
  var currentbound;

  while (lowerBound <= upperBound){
    var middle = Math.floor((lowerBound + upperBound)/2) //integer dicision to find middle
    if(target === array[middle].UnitCode){
      var unitName = array[middle].UnitName
      var unitFac = array[middle].Faculty

      var returnObject = {"UnitName": unitName,"Faculty": unitFac}
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
