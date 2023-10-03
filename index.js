// Wait for the DOM (HTML content) to be fully loaded before executing any JavaScript code
document.addEventListener("DOMContentLoaded", function () {

  let myLeads = [] // An array that will store the leads

  const inputEl = document.getElementById("input-el") // A reference to the input element in the DOM
  const inputBtn = document.getElementById("input-btn") // A reference to the input button element in the DOM
  const ulEl = document.getElementById("ul-el") // A reference to the unordered list element in the DOM
  const deleteBtn = document.getElementById("delete-btn") // A reference to the delete button element in the DOM

  const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) // Retrieves the leads from local storage and converts them from a string to an array
  const tabBtn = document.getElementById("tab-btn") // A reference to the tab button element in the DOM

  // Check if there are any leads stored in local storage
  if (leadsFromLocalStorage) {
    // If there are, assign them to the myLeads array and render them in the UI
    myLeads = leadsFromLocalStorage
    render(myLeads)
  }

  // Set up an event listener for the tab button
  tabBtn.addEventListener("click", function () {
    // Use the chrome.tabs.query() method to get information about the currently active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // Add the URL of the active tab to the myLeads array
      myLeads.push(tabs[0].url)
      // Save the updated myLeads array to local storage
      localStorage.setItem("myLeads", JSON.stringify(myLeads))
      // Render the updated list of leads in the UI
      render(myLeads)
    })
  })

  // Define the render function, which takes an array of leads as a parameter
  function render(leads) {
    // Initialize an empty string to store the list items
    let listItems = ""
    // Loop through the leads array and generate an HTML string for each lead
    for (let i = 0; i < leads.length; i++) {
      listItems += `
      <li>
        <a target='_blank' href='${leads[i]}'>
          ${leads[i]}
        </a>
      </li>
    `
    }
    // Set the innerHTML of the ulEl element to the listItems string, which updates the UI with the list of leads
    ulEl.innerHTML = listItems
  }
  deleteBtn.addEventListener("click", function () {
    // Clear the local storage
    localStorage.clear()
    // Empty the myLeads array
    myLeads = []
    // Render the updated list of leads in the UI
    render(myLeads)
  })

  inputBtn.addEventListener("click", function () {
    // Add the input value to the myLeads array
    myLeads.push(inputEl.value)
    // Clear the input field
    inputEl.value = ""
    // Save the updated myLeads array to local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    // Render the updated list of leads in the UI
    render(myLeads)
  })
});
