const container= document.getElementById('characters-container')

fetch('https://rickandmortyapi.com/api/character')
.then(res => res.json())
.then(data=>{
    data.results.forEach(character => {
        const card=document.createElement('div')
        card.classList.add('character-card')

        card.innerHTML=`
        <h3>${character.name}</h3>
        <img src="${character.image}" alt="character.name"> 
        <p>Status: ${character.status}</p>
        <p>Species: ${character.species}</p>

        `
        container.appendChild(card)
    });
})