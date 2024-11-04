function showMoreInfo(sectionId) {
    const infoDiv = document.getElementById(`info-${sectionId}`);
    if (infoDiv.style.display === "none" || !infoDiv.style.display) {
        infoDiv.style.display = "block";
    } else {
        infoDiv.style.display = "none";
    }
}
