async function SearchPokemon() {
    var PokemonInput = document.getElementById("PokemonSearch").value;
    var PokemonInput = PokemonInput.toLowerCase();
    PokemonLink = "https://pokeapi.co/api/v2/pokemon/" + PokemonInput; 
    let res = await fetch(PokemonLink);
    let pokemon = await res.json();
    PokemonDexNumber = pokemon.id;
    PokemonName = pokemon.name;
    PokemonImageNormal = pokemon.sprites.front_default;
    PokemonImageShiney = pokemon.sprites.front_shiny;
    PokeType1 = pokemon.types[0].type.name;
    PokeType2 = pokemon.types[1].type.name;
    PokeHeight = pokemon.height;
    PokeWeight = pokemon.weight;
    
    Pokestat1 = pokemon.stats[0].base_stat;
    Pokestat2 = pokemon.stats[1].base_stat;
    Pokestat3 = pokemon.stats[2].base_stat;
    Pokestat4 = pokemon.stats[3].base_stat;
    Pokestat5 = pokemon.stats[4].base_stat;
    Pokestat6 = pokemon.stats[5].base_stat;
    document.getElementById("PokemonName").innerHTML = PokemonName;
    document.getElementById("PokemonDexNumber").innerHTML = PokemonDexNumber;
    
    document.getElementById("PokemonType1").innerHTML = PokeType1;
    document.getElementById("PokemonType2").innerHTML = PokeType2;
    document.getElementById("PokemonHeight").innerHTML = PokeHeight;
    document.getElementById("PokemonWeight").innerHTML = PokeWeight;
    
    document.getElementById("PokemonStat1").innerHTML = Pokestat1;
    document.getElementById("PokemonStat2").innerHTML = Pokestat2;
    document.getElementById("PokemonStat3").innerHTML = Pokestat3;
    document.getElementById("PokemonStat4").innerHTML = Pokestat4;
    document.getElementById("PokemonStat5").innerHTML = Pokestat5;
    document.getElementById("PokemonStat6").innerHTML = Pokestat6;
    document.getElementById("PokemonImageNormal").src = PokemonImageNormal;
    document.getElementById("PokemonImageShiney").src = PokemonImageShiney;



    
}


