function specialisation(code, name, type, faculty, currentSpecialisation) {
    this.code = code;
    this.name = name;
    this.faculty = faculty;
    this.type = type;
    this.currentSpecialisation = currentSpecialisation;
}

specialisation.prototype.populateTable = function() {

}

specialisation.prototype.addSpecialisation = function() {
  if($.inArray(newCode, currentSpecialisation) !== -1){
    //append specialisation if not present in array
    currentSpecialisation.append(newCode)
  }
}



function addSpecialisation(){
  var table = document.getElementById("special");

  var tgtSpecial = $("#specialisationSearch").search("get value");
  // Create an empty <tr> element and add it to the 1st position of the table:
  var row = table.insertRow(-1);

  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);

  // Add some text to the new cells:
  cell1.innerHTML = tgtSpecial;
  cell2.innerHTML = "NEW CELL2";
}
