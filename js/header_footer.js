document.addEventListener("DOMContentLoaded", function () {
    function includeHTML(file, elementId) {
        fetch(file)
            .then(response => {
                if (!response.ok) throw new Error(`Error loading ${file}: ${response.statusText}`);
                return response.text();
            })
            .then(data => {
                let element = document.getElementById(elementId);
                if (element) {
                    element.outerHTML = data;  // Completely replaces the div
                } else {
                    console.error(`Element #${elementId} not found`);
                }
            })
            .catch(error => console.error(error));
    }

    // includeHTML('header.html', 'header');
    includeHTML('footer.html', 'footer');
});