function drawTable(startingYear, semesters, units) {
    var startingYear = parseInt(startingYear);
    var myTableDiv = document.getElementById("tableLoc");

    // draw table
    var table = document.createElement('TABLE');
    table.setAttribute('class','pure-table pure-table-horizontal')
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
                var currentSem = (startingYear + i / 2) + " A"
              } else {
                var currentSem = (startingYear + Math.floor(i/2)) + " B"
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
  var minThreshold = (new Date().getFullYear()-7)
  var maxThreshold = (new Date().getFullYear()+7)
  if(startingYear > minThreshold && maxThreshold > startingYear ) {
    drawTable(startingYear,8,4)
  } else {
    if(startingYear < minThreshold){
      window.alert('Error! Starting year is smaller than threshold year. You must be a current student')
    } else if(startingYear > maxThreshold) {
      window.alert('Error! Starting year is larger than threshold year. Are you looking courses for a grandchild?')
    }
  }
}

function addUnit(year,semester,unit,unitName){
  var targetID = 'year-' + year + '-semester-' + semester +'-unit-'+unit
  var target =  document.getElementById(targetID);
  if (typeof(target) != 'undefined' && target != null)  {
    target.appendChild(document.createTextNode(unitName));
  }

}
