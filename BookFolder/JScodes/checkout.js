// checkout.js
import {cart} from './cart.js'
import { books } from './data.js'; // Import the 'books' array from data.js

export function generateCartHTML(cart) {
    let bookPurchaseHTML = ''; // Initialize an empty string to store the HTML for all items
  
    cart.forEach((cartItem) => {
      const bookId = cartItem.bookId;
  
      let matchingBook;
  
      books.forEach((book) => {
        if (bookId === book.id) {
          matchingBook = book;
        }
      });
  
      // Append the HTML for the current item to the "bookPurchaseHTML" variable
      bookPurchaseHTML += `
        <div class="book-card">
            <div class="book-image">
                <img class="book-img" src="${matchingBook.image}">
            </div>
            <div class="book-details">
                <p>${matchingBook.title}</p>
                <p>${matchingBook.author}</p>
                <p>${matchingBook.info}</p>
                <span>${(matchingBook.priceCents / 100).toFixed(2)}</span>
            </div>
            <div class="item-quantity">${cartItem.quantity}</div>
        </div>
      `;
    });
  
    return bookPurchaseHTML;
  }
  
































