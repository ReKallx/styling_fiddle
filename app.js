function addInfo() {
  window.location = "#addInfo-form";
}

function removeInfo() {
  alert('remove');
}

function alertGoto() {
  alert('alert goto');
}

function alertRemove() {
  alert('alert remove');
}

$(document).ready(function() {

  $('#addInfo').click(function() {addInfo();});

  $('#removeInfo').click(function() {removeInfo();});

  $('.alert-goto').click(function() {alertGoto();});
  
  $('.alert-remove').click(function() {alertRemove();});


});

