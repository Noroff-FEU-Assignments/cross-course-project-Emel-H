import {jackets} from "./jackets.js";
import { addItemToCart } from "./cart.js";

const imagecontainer = document.querySelector(".jacketimage");
const namecontainer = document.querySelector(".jacketname");
const pricecontainer = document.querySelector(".jacketprice");
const colorcontainer = document.querySelector(".jacketcolor");
const descriptioncontainer = document.querySelector(".jacketdescription");
const button = document.getElementById("addtocartbutton");

function getJacket(id){
    try{
        getJacketImage(id);
        getJacketName(id);
        getJacketPrice(id);
        getJacketColor(id);
        getJacketDescription(id);
    }
    catch (error) {
        imagecontainer.innerHTML = "";
        const elementTitle = document.createElement("h1");
        elementTitle.innerHTML = "Sorry, could not retrieve the character with the id: "+id+" at this time.";
        imagecontainer.append(elementTitle);
    }
}

function getJacketImage(id){
    imagecontainer.innerHTML = "";
    const jacketImage = document.createElement("img");
    jacketImage.src = jackets.jacketlist[id].image;
    imagecontainer.append(jacketImage);
}
function getJacketName(id){
    namecontainer.innerHTML="";
    const jacketName = document.createElement("h1");
    jacketName.innerHTML = jackets.jacketlist[id].name;
    namecontainer.append(jacketName);
}

function getJacketPrice(id){
    pricecontainer.innerHTML="";
    const jacketPrice = document.createElement("h2");
    jacketPrice.innerHTML = jackets.jacketlist[id].currency + jackets.jacketlist[id].price;
    pricecontainer.append(jacketPrice);
}

function getJacketColor(id){
    colorcontainer.innerHTML="";
    const jacketColor = document.createElement("h2");
    jacketColor.innerHTML = "Colour: "+jackets.jacketlist[id].color;
    colorcontainer.append(jacketColor);
}

function getJacketDescription(id){
    descriptioncontainer.innerHTML="";
    const jacketDescription = document.createElement("p");
    jacketDescription.innerHTML = jackets.jacketlist[id].description;
    descriptioncontainer.append(jacketDescription);
}

function addJacketToCart(){
    var id=params.get("id")
    var name = jackets.jacketlist[id].name;
    var price = jackets.jacketlist[id].price;
    addItemToCart(name, price);
    alert("Item has been added to Bag");
}

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
getJacket(params.get("id"));

button.addEventListener("click", addJacketToCart);