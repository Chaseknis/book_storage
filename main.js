const books = [];
const all = document.querySelector('.all');
const form = document.querySelector('#form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');

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

  if (author.value === '' || title.value === '') {
    return;
  }

  const dat = { author: author.value, title: title.value, id: Math.floor(Math.random() * 1000) };

  books.push(dat);

  localStorage.setItem('array', JSON.stringify(books));
  all.innerHTML = '';
  books.map((map) => clone(all, map));

  author.value = '';
  title.value = '';
});