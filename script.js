// Example: Fan Zone interaction
document.querySelector("button").addEventListener("click", () => {
  const comment = document.querySelector("textarea").value;
  alert(`Your comment: "${comment}" has been submitted!`);
  document.querySelector("textarea").value = "";
});


// Load comments from localStorage when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const comments = JSON.parse(localStorage.getItem("fanZoneComments")) || [];
  const commentsList = document.getElementById("comments-list");

  comments.forEach(comment => {
    const commentItem = document.createElement("li");
    commentItem.textContent = comment;
    commentsList.appendChild(commentItem);
  });
});

// Add new comment and save to localStorage
document.getElementById("submit-comment").addEventListener("click", () => {
  const input = document.getElementById("comment-input");
  const comment = input.value.trim();

  if (comment) {
    const commentsList = document.getElementById("comments-list");
    const commentItem = document.createElement("li");
    commentItem.textContent = comment;
    commentsList.appendChild(commentItem);

    // Save the comment to localStorage
    const comments = JSON.parse(localStorage.getItem("fanZoneComments")) || [];
    comments.push(comment);
    localStorage.setItem("fanZoneComments", JSON.stringify(comments));

    input.value = ""; // Clear the input
  }
});
