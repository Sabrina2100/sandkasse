const cat = new URLSearchParams(window.location.search).get("cat");

const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${cat}`;

document.querySelector("h2").textContent = cat;
const visantal = document.querySelector("#filtre span");

const produktliste = document.querySelector("#produktliste");

document.querySelectorAll("#filtre button").forEach((knap) => knap.addEventListener("click", filtrer));

let alleData, udsnit;

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => {
    alleData = udsnit = data;
    visData(data);
  });

function filtrer(e) {
  console.log(e.target.textContent);
  console.log(alleData, udsnit);
  const valgt = e.target.textContent;
  if (valgt == "Alle") {
    udsnit = alleData;
  } else {
    udsnit = alleData.filter((produkt) => produkt.gender == valgt);
  }
  console.log(alleData, udsnit);
  visData(udsnit);
}

function visData(json) {
  visantal.textContent = json.length;
  // console.log(json);
  produktliste.innerHTML = "";
  json.forEach((produkt) => {
    const tilbudspris = produkt.price - (produkt.price * produkt.discount) / 100;
    produktliste.innerHTML += `
    <a href="productdetails.html?id=${produkt.id}">
    <article class="card ${produkt.soldout ? "udsolgt" : ""}"> 

        <img src= https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp
        alt="produktbillede"/>
    
        <h2>${produkt.productdisplayname}</h2>
    <h3>${produkt.brandname} </h3>
    
    ${
      produkt.discount
        ? `
    <p class='tilbudlabel'>${produkt.discount}%</p>
    <p>Før kr. ${produkt.price},- Nu ${tilbudspris},-</p>
    `
        : `
    <p>kr. ${produkt.price},-</p>
    <p>${produkt.subcategory}</p>
    `
    }
    </article>
    </a>`;
  });
}
