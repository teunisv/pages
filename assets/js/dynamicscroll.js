function fetchMoreContent() {
  // Make an AJAX request to fetch the file list
  fetch('/pages/dynamic.json')
    .then((response) => response.json())
    .then((fileList) => {
      // Loop through the list of file names
      fileList.urls.forEach((fileName) => {
        // Make an AJAX request for each Html file
        fetch(fileName)
          .then((response) => response.text())
          .then((htmlContent) => {
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