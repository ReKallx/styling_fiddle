function addInfo() {
  alert('add');
}

function removeInfo() {
  alert('remove');
}

$(document).ready(function() {

  $('#addInfo').click(function() {addInfo();});

  $('#removeInfo').click(function() {removeInfo();});



});

