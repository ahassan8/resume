export let cart = JSON.parse(localStorage.getItem('cart')); 

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




export function addToCart(book) {
    const existingBook = cart.find(item => item.id === book.id);
  
    if (existingBook) {
      
      existingBook.quantity++;
    } else {
      book.quantity = 1;
      cart.push(book);
    }
  
    
    updateCartIcon(); 
    saveToStorage();
    console.log(book);
  }
  

export  function updateCartIcon() {
    const cartIcon = document.querySelector('.cart-item-count');
  
    
    const totalQuantity = cart.reduce((total, book) => total + book.quantity, 0);
  
    cartIcon.textContent = totalQuantity.toString();
    saveToStorage();
  };