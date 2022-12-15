const fetch_pokemon_data = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const new_data = await response.json()
    console.log(new_data)

    const pokemon_name= document.createElement('h1')
    pokemon_name.innerText = new_data['name']
    // const pokemon_card = document.querySelector('.pokemon_card')
    // pokemon_card.append(pokemon_name)

    const pokemon_img = document.createElement('img')
    pokemon_img.setAttribute('src', new_data['sprites']['front_default'])
    // pokemon_card.append(pokemon_img)

    const pokemon_ability = document.createElement('h3')
    pokemon_ability.innerText = new_data["abilities"][0]['ability']['name']

    const pokemon_attack = document.createElement('h3')
    pokemon_attack.innerText = new_data["stats"][1]["base_stat"]

    const pokemon_hp = document.createElement('h3')
    pokemon_hp.innerText = new_data["stats"][0]["base_stat"]

    const pokemon_defense = document.createElement('h3')
    pokemon_defense.innerText= new_data["stats"][2]['base_stat']

    document.querySelector('.pokemon_card').append(pokemon_name)
    document.querySelector('.pokemon_card').append(pokemon_img)
    document.querySelector('.pokemon_card').append(pokemon_ability)
    document.querySelector('.pokemon_card').append(pokemon_attack)
    document.querySelector('.pokemon_card').append(pokemon_hp)
    document.querySelector('.pokemon_card').append(pokemon_defense)
}


fetch_pokemon_data(name)



const data_form = document.querySelector('form')
data_form.addEventListener('submit', (event) => {
    event.preventDefault()
    const pokemon_attributes = document.querySelector('#poke-data').value
    fetch_pokemon_data(pokemon_attributes)
})

