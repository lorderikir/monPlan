function CourseStructure(domTable, commencementYear, graduationYear) {
    this.domTable = domTable;
    this.teachingPeriods = [];

    if(typeof commencementYear != "undefined") {
        this.commencementYear = commencementYear;
        this.graduationYear = graduationYear;

        this.populateTable();
    }
}

CourseStructure.prototype.populateTable = function() {
    var year = this.commencementYear;
    while(year <= this.graduationYear) {
        this.addTeachingPeriod(new TeachingPeriod(year, "S1-01"));
        this.addTeachingPeriod(new TeachingPeriod(year, "S2-02"));
        year ++;
    }
};

CourseStructure.prototype.addTeachingPeriod = function(teachingPeriod) {
    if(typeof teachingPeriod == "undefined") {
        if(this.teachingPeriods.length > 0) {
            var oldTeachingPeriod = this.teachingPeriods[this.teachingPeriods.length - 1];
            if(oldTeachingPeriod.type == "S1-01") {
                teachingPeriod = new TeachingPeriod(oldTeachingPeriod.year, "S2-02");
            } else {
                teachingPeriod = new TeachingPeriod(oldTeachingPeriod.year + 1, "S1-01");
            }
        } else {
            teachingPeriod = new TeachingPeriod(2016, "S1-01");
        }
    }

    this.teachingPeriods.push(teachingPeriod);

    var row = this.domTable.insertRow(-1);

    for(var i = 0; i <= teachingPeriod.numberOfUnits; i++) {
      var cell = row.insertCell();
      if(i === 0) {
        //row header
        cell.textContent = teachingPeriod.toString();
      } else {
          cell.id = teachingPeriod.toStringCode() + '-unit-' + i;
      }
    }
};

CourseStructure.prototype.deleteTeachingPeriod = function() {
  if(this.domTable.rows.length > 2) {
    this.domTable.deleteRow(-1);
  }
};
