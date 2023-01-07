import verity from "./components/data.js";

console.log(verity)
const content = `
    <figure class="backpack__image">
      <img src=${verity.image} alt="" loading="lazy" />
    </figure>
    <h1 class="backpack__name">${verity.name}</h1>
    <ul class="backpack__features">
      <li class="feature backpack__volume">Volume:<span> ${
        verity.name
      }l</span></li>
      <li class="feature backpack__color">Color:<span> ${
        verity.name
      }</span></li>
      <li class="feature backpack__age">Age:<span> ${verity.name} days old</span></li>
      <li class="feature backpack__pockets">Number of pockets:<span> ${
        verity.name
      }</span></li>
      <li class="feature backpack__strap">Left strap length:<span> ${
        verity.name
      } inches</span></li>
      <li class="feature backpack__strap">Right strap length:<span> ${
        verity.name
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        verity.name
      }</span></li>
    </ul>
  `;

const main = document.querySelector(".maincontent");

// const newArticle = document.createElement("article");
// newArticle.classList.add("book");
// newArticle.setAttribute("id", "book");
newArticle.innerHTML = content;

main.append(newArticle);

// if (everydayPack.backpackAge() >= 30) {
//   console.log("Backpack is used")
// } else {
//   console.log("Backpack is new")
// }