import { pokemons } from "./pokemons.js"

const ota=document.getElementById("ota")
const card=document.getElementById("card")
const input=document.getElementById("input")
const select=document.getElementById("select")
const selectSort=document.getElementById("selectSort")


function kopaytir(data){
    ota.innerHTML="";
        data.map(pokemons =>{
        const div=document.createElement("div")
        div.classList.add("card")
        div.innerHTML = `
                     <h2>${pokemons.name}</h2>
                     <img src=" ${pokemons.img}" alt="">
                     <p> ${pokemons.name}</p>
                     <h5> ${pokemons.candy_count}: 25</h5>
                     <h5>${pokemons.weight}</h5>
                     <span>${pokemons.weaknesses}</span>
        `;
        ota.appendChild(div)
    })
}
kopaytir(pokemons)


input.addEventListener("input", ()=> {
     const a=pokemons.filter(w => w.name.toLowerCase().includes(input.value.toLowerCase()))
     kopaytir(a)
})



select.addEventListener("change", ()=>{
      if(select.value=="All"){
        kopaytir(pokemons)
      }else{
        const rr=pokemons.filter(p=>p.weaknesses.includes(select.value));
        kopaytir(rr)
      }
})


selectSort.addEventListener("change",()=>{
    if(selectSort.value=="A-Z"){
        const pp=pokemons.sort((p1,p2) => p1.name.localeCompare(p2.name));
        kopaytir(pp)
    }else{
        const kk=pokemons.sort((p1,p2) =>p2.name.localeCompare(p1.name))
        kopaytir(kk)
    }
})
