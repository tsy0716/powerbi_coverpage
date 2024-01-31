import {marked} from 'marked.min.js';
// Function to render Markdown content in the right container
function renderMarkdownContent(markdown) {
    const rightContainer = document.getElementById('rightContainer');
    rightContainer.innerHTML = marked(markdown);
}

// Function to fetch and render Markdown content from a file
function fetchAndRenderMarkdownContent() {
    // Define the file path
    const filePath = 'content.md';

    // Use AJAX (XMLHttpRequest) to fetch the Markdown content
    const xhr = new XMLHttpRequest();
    xhr.open('GET', filePath, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const markdownContent = xhr.responseText;

            // Render the fetched Markdown content in the right container
            renderMarkdownContent(markdownContent);
        }
    };

    xhr.send();
}

// Call the function to fetch and render Markdown content
fetchAndRenderMarkdownContent();