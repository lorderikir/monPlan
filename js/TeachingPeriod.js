function TeachingPeriod(year, type) {
    this.year = year;
    this.type = type;
    this.units = [];
    this.numberOfUnits = 4;
    this.numberOfCredits = 24;
}

TeachingPeriod.typeStrings = {
    "S1-01": "Semester one",
    "S2-02": "Semester two",
    "FY-01": "Full-year",
    "SSA-02": "Summer semester A",
    "SSB-01": "Summer semester B",
    "WS-01": "Winter semester"
};

TeachingPeriod.prototype.toString = function() {
    return this.year + " " + TeachingPeriod.typeStrings[this.type];
};

TeachingPeriod.prototype.toStringCode = function() {
    return this.year + "-" + this.type;
};

TeachingPeriod.prototype.appendUnitPlaceholder = function(tblId) {
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
};

TeachingPeriod.prototype.popUnitPlaceholder = function(tblId) {
	var allRows = document.getElementById(tblId).rows;
	for (var i = 0; i < allRows.length; i++) {
		if (allRows[i].cells.length > 1) {
			allRows[i].deleteCell(-1);
		}
	}
};
