var activeTag = null;

function filterPosts(tag, button) {
    var posts = document.querySelectorAll('#articleList .post');
    if (tag === activeTag) {
        // If the same tag is clicked twice, show all posts
        posts.forEach(function(post) {
            post.style.display = 'block';
        });
        activeTag = null; // Reset active tag
        button.classList.remove('active'); // Remove 'active' class from the button
    } else {
        // Filter posts by the selected tag
        posts.forEach(function(post) {
            var tags = post.getAttribute('data-tags').split(' ');
            if (tags.includes(tag)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
        activeTag = tag; // Set active tag

        // Remove 'active' class from all buttons except the clicked one
        var buttons = document.querySelectorAll('.filters button');
        buttons.forEach(function(btn) {
            if (btn !== button) {
                btn.classList.remove('active');
            }
        });

        // Add 'active' class to the clicked button
        button.classList.add('active');
    }
}

document.getElementById("copyLink").addEventListener("click", function() {
    var textToCopy = this.getAttribute("text");
    copyToClipboard(textToCopy);
    showCopiedMessage();
});

function copyToClipboard(text) {
    var input = document.createElement('textarea');
    input.innerHTML = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
}

function showCopiedMessage() {
    var codeSpan = document.getElementById("codeSnippet");
    var originalText = codeSpan.innerHTML;
    var spanWrapper = document.createElement("span");
    spanWrapper.style.fontSize = "14px";
    spanWrapper.style.display = "block";
    spanWrapper.style.margin = "0 auto";
    spanWrapper.style.textAlign = "center";
    spanWrapper.style.boxSizing = "border-box";
    spanWrapper.innerText = "The Code Was Copied";
    spanWrapper.style.opacity = "0";
    
    codeSpan.innerHTML = "";
    codeSpan.appendChild(spanWrapper);

    void spanWrapper.offsetWidth;
    
    spanWrapper.style.transition = "opacity 1s";
    spanWrapper.style.opacity = "1";

    setTimeout(function() {
        spanWrapper.style.opacity = "0";
        setTimeout(function() {
            codeSpan.innerHTML = originalText;
        }, 500);
    }, 2000);
}