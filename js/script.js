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
