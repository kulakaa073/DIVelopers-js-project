import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

document.addEventListener('DOMContentLoaded', function() {
  // Знаходимо всі елементи акордеону
  const accordionItems = document.querySelectorAll('.faq-acc-item');
  
  // Додаємо обробник подій для кожного заголовка акордеону
  accordionItems.forEach(item => {
    const header = item.querySelector('.faq-acc-header');
    const panel = item.querySelector('.faq-acc-panel');
    
    // За замовчуванням панель має бути прихована
    panel.style.display = 'none';
    
    // Додаємо обробник подій для кліку на заголовок
    header.addEventListener('click', function() {
      // Перевіряємо, чи елемент активний
      const isActive = item.classList.contains('active');
      
      // Закриваємо всі інші панелі (опціонально, можна закоментувати для мультивідкриття)
      accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-acc-panel').style.display = 'none';
        }
      });
      
      // Змінюємо стан поточного елемента
      if (isActive) {
        item.classList.remove('active');
        panel.style.display = 'none';
      } else {
        item.classList.add('active');
        panel.style.display = 'block';
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  // Ініціалізуємо акордеон через бібліотеку
  new Accordion('.accordion-container', {
    // Опції бібліотеки
    duration: 400, // тривалість анімації в мс
    onOpen: function(currentElement) {
      // Коли елемент відкривається
      currentElement.querySelector('.faq-acc-icon').classList.add('open');
    },
    onClose: function(currentElement) {
      // Коли елемент закривається
      currentElement.querySelector('.faq-acc-icon').classList.remove('open');
    },
    // За замовчуванням усі елементи закриті
    elementClass: 'ac',
    triggerClass: 'ac-trigger',
    panelClass: 'ac-panel',
    activeClass: 'ac-active'
  });
});