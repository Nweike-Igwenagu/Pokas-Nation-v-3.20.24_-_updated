let allBtn = document.querySelector('#all');
let teesBtn = document.querySelector('#tees');
let hoodiesBtn = document.querySelector('#hoodies');
let pantsBtn = document.querySelector('#pants');
let shortsBtn = document.querySelector('#shorts');
let hatsBtn = document.querySelector('#hats');



getFromJson = async () =>  {
    const response = await fetch('products.json')
    const data = await response.json()

    window.onload = displayAll(data);
    allBtn.classList.add("selected")

    allBtn.addEventListener('click',() => {
        displayAll(data)
    })
    teesBtn.addEventListener('click',() => {
        displayTees(data)
    })
    hoodiesBtn.addEventListener('click',() => {
        displayHoodies(data)
    })
    pantsBtn.addEventListener('click',() => {
        displayPants(data)
    })
    shortsBtn.addEventListener('click',() => {
        displayShorts(data)
    })
    hatsBtn.addEventListener('click',() => {
        displayHats(data)
    })

    alertId(data)

    console.log(data)
}

getFromJson()

function showSelected(color) {
    const toggledButton = document.querySelector(color)
    const select = document.querySelector(".selected")
    if(select) {
        select.classList.remove("selected")
    }
    if (!toggledButton.classList.contains('selected')){
        toggledButton.classList.add('selected')
    } else {
        toggledButton.classList.remove('selected')
    }
}

function displayAll(data) {
    let collectionProductHTML = "";
    data.forEach((dataItem) => {
        collectionProductHTML += `<div class="collectionProductsContainer">
                                        <img src="${dataItem.image}" alt="">
                                        <p class="collectionProductsDes">${dataItem.productName}</p>
                                        <p class="collectionProductsDes">₦ ${(dataItem.price/100).toFixed(2)}</p>
                                        <p class="blur">${dataItem.description}</p>
                                    </div>`
    });
    document.querySelector(".collectionProducts").innerHTML = collectionProductHTML;
}

function displayTees(data) {
    let collectionProductHTML = "";
    data.forEach((dataItem) => {
        if (dataItem.category === "tees") {
            collectionProductHTML += `<div class="collectionProductsContainer">
            <img src="${dataItem.image}" alt="">
            <p class="collectionProductsDes">${dataItem.productName}</p>
            <p class="collectionProductsDes">₦ ${(dataItem.price/100).toFixed(2)}</p>
            <p class="blur">${dataItem.description}</p>
        </div>`

        }
    });
    document.querySelector(".collectionProducts").innerHTML = collectionProductHTML;
}

function displayHoodies(data) {
    let collectionProductHTML = "";
    data.forEach((dataItem) => {
        if (dataItem.category === "hoodies") {
            collectionProductHTML += `<div class="collectionProductsContainer">
            <img src="${dataItem.image}" alt="">
            <p class="collectionProductsDes">${dataItem.productName}</p>
            <p class="collectionProductsDes">₦ ${(dataItem.price/100).toFixed(2)}</p>
            <p class="blur">${dataItem.description}</p>
        </div>`

        }
    });
    document.querySelector(".collectionProducts").innerHTML = collectionProductHTML;
}

function displayPants(data) {
    let collectionProductHTML = "";
    data.forEach((dataItem) => {
        if (dataItem.category === "pants") {
            collectionProductHTML += `<div class="collectionProductsContainer">
            <img src="${dataItem.image}" alt="">
            <p class="collectionProductsDes">${dataItem.productName}</p>
            <p class="collectionProductsDes">₦ ${(dataItem.price/100).toFixed(2)}</p>
            <p class="blur">${dataItem.description}</p>
        </div>`

        }
    });
    document.querySelector(".collectionProducts").innerHTML = collectionProductHTML;
}

function displayShorts(data) {
    let collectionProductHTML = "";
    data.forEach((dataItem) => {
        if (dataItem.category === "shorts") {
            collectionProductHTML += `<div class="collectionProductsContainer">
            <img src="${dataItem.image}" alt="">
            <p class="collectionProductsDes">${dataItem.productName}</p>
            <p class="collectionProductsDes">₦ ${(dataItem.price/100).toFixed(2)}</p>
            <p class="blur">${dataItem.description}</p>
        </div>`
        }
    });
    document.querySelector(".collectionProducts").innerHTML = collectionProductHTML;
}

function displayHats(data) {
    let collectionProductHTML = "";
    data.forEach((dataItem) => {
        if (dataItem.category === "hats") {
            collectionProductHTML += `<div class="collectionProductsContainer">
            <img src="${dataItem.image}" alt="">
            <p class="collectionProductsDes">${dataItem.productName}</p>
            <p class="collectionProductsDes">₦ ${(dataItem.price/100).toFixed(2)}</p>
            <p class="blur">${dataItem.description}</p>
        </div>`
        }
    });
    document.querySelector(".collectionProducts").innerHTML = collectionProductHTML;
}


function alertId(data) {
    data.forEach((card) => {
        data.addEventListener('click', () => {
            console.log(card.id)
        } )
    })
}

