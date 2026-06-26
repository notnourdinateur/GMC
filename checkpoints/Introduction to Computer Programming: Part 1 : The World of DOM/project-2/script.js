// Wait for the DOM content to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Select the elements we need to work with
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  // Generate a random hexadecimal color code (e.g. "#3f9a1c")
  function getRandomColor() {
    const hexCharacters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexCharacters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // When the button is clicked, change the box's background to a random color
  changeColorBtn.addEventListener("click", function () {
    colorBox.style.backgroundColor = getRandomColor();
  });
});
