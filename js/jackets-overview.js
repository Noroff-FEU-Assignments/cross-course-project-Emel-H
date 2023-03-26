import {jackets} from "./jackets.js";

const container = document.querySelector(".jackets-container");

function getJackets(){
    for(let i=0; i<jackets.numberOfJackets; i++){
        const link = document.createElement("a");
        link.href = "jacket-page.html?id="+(i);
        const jacketCard = document.createElement("div");
        jacketCard.classList = ["jacket-card"];
        addJacketCardInfo(jacketCard,i);
        link.innerHTML=jacketCard.outerHTML;
        container.append(link);
    }
    
}

function addJacketCardInfo(jacketCard, i){
    addJacketImage(jacketCard, i);
    addJacketName(jacketCard, i);
    addJacketPrice(jacketCard, i);
    
}

function addJacketImage(jacketCard, i){
    const jacketImage = document.createElement("img");
    jacketImage.src = jackets.jacketlist[i].image;
    jacketCard.append(jacketImage);
}

function addJacketName(jacketCard, i){
    const jacketName = document.createElement("h3");
    jacketName.innerHTML = jackets.jacketlist[i].name;
    jacketCard.append(jacketName);
}

function addJacketPrice(jacketCard, i){
    const jacketPrice = document.createElement("h3");
    jacketPrice.innerHTML = jackets.jacketlist[i].currency + jackets.jacketlist[i].price;
    jacketCard.append(jacketPrice);
}

getJackets();