// Wait for the DOM (HTML content) to be fully loaded before executing any JavaScript code
document.addEventListener("DOMContentLoaded", function () {

  // Get references to the input element, input button, and unordered list element in the HTML document
  const inputEl = document.getElementById("input-el"); // input element reference
  const inputBtn = document.getElementById("input-btn"); // input button reference
  const ulEl = document.getElementById("ul-el"); // unordered list element reference

  // Initialize an array called myLeads
  let myLeads = [];

  // Add event listener to input button
  inputBtn.addEventListener("click", function () {
    // Add the value of the input element to the myLeads array using the push() method
    myLeads.push(inputEl.value);
    inputEl.value = ""; // Clear the input element, when the input button is clicked on.
    renderLeads();
  });

  // Render the leads in the unordered list element
  function renderLeads() {
    let listItems = "";
    // Loop through the myLeads array and append each lead URL to the unordered list element using the innerHTML property
    for (let i = 0; i < myLeads.length; i++) {
      listItems += "<li>" + myLeads[i] + "</li>";
    }
    ulEl.innerHTML = listItems;

  }

});