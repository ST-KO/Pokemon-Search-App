const postsContainer = document.getElementById("posts-container");
const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const dataUrl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";


const pokeName = document.getElementById("pokemon-name");
const pokeId = document.getElementById("pokemon-id");
const pokeWeight = document.getElementById("weight");
const pokeHeight = document.getElementById("height");
const pokeType = document.getElementById("types");
const pokeHP = document.getElementById("hp");
const pokeAttack = document.getElementById("attack");
const pokeDefense = document.getElementById("defense");
const pokeSpAttack= document.getElementById("special-attack");
const pokeSpDefense = document.getElementById("special-defense");
const pokeSpeed = document.getElementById("speed");


const outputMessage = () => {
  pokeType.innerHTML = "";
  
  const userInput = input.value.toLowerCase();

  fetchData(userInput);
}


searchBtn.addEventListener("click", outputMessage); 

const fetchData = async(userInput) => {
 try{
   const res = await fetch(`${dataUrl}${userInput}`);
   if(!res.ok){
     alert("Pokémon not found");
     throw new Error("could not fetch data");
   }
   const data = await res.json();
   console.log(data);
   showData(data);
 }catch(err){
   console.log(err);
 }
};

//fetchData();

const showData = (data) => {
 const {id, name, weight, height, types, stats, sprites} = data;

 const pokeTypes = types.map((element) => `<p>${element.type.name.toUpperCase()}</p>`).join("");
 //console.log(results);

const newName = name.toUpperCase();
 postsContainer.innerHTML =  `
   <div>
     <img id="sprite" src="${sprites['front_default']}"/>
   </div>
   `;
 pokeName.textContent = `${newName}`;
 pokeId.textContent = `#${id}`;
 pokeWeight.textContent = `Weight: ${weight}`;
 pokeHeight.textContent = `Height: ${height}`; 
 pokeType.innerHTML = `<div style="display: flex; gap: 10px;">${pokeTypes}</div>`; 
 pokeHP.textContent = `HP: ${stats[0]['base_stat']}`;
 pokeAttack.textContent = `Attack: ${stats[1]['base_stat']}`;
 pokeDefense.textContent = `Defense: ${stats[2]['base_stat']}`;
 pokeSpAttack.textContent = `Sp. Attack: ${stats[3]['base_stat']}`;
 pokeSpDefense.textContent = `Sp. Defense: ${stats[4]['base_stat']}`;
 pokeSpeed.textContent = `Speed: ${stats[5]['base_stat']}`;
}; 