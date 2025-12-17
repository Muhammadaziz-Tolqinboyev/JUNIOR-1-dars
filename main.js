 let currentSlideIndex = 0;
 const slides = document.querySelectorAll('.slide-card');
 const progressBar = document.querySelectorAll('.progress-bar');
 const imageModal = document.getElementById('imageModal');
 const modalImg = document.getElementById('modalImg');
 const videoModal = document.getElementById('videoModal');
 const youtubeFrame = document.getElementById('youtubeFrame');
 
 function updateProgressBar() {
  progressBar.forEach(bar => {
    let width = ((currentSlideIndex + 1) / slides.length) * 100;
    bar.style.width = width + '%';
  });
}

function showImage(src) {
  modalImg.src = src;
  imageModal.style.display = "flex";
}

function showVideo(videoId) {
  youtubeFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  videoModal.style.display = "flex";
}

function closeModal() {
  imageModal.style.display = "none";
}

function closeVideoModal() {
  videoModal.style.display = "none";
  youtubeFrame.src = ""; // Stop video playback
}

function revealAnswer(element) {
  const answer = element.querySelector('.answer');
  answer.classList.remove('hidden');
  element.style.transform = "scale(1.05)";
  setTimeout(() => element.style.transform = "scale(1)", 200);
}

function changeSlide(direction) {
  slides[currentSlideIndex].classList.remove('active');
  void slides[currentSlideIndex].offsetWidth; 
  currentSlideIndex += direction;
  if (currentSlideIndex >= slides.length) currentSlideIndex = slides.length - 1;
  if (currentSlideIndex < 0) currentSlideIndex = 0;
  slides[currentSlideIndex].classList.add('active');
  updateProgressBar();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === ' ') changeSlide(1);
  if (e.key === 'ArrowLeft') changeSlide(-1);
  if (e.key === 'Escape') {
    closeModal();
    closeVideoModal();
  }
});

updateProgressBar();