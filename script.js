// Example: Fan Zone interaction
document.querySelector("button").addEventListener("click", () => {
  const comment = document.querySelector("textarea").value;
  alert(`Your comment: "${comment}" has been submitted!`);
  document.querySelector("textarea").value = "";
});



