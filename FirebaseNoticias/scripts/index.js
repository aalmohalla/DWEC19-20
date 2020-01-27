//DOM ELEMENTS

const loginDOM = document.querySelectorAll(".logged-in");
const logoutDOM = document.querySelectorAll(".logged-out");



function setupUI(user) {

  if (user) {

    for (let elem of loginDOM) {
      elem.style.display = "block";
    }
    for (let elem of logoutDOM) {
      elem.style.display = "none";
    }

  } else {

    for (let elem of loginDOM) {
      elem.style.display = "none";
    }
    for (let elem of logoutDOM) {
      elem.style.display = "block";
    }

  }

}

setupUI(null);

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});