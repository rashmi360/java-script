const products = [
    {
        id: 1,
        name: "Shoes",
        price: 4000,
        category: "Fashion",
        image: "https://picsum.photos/200?random=1"
    },
    {
        id: 2,
        name: "Headphones",
        price: 3500,
        category: "Electronics",
        image: "https://picsum.photos/200?random=2"
    },
    {
        id: 3,
        name: "Laptop",
        price: 55000,
        category: "Electronics",
        image: "https://picsum.photos/200?random=3"
    },
    {
        id: 4,
        name: "Backpack",
        price: 1800,
        category: "Accessories",
        image: "https://picsum.photos/200?random=4"
    },
    {
        id: 5,
        name: "Watch",
        price: 2000,
        category: "Accessories",
        image: "https://picsum.photos/200?random=5"
    },
    {
        id: 6,
        name: "Chain",
        price: 25000,
        category: "Accessories",
        image: "https://picsum.photos/200?random=6"
    },
    {
        id: 7,
        name: "Mobile",
        price: 70000,
        category: "Electronics",
        image: "https://picsum.photos/200?random=7"
    },
    {
        id: 8,
        name: "Jacket",
        price: 10000,
        category: "Fashion",
        image: "https://picsum.photos/200?random=8"
    },
    {
        id: 9,
        name: "Shirt",
        price: 5000,
        category: "Fashion",
        image: "https://picsum.photos/200?random=9"
    },
    {
        id: 10,
        name: "Handbag",
        price: 35000,
        category: "Accessories",
        image: "https://picsum.photos/200?random=10"
    }
];



const productContainer=document.getElementById("productContainer");
const cartContainer=document.getElementById("cartContainer");
const searchInput=document.getElementById("search");
const categorySelect=document.getElementById("category");
const total =document.getElementById("total");
const clearCart=document.getElementById("clearCart");
let cart = JSON.parse(localStorage.getItem("cart"))||[];

function displayProducts(productsList) {

    productContainer.innerHTML = "";

    productsList.forEach(product => {

        productContainer.innerHTML += `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <h4>₹${product.price}</h4>
            <button onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
        `;

    });

}

function addToCart(id){

const product=products.find(item=>item.id===id);
const existingProduct=cart.find(item=>item.id===id);

if(existingProduct){
    existingProduct.quantity++;
}else{
    cart.push({
        ...product,
        quantity: 1
    });
}
localStorage.setItem("cart",JSON.stringify(cart));
renderCart()

}

searchInput.addEventListener("input",filterProducts);
categorySelect.addEventListener("change",filterProducts)

function filterProducts(){
    const searchText=searchInput.value.toLowerCase();
    const selectedCategory=categorySelect.value;
    const filtered=products.filter(product=>{
        const matchesSearch=product.name.toLowerCase().includes(searchText);
        const matchCategory=selectedCategory==="All"||product.category===selectedCategory;

        return matchesSearch && matchCategory

    });

    displayProducts(filtered);



}

displayProducts(products)
renderCart()


function renderCart(){
cartContainer.innerHTML="";
if(cart.length===0){
    cartContainer.innerHTML="<p>no items in cart</p>";
    total.textContent=0
    return;
}

let grandTotal=0;
cart.forEach(item=>{
grandTotal+=item.price*item.quantity;
cartContainer.innerHTML+=
`<div class="cart-value">
<img src="${item.image}" alt="${item.name}">
<div class="cart-info">
<h4>${item.name}</h4>
<p>${item.price}</p>
<div class="quantity">
<button onclick="decreaseQuantity(${item.id})">-</button>
<span>${item.quantity}</span>
<button onclick="increaseQuantity(${item.id})">+</button>

</div>


</div>

<button class="remove-btn" onclick="removeItem(${item.id})">
Remove
</button>
</div>
`
})

total.textContent=grandTotal;
localStorage.setItem("cart",JSON.stringify(cart));

}

function increaseQuantity(id) {

    const product = cart.find(item => item.id === id);
    if (product) {
        product.quantity++;
        renderCart();
    }
}

function decreaseQuantity(id) {

    const product = cart.find(item => item.id === id);
    if (!product) return;

    if (product.quantity > 1) {
        product.quantity--;

    }else {
        cart = cart.filter(item => item.id !== id);

    }
    renderCart();
    }

    function removeItem(id){
        cart=cart.filter(item=>item.id!==id);
        renderCart();
    }


    clearCart.addEventListener("click",()=>{
        cart=[];
        renderCart();

})


