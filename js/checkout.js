import { getCart } from "./cart.js";

const tableContainer = document.getElementById("cartSummary");

function getSummary(){
    var cart = getCart();
    for(let i=0; i<cart.listOfItems.length; i++){
        const tableRow = document.createElement("tr");
        tableRow.innerHTML = cart.listOfItems[i].name + " $" + cart.listOfItems[i].price;
        tableContainer.append(tableRow);
    }
    const tableRow = document.createElement("tr");
        tableRow.innerHTML = "Total $" + cart.total;
        tableContainer.append(tableRow);
}

getSummary();