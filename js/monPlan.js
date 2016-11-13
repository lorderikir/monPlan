function drawTable(startingYear, semesters, units, summerSem, winterSem) {
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

    //rows
    for (var i = 0; i < semesters; i++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);
        console.log(currentSem)
        //columns
        for (var j = 0; j < units+1; j++) {
            if(j > 0) {
              var td = document.createElement('TD');
              if (i % 2 === 0){
                var mode = 'a'
              } else {
                var mode = 'b'
              }
              td.setAttribute('id',('year-'+i+'-semester-'+ mode +'-unit-'+j))
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
        if(summerSem === true && i % 2 !== 0){
          var tr = document.createElement('TR');
          tableBody.appendChild(tr);
          for (var j = 0; j < units+1; j++) {
              if(j > 0) {
                var td = document.createElement('TD');
                td.setAttribute('id',('year-'+i+'-semester-summerA-' +'-unit-'+j))
                tr.appendChild(td);
              } else {
                var td = document.createElement('TD');
                var currentSem = (startingYear + Math.floor(i/2)) + " Summer A"
                td.appendChild(document.createTextNode(currentSem));
                tr.appendChild(td);
              }
          }
          var tr = document.createElement('TR');
          tableBody.appendChild(tr);
          for (var j = 0; j < units+1; j++) {
              if(j > 0) {
                var td = document.createElement('TD');
                td.setAttribute('id',('year-'+i+'-semester-summerA-' +'-unit-'+j))
                tr.appendChild(td);
              } else {
                var td = document.createElement('TD');
                var currentSem = (startingYear + Math.floor(i/2)) + " Summer B"
                td.appendChild(document.createTextNode(currentSem));
                tr.appendChild(td);
              }
          }

        }
      if(winterSem === true && i % 2 === 0){
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);
        for (var j = 0; j < units+1; j++) {
            if(j > 0) {
              var td = document.createElement('TD');
              td.setAttribute('id',('year-'+i+'-semester-winterA-' +'-unit-'+j))
              tr.appendChild(td);
            } else {
              var td = document.createElement('TD');
              var currentSem = (startingYear + Math.floor(i/2)) + " Winter A"
              td.appendChild(document.createTextNode(currentSem));
              tr.appendChild(td);
            }
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
    if(duration < 10 && duration > 0){
      var numOfSem = duration * 2;
      var currentYear =  new Date().getFullYear();
      var minThreshold = currentYear - 7;
      var maxThreshold = currentYear + 7;
      if(startingYear > minThreshold && maxThreshold > startingYear ) {
        if($('#summer').is(':checked')) {
          var summerSemester = true;
        }
        if($('#winter').is(':checked')){
          var winterSemester = true;
        }
        drawTable(startingYear,numOfSem,4, summerSemester, winterSemester);
        sessionStorage.setItem('tableDrawn', true);
      } else {
        if(startingYear < minThreshold){
           errorHandler("SUBYRLWR");
        } else if(startingYear > maxThreshold) {
          errorHandler("SUBYRGRTR");
        }
      }
    } else {
      errorHandler("DURNOTINRANGE")
    }
  } else {
    errorHandler("CRSEFLDEMPTY")
  }
}

function addUnit(year,semester,unit,unitName){
  var targetID = 'year-' + year + '-semester-' + semester +'-unit-'+unit
  var target =  document.getElementById(targetID);
  if (typeof(target) !== 'undefined' && target !== null)  {
    target.appendChild(document.createTextNode(unitName));
  }
}

function errorHandler(errorCode){
  if(errorCode !== "" || errorCode !== null){
    var errorMsg;
      if(errorCode === "SUBYRLWR"){
        errorMsg = 'Starting year is smaller than the minimum threshold year (current year - 7 years). You must be a current student';
        errorCode = 'Error ' + errorCode + ' (startingYear < minThreshold)';
      } else if (errorCode === "SUBYRGRTR"){
        errorMsg = ('Starting year is larger than the max threshold year (current year + 7 years). Are you looking courses for a grandchild?');
        errorCode =  'Error ' + errorCode + ' (startingYear > maxThreshold)';
      } else if (errorCode === "CRSEFLDEMPTY"){
        errorMsg = ('Some fields are empty on the Course Details Submission form. Please try again.');
      } else if (errorCode === "DURNOTINRANGE"){
        errorMsg = ("Duration is not in range (0-10 years). Please make sure that you don't have a large HECS debt");
        errorCode = 'Error ' + errorCode
      } else if (errorCode === "UNITCODEEMPTY"){
        errorMsg = ("Unit Code is empty. Please enter a Code for a UNIT");
        errorCode = 'Error ' + errorCode
      } else if (errorCode === "UNITCODENOTFOUND") {
        errorMsg = ("Unit Code cannot be found. Please enter verify unit code is valid");
        errorCode = 'Error ' + errorCode
      } else {
        errorCode = 'An Unknown Error Occured';
        errorMsg = ('An unknown error occured, if this problem persists please contact the developers or log an issue request at https://gitreports.com/issue/MonashUnitPlanner/monPlan/');
      }
      $('#errorCode').text(errorCode)
      $('#errorMessage').text(errorMsg);
      $('#errorModal').modal('show');
      console.error(errorCode + ': ' + errorMsg);
  }
}
