let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
      id: 1,
      name: 'PRODUCT NAME 1',
      image: '',
      price: 120000,
      category: 'category1'
    },
    {
      id: 2,
      name: 'PRODUCT NAME 2',
      image: '2.PNG',
      price: 120000,
      category: 'category2'
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: '3.PNG',
        price: 220000,
        category: 'category1'

    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: '4.PNG',
        price: 123000,
        category: 'category2'

    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: '5.PNG',
        price: 320000,
        category: 'category1'

    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: '6.PNG',
        price: 120000,
        category: 'category2'

    }
    // Add more products with categories
  ];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>
            <p>fad</p>
            <button onclick="likeadd(${key})">likess</button>

             `;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}




function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
 
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                   
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = 'Total: $'+totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

function filterImages(category) {
    let filteredProducts;
    if (category === 'all') {
      filteredProducts = products; // Show all products
    } else {
      filteredProducts = products.filter(product => product.category === category); // Filter products based on the category
    }
    renderProducts(filteredProducts); // Render the filtered products
  }
  
  
  function renderProducts(filteredProducts) {
    list.innerHTML = ''; // Clear the existing product list
    filteredProducts.forEach((value, key) => {
      let newDiv = document.createElement('div');
      newDiv.classList.add('item');
      newDiv.innerHTML = `
        <img src="image/${value.image}">
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add To Cart</button>
        <button onclick="likeadd(${key})">likess</button>
        `;
     
      list.appendChild(newDiv);
    });
  }



//   --------------------
//   LIKESS

let likesImage = document.querySelector('.likes img');
let list2 = document.querySelector('.list2');
let card2 = document.querySelector('.card2');
let closeLikes = document.querySelector('.closelikes');
let total2 = document.querySelector('.total2');
let quantity2 = document.querySelector('.quantity2');
let openlist= document.querySelector('.likes');
let listcard2 = document.querySelector('.listCard2');

// openlist.addEventListener('click', ()=>{
//     body.classList.add('active2');
// })


openlist.addEventListener('click', () => {
    body.classList.add('active2');
    card2.style.display = 'block';
    setTimeout(() => {
      card2.classList.add('active2');
    }, 0);
  });
  closeLikes.addEventListener('click', () => {
    card2.classList.remove('active2');
    body.classList.remove('active2');
    setTimeout(() => {
      card2.style.display = 'none';
    }, 500);
  });
  
let listcards2=[];
function likeadd(key){
    if(listcards2[key]==null){
        listcards2[key] = JSON.parse(JSON.stringify(products[key]));

        listcards2[key].quantity2=1;

    }
    reloadCard2();
}

function reloadCard2(){
   listcard2.innerHTML='';
   let count2=0;
    let totalPrice2=0;
    listcards2.forEach((value,key)=>{
       totalPrice2 = totalPrice2+value.price;
       count2=count2+value.quantity2;
       if(value != null){
        let newDiv1=document.createElement('li');
        newDiv1.innerHTML=`
        <div><img src="image/${value.image}"/></div>
        <div>${value.name}</div>
        <div>${value.price.toLocaleString()}</div>
        <div>
            <button onclick="changeQuantity2(${key}, ${value.quantity2 - 1})">-</button>
            <div class="count2">${value.quantity2}</div>
            <button onclick="changeQuantity2(${key}, ${value.quantity2 + 1})">+</button>
           
        </div>`;
        listcard2.appendChild(newDiv1);
       }
    })
    total2.innerHTML='Total: $'+totalPrice2.toLocaleString();
    quantity2.innerHTML=count2;
}


function changeQuantity2(key,quantity2){
    if(quantity2 == 0){
        delete listcards2[key];
    }else{
        listcards2[key].quantity2 = quantity2;
        listcards2[key].price = quantity2 * products[key].price;
    }
    reloadCard2();
}