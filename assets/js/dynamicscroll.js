function fetchMoreContent() {
  // Make an AJAX request to fetch the file list from the GitHub Pages API
  fetch('https://api.github.com/repos/teunisv/pages/_dynamic')
    .then((response) => response.json())
    .then((fileList) => {
      // Filter out non-Markdown files from the file list
      const markdownFiles = fileList.filter((file) => file.name.endsWith('.md'));

      // Loop through the list of Markdown files
      markdownFiles.forEach((file) => {
        // Make an AJAX request for each Markdown file
        fetch(file.download_url)
          .then((response) => response.text())
          .then((markdownContent) => {
            // Convert the fetched markdown content into HTML
            const htmlContent = marked(markdownContent);

            // Append the HTML content to the #post-container element
            const postContainer = document.getElementById('post-container');
            postContainer.innerHTML += htmlContent;
          });
      });
    })
    .catch((error) => {
      console.error('Error fetching content:', error);
    });
}

// Attach an event listener to the scroll event
window.addEventListener('scroll', function () {
  // Check if the user has scrolled to the bottom of the page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // Call the fetchMoreContent function to load additional content
    fetchMoreContent();
  }
});