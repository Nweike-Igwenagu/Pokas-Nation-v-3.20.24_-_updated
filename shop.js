const navLinks = document.querySelectorAll('.navLinkso');
const pathName = window.location.pathname;

navLinks.forEach(navLinks =>{
    if (navLinks.href.includes(pathName)) {
    navLinks.classList.add('active')
    }
})

document.addEventListener('scroll' , () => {
    const navBar = document.querySelector('nav');
    if (window.scrollY > 0) {
        navBar.classList.add('scrolled');
    }else{
        navBar.classList.remove('scrolled');
    }
})

let backToTopButton = document.querySelector('.bttbContainer');
    backToTopButton.style.display = "none"
    window.addEventListener("scroll" , () => {
        if (window.scrollY > 5) {
            backToTopButton.style.display = "block";
        } else{
            backToTopButton.style.display = "none";
        }
    })

getFromJson = async () =>  {
    const response = await fetch("products.json")
    const data = await response.json()
    displayData(data)
    console.log(data)
}


let searchIcon = document.querySelector('.searchButton')
let navBar =  document.getElementById('navigationBar')
let searchInput = document.querySelector('.searchInput')
let closeIcon = document.querySelector('#closeIcon')


    searchIcon.addEventListener("click", () => {
            navBar.style.display = "none"
            searchInput.style.display = "block"
        })
        closeIcon.onclick = ()=>{
            navBar.style.display = "flex";
            searchInput.style.display = "none"
        }

        let menuIcon = document.querySelector('#menuIcon')
        let mobileNav = document.querySelector('.mobileNav')
        let mobileNavCloseBtn = document.querySelector('#mobileNavCloseBtn')
        
            menuIcon.addEventListener('click',()=>{
                mobileNav.style.display = "flex"
            })
            mobileNavCloseBtn.addEventListener('click',()=>{
                mobileNav.style.display = "none"
            })
            
        
let shopProductHTML = "";
const displayData = (data) => {
    data.forEach((dataItem) => {
        shopProductHTML += `<div class="shopProductsIndividualContainer" id='${dataItem.id}'>
                                <div><img src="${dataItem.image}" alt="" class="shopImage" ></div>
                                <div class="spProductDetailsCont">
                                    <p class="spProductName">${dataItem.productName}</p>    
                                    <p class="spPrice">₦ ${(dataItem.price/100).toFixed(2)}</p>
                                    <span class="spDescription">${dataItem.description}</span>
                                </div>
                            </div>`
    });
    document.querySelector(".shopProductsContainer").innerHTML = shopProductHTML;
}

getFromJson()



