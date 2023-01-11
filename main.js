let books = [];

const all = document.querySelector('.all');
const form = document.querySelector('#form');
const titl = document.querySelector('#title');
const autho = document.querySelector('#author');

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