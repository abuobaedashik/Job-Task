

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-header.active');
    
    if (openItem && openItem !== header) {
      openItem.classList.remove('active');
      openItem.nextElementSibling.style.maxHeight = 0;
      openItem.querySelector('.icon').textContent = '▼'; // closed icon
    }

    header.classList.toggle('active');
    const accordionContent = header.nextElementSibling;
    const icon = header.querySelector('.icon');

    if (header.classList.contains('active')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      icon.textContent = '▲'; 
    } else {
      accordionContent.style.maxHeight = 0;
      icon.textContent = '▼'; 
    }
  });
});




