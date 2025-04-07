import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.footer-form');
const modalWindow = document.querySelector('.footer-modal-window');
const closeModalBtn = document.querySelector('.footer-close');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = form.elements.email.value.trim();
  const comment = form.elements.comment.value.trim();

  const formData = { email, comment };

  try {
    const response = await fetch('', {
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
  if (e.target === modalWindow) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});