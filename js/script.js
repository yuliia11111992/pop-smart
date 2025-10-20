function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePopup();
    }
});
