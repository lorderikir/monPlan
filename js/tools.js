//asume list is already sorted, use binary search
function search(target, array) {
  var lowerBound = 0;
  var upperBound = (array.length - 1);
  var currentbound;

  while (lowerBound <= upperBound){
    var middle = Math.floor((lowerBound + upperBound)/2) //integer dicision to find middle
    if(target === array[middle]){
      return true
    } else {
      if(target < array[middle]){
        upperBound = middle - 1
      } else {
        lowerBound = middle + 1
      }
    }
  }
  return false
}

function parseCsv(){
  Papa.parse('./units/db.csv', {
    download: true,
	  header: true,
  	complete: function(results) {
  		sessionStorage.setItem('data', results.data);
  	}
  });
}
