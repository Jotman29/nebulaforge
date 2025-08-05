document.addEventListener('DOMContentLoaded', function() {
  var blogList = document.getElementById('blog-list');

fetch('data/posts.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(posts) {
      posts.forEach(function(post) {
        var postElement = document.createElement('div');
        postElement.className = 'blog-post';

        var title = document.createElement('h2');
        title.textContent = post.title;

        var content = document.createElement('p');
        content.textContent = post.content;

        postElement.appendChild(title);
        postElement.appendChild(content);

        blogList.appendChild(postElement);
      });
    })
});
