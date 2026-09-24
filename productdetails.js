const id = new URLSearchParams(window.location.search).get("id");

console.log(id);

const endpoint = `https://kea-alt-del.dk/t7/api/products/${id}`;

const product = document.querySelector("#product");
const backbutton = document.querySelector("#backbutton");
backbutton.addEventListener("click", () => history.back());

fetch(endpoint)
  .then((res) => res.json())
  .then(visData);

function visData(jason) {
  console.log(jason);
}

function visData(element) {
  console.log(element);

  product.innerHTML = `
     <a href=productdetails.html?id=${element.id}>
    <article class="produktliste">
    <img src=${`https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp`} alt="produktbillede"/>
<h2>${element.productdisplayname}</h2>
<h3>${element.brandname}</h3>
<p>kr. ${element.price},-</p>
<p>${element.subcategory}</p>
</article>
</a>`;
}
