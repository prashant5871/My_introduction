const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
  const header = accordion.querySelector('.accordion-header');
  const content = accordion.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    if (content.style.display === 'none') {
      content.style.display = 'block';
      accordion.classList.remove('accordion-expanded'); // Remove the "accordion-expanded" class
    } else {
      content.style.display = 'none';
      accordion.classList.add('accordion-expanded'); // Add the "accordion-expanded" class
    }
  });
});
