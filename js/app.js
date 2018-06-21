document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-item-form');

  const handleFormSubmit = function (event) {
    event.preventDefault();

    const form = event.target;

    const title = form.title.value;
    const author = form.author.value;
    const category = form.category.value;
    createBook(title, author, category);

    }

    const createBook = function(bookTitle, bookAuthor, bookCategory) {
      const book = document.createElement();
      const container = document.querySelector('#reading-list')
      container.appendChild(book);
  }


  form.addEventListener('submit', handleFormSubmit);



})
