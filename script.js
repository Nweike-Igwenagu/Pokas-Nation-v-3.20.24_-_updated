const navLinks = document.querySelectorAll('.navLinkso');
const pathName = window.location.pathname;

let searchField = document.querySelector('.searchField')

navLinks.forEach(navLinks =>{
    if (navLinks.href.includes(pathName)) {
    navLinks.classList.add('active')
    }
})

let searchButton = document.querySelector('.searchButton')
let navbar =  document.getElementById('navigationBar')
let searchinput = document.querySelector('.searchInput')
let closeIcon = document.querySelector('#closeIcon')


    searchButton.onclick = ()=>{
        navbar.style.display = "none";
        searchinput.style.display = "block"
    }
    closeIcon.onclick = ()=>{
        navbar.style.display = "flex";
        searchinput.style.display = "none"
        location.reload()
    }

let menuIcon = document.querySelector('#menuIcon')
let mobileNav = document.querySelector('.mobileNav')
let mobileNavCloseBtn = document.querySelector('#mobileNavCloseBtn')

    menuIcon.addEventListener('click',()=>{
        mobileNav.classList.add("mobileNavActive")
    })
    mobileNavCloseBtn.addEventListener('click',()=>{
        mobileNav.classList.remove("mobileNavActive")
    })
    

document.addEventListener('scroll' , () => {
    const navBar = document.querySelector('nav');
    if (window.scrollY > 0) {
        navBar.classList.add('scrolled');
    }else{
        navBar.classList.remove('scrolled');
    }
})

// Featured Products scroll Buttons
// let scrollParent = document.querySelector(".featuredProductsContainer")
// let scrollButton = document.querySelector('.scrollButton')

//     document.querySelector(".fpScrollButton").onclick = () => {
//         scrollParent.scrollBy(600, 0)
//     }
    
//     document.querySelector(".fpScrolllButton").onclick = () => {
//         scrollParent.scrollBy(-600, 0)
//     }

//back to top button display
    let backToTopButton = document.querySelector('.bttbContainer');
    backToTopButton.style.display = "none"
    window.addEventListener("scroll" , () => {
        if (window.scrollY > 5) {
            backToTopButton.style.display = "block";
        } else{
            backToTopButton.style.display = "none";
        }
    })




// Adding Products to the Featured Product Div
getFromJson = async () =>  {
    const response = await fetch("products.json")
    const data = await response.json()
    displayFeaturedProducts(data)
    displayMainProducts(data)
    searchField.addEventListener('input', () => {
        search(data)
    })
    console.log(data)
    let goods = data
    console.log(goods);
    pArr(data)
}
getFromJson()

let productArr = [];
function pArr(data) {
    data.forEach((dataItem) => {
        productArr.push(dataItem)
    })
}
console.log(productArr);

let featuredProductHTML = "";
const displayFeaturedProducts = (data) => {
    data.forEach((dataItem) => {
        if (dataItem.productType.includes('featured')) {
            featuredProductHTML += `<div class="featuredProductsIndividualContainer">
                                        <img src="${dataItem.image}">
                                        <p>${dataItem.productName}</p>
                                        <button class="shopNowButton" onclick='alertId()'>Shop now</button>
                                    </div>`;
    document.querySelector(".featuredProductsContainer").innerHTML = featuredProductHTML;
        }
    });
}


let mainProductHTML = "";
const displayMainProducts = (data) => {
    data.forEach((dataItem) => {
        if (dataItem.productType.includes('main')) {
            mainProductHTML += `<div class="mainProductsIndividualContainer" id='${dataItem.id}''>
                                    <img src="${dataItem.image}">
                                    <p>${dataItem.productName}</p>
                                    <p class='blur'>₦ ${( dataItem.price / 100).toFixed(2)}</p>
                                    <button class="addToCartButton">Add to Cart</button>
                                </div>`;
        document.querySelector(".allProductsContainer").innerHTML = mainProductHTML;
        }
        
    });
}



function search(data) {
    searchField.addEventListener('input', (e) => {
        let filtered = ""
        const userSearch = searchField.value.toLowerCase().trim()
        data.filter((item) => {
                if (item.productName.toLowerCase().trim().includes(userSearch)) {
                    filtered += `
                                    <img src="${item.image}">
                                    <p>${item.productName}</p>
                                    <p class='blur'>₦ ${( item.price / 100).toFixed(2)}</p>
                                    
                                `;
                document.querySelector(".homeSection").innerHTML = filtered;
                }
            })
    })
}

// document.querySelector("#search-bar").addEventListener("keyup", (e) => {
//     let filtered = "";
//     products.filter((product) => {
//         if(product.productName.toLowerCase().trim().includes(e.target.value.toLowerCase().trim())) {
//             filtered += `<div class = "product-background">
//                     <div class="product-image">
//                         <img src="${product.image}">
//                     </div>
//                     <div class="product-details">
//                         <div class = "product-name">${product.productName}</div>
//                         <div class = "product-price">
//                             $${(product.PriceInCents / 100).toFixed(2)}
//                         </div>
//                         <div>
//                             <button class="add-to-cart-button">
//                                 Add to cart
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//     `;}})
//         document.querySelector(".product-grid").innerHTML = filtered;
// });



let inputField = document.querySelector('.newsletterEmail')
let subscribedText = document.querySelector('.newsletterAlert')
let subscribtn = document.querySelector('.suscribeButton')
subscribtn.onclick = () => {
    let userInput = inputField.value
    if (userInput = "") {
            subscribedText.innerHTML = "Email Validation failed"
            subscribedText.style.display = "inline"
    }else{
        subscribedText.style.display = "inline";
                inputField = ""
        setTimeout(() => {
            subscribedText.style.display = "none"
        }, 3000)
    }
}



// const cart = document.querySelector(".cart") 
// const cartBackground = document.querySelector(".shoppingCart")
// cart.addEventListener("click", () => {
//     cartBackground.style.left = "0"
//     cartBackground.style.opacity = "1"
// })





































