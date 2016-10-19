function drawTable(startingYear, semesters, units) {
    var startingYear = parseInt(startingYear);
    var myTableDiv = document.getElementById("tableLoc");

    // draw table
    var table = document.createElement('TABLE');
    table.setAttribute('class','ui celled table')
    table.setAttribute('id','unitTable')
    table.border = '1';

    //draw table header row
    var tableHead = document.createElement('THEAD');
    table.appendChild(tableHead)
    var tr = document.createElement('TR');
    for(var u = 0; u < units + 1; u++) {
      if(u > 0) {
        var th = document.createElement('th');
        th.appendChild(document.createTextNode("Unit " + u));
        tr.appendChild(th);
      } else {
        var th = document.createElement('th');
        th.appendChild(document.createTextNode("Semester"));
        tr.appendChild(th);
      }
    }
    tableHead.appendChild(tr)

    //draw table body
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    for (var i = 0; i < semesters; i++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);


        console.log(currentSem)
        for (var j = 0; j < units+1; j++) {
            if(j > 0) {
              var td = document.createElement('TD');
              if (i % 2 === 0){
                td.setAttribute('id',('year-'+i+'-semester-'+'a'+'-unit-'+j))
              } else {
                td.setAttribute('id',('year-'+i+'-semester-'+'b'+'-unit-'+j))
              }
              tr.appendChild(td);
            } else {
              var td = document.createElement('TD');
              if (i % 2 === 0){
                var currentSem = (startingYear + i / 2) + " Sem 1"
              } else {
                var currentSem = (startingYear + Math.floor(i/2)) + " Sem 2"
              }
              td.appendChild(document.createTextNode(currentSem));
              tr.appendChild(td);
            }
        }
    }
    myTableDiv.appendChild(table);
}

function submitYear(){
  var element =  document.getElementById('unitTable');
  if (typeof(element) != 'undefined' && element != null)  {
    if(element) element.parentNode.removeChild(element);
  }
  var startingYear = document.getElementById('startingYear').value;
  var duration = document.getElementById('duration').value;
  if (startingYear !== '' && duration !== '' ) {
    var numOfSem = duration * 2;
    var currentYear =  new Date().getFullYear();
    var minThreshold = currentYear - 7;
    var maxThreshold = currentYear + 7;
    if(startingYear > minThreshold && maxThreshold > startingYear ) {
      drawTable(startingYear,numOfSem,4)
    } else {
      if(startingYear < minThreshold){
         errorHandler("SUBYRLWR");
      } else if(startingYear > maxThreshold) {
        errorHandler("SUBYRGRTR");
      }
    }
  } else {
    errorHandler("CRSEFLDEMPTY")
  }
}

function addUnit(year,semester,unit,unitName){
  var targetID = 'year-' + year + '-semester-' + semester +'-unit-'+unit
  var target =  document.getElementById(targetID);
  if (typeof(target) != 'undefined' && target != null)  {
    document.getElementById(target).value = "";
    target.appendChild(document.createTextNode(unitName));
  }

}

function errorHandler(errorCode){
  if(errorCode !== "" || errorCode !== null){
      if(errorCode === "SUBYRLWR"){
        var errorMsg = 'Starting year is smaller than the minimum threshold year (current year - 7 years). You must be a current student';
        var errorCode = 'Error ' + errorCode + ' (startingYear < minThreshold)';
      } else if (errorCode === "SUBYRGRTR"){
        var errorMsg = ('Starting year is larger than the max threshold year (current year + 7 years). Are you looking courses for a grandchild?');
        var errorCode = 'Error ' + errorCode + ' (startingYear > maxThreshold)';
      } else if (errorCode === "CRSEFLDEMPTY"){
        var errorMsg = ('Some fields are empty on the Course Details Submission form. Please try again.');
        var errorCode = 'Error ' + errorCode;
      }
      $('#errorCode').text(errorCode)
      $('#errorMessage').text(errorMsg);
      $('#errorModal').modal('show');
      console.error(errorCode + ': ' + errorMsg);
  }
}
