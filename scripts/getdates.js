
document.addEventListener("DOMContentLoaded", function () {

  const currentYearElement = document.getElementById("currentyear");
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

 
  const lastUpdatedElement = document.getElementById("last-updated-date");
  if (lastUpdatedElement) {
    lastUpdatedElement.textContent = document.lastModified;
  }
});