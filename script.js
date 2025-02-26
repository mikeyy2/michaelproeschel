function togglePDF() {
    const iframe = document.getElementById("pdfViewer");
    // Toggle visibility of the iframe
    if (iframe.style.display === "none" || iframe.style.display === "") {
        iframe.style.display = "block";  // Show the iframe
    } else {
        iframe.style.display = "none";  // Hide the iframe
    }
 }