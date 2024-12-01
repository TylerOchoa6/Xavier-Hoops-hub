document.addEventListener("DOMContentLoaded", function () {
    const commentInput = document.getElementById("comment-input");
    const submitButton = document.getElementById("submit-comment");
    const commentsContainer = document.getElementById("comments-container");

    // Load existing comments from localStorage
    const savedComments = JSON.parse(localStorage.getItem("fanZoneComments")) || [];
    savedComments.forEach(comment => addCommentToPage(comment));

    // Add comment to the page and save it
    submitButton.addEventListener("click", function () {
        const commentText = commentInput.value.trim();
        if (commentText !== "") {
            // Add comment to the page
            addCommentToPage(commentText);

            // Save comment in localStorage
            savedComments.push(commentText);
            localStorage.setItem("fanZoneComments", JSON.stringify(savedComments));

            // Clear the input field
            commentInput.value = "";
        }
    });

    // Function to add a comment to the page
    function addCommentToPage(comment) {
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.textContent = comment;
        commentsContainer.appendChild(commentDiv);
    }
});

