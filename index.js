// Wait for the DOM (HTML content) to be fully loaded before executing any JavaScript code
document.addEventListener("DOMContentLoaded", function () {

  // Get references to the input element, input button, and unordered list element in the HTML document
  const inputEl = document.getElementById("input-el");
  const inputBtn = document.getElementById("input-btn");
  const ulEl = document.getElementById("ul-el");

  // Initialize an array called myLeads with three lead URLs
  let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];

  // Add event listener to input button
  inputBtn.addEventListener("click", function () {
    // Add the value of the input element to the myLeads array using the push() method
    myLeads.push(inputEl.value);
  });

  // Loop through the myLeads array and append each lead URL to the unordered list element using the innerHTML property
  for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";

    // Alternative way to append the lead URLs to the unordered list element using createElement(), textContent, and append() methods
    /*
    const li = document.createElement("li");
    li.textContent = myLeads[i];
    ulEl.append(li);
    */
  }

});