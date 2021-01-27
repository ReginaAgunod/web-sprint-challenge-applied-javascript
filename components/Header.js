// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see
// below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

// Function to add elements to the DOM
function Header() {
  // Create Element
  const header = document.createElement("div");
  const date = document.createElement("span");
  const title = document.createElement("h1");
  const temp = document.createElement("span");
  // Create Structure
  header.appendChild(date);
  header.appendChild(title);
  header.appendChild(temp);
  // Set Content
  date.textContent = "March 28, 2020";
  title.textContent = "Lambda Times";
  temp.textContent = "98°";
  // Apply Structure
  header.classList.add("header");
  date.classList.add("date");
  title.classList.add("h1");
  temp.classList.add("temp");

  return header;
}

const headerContainer = document.querySelector(".header-container");

headerContainer.appendChild(Header());
