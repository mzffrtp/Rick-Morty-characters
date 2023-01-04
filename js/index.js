const chaContainer = document.querySelector(".chaContainer");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.querySelector(".searchBtn");

const chaCount = 826;

const initRmf = async () => {
    for (let i =100; i<= chaCount; i++) {
        await getCha (i);
    }
};

const getCha = async (id) => {

    let url = `https://rickandmortyapi.com/api/character/${id}`;
    let res = await fetch(url);
    let data = await res.json();
   

    creatchaBox(data);
};

const creatchaBox = (cha) => {
    const chaName = cha.name[0]+ cha.name.slice(1);
    const id = cha.id.toString().padStart (3,"0");
    const spieces = cha.species;
    const type =cha.type;
   
    const chaEl = document.createElement("div")
    chaEl.classList.add("heroBox");

    chaEl.innerHTML = `
    <img src="https://rickandmortyapi.com/api/character/avatar/${id}.jpeg" alt="${chaName} image" >

    <h4 class="heroName">${chaName}</h4>
    <p class="heroId">${id}</p>
    <p class="heroSpieces">${spieces}</p>
    <p class="heroType">${type}</p>`;

    chaContainer.appendChild(chaEl)
}

initRmf();

searchInput.addEventListener("input", function (e) {
    const heroNames = document.querySelectorAll(".heroName");
    const search = searchInput.value.toLowerCase();
   
    
    heroNames.forEach((hero) => {
        hero.parentElement.style.display = "block";

        if (!hero.innerHTML.toLowerCase().includes(search)) {
        hero.parentElement.style.display = "none";
        }
    });
})
