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
