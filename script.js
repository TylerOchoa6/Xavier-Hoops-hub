document.addEventListener("DOMContentLoaded", () => {
    const commentInput = document.getElementById("comment-input");
    const submitButton = document.getElementById("submit-comment");
    const commentsContainer = document.getElementById("comments-container");

    // Load existing comments from localStorage
    const savedComments = JSON.parse(localStorage.getItem("fanZoneComments")) || [];
    savedComments.forEach(comment => displayComment(comment));

    // Add a new comment
    submitButton.addEventListener("click", () => {
        const commentText = commentInput.value.trim();
        if (commentText) {
            displayComment(commentText);
            savedComments.push(commentText);
            localStorage.setItem("fanZoneComments", JSON.stringify(savedComments));
            commentInput.value = ""; // Clear the input
        }
    });

    // Function to display a comment
    function displayComment(comment) {
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.textContent = comment;
        commentsContainer.appendChild(commentDiv);
    }
});
