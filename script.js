// Function to fetch JSON data
async function fetchJSONData() {
    try {
        // Fetch the JSON content from your JSON file (e.g., data.json)
        const response = await fetch('data.json'); // Update with the correct path to your JSON file
        if (!response.ok) {
            throw new Error('Failed to fetch JSON data');
        }
        const jsonData = await response.json();

        // Render the JSON data into HTML
        const jsonContentContainer = document.getElementById('jsonContent');
        renderJSONData(jsonData, jsonContentContainer);
    } catch (error) {
        console.error(error);
    }
}

// Function to render JSON data into HTML with subsections
function renderJSONData(data, container) {
    data.sections.forEach(section => {
        const headingType = section.type;
        const content = section.content;

        const heading = document.createElement(headingType);
        heading.textContent = content;

        container.appendChild(heading);

        // Check if the section has subsections
        if (section.subsections && section.subsections.length > 0) {
            const subsectionsContainer = document.createElement('div');
            subsectionsContainer.className = 'subsection-container'; // Add a CSS class for styling

            // Recursively render subsections
            renderJSONData({ sections: section.subsections }, subsectionsContainer);

            container.appendChild(subsectionsContainer);
        }
    });
}

// Call the function to fetch and render JSON data
fetchJSONData();
