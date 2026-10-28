// Menu Button
function toggleMenu() {
    let menu = document.getElementById("navMenu");

    menu.classList.toggle("active");
}

// Live Time

let currentTime = document.getElementById("currentTime");

function getTime() {

    let clock = new Date();

    let H = clock.getHours();
    let M = clock.getMinutes();
    let S = clock.getSeconds();

    currentTime.innerHTML = `${H} : ${M} : ${S}`;
}

// open location popup 

function openLocationPopup() {

    document
        .getElementById("locationPopup")
        .classList.add("show");

}

// close location popup 

function closeLocationPopup() {

    document
        .getElementById("locationPopup")
        .classList.remove("show");

}

// areas 
let areas = [
    "Gulshan-e-Iqbal",
    "Gulistan-e-Johar",
    "North Nazimabad",
    "Nazimabad",
    "PECHS",
    "Clifton",
    "DHA",
    "Bahadurabad",
    "Federal B Area",
    "North Karachi",
    "Malir",
    "Korangi",
    "Landhi",
    "Saddar",
    "Tariq Road",
    "Defence View",
    "Johar Town",
    "Scheme 33",
    "Buffer Zone",
    "Surjani Town"
];

let select = document.getElementById("areaSelect");

areas.forEach(area => {

    let option =
        document.createElement("option");


    option.value = area;

    option.textContent = area;


    select.appendChild(option);

});

//  select location 

function confirmLocation() {

    let selectedArea =
        document.getElementById("areaSelect").value;


    if (selectedArea === "") {

        alert("Please select your location.");

        return;

    }


    /* Show selected area in navbar */

    document.getElementById("display").innerText =
        selectedArea;


    /* Close popup */

    closeLocationPopup();

}
// delevry buttons 
let deliveryBtn =
    document.getElementById("deliveryBtn");

let pickupBtn =
    document.getElementById("pickupBtn");


deliveryBtn.addEventListener("click", function () {

    deliveryBtn.classList.add("active");

    pickupBtn.classList.remove("active");

});


pickupBtn.addEventListener("click", function () {

    pickupBtn.classList.add("active");

    deliveryBtn.classList.remove("active");

});


//    CLOSE POPUP WHEN CLICKING OUTSIDE

document
    .getElementById("locationPopup")
    .addEventListener("click", function (event) {

        if (event.target === this) {

            closeLocationPopup();

        }

    });

// Live Date

let currentDate = document.getElementById("currentDate");

function getDate() {

    let clock = new Date();

    let day = clock.getDay();
    let Y = clock.getFullYear();
    let m = clock.getMonth();
    let D = clock.getDate();

    m++;

    switch (day) {

        case 0:
            day = "Sunday";
            break;

        case 1:
            day = "Monday";
            break;

        case 2:
            day = "Tuesday";
            break;

        case 3:
            day = "Wednesday";
            break;

        case 4:
            day = "Thursday";
            break;

        case 5:
            day = "Friday";
            break;

        case 6:
            day = "Saturday";
            break;
    }

    currentDate.innerHTML = `${day}, ${m} / ${D} / ${Y}`;
}


// Run functions

setInterval(getTime, 1000);

getTime();
getDate();

// Get Location

let locationText = document.getElementById("location");

function getLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(showPosition);

    } else {

        locationText.innerHTML = "Location not supported";
    }
}

function showPosition(position) {

    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    locationText.innerHTML =
        `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
}

getLocation();


// Cake Prices
let prices = {
    1: 2780,
    2: 3000,
    3: 2500,
    4: 3200,
    5: 2800,
    6: 3500,
    7: 2730,
    8: 3100
};


// Increase Quantity
function increase(id) {

    let qty = document.getElementById("qty" + id);
    let total = document.getElementById("total" + id);

    let number = Number(qty.innerText);

    number++;

    qty.innerText = number;

    total.innerText = prices[id] * number;
}


// Decrease Quantity
function decrease(id) {

    let qty = document.getElementById("qty" + id);
    let total = document.getElementById("total" + id);

    let number = Number(qty.innerText);

    if (number > 1) {

        number--;

        qty.innerText = number;

        total.innerText = prices[id] * number;
    }
}
// Delete / Reset
function removeItem(id) {

    let qty = document.getElementById("qty" + id);
    let total = document.getElementById("total" + id);

    qty.innerText = 1;
    total.innerText = prices[id];
}

// Add to Cart
function addCart(name, price, id) {

    let qty = document.getElementById("qty" + id).innerText;

    let total = document.getElementById("total" + id).innerText;


}

// savory
let savoryprices = {
    1: 270,
    2: 200,
    3: 250,
    4: 100,
    5: 280,
    6: 350,
    7: 270,
    8: 300
};

function increaseSavory(id) {
    let qty = document.getElementById("sqty" + id);
    let total = document.getElementById("stotal" + id);

    let number = Number(qty.innerText);

    number++;

    qty.innerText = number;
    total.innerText = savoryprices[id] * number;
}

function decreaseSavory(id) {
    let qty = document.getElementById("sqty" + id);
    let total = document.getElementById("stotal" + id);

    let number = Number(qty.innerText);

    if (number > 1) {
        number--;

        qty.innerText = number;
        total.innerText = savoryprices[id] * number;
    }
}

function removeSavoryItem(id) {
    let qty = document.getElementById("sqty" + id);
    let total = document.getElementById("stotal" + id);

    qty.innerText = 1;
    total.innerText = savoryprices[id];
}

function addSavoryCart(name, id) {
    let qty = document.getElementById("sqty" + id).innerText;
    let total = document.getElementById("stotal" + id).innerText;


}

// cupcake & brownie 
let cupprices = {
    1: 180,
    2: 200,
    3: 220,
    4: 210,
    5: 280,
    6: 200,
    7: 270,
    8: 220
};

function increasecup(id) {
    let qty = document.getElementById("bqty" + id);
    let total = document.getElementById("btotal" + id);

    let number = Number(qty.innerText);
    number++;
    qty.innerText = number;
    total.innerText = cupprices[id] * number;
}

function decreasecup(id) {
    let qty = document.getElementById("bqty" + id);
    let total = document.getElementById("btotal" + id);

    let number = Number(qty.innerText);

    if (number > 1) {
        number--;

        qty.innerText = number;
        total.innerText = cupprices[id] * number;
    }
}

function removecupItem(id) {
    let qty = document.getElementById("bqty" + id);
    let total = document.getElementById("btotal" + id);

    qty.innerText = 1;
    total.innerText = cupprices[id];
}

function addcupCart(name, id) {
    let qty = document.getElementById("bqty" + id).innerText;
    let total = document.getElementById("btotal" + id).innerText;


}

//shake
let shakeprices = {
    1: 550,
    2: 400,
    3: 500,
    4: 350

};

function increaseshake(id) {
    let qty = document.getElementById("pqty" + id);
    let total = document.getElementById("ptotal" + id);

    let number = Number(qty.innerText);

    number++;

    qty.innerText = number;
    total.innerText = shakeprices[id] * number;
}

function decreaseshake(id) {
    let qty = document.getElementById("pqty" + id);
    let total = document.getElementById("ptotal" + id);

    let number = Number(qty.innerText);

    if (number > 1) {
        number--;

        qty.innerText = number;
        total.innerText = shakeprices[id] * number;
    }
}

function removeshakeItem(id) {
    let qty = document.getElementById("pqty" + id);
    let total = document.getElementById("ptotal" + id);

    qty.innerText = 1;
    total.innerText = shakeprices[id];
}

function addshakeCart(name, id) {
    let qty = document.getElementById("pqty" + id).innerText;
    let total = document.getElementById("ptotal" + id).innerText;


}

// coffee 

let coffeeprices = {
    1: 400,
    2: 500,
    3: 450,
    4: 620,
    5: 800,
    6: 700,
    7: 730,
    8: 480

};

function increasecoffee(id) {
    let qty = document.getElementById("aqty" + id);
    let total = document.getElementById("atotal" + id);

    let number = Number(qty.innerText);

    number++;

    qty.innerText = number;
    total.innerText = coffeeprices[id] * number;
}

function decreasecoffee(id) {
    let qty = document.getElementById("aqty" + id);
    let total = document.getElementById("atotal" + id);

    let number = Number(qty.innerText);

    if (number > 1) {
        number--;

        qty.innerText = number;
        total.innerText = coffeeprices[id] * number;
    }
}

function removecoffeeItem(id) {
    let qty = document.getElementById("aqty" + id);
    let total = document.getElementById("atotal" + id);

    qty.innerText = 1;
    total.innerText = coffeeprices[id];
}

function addcoffeeCart(name, id) {
    let qty = document.getElementById("aqty" + id).innerText;
    let total = document.getElementById("atotal" + id).innerText;


}

// customized cake 
let customprices = {
    1: 11550,
    2: 22400,
    3: 11500,
    4: 12350


};

function increasecustom(id) {
    let qty = document.getElementById("fqty" + id);
    let total = document.getElementById("ftotal" + id);

    let number = Number(qty.innerText);

    number++;

    qty.innerText = number;
    total.innerText = customprices[id] * number;
}

function decreasecustom(id) {
    let qty = document.getElementById("fqty" + id);
    let total = document.getElementById("ftotal" + id);

    let number = Number(qty.innerText);

    if (number > 1) {
        number--;

        qty.innerText = number;
        total.innerText = customprices[id] * number;
    }
}

function removecustomItem(id) {
    let qty = document.getElementById("fqty" + id);
    let total = document.getElementById("ftotal" + id);

    qty.innerText = 1;
    total.innerText = customprices[id];
}

function addcustomeCart(name, id) {
    let qty = document.getElementById("fqty" + id).innerText;
    let total = document.getElementById("ftotal" + id).innerText;
}
// merhandise 

const modalData = [
    { id: "#mug", price: 600, count: 1 },
    { id: "#tumbler", price: 1500, count: 1 },
    { id: "#spoons", price: 900, count: 1 },
    { id: "#cakebox", price: 300, count: 1 },
    { id: "#cap", price: 300, count: 1 },
    { id: "#bag", price: 900, count: 1 }
];

let plus = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(".minus");
let qty = document.querySelectorAll(".qty");
let total = document.querySelectorAll(".total");


// starting quantity and total
modalData.forEach((product, index) => {

    qty[index].innerText = product.count;
    total[index].innerText = product.price;

});


// PLUS
plus.forEach((button, index) => {

    button.addEventListener("click", () => {

        modalData[index].count++;

        qty[index].innerText = modalData[index].count;

        totalPrice(index);

    });

});


// MINUS
minus.forEach((button, index) => {

    button.addEventListener("click", () => {

        if (modalData[index].count > 1) {

            modalData[index].count--;

            qty[index].innerText = modalData[index].count;

            totalPrice(index);

        }

    });

});

// TOTAL
function totalPrice(index) {

    total[index].innerText =
        modalData[index].price * modalData[index].count;

}

// feedback and testimonal 
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("feedbackForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("Email");
    const feedbackInput = document.getElementById("feedback");

    const starsContainer = document.getElementById("starsContainer");
    const stars = starsContainer.getElementsByTagName("i");

    const carouselContainer = document.getElementById("testimonialCarousel");
    const carouselInner = document.getElementById("carouselInner");
    const indicators = document.getElementById("carouselIndicators");

    let selectedRating = 0;

    loadReviewsFromStorage();


    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.style.cursor = "pointer";

        star.addEventListener("click", function () {
            selectedRating = Number(this.getAttribute("data-value"));
            updateStarsDisplay(selectedRating);
        });


        star.addEventListener("mouseenter", function () {
            updateStarsDisplay(Number(this.getAttribute("data-value")));
        });
    }


    starsContainer.addEventListener("mouseleave", function () {
        updateStarsDisplay(selectedRating);
    });

    function updateStarsDisplay(rating) {
        for (let i = 0; i < stars.length; i++) {
            const star = stars[i];
            const starValue = Number(star.getAttribute("data-value"));

            if (starValue <= rating) {
                star.className = "fa-solid fa-star";
            } else {
                star.className = "fa-regular fa-star";
            }
        }
    }


    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim().toLowerCase();
        const feedback = feedbackInput.value.trim();


        if (name === "" || email === "" || feedback === "") {
            showAlert("Missing Information", "Please fill in all fields before submitting.", "warning");
            return;
        }

        if (selectedRating === 0) {
            showAlert("Rating Required", "Please select a star rating using the stars.", "warning");
            return;
        }


        const newReview = {
            name: name,
            feedback: feedback,
            rating: selectedRating
        };


        saveReviewToStorage(newReview);


        loadReviewsFromStorage();


        form.reset();
        selectedRating = 0;
        updateStarsDisplay(0);

        showAlert("Thank You!", "Your feedback has been submitted successfully.", "success");
    });


    function saveReviewToStorage(reviewData) {
        let existingReviews = JSON.parse(localStorage.getItem("savedReviews")) || [];
        existingReviews.push(reviewData);
        localStorage.setItem("savedReviews", JSON.stringify(existingReviews));
    }

    function loadReviewsFromStorage() {
        let existingReviews = JSON.parse(localStorage.getItem("savedReviews"));


        if (existingReviews === null || existingReviews.length === 0) {
            existingReviews = [
                {
                    name: "Sarah Khan",
                    feedback: "The chocolate cake was absolutely delicious! It was fresh, soft and beautifully decorated.",
                    rating: 5
                },
                {
                    name: "Ayesha Ahmed",
                    feedback: "Bakerz Bite has the best pastries. Everything tasted fresh and amazing.",
                    rating: 5
                },
                {
                    name: "Hassan Ali",
                    feedback: "I ordered a birthday cake and everyone loved it. Beautiful presentation and great taste!",
                    rating: 4
                }
            ];
            localStorage.setItem("savedReviews", JSON.stringify(existingReviews));
        }


        carouselInner.innerHTML = "";
        indicators.innerHTML = "";


        for (let i = 0; i < existingReviews.length; i++) {
            const isFirstItem = (i === 0);
            appendReviewToCarousel(existingReviews[i], isFirstItem, i);
        }


        if (typeof bootstrap !== "undefined" && existingReviews.length > 0) {
            const oldInstance = bootstrap.Carousel.getInstance(carouselContainer);
            if (oldInstance) {
                oldInstance.dispose();
            }
            new bootstrap.Carousel(carouselContainer);
        }
    }

    function appendReviewToCarousel(data, shouldBeActive, index) {
        const starHTML = "★".repeat(data.rating) + "☆".repeat(5 - data.rating);


        const slideDiv = document.createElement("div");
        slideDiv.className = "carousel-item";
        if (shouldBeActive) {
            slideDiv.classList.add("active");
        }

        slideDiv.innerHTML = `
            <div class="testimonial-card">
                <div class="stars">${starHTML}</div>
                <p>"${data.feedback}"</p>
                <h5>${data.name}</h5>
                <span>Happy Customer</span>
            </div>
        `;
        carouselInner.appendChild(slideDiv);

        const indicatorBtn = document.createElement("button");
        indicatorBtn.type = "button";
        indicatorBtn.setAttribute("data-bs-target", "#testimonialCarousel");
        indicatorBtn.setAttribute("data-bs-slide-to", index);
        indicatorBtn.setAttribute("aria-label", "Testimonial " + (index + 1));

        if (shouldBeActive) {
            indicatorBtn.className = "active";
            indicatorBtn.setAttribute("aria-current", "true");
        }

        indicators.appendChild(indicatorBtn);
    }

    function showAlert(titleText, bodyText, iconType) {
        if (typeof Swal !== "undefined") {
            Swal.fire({
                title: titleText,
                text: bodyText,
                icon: iconType,
                background: "#120b18",
                color: '#ffffff',
                confirmButtonText: 'OK',
                confirmButtonColor: '#dea347'
            });
        } else {
            alert(titleText + "\n\n" + bodyText);
        }
    }

});

// categry search scroll 

document.addEventListener("DOMContentLoaded", function () {

    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");

    if (!searchForm || !searchInput || !categoryFilter) {
        return;
    }

    // Category value to HTML section ID mapping
    const categoryToSectionId = {
        "cakes": "cake",
        "savories": "savory",
        "cupcakes": "brownies",
        "shakes": "shake",
        "coffee": "coffee",
        "custom cakes": "customized",
        "merchandise": "merchandise"
    };

    // Helper function to highlight matching element briefly
    function highlightCard(card) {
        card.style.transition = "transform 0.4s ease, box-shadow 0.4s ease";
        card.style.transform = "scale(1.05)";
        card.style.boxShadow = "0 0 20px #dea347";

        setTimeout(function () {
            card.style.transform = "";
            card.style.boxShadow = "";
        }, 2000);
    }

    // Filter & Scroll Logic
    function handleNavigationAndHighlight() {
        const selectedCategory = categoryFilter.value.toLowerCase();
        const searchText = searchInput.value.trim().toLowerCase();

        // 1. If Category selected, scroll directly to that section ID
        if (selectedCategory !== "all" && categoryToSectionId[selectedCategory]) {
            const sectionId = categoryToSectionId[selectedCategory];
            const targetSection = document.getElementById(sectionId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
                return;
            }
        }

        // 2. If Search text is entered, find the first matching card and scroll to it
        if (searchText !== "") {
            let allCards = document.querySelectorAll(".bakery-card, .merchandise .box");
            let foundMatch = null;

            allCards.forEach(function (card) {
                if (foundMatch) return;
                const name = card.innerText.toLowerCase();
                if (name.includes(searchText)) {
                    foundMatch = card;
                }
            });

            if (foundMatch) {
                foundMatch.scrollIntoView({ behavior: "smooth", block: "center" });
                highlightCard(foundMatch);
            }
        }
    }

    // Event Listeners
    categoryFilter.addEventListener("change", handleNavigationAndHighlight);

    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        handleNavigationAndHighlight();
    });
});
// side bar 
let bakerzCartItemsArray = [];
let bakerzTotalBadgeCount = 0;

/* Reset modal quantity after closing */
function resetModalState(modalElement) {
    if (!modalElement) return;

    const modalId = "#" + modalElement.id;

    // Check if this is a merchandise modal
    const merchandiseIndex = modalData.findIndex(function (product) {
        return product.id === modalId;
    });

    if (merchandiseIndex !== -1) {
        const product = modalData[merchandiseIndex];

        product.count = 1;

        const quantityElement = modalElement.querySelector(".qty");
        const totalElement = modalElement.querySelector(".total");

        if (quantityElement) {
            quantityElement.innerText = "1";
        }

        if (totalElement) {
            totalElement.innerText = product.price;
        }

        return;
    }

    // Reset quantity for other product modals
    const quantities = modalElement.querySelectorAll(
        ".qty, [id^='qty'], [id^='sqty'], [id^='bqty'], " +
        "[id^='pqty'], [id^='aqty'], [id^='fqty']"
    );

    quantities.forEach(function (element) {
        element.innerText = "1";
    });
}

document.addEventListener("DOMContentLoaded", function () {

    const cartTrigger = document.querySelector(".cart");
    const cartSidebar = document.getElementById("bakerzCartSidebar");
    const cartOverlay = document.getElementById("bakerzCartOverlay");
    const cartClose = document.getElementById("bakerzCartClose");

    // Open sidebar
    if (cartTrigger && cartSidebar && cartOverlay) {
        cartTrigger.addEventListener("click", function () {
            cartSidebar.classList.add("bakerz-open");
            cartOverlay.classList.add("bakerz-open");
            renderCartSidebar();
        });
    }

    // Close sidebar
    function closeCartSidebar() {
        if (cartSidebar) {
            cartSidebar.classList.remove("bakerz-open");
        }

        if (cartOverlay) {
            cartOverlay.classList.remove("bakerz-open");
        }
    }

    if (cartClose) {
        cartClose.addEventListener("click", closeCartSidebar);
    }

    if (cartOverlay) {
        cartOverlay.addEventListener("click", closeCartSidebar);
    }

    // Reset quantities when a Bootstrap modal closes
    document.querySelectorAll(".modal").forEach(function (modal) {
        modal.addEventListener("hidden.bs.modal", function () {
            resetModalState(this);
        });
    });

    // Add products to cart
    document.addEventListener("click", function (event) {

        const cartButton = event.target.closest(
            ".add-to-cart-btn, .modal-cart"
        );

        if (!cartButton) return;

        const parentModal = cartButton.closest(".modal");

        if (!parentModal) return;

        let itemName = "";
        let itemPrice = 0;
        let itemQty = 1;

        // Check merchandise first
        const modalId = "#" + parentModal.id;

        const merchandiseProduct = modalData.find(function (product) {
            return product.id === modalId;
        });

        if (merchandiseProduct) {

            // Get correct merchandise price
            itemPrice = Number(merchandiseProduct.price);

            // Get selected merchandise quantity
            itemQty = Number(merchandiseProduct.count) || 1;

            // Get product name
            const nameElement = parentModal.querySelector(
                "h1, h2, h3, .main-heading, .modal-title"
            );

            if (nameElement) {
                itemName = nameElement.innerText.trim();
            }

            // Fallback names
            const merchandiseNames = {
                mug: "Mug",
                tumbler: "Tumbler",
                spoons: "Spoons",
                cakebox: "Cake Box",
                cap: "Cap",
                bag: "Bag"
            };

            if (!itemName) {
                itemName = merchandiseNames[parentModal.id] || "Merchandise";
            }

        } else {

            // Get other product names
            const nameElement = parentModal.querySelector(
                "h1, h2, h3, .main-heading, .modal-title"
            );

            if (nameElement) {
                itemName = nameElement.innerText.trim();
            }

            // Get quantity
            const quantityElement = parentModal.querySelector(
                ".qty, [id^='qty'], [id^='sqty'], [id^='bqty'], " +
                "[id^='pqty'], [id^='aqty'], [id^='fqty']"
            );

            if (quantityElement) {
                itemQty = Number(quantityElement.innerText) || 1;
            }

            // Get displayed total price
            const totalElement = parentModal.querySelector(
                ".total, [id^='total'], [id^='stotal'], [id^='btotal'], " +
                "[id^='ptotal'], [id^='atotal'], [id^='ftotal']"
            );

            if (totalElement) {
                const displayedTotal = Number(
                    totalElement.innerText.replace(/[^0-9.]/g, "")
                ) || 0;

                if (displayedTotal > 0 && itemQty > 0) {
                    itemPrice = displayedTotal / itemQty;
                }
            }

            // Fallback to unit price
            if (itemPrice <= 0) {
                const priceElement = parentModal.querySelector(
                    ".modalprice, .price"
                );

                if (priceElement) {
                    itemPrice = Number(
                        priceElement.innerText.replace(/[^0-9.]/g, "")
                    ) || 0;
                }
            }
        }

        // Do not add invalid products
        if (!itemName || itemPrice <= 0 || itemQty <= 0) {
            console.warn("Check product name, price, and quantity.");
            return;
        }

        // Check if the same product is already in the cart
        const existingIndex = bakerzCartItemsArray.findIndex(
            function (item) {
                return item.name === itemName &&
                    item.price === itemPrice;
            }
        );

        if (existingIndex !== -1) {

            bakerzCartItemsArray[existingIndex].qty += itemQty;

        } else {

            bakerzCartItemsArray.push({
                name: itemName,
                price: itemPrice,
                qty: itemQty
            });

        }

        // Update navbar cart count
        bakerzTotalBadgeCount += itemQty;

        const badgeElement = document.getElementById("cart-count");

        if (badgeElement) {
            badgeElement.innerText = bakerzTotalBadgeCount;
        }

        // Update sidebar
        renderCartSidebar();

        // Close modal after reading quantity and price
        if (window.bootstrap) {
            const modalInstance = bootstrap.Modal.getInstance(parentModal);

            if (modalInstance) {
                modalInstance.hide();
            }
        }

        // Success message
        if (typeof Swal !== "undefined") {
            Swal.fire({
                icon: "success",
                title: "Added to Cart!",
                text: itemName + " (Qty: " + itemQty + ") added successfully.",
                background: "#120b18",
                color: "#ffffff",
                confirmButtonColor: "#3b123c",
                timer: 1600,
                showConfirmButton: false
            });
        }

    });

});
// display cart items 
function renderCartSidebar() {

    const bodyContainer = document.getElementById("bakerzCartBody");
    const totalAmountElement = document.getElementById(
        "bakerzCartTotalAmount"
    );

    if (!bodyContainer || !totalAmountElement) return;

    if (bakerzCartItemsArray.length === 0) {
        bodyContainer.innerHTML =
            '<p class="bakerz-empty-msg">Your cart is currently empty.</p>';

        totalAmountElement.innerText = "Rs. 0";
        return;
    }

    let innerHtml = "";
    let grandTotal = 0;

    bakerzCartItemsArray.forEach(function (item, index) {

        const lineTotal = item.price * item.qty;

        grandTotal += lineTotal;

        innerHtml += `
            <div class="bakerz-cart-item">
                <div class="bakerz-item-info">
                    <h4>${item.name}</h4>
                    <p>
                        Qty: ${item.qty} × Rs. ${item.price} =
                        <strong>Rs. ${lineTotal}</strong>
                    </p>
                </div>

                <button
                    type="button"
                    class="bakerz-item-remove"
                    onclick="removeCartItem(${index})"
                    aria-label="Remove item">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
    });

    bodyContainer.innerHTML = innerHtml;
    totalAmountElement.innerText = "Rs. " + grandTotal;
}
// remove item 

function removeCartItem(index) {

    if (index < 0 || index >= bakerzCartItemsArray.length) {
        return;
    }

    const removedQuantity = bakerzCartItemsArray[index].qty;

    bakerzCartItemsArray.splice(index, 1);

    bakerzTotalBadgeCount -= removedQuantity;

    if (bakerzTotalBadgeCount < 0) {
        bakerzTotalBadgeCount = 0;
    }

    const badgeElement = document.getElementById("cart-count");

    if (badgeElement) {
        badgeElement.innerText = bakerzTotalBadgeCount;
    }

    renderCartSidebar();
}
// check out 

function bakerzCheckoutAction() {

    if (bakerzCartItemsArray.length === 0) {

        if (typeof Swal !== "undefined") {
            Swal.fire({
                title: "Cart Empty!",
                text: "Your cart is currently empty.",
                icon: "warning",
                background: "#120b18",
                color: "#ffffff",
                confirmButtonColor: "#dea347"
            });
        } else {
            alert("Your cart is empty!");
        }

        return;
    }

    if (typeof Swal !== "undefined") {
        Swal.fire({
            title: "Order Placed Successfully!",
            text: "Thank you for shopping with Bakerz Bite!",
            icon: "success",
            background: "#120b18",
            color: "#ffffff",
            confirmButtonColor: "#dea347"
        });
    } else {
        alert("Order placed successfully!");
    }

    // Empty cart
    bakerzCartItemsArray = [];
    bakerzTotalBadgeCount = 0;

    const badgeElement = document.getElementById("cart-count");

    if (badgeElement) {
        badgeElement.innerText = "0";
    }

    renderCartSidebar();

    const cartSidebar = document.getElementById("bakerzCartSidebar");
    const cartOverlay = document.getElementById("bakerzCartOverlay");

    if (cartSidebar) {
        cartSidebar.classList.remove("bakerz-open");
    }

    if (cartOverlay) {
        cartOverlay.classList.remove("bakerz-open");
    }
}


// tick
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});