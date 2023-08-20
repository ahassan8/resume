export let cart = JSON.parse(localStorage.getItem('cart')); // Correct 'item' to 'cart' here

if (!cart) {
  cart = [
    {
      productId: '001',
      quantity: 0
    },
    {
      productId: '002',
      quantity: 0
    }
  ];
}

[

];

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}



// Function to add the selected book to the cart
export function addToCart(book) {
    const existingBook = cart.find(item => item.id === book.id);
  
    if (existingBook) {
      // If the book already exists in the cart, increase its quantity
      existingBook.quantity++;
    } else {
      // If the book doesn't exist in the cart, add it with a quantity of 1
      book.quantity = 1;
      cart.push(book);
    }
  
    
    updateCartIcon(); // Call updateCartIcon to update the cart icon
    saveToStorage();
    console.log(book);
  }
  

export  function updateCartIcon() {
    const cartIcon = document.querySelector('.cart-item-count');
  
    // Calculate the total quantity of books in the cart
    const totalQuantity = cart.reduce((total, book) => total + book.quantity, 0);
  
    cartIcon.textContent = totalQuantity.toString();
    saveToStorage();
  };