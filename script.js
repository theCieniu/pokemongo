/* let burger = document.getElementById("burger");
let menu = document.querySelector(".nav-links");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");

burger.addEventListener("click", () => {
  menu.classList.toggle("mobile-menu");
  b1.classList.toggle("b1");
  b2.classList.toggle("b2");
  b3.classList.toggle("b3");
}) */

// Function to copy text to clipboard
function copyToClipboard(button) {
  // Find the paragraph just before the clicked button
  const paragraph = button.previousElementSibling;

  if (paragraph && paragraph.tagName === "P") {
    const textToCopy = paragraph.innerText;

    // Create a temporary textarea element to hold the text
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);

    // Select and copy the text
    tempTextarea.select();
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(tempTextarea);

    alert("Text copied: " + textToCopy);
  } else {
    alert("No paragraph found just above the button!");
  }
}

// Attach event listeners to all buttons
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => copyToClipboard(button));
});
