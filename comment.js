var index = 1;
showComment(index);

function comment_slide(k) { showComment(index = k); }
function comment_slider(k) { showComment(index += k); }
function showComment(k) {
    var p;
    const comment = document.querySelectorAll(".comment-box");
    const comment_button = document.querySelectorAll(".comment-nav span");
    if (k > comment.length) {
        index = 1
    }
    if (k < 1) {
        index = comment.length
    }
    for (p = 0; p < comment.length; p++) {
        comment[p].style.display = "none";
    }
    for (p = 0; p < comment_button.length; p++) {
        comment_button[p].style.background = "#c5c6c7";
    }
    comment[index - 1].style.display = "block";
    comment_button[index - 1].style.background = "#05386b";
}
