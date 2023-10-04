
    document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const images = slider.querySelectorAll('.slider-image');
    let currentIndex = 0;

    function showImage(index) {
      for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
      }
      images[index].style.display = 'block';
      images[index].style.opacity = 1;
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    setInterval(nextImage, 3000);
  });

