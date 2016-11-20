function errorHandler(errorCode){
  if(errorCode !== "" || errorCode !== null){
    var errorMsg;
      if(errorCode === "SUBYRLWR"){
        errorMsg = 'Starting year is smaller than the minimum threshold year (current year - 7 years). You must be a current student';
        errorCode = 'Error ' + errorCode + ' (startingYear < minThreshold)';
      } else {
        errorCode = 'An Unknown Error has Occured';
        errorMsg = ('An unknown error has occured, if this problem persists please contact the developers or log an issue request at https://gitreports.com/issue/MonashUnitPlanner/monPlan/');
      }
      $('#errorCode').text(errorCode)
      $('#errorMessage').text(errorMsg);
      $('#errorModal').modal('show');
      console.error(errorCode + ': ' + errorMsg);
  }
}

//document onLoad instructions
$(document).ready(function(){
  $('.ui.checkbox').checkbox();
  $('.ui.dropdown').dropdown();
  $('.ui.modal').modal();

  var startingYear = localStorage.getItem('startingYear');
  var unitsPerYear = localStorage.getItem('unitsPerYear');

  if(startingYear === null || startingYear === "" || startingYear === undefined){
    console.warn('Need Starting Year Data')
  } else {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);

    for (i = 0; i < 5; i++) {
      var cell = row.insertCell(i);
      if(i === 0) {
        //row header
        cell.innerHTML = startingYear + " Semester A";
      } else {
        cell.id = startingYear + '-semester-A-unit-' + i
      }

    }
  }
});

function setStartYear(){
  var year = $('#startYr').val();
  localStorage.setItem('startingYear',year);
}

function addRow(year,semester) {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);


    for(i = 0; i < 5; i++) {
      var cell = row.insertCell(i);
      if(i === 0) {
        //row header
        cell.innerHTML = year + " Semester " + semester;
      } else {
        cell.id = year + '-semester-' + semester + '-unit-' + i
      }
    }
}

function deleteRow() {
  var table = document.getElementById("myTable");
  if(table.rows.length > 2){
    table.deleteRow(-1);
  }
}

function addColumn(tblId)
{
	var tblHeadObj = document.getElementById(tblId).tHead;
	for (var h=0; h<tblHeadObj.rows.length; h++) {
		var newTH = document.createElement('th');
		tblHeadObj.rows[h].appendChild(newTH);
		newTH.innerHTML = '[th] row:' + h + ', cell: ' + (tblHeadObj.rows[h].cells.length - 1)
	}

	var tblBodyObj = document.getElementById(tblId).tBodies[0];
	for (var i=0; i<tblBodyObj.rows.length; i++) {
		var newCell = tblBodyObj.rows[i].insertCell(-1);
		newCell.innerHTML = '[td] row:' + i + ', cell: ' + (tblBodyObj.rows[i].cells.length - 1)
	}
}

function deleteColumn(tblId)
{
	var allRows = document.getElementById(tblId).rows;
	for (var i=0; i<allRows.length; i++) {
		if (allRows[i].cells.length > 1) {
			allRows[i].deleteCell(-1);
		}
	}
}
