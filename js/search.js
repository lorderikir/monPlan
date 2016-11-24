$(document).ready(function() {
  

    var addUnitMessage = document.getElementById("addUnitMessage");

    $.ajax({
        url: "units/db.json"
    }).done(function(content) {
        for(var i = 0; i < content.length; i++) {
            content[i].title = content[i]["UnitCode"];
            content[i].description = content[i]["UnitName"];
        }

        $("#unitSearch").search({
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
});
