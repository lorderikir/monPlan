var   year      = 2017;
var   hbString  = year+"handbooks";
const monURL    = "https://monash.edu.au";
const monURLHB  = monURL + "/pubs/" + hbString + "/units/";
var faculties = [["Art, Design and Architecture", "ada"],["Arts","arts"],["Business and Economics","bus"],
["Education","edu"], ["Engineering","eng"],["Information Technology","it"],["Law",'law'],
["Medicine, Nursing and Health Sciences","med"],["Pharmacy and Pharmaceutical Sciences","pha"],["Science","sci"] ]

function getUnitsByFaculty() {
  var targetURL = monURLHB + "index-byfaculty-";
  for (i = 0; i < (faculties.length - 1); i += 1){
      var currentTarget = targetURL + faculties[i][1] + ".html"
      readCode(currentTarget);
  }
}

function readCode(address){
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
      if(xhr.readyState === 4){
          if(xhr.status == 200){
              loadContents(xhr.responseText, xhr);
              console.log('File Sucessfully Loaded');
          }
          else if(xhr.status == 404){
              console.log("File not Found");
          }
      }
  };
  xhr.open('GET',address,true);
  xhr.send();
}

//loadContents() works in conjunction with readCode(), if the server responds with a Code 200
function loadContents(response){
  
}

console.log(monURLHB);
