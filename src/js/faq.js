import Accordion from "accordion-js";


const according = document.querySelector('.faq-acc-container');
const listItemAc = document.querySelectorAll('.ac');

new Accordion(according, {
  openOnInit: [0],
  collapse: true,
  duration: 400,
  showMultiple: false,
});