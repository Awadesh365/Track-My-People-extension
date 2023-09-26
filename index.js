// Wait for the DOM (HTML content) to be fully loaded before executing any JavaScript code
document.addEventListener("DOMContentLoaded", function () {

  const inputEl = document.getElementById("input-el");
  const inputBtn = document.getElementById("input-btn");
  const ulEl = document.getElementById("ul-el");

  let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];


  inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
  });


  for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";

    // Alternative way
    /*
     create element:- const li = document.createElement("li")
    set text content:- li.textContent = myLeads[i]
    append to ul :- ulEl.append(li)
     */
  }

});
