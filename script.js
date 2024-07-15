document.addEventListener("DOMContentLoaded", () => {
  const boxDescriptions = document.querySelectorAll(".BoxDescription");
  const mainImage = document.getElementById("mainImage");

  function handleBoxClick(box) {
    boxDescriptions.forEach((b) => b.classList.remove("active"));

    box.classList.add("active");

    const newImageSrc = box.getAttribute("data-image");
    mainImage.setAttribute("src", newImageSrc);
  }

  boxDescriptions.forEach((box) => {
    box.addEventListener("click", () => handleBoxClick(box));
  });

  const defaultBox = boxDescriptions[1];
  handleBoxClick(defaultBox);
});


document.addEventListener("DOMContentLoaded", function() {
    const sliderButtons = document.querySelectorAll('.slideImages');
    const imagesWithSlider = document.getElementById('imagesWithSlider');
    const imageWidth = 300; 
    const imagesToShow = 3; 

    sliderButtons.forEach((button, index) => {
        button.setAttribute('data-index', index);
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            const marginLeft = -index * imagesToShow * imageWidth + 1300;
            imagesWithSlider.style.marginLeft = `${marginLeft}px`;
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const showContactFormButton = document.getElementById('showContactForm');
    const contactUsForm = document.getElementById('ContactUsFrom');

    showContactFormButton.addEventListener('click', function() {
        contactUsForm.style.display = 'flex';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const close = document.getElementById('CloseForm');
    const contactUsForm = document.getElementById('ContactUsFrom');

    close.addEventListener('click', function() {
        contactUsForm.style.display = 'none';
    });
});