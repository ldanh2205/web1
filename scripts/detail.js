let hash = window.location.hash
let hasg = Number(hash.slice(1,hash.length))
const moreb =JSON.parse(window.localStorage.product).milk;
let sp=JSON.parse(window.localStorage.product).milk;
getProduct = (id) => {
    let products=[]
  
    if(id>=500)
    {products = JSON.parse(window.localStorage.getItem("product")).vip;}
    else{products = JSON.parse(window.localStorage.getItem("product")).milk;}
  
    return products.find((ele) => {
      return ele.id == id;
    });
  };
 ranNum=(min, max)=>{
    return Math.floor(Math.random() * (max - min)) + min;
}
let DetailProduct = getProduct(hasg)

rendersItem=(products)=>{
    let output = ""
    let min=0
    let max=5
    for(i=0; i<8; i++){
    let num=ranNum(min,max)
    output += `
    <div class="item swiper-slide">
    <a class="item-img" href="chi-tiet.html#`+products[num].id+`" target="_blank" ><img src="`+products[num].image+`"/></a>
    <a class="item-name" href="chi-tiet.html#`+products[num].id+`" target="_blank">`+products[num].title+`</a>
    <a class="milk-origin">`+products[num].origin+`</a>
    <span class="item-price">`+products[num].price+`000đ</span>
  </div>
      `;
    min+=5;max+=5
}
    document.querySelector('.swiper-wrapper').innerHTML = output
}
rendersItem(moreb)
document.querySelector('.main-info').innerHTML=`<div class="item-img-large">
                                                <img src="`+DetailProduct.image+`">
                                                </div>
                                                <div class="item-info">
                                                <h2 class="item-name-large">`+DetailProduct.title+`</h2>
                                                <div class="origin">
                                                    <span class="by">Xuất sứ: </span>
                                                    <a href="#" class="origin-name">`+DetailProduct.origin+`</a>
                                                </div>
                                                <h3 class="price">`+DetailProduct.price+`000đ</h3>
                                                <div class="condition">
                                                    <i class="fa-solid fa-circle-check con"></i>
                                                    <p class="con">Còn hàng</p>
                                                </div>
                                                <button class="btn add-cart buy-btn" data-id="`+DetailProduct.id+`">
                                                    <i class="fa-solid fa-cart-plus"></i>
                                                    Thêm vào Giỏ hàng
                                                </button>
                                                <button class="btn wishlist">
                                                    <i class="fa-regular fa-heart"></i>
                                                    Thêm vào Ưa thích
                                                </button>
                                                </div>
                                                </section>`
document.querySelector('.overview p').innerHTML = DetailProduct.description

var itemName = document.querySelector('title')
itemName.innerHTML = DetailProduct.title
// searchbar==========================================================================
let box = document.getElementsByClassName('box')[0]
let search =document.getElementById('search_bar')
window.addEventListener('load', ()=>{
    sp.forEach(ele =>{
        const {id,image, title, price} = ele
        let card = document.createElement('a')
        card.innerHTML=`<img src="${image}">
                         <div class="content1">
                            <h6>${title}</h6>           
                            <p>${price}000đ</p>
                         </div>`;
        card.href = 'chi-tiet.html' + '#' + id
        card.target="_blank"
        box.appendChild(card);
    })
})
search.addEventListener('keyup',()=>{
    let filter= search.value.toUpperCase();
    let a = box.getElementsByTagName('a')
    for (i = 0; i < a.length; i++) {

        let b =a[i].getElementsByClassName('content1')[0]
        let c =b.getElementsByTagName('h6')[0]
        let text =c.textContent || c.innerText

        if(text.toUpperCase().indexOf(filter) > -1){
            a[i].style.display = ''
            box.style.visibility = "visible"
            box.style.opacity = 1
        }
        else{ a[i].style.display = 'none'}
        if(search.value == 0){
            box.style.visibility = "hidden"
            box.style.opacity = 0
        } 
    }
})