import { books } from './data.js';
import { addToCart, updateCartIcon } from './cart.js';


let startIndex = 0;
const booksPerPage = 10; // Display 10 books at a time
const scrollableContainer = document.querySelector('.scrollable-container');

function displayBooks() {
  scrollableContainer.innerHTML = ""; // Clear existing content
  const endIndex = Math.min(startIndex + booksPerPage, books.length);

  for (let i = startIndex; i < endIndex; i++) {
    const book = books[i];
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const imageElement = document.createElement("img");
    imageElement.src = book.image;
    bookCard.appendChild(imageElement);

 
    const titleElement = document.createElement("h2");
    titleElement.textContent = book.title;
    titleElement.classList.add("book-title");
    bookCard.appendChild(titleElement);

    
    const authorElement = document.createElement("p");
    authorElement.textContent = `By ${book.author}`;
    bookCard.appendChild(authorElement);


    const infoElement = document.createElement("p");
    infoElement.textContent = book.info;
    bookCard.appendChild(infoElement);


    const priceElement = document.createElement("p");
    const priceInDollars = book.priceCents / 100;
    priceElement.textContent = `$${priceInDollars.toFixed(2)}`;
    bookCard.appendChild(priceElement);


    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.classList.add("add-btn");
    addToCartButton.addEventListener("click", () => {
    addToCart(book);
 
    });
    const removeButton = document.createElement("button");
    removeButton.textContent = "Delete Books";
    removeButton.classList.add("remove-btn");

   
    removeButton.addEventListener("click", () => {
    
    const cartIcon = document.querySelector('.cart-item-count');
    cartIcon.innerHTML = '0';

 
    cart = [];
    saveToStorage(); 
    });
    
    
 
    bookCard.appendChild(addToCartButton);
    bookCard.appendChild(removeButton);



    scrollableContainer.appendChild(bookCard);
  }
  

 
  document.getElementById('leftArrow').disabled = startIndex <= 0;

  document.getElementById('rightArrow').disabled = startIndex >= books.length - booksPerPage;
}

document.getElementById('leftArrow').addEventListener('click', () => {
  if (startIndex > 0) {
    startIndex--;
    displayBooks();
  }
});

document.getElementById('rightArrow').addEventListener('click', () => {
  if (startIndex + booksPerPage < books.length) {
    startIndex++;
    displayBooks();
    updateCartIcon();
  }
});


displayBooks();


