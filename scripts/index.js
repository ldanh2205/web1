const milks =JSON.parse(window.localStorage.product).milk;
const vips =JSON.parse(window.localStorage.product).vip;
let bestsell = milks.filter(ele=>{return ele.type.includes("Best seller")})
renderItem=(products)=>{
    let output = "";
    for(i=0; i<8; i++){
    output += `
      <div class="item">
         <a href="chi-tiet.html#`+products[i].id+`" class="item-img"><img src="`+products[i].image+`"/></a>
         <p class="item-name">`+products[i].title+`</p> 
         <p class="milk-origin">`+products[i].origin+`</p>             
         <p class="item-price">`+products[i].price+'000đ'+`</p>
         <button  class="buy-btn" data-id="`+products[i].id+`" >
          <i class="fas fa-shopping-cart" ></i>
          Thêm vào giỏ hàng
          </button>
      </div>
      `;
}
    return output
}
document.querySelector(".bestseller").innerHTML=renderItem(bestsell)
document.querySelector(".suamoi").innerHTML = renderItem(milks)
document.querySelector(".vip").innerHTML=renderItem(vips)
// ====================================================searchbar==============
let sp=milks                           
let box = document.getElementsByClassName('box')[0]
let search =document.getElementById('search_bar')
window.addEventListener('load', ()=>{
    sp.forEach(ele =>{
        const {id, image, title, price} = ele
        let card = document.createElement('a')
        card.innerHTML=`<img src="${image}">
                         <div class="content1">
                            <h6>${title}</h6>           
                            <p>${price}000đ</p>
                         </div>`;
        card.href = 'chi-tiet.html' + '#' + id
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


