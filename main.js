let books = [];

const all = document.querySelector('.all');
const form = document.querySelector('#form');
const titl = document.querySelector('#title');
const autho = document.querySelector('#author');
const time = document.querySelector('#time');

class Ree {
  constructor(author, title, id = Math.floor(Math.random() * 1000)) {
    this.author = author;
    this.title = title;
    this.id = id;
  }

  addbook(vee) {
    this.author = autho.value;
    this.title = titl.value;
    books.push(vee);
  }

  delbook(id) {
    this.id = books.id;
    books = books.filter((book) => book.id !== id);
  }
}

function clone(main, array) {
  const text = `
    <p> "${array.title}" by ${array.author}</p>
    <button class="remove" data-id = ${array.id}>remove</button>
    `;

  const each = document.createElement('div');
  each.classList.add('each');
  each.innerHTML = text;
  main.appendChild(each);
}

function date(Taker) {
  const dee = new Date();
  let hours = dee.getHours();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours %= 12;
  const mont = ['january', 'feburary', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
  const display = `${mont[dee.getMonth()]} ${dee.getDate()}th ${dee.getFullYear()}, ${hours}:${dee.getMinutes()}${ampm}`;
  Taker.innerText = display;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (autho.value === '' || titl.value === '') {
    return;
  }

  const trr = new Ree(autho.value, titl.value);
  trr.addbook(trr);
  localStorage.setItem('array', JSON.stringify(books));
  all.innerHTML = '';
  books.map((map) => clone(all, map));

  autho.value = '';
  titl.value = '';

  // Add codes to remove from the list

  const remove = document.querySelectorAll('.remove');
  remove.forEach((re) => {
    re.addEventListener('click', () => {
      const free = new Ree();
      free.delbook(parseInt(re.dataset.id, 10));
      localStorage.setItem('array', JSON.stringify(books));
      re.parentNode.remove();
    });
  });
});

window.addEventListener('load', () => {
  date(time);
  const replay = JSON.parse(localStorage.getItem('array'));
  if (replay !== null) {
    books = replay;
    all.innerHTML = '';
    books.map((book) => clone(all, book));

    const remove = document.querySelectorAll('.remove');
    remove.forEach((re) => {
      re.addEventListener('click', () => {
        const free = new Ree();
        free.delbook(parseInt(re.dataset.id, 10));
        localStorage.setItem('array', JSON.stringify(books));
        re.parentNode.remove();
      });
    });
  }
});

const list = document.querySelector('#list');
const addnew = document.querySelector('#addnew');
const contact = document.querySelector('#contact');
const li = document.querySelector('#top');
const add = document.querySelector('#add');
const contac = document.querySelector('#contac');

function hide(owner, other, oda) {
  owner.style.display = 'block';
  other.style.display = 'none';
  oda.style.display = 'none';
}

list.addEventListener('click', () => {
  hide(li, add, contact);
});

addnew.addEventListener('click', () => {
  hide(add, li, contact);
});

contac.addEventListener('click', () => {
  hide(contact, add, li);
});
