 let animals = [
    {
        name: "Leo",
        species: "lion",
        image: "C:\Users\fcp21\Pictures\Screenshots\Screenshot 2025-04-01 141446.png",
        descption: "King of the  jungle,known for its majestic mane."
    },

    {
        name: "stripes",
        species: "zebra",
        image: "C:\Users\fcp21\Pictures\lil.jpg",
        descption: "Recognizable by black and stripes"
},
    {
        name:"Ellie",
        species:"elephant",
        image:"c:\Users\fcp21\Pictures\lil.jpg",
        description: "largest land animal with a powerful trunk."
    }
];  

// save to localstorage if not already present

if(! localStorage.getItem("ZooAnimals")){
    localStorage.setItem("ZooAnimals",JSON.stringify(animals));
}else{
    animals=
    JSON.parse(localStorage.getItem("zooAnimals"));
}

function displayAnimals(){
    const container = document.getElementById("animal-list");
    container.innerHTML="";
     animals.forEach((animal)=>{
        const card=document.createElement("div");
        card.className="card";
        card.innerHTML=`<img src="${animal.image}" alt="${animal.name}>
                       <h3>${animal.name}</h3>
                      <p><strong>species:</strong> ${animal.species}</p>
                      <p>${animal.description}</p>`;
                container.appendChild(card);
     });
}
 
function addAnimal(){
    const name = document.getElementById("name").value.trim();
    const species = document.getElementById("species").value.trim();
    const descption =document.getElementById("description").value.trim();

if (!name ||!species ||!image|| !description){
    alert("please fill out fields!");
    return;
}
const newAnimal ={ anme,species,image,description};
animals.push(newAnimal);
localStorage.setItem("zooAnimals",JSON.stringify(animals));
displayAnimals();

//clear inputs

document.getElementById("name").value="";
document.getElementById("species").value="";
document.getElementById("image").value="";
document.getElementById("description").value="";
}
displayAnimals();








    JSON.parse(localStorage.getItem("animals")) || []
];
