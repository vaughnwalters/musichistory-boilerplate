var employeeBio = document.getElementById("eContainer");

for (var i = 0; i < sunEmployees.length; i++) {
  var selectedEmployee = sunEmployees[i];

  employeeBio.innerHTML += 
    "<div class='employee'>" +
      "<div class='eName'>" + selectedEmployee.name + "</div>" +
      "<div class='eTitle'>" + selectedEmployee.title + "</div>" +
      "<img class='eImage' src='" + selectedEmployee.image + "'>" + 
      "<div class='eDescription'>" + selectedEmployee.description + 
      "</div>" +
    "</div>";
};