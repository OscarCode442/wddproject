
  document.addEventListener('DOMContentLoaded', function() {
    const lastModifiedElement = document.getElementById('last-modified');
    const lastModifiedDate = new Date(document.lastModified).toLocaleDateString('en-US');

    lastModifiedElement.textContent = 'Last modified: ' + lastModifiedDate;
  });
