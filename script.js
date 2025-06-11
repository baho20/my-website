const { animals } = require("./animals");

function displayAnimals() {
    const list =
    document.getElementById("animal-list");
    list.innerHTML="";
    animals.forEach((animal,index) =>
{

const card =
document.createElememt("div");
card.className ="card";
card.innerHTML=`
    <img src ="${animal.image}"
    alt="${animal.name}">
    <><h3>${animal.name}</h3><p><strong>Species:</strong> $
            {animal.species}</p><p>${animal.descption}</p></>
        `;
   list.appendchild(card);
});
}

function addAnimal() {
    const name=
    document.getElementById("name").value;
    const species=
    document.getElementById("species").value;
    const image=
    document.getElementById("image").value;

    if (!name || !species ||!image ||!description){
        alert("please fill in all fileds");
        return;
    }
    const newAnimal ={ name,species,image,description };
    animals.push(newAnimal);
    localStorage.setItem("animals",JSON.stringly(animals));
    displayAnimals();

 Document.getElementById("name").value="";

 Document.getElementById("species").value="";

 Document.getElementById("image").value="";

 Document.getElementById("description").value="";
}

displayAnimals();
