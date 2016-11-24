function togglePrivacy(){
  $('#privacy').modal('toggle');
}

function toggleToS(){
  $('#termsOfUse').modal('toggle');
}

function displayStatus(mode, title, message){
  /*
  <div id="displayMessage" class="ui item pop" data-title="Everything looks good" data-content="As you add units, we will inform you of any
      conflicts, such as missing prerequisites.">
      Status: <span id="statusTag">OK</span> <i id="statusIcon" class="icon green checkmark"></i>
  </div>
  */
  var displayMessage       = document.getElementById("displayMessage");
  var statusIcon          = document.getElementById("statusIcon");

  if(mode === "error") {
    displayMessage.setAttribute("data-title", title);
    displayMessage.setAttribute("data-content", message);
    $('#statusTag').text('Error')
    statusIcon.setAttribute("class", "icon red warning");
  } else if (mode === "warn") {
    displayMessage.setAttribute("data-title", title);
    displayMessage.setAttribute("data-content", message);
    $('#statusTag').text('Warning');
    statusIcon.setAttribute("class", "icon orange warning");
  }
}
