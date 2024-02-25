const animatedElements = document.querySelectorAll('footer');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade'); // Start animation
    } else {
      entry.target.classList.remove('fade'); // Stop animation
    }
  });
});

animatedElements.forEach(element => observer.observe(element));