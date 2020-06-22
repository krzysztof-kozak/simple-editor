import '../scss/main.scss';

const btnPrimary = document.querySelector('.button-primary--js');
const btnSecondary = document.querySelector('.button-secondary--js');
const txtField = document.querySelector('.text-field--js');
const ulElement = document.querySelector('.list--js');

const entry = localStorage.getItem('entry');
let result = '';

if (entry) {
  result = entry;
}
txtField.value = result;

const addToLocalStorage = () => {
  localStorage.setItem('entry', txtField.value);
};

const addToHistory = () => {
  const historyEntry = localStorage.getItem('entry');
  const liItem = document.createElement('li');
  ulElement.appendChild(liItem);
  liItem.innerHTML = historyEntry;
  liItem.style.margin = '1em 0';
};

const toggleHistory = () => {
  ulElement.classList.toggle('hidden');

  if (ulElement.classList.contains('hidden')) {
    btnSecondary.innerHTML = 'Show Entry History';
  } else {
    btnSecondary.innerHTML = 'Hide Entry History';
  }
};

btnPrimary.addEventListener('click', addToLocalStorage);
btnPrimary.addEventListener('click', addToHistory);

btnSecondary.addEventListener('click', toggleHistory);
