function openImageInPopup(imageSrc) {
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('imageModal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Lock main page scroll
  }
  
  function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.body.style.overflow = ''; // Restore main page scroll
  }
  
  // Close modal when clicking outside the image
  window.onclick = function(event) {
    if (event.target == document.getElementById('overlay')) {
      closeModal();
    }
  }
  