const cartIcon = document.querySelector(".cart-icon");
const cartClose = document.querySelector(".close-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartCounter = document.querySelector(".cart-counter");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const cartItems = document.querySelector(".cart-counter");

let cart = [];
let buttonsDOM = [];
  getbuttons = (incart) => {
    const buttons = [...document.querySelectorAll(".buy-btn")];
    console.log((buttons));
    buttonsDOM = buttons;
    buttons.forEach((button) => {
      let id = button.dataset.id;
      let inCart = incart.find((item) => item.id == id);
      if (inCart) {
        button.innerText = "Đã thêm vào giỏ";
        button.disabled = true;
      }
      button.addEventListener("click", (event) => {
        if(userlogin){
          event.target.innerText = "Đã thêm vào giỏ";
          event.target.disabled = true;
          let cartItem = { ...getProduct(id), amount: 1 };
          console.log(cart);
          incart.push(cartItem);
          // [...cart,cartItem]
          console.log(cart);
          saveCart(cart); // save vào local
          setCartValue(cart);
          addCartItem(cartItem);
        }
        else
          alert('Vui lòng đăng nhập để mua hàng')
      });
    });
  };

getProduct = (id) => {
  let products=[]

  if(id>=500)
  {products = JSON.parse(window.localStorage.getItem("product")).vpp;}
  else{products = JSON.parse(window.localStorage.getItem("product")).milk;}

  return products.find((ele) => {
    return ele.id == id;
  });
};
saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
setCartValue = (cart) => {
  let tempTotal = 0;
  let itemsTotal = 0;
  cart.map((item) => {
    tempTotal += item.price * item.amount;
    itemsTotal += item.amount;
  });
  if(tempTotal<1000)
  {cartTotal.innerHTML = parseFloat(tempTotal) + '000đ';}
  else{
    
    cartTotal.innerHTML = parseFloat(tempTotal) + '000đ'
  }
  if(userlogin){
    cartItems.innerHTML = itemsTotal;
    console.log(cartTotal, cartItems);
  } else cartItems.innerHTML = '0'
};
addCartItem = (item) => {
  const div = document.createElement("div");
  div.classList.add("cart-item");
  div.innerHTML=`<img src="`+item.image+`" alt="">
            <div>
              <h4>`+item.title+`</h4>
              <h5>`+item.price+`000đ</h5>
              <span class="remove-item" data-id="`+item.id +`"><i class="fa-solid fa-trash-can"></i> Xoá</span>
            </div>
            <div>
              <i class="fas fa-chevron-up" data-id="`+item.id +`"></i>
              <p class="item-amount">`+item.amount+`</p>
              <i class="fas fa-chevron-down" data-id="`+item.id +`"></i>
          </div>`
  cartContent.appendChild(div);
  console.log(cartContent);
};
showCart = () => {
  cartOverlay.classList.add("transparentBcg");
  cartDOM.classList.add("showCart");
};
hideCart = () => {
  cartOverlay.classList.remove("transparentBcg");
  cartDOM.classList.remove("showCart");
};
getCart = () => {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
};
populate = (cart) => {
  cart.forEach((item) => addCartItem(item));
};
setupAPP = (cart) => {
  cart.splice(0, cart.length);
  cart.push(...getCart());
  setCartValue(cart);
  populate(cart);
  cartIcon.addEventListener("click", function () {
    if (userlogin)
      showCart();
    else
      alert("Đăng nhập để xem giỏ hàng!");
  });
  cartClose.addEventListener("click", function () {
    hideCart();
  });
  return cart;
};

getSingleButton = (id) => {
  return buttonsDOM.find((button) => button.dataset.id == id);
};

removeItem = (id) => {
  cart.splice(0, cart.length);
  setCartValue(cart);
  saveCart(cart);
  let button = getSingleButton(id);
  button.disabled = false;
  button.innerHTML = `<i class="fas fa-cart-shopping" ></i>
        Thêm vào giỏ hàng`;
};
cartLogic = (cart) => {
  cartContent.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-item")) {
      let removeItem = event.target;
      let id = removeItem.dataset.id;
      cartContent.removeChild(removeItem.parentElement.parentElement);
      for (let i = cart.length - 1; i >= 0; --i)
        if (cart[i].id == id) cart.splice(i, 1);

      setCartValue(cart);
      saveCart(cart);
      let button = getSingleButton(id);
      button.disabled = false;
      button.innerHTML = `<i class="fas fa-cart-shopping" ></i>
                Thêm vào giỏ hàng`;
    } else if (event.target.classList.contains("fa-chevron-up")) {
      let addAmount = event.target;
      let id = addAmount.dataset.id;
      let tempItem = cart.find((item) => item.id == id);
      tempItem.amount = tempItem.amount + 1;
      saveCart(cart);
      setCartValue(cart);
      addAmount.nextElementSibling.innerText = tempItem.amount;
    } else if (event.target.classList.contains("fa-chevron-down")) {
      let lowerAmount = event.target;
      let id = lowerAmount.dataset.id;
      let tempItem = cart.find((item) => item.id == id);
      tempItem.amount = tempItem.amount - 1;
      if (tempItem.amount > 0) {
        saveCart(cart);
        setCartValue(cart);
        lowerAmount.previousElementSibling.innerText = tempItem.amount;
        console.log(tempItem.amount);
      } else {
        let removeItem = event.target;
        let id = removeItem.dataset.id;
        cartContent.removeChild(removeItem.parentElement.parentElement);
        for (let i = cart.length - 1; i >= 0; --i)
          if (cart[i].id == id) cart.splice(i, 1);
        console.log(cart);
        setCartValue(cart);
        saveCart(cart);
        let button = getSingleButton(id);
        button.disabled = false;
        button.innerHTML = `<i class="fas fa-cart-shopping" ></i>
                Thêm vào giỏ hàng`;
      }
    }
  });
};