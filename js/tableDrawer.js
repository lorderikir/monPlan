function drawTable(startingYear, semesters, units) {
    var startingYear = parseInt(startingYear);
    var myTableDiv = document.getElementById("tableLoc");

    var table = document.createElement('TABLE');
    table.setAttribute('class','pure-table pure-table-horizontal')
    table.setAttribute('id','unitTable')
    table.border = '1';

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

    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    for (var i = 0; i < semesters; i++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);

        if (i % 2 === 0){
          var currentSem = (startingYear + i / 2) + " A"
        } else {
          var currentSem = (startingYear + Math.floor(i/2)) + " B"
        }
        console.log(currentSem)
        for (var j = 0; j < units+1; j++) {
            if(j > 0) {
              var td = document.createElement('TD');
              tr.appendChild(td);
            } else {
              var td = document.createElement('TD');
              td.appendChild(document.createTextNode(currentSem));
              tr.appendChild(td);
            }
        }
    }
    myTableDiv.appendChild(table);
}

function submitLink(){
  var element =  document.getElementById('unitTable');
  if (typeof(element) != 'undefined' && element != null)
  {
    if(element) element.parentNode.removeChild(element);
  }
  var startingYear = document.getElementById('startingYear').value;
  var startingYear = document.getElementById('startingYear').value;
  drawTable(startingYear,8,4)
}
