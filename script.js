// Add comment to the Fan Zone
function addComment() {
    const commentBox = document.getElementById('fan-comments');
    const commentList = document.getElementById('fan-comments-list');
    const comment = commentBox.value.trim();
    if (comment) {
        const newComment = document.createElement('div');
        newComment.textContent = comment;
        commentList.appendChild(newComment);
        commentBox.value = '';
    }
}
<script>
    document.addEventListener("DOMContentLoaded", function () {
        const collapsibles = document.querySelectorAll(".collapsible");

        collapsibles.forEach((collapsible) => {
            collapsible.addEventListener("click", function () {
                // Toggle active state for the button
                this.classList.toggle("active");

                // Get the next sibling element (content div)
                const content = this.nextElementSibling;

                // Toggle visibility
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
        });
    });
</script>
