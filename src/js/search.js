$(document).ready(function() {
    var addUnitMessage = document.getElementById("addUnitMessage");

    $.ajax({
        url: "data/units/simple.json"
    }).done(function(content) {
        for(var i = 0; i < content.length; i++) {
            content[i].title = content[i]["UnitCode"];
            content[i].description = content[i]["UnitName"];
        }

        $(".ui.search").search({
            source: content,
            searchFields: [
                "title", "description"
            ],
            searchFullText: false,
            maxResults: 5,
            onSelect: function(result) {
                if(typeof courseStructure !== "undefined") {
                    var unit = new Unit(result.UnitCode, result.UnitName);

                    courseStructure.promptUserToAddUnit(unit, function() {
                        addUnitMessage.classList.add("hide");
                    });

                    addUnitMessage.classList.remove("hide");
                }
            }
        });
    });

    $.ajax({
        url: "data/courses/bachelors.json"
    }).done(function(content) {
        content.map(function(ele) {
            var option = $("<option></option>");
            option.text(ele.courseName);
            $("#courseSearch").append(option);
        });
    });
});