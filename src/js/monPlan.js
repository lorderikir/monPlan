function errorHandler(errorCode){
    if(errorCode !== "" || errorCode !== null){
        var errorMsg;
        if(errorCode === "SUBYRLWR"){
            errorMsg = "Starting year is smaller than the minimum threshold year (current year - 7 years). You must be a current student";
            errorCode = "Error " + errorCode + " (startingYear < minThreshold)";
        } else {
            //if an unknown error has occured
            errorCode = "An Unknown Error has Occured";
            errorMsg = ("An unknown error has occured, if this problem persists please contact the developers or log an issue request at https://gitreports.com/issue/MonashUnitPlanner/monPlan/");
        }
        $("#errorCode").text(errorCode)
        $("#errorMessage").text(errorMsg);
        $("#errorModal").modal("show");
        console.error(errorCode + ": " + errorMsg);
    }
}

var courseStructure;

//document onLoad instructions
window.addEventListener("load", function() {
    var startYr       = document.getElementById("startYr");
    var endYr         = document.getElementById("gradYr");
    var main          = document.getElementById("main");
    var startPlanning = document.getElementById("startPlanning");
    var startPlanningEmpty = document.getElementById("startPlanningEmpty");
    var addSemester = document.getElementById("addSemester");
    var addSummerSemesterA = document.getElementById("addSummerSemesterA");
    var addSummerSemesterB = document.getElementById("addSummerSemesterB");
    var addWinterSemester = document.getElementById("addWinterSemester");
    var addFullYear = document.getElementById("addFullYear");
    var addUnit = document.getElementById("addUnit");
    var myTable = document.getElementById("myTable");

    startPlanning.addEventListener("click", function() {
        welcome.style.display = "none";
        main.style.display = "block";

        courseStructure = new CourseStructure(myTable, parseInt(startYr.value) || 2016, parseInt(endYr.value) || 2018);
    });

    startPlanningEmpty.addEventListener("click", function() {
        welcome.style.display = "none";
        main.style.display = "block";

        courseStructure = new CourseStructure(myTable);
    });

    addSemester.addEventListener("click", function() {
        if(typeof courseStructure !== "undefined") {
            courseStructure.addTeachingPeriod();
        }
    });

    addSummerSemesterA.addEventListener("click", function() {
        if(typeof courseStructure !== "undefined") {
            courseStructure.addTeachingPeriod(new TeachingPeriod(courseStructure, 2016, "SSA-02"));
        }
    });

    addSummerSemesterB.addEventListener("click", function() {
        if(typeof courseStructure !== "undefined") {
            courseStructure.addTeachingPeriod(new TeachingPeriod(courseStructure, 2016, "SSB-01"));
        }
    });

    addWinterSemester.addEventListener("click", function() {
        if(typeof courseStructure !== "undefined") {
            courseStructure.addTeachingPeriod(new TeachingPeriod(courseStructure, 2016, "WS-01"));
        }
    });

    addFullYear.addEventListener("click", function() {
        if(typeof courseStructure !== "undefined") {
            courseStructure.addTeachingPeriod(new TeachingPeriod(courseStructure, 2016, "FY-01"));
        }
    });

    $(".ui.checkbox").checkbox();
    $(".ui.dropdown").dropdown();
    $(".ui.modal").modal();
    $(".ui.pop").popup();
});
