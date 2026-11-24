
// Shopping Cart
let cartCount = 0;

function addToCart() {

    cartCount++;

    document.getElementById("cart-count").innerText = cartCount;

    alert("Food Added To Cart Successfully!");

}


// Food Category Filter
function filterFood(category, button) {

    let foods = document.querySelectorAll(".food-card");

    foods.forEach(function(food) {

        if (category === "all" ||
            food.dataset.category === category) {

            food.style.display = "block";

        } else {

            food.style.display = "none";

        }

    });

    // Active Category Button
    let buttons = document.querySelectorAll(".category-btn");

    buttons.forEach(function(btn) {

        btn.classList.remove("active");

    });

    button.classList.add("active");

}


// Reservation Form
document.getElementById("reservation-form")
.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Your Table Has Been Booked Successfully!");

    this.reset();

});


// Set Minimum Booking Date
let today = new Date().toISOString().split("T")[0];

document.getElementById("booking-date").min = today;
