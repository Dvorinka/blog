function filterPosts(tag, button) {
  var posts = document.querySelectorAll('#articleList .post');
  posts.forEach(function(post) {
      var tags = post.getAttribute('data-tags').split(' ');
      if (tags.includes(tag)) {
          post.style.display = 'block';
      } else {
          post.style.display = 'none';
      }
  });

  // Remove 'active' class from all buttons
  var buttons = document.querySelectorAll('.filters button');
  buttons.forEach(function(btn) {
      btn.classList.remove('active');
  });

  // Add 'active' class to the clicked button
  button.classList.add('active');
}
