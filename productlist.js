const cat = new URLSearchParams(window.location.search).get("cat");

const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${cat}`;

document.querySelector("h2").textContent = cat;

const produktliste = document.querySelector("#produktliste");

document.querySelectorAll("#filtre button").forEach((knap) => knap.addEventListener("click", filtre));

function filtrer(e) {
  console.log(e.target.textContent);
}

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => visData(data));

function visData(json) {
  console.log(json);
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
