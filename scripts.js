console.log("hul igennem");

// const biler = [
//   {
//     Pris: 23000,
//     model: "Turbo",
//     brand: "Trabant",
//     farve: "beige",
//     udstyr: ["rat", "sæder", "vinduer"],
//   },
//   {
//     Pris: 55000,
//     model: "Volvo",
//     brand: "Trabant",
//     farve: "Gul",
//     udstyr: ["rat", "sæder", "vinduer"],
//   },

//   {
//     Pris: 33000,
//     model: "Super",
//     brand: "VW",
//     farve: "Rød",
//     udstyr: ["rat", "sæder", "vinduer", "fartpilot"],
//   },
// ];

// console.log(biler);

// console.log(bil2);

const endpoint = "https://kea-alt-del.dk/t7/api/products?limit=20";

const produktliste = document.querySelector(".produktliste");

// const productid = 1526;
// const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${productid}.webp`;

fetch(endpoint)
  .then((res) => res.json())
  .then(visData);

function visData(jason) {
  console.log(jason);
}

function visData(jason) {
  console.log(jason);
  jason.forEach((element) => {
    produktliste.innerHTML += `<article class="produktliste">
    <img src=${`https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp`} alt="produktbillede"/>
<h2>${element.productdisplayname}</h2>
<h3>${element.model}</h3>
<p>kr. ${element.pris},-</p>
<p>${element.udstyr}</p>
</article>`;
  });
}
