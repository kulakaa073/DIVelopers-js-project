import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.footer-form');
const modalWindow = document.querySelector('.footer-modal-window');
const closeModalBtn = document.querySelector('.footer-close');

const emailInput = form.querySelector(".footer-input-email");
const commentInput = form.querySelector(".footer-input-comment");
const successMessage = document.querySelector('.footer-succes');
const errorMessage = document.querySelector('.footer-invalid-email');


function isValidEmail(email) {
  const emailRegex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return emailRegex.test(email);
}


emailInput.addEventListener('input', () => {
  const email = emailInput.value.trim();

  if (email === '') {
    successMessage.style.display = 'none';
      errorMessage.style.display = 'none';
      emailInput.style.borderColor = 'rgba(250, 250, 250, 0.6)';
      
    return;
  }

  if (isValidEmail(email)) {
      successMessage.style.display = 'block';
      emailInput.style.borderColor = '#3cbc81';
      errorMessage.style.display = 'none';
  } else {
    successMessage.style.display = 'none';
      errorMessage.style.display = 'block';
      emailInput.style.borderColor = '#e74a3b';
  }
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const comment = commentInput.value.trim();

  if (!isValidEmail(email)) {
    successMessage.style.display = 'none';
      errorMessage.style.display = 'block';
      emailInput.style.borderColor = '#e74a3b';
    return;
  }

  successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
    emailInput.style.borderColor = 'rgba(250, 250, 250, 0.6)';

  const formData = { email, comment };

  try {
    const response = await fetch('https://portfolio-js.b.goit.study/api/requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Something went wrong');
    }

    modalWindow.classList.add('is-visible');
    document.body.classList.add('no-scroll');
    form.reset();
  } catch (error) {
    iziToast.show({
      message: 'Error',
      messageColor: '#ffffff',
      backgroundColor: '#EF4040',
      position: 'topRight',
      progressBarColor: '#B51B1B'
    });
  }
});

function closeModal() {
  modalWindow.classList.remove('is-visible');
  document.body.classList.remove('no-scroll');
}

closeModalBtn.addEventListener('click', closeModal);
modalWindow.addEventListener('click', (e) => {
  if (e.target === modalWindow) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") closeModal();
});
