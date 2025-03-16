const links = document.querySelectorAll('.mega-submenu a');

// General hover function for changing images and text
function handleHover(linkSelector, imageId, textId, defaultImage, defaultText) {
  const imageDiv = document.getElementById(imageId);
  const textDiv = document.getElementById(textId);

  linkSelector.forEach(function(link) {
    link.addEventListener('mouseenter', function() {
      const newImage = link.getAttribute('data-image');
      const newText = link.getAttribute('data-text');
      imageDiv.src = newImage;
      textDiv.textContent = newText;
    });

    link.addEventListener('mouseleave', function() {
      imageDiv.src = defaultImage;
      textDiv.textContent = defaultText;
    });
  });
}

// Apply hover logic for different sections
handleHover(links, 'image-1', 'image-text-1', 'images/navigationImages/men-default.jpeg', 'MEN');
handleHover(links, 'image-2', 'image-text-2', 'images/navigationImages/women-default.jpeg', 'WOMEN');
handleHover(links, 'image-3', 'image-text-3', 'images/navigationImages/explore-default.jpeg', 'EXPLORE');



// General toggle function for dropdowns
function toggleDropdown(linkSelector, dropdownSelector) {
  const link = document.querySelector(linkSelector);
  const dropdown = document.querySelector(dropdownSelector);

  link.addEventListener('click', function() {
    dropdown.classList.toggle('active');
  });
}

// Mobile Menu
document.querySelector('.hamburger-menu').addEventListener('click', function() {
  document.querySelector('.mobile-main-menu').classList.toggle('active');
});

// Men, Women, and Explore dropdowns
toggleDropdown('.men-link', '.men-mega-dropdown');
toggleDropdown('.women-link', '.women-mega-dropdown');
toggleDropdown('.explore-link', '.explore-mega-dropdown');


