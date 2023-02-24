async function SearchPokemon() {
    
    PokemonDataDiv = document.getElementById("PokemonData");
    PokemonDataDiv.setAttribute("hidden", "true");

    var PokemonInput = document.getElementById("PokemonSearch").value;
    var PokemonInput = PokemonInput.toLowerCase();
    PokemonLink = "https://pokeapi.co/api/v2/pokemon/" + PokemonInput; 
    let res = await fetch(PokemonLink);
    if (res.status == 404) {
        document.getElementById("Error").innerHTML = "Pokemon Not Found";

    }
    else {
        document.getElementById("Error").innerHTML = "";

    }
    var pokemon = await res.json();
    

    PokemonDexNumber = pokemon.id;

    PokemonName = pokemon.name;
    PokemonName = PokemonName.charAt(0).toUpperCase() + PokemonName.slice(1);


    PokemonImage = pokemon.sprites.front_default;
    PokemonImageFemale = pokemon.sprites.front_female
    PokemonImageShiney = pokemon.sprites.front_shiny;
    PokemonImageFemaleShiney = pokemon.sprites.front_shiny_female






    var Name_to_Color = {
        "Normal": "#A8A878",
        "Fire": "#F08030",
        "Water": "#6890F0",
        "Electric": "#F8D030",
        "Grass": "#78C850",
        "Ice": "#98D8D8",
        "Fighting": "#C03028",
        "Poison": "#A040A0",
        "Ground": "#E0C068",
        "Flying": "#A890F0",
        "Psychic": "#F85888",
        "Bug": "#A8B820",
        "Rock": "#B8A038",
        "Ghost": "#705898",
        "Dragon": "#7038F8",
        "Dark": "#705848",
        "Steel": "#B8B8D0",
        "Fairy": "#EE99AC"
    };


    PokeType1 = pokemon.types[0].type.name;
    PokeType1 = PokeType1.charAt(0).toUpperCase() + PokeType1.slice(1);
    document.getElementById("PokemonType1").innerHTML = PokeType1;
    document.getElementById("PokemonType1").style.backgroundColor = Name_to_Color[PokeType1];


    if (pokemon.types.length > 1) {
        PokeType2 = pokemon.types[1].type.name;
        PokeType2 = PokeType2.charAt(0).toUpperCase() + PokeType2.slice(1);
        document.getElementById("PokemonType2").innerHTML = PokeType2;
        document.getElementById("PokemonType2").style.backgroundColor = Name_to_Color[PokeType2];

    } else {
        PokeType2 = "";
        document.getElementById("PokemonType2").innerHTML = "";
        document.getElementById("PokemonType2").style.backgroundColor = "clear";
    }

    
   









    PokeHeight = pokemon.height;
    PokeWeight = pokemon.weight;
    
    Pokestat1 = pokemon.stats[0].base_stat;
    Pokestat2 = pokemon.stats[1].base_stat;
    Pokestat3 = pokemon.stats[2].base_stat;
    Pokestat4 = pokemon.stats[3].base_stat;
    Pokestat5 = pokemon.stats[4].base_stat;
    Pokestat6 = pokemon.stats[5].base_stat;
    PokeAbilities = pokemon.abilities[0].ability.name;
    if (pokemon.abilities.length > 1) {
        if (pokemon.abilities[1].is_hidden == false) {
            PokeAbilities = PokeAbilities + ", " + pokemon.abilities[1].ability.name;
            if (pokemon.abilities.length > 2) {
                if (pokemon.abilities[2].is_hidden == false) {
                    PokeAbilities = PokeAbilities + ", " + pokemon.abilities[2].ability.name;
                }
                else {
                    var PokeHiddenAbilities = pokemon.abilities[2].ability.name;
                }
            }
        }
        else{
            var PokeHiddenAbilities = pokemon.abilities[1].ability.name;
        }
    }
    
    PokeAbilities = PokeAbilities.charAt(0).toUpperCase() + PokeAbilities.slice(1);
    if (PokeHiddenAbilities != null) {
        PokeHiddenAbilities = PokeHiddenAbilities.charAt(0).toUpperCase() + PokeHiddenAbilities.slice(1);
    }
    else {
        PokeHiddenAbilities = "";
    }


    PokemonLink2 = "https://pokeapi.co/api/v2/pokemon-species/" + PokemonInput;
    let res2 = await fetch(PokemonLink2);
    var pokemonDat2 = await res2.json();
    console.log(pokemonDat2);
    PokeGeneration = pokemonDat2.generation.name;
    PokeGeneration = PokeGeneration.charAt(0).toUpperCase() + PokeGeneration.slice(1);
    

    
    





    document.getElementById("PokemonDexNumberAndName").innerHTML = "National Dex Number: " + PokemonDexNumber+  "Pokemon Name: "   + PokemonName;    
    
    document.getElementById("PokemonHeight").innerHTML = "Height: " + PokeHeight;
    document.getElementById("PokemonWeight").innerHTML = "Weight: " + PokeWeight;
    document.getElementById("PokemonHP").innerHTML = Pokestat1;
    document.getElementById("PokemonAttack").innerHTML = Pokestat2;
    document.getElementById("PokemonDefense").innerHTML = Pokestat3;
    document.getElementById("PokemonSpAttack").innerHTML = Pokestat4;
    document.getElementById("PokemonSpDefense").innerHTML = Pokestat5;
    document.getElementById("PokemonSpeed").innerHTML = Pokestat6;
    document.getElementById("PokemonGeneration").innerHTML = PokeGeneration;



    document.getElementById("PokemonAbilities").innerHTML = "Normal Abilities:" + PokeAbilities;
    if (PokeHiddenAbilities != "") {
        document.getElementById("PokemonAbilityHidden").innerHTML = "Hidden Ability:" + PokeHiddenAbilities;
    }
    else {
        document.getElementById("PokemonAbilityHidden").innerHTML = "";
    }
    

    LoadPokeImages(PokemonImage, PokemonImageFemale, PokemonImageShiney, PokemonImageFemaleShiney);


    
    
}

function LoadPokeImages(PokemonImage, PokemonImageFemale, PokemonImageShiney, PokemonImageFemaleShiney) {
    document.getElementById("Pokemon").src = "";
    document.getElementById("PokemonShiny").src = "";
    document.getElementById("PokemonFemale").src = "";
    document.getElementById("PokemonFemaleShiny").src = "";
    FemaleTableTag = document.querySelectorAll("#FemaleTableTag");
    if (PokemonImageFemale != null) {
        FemaleTableTag[0].removeAttribute("hidden");
        FemaleTableTag[1].removeAttribute("hidden");
        FemaleTableTag[2].removeAttribute("hidden");
        FemaleTableTag[3].removeAttribute("hidden");
        
    }
    else {
        FemaleTableTag[0].setAttribute("hidden", "true");
        FemaleTableTag[1].setAttribute("hidden", "true");
        FemaleTableTag[2].setAttribute("hidden", "true");
        FemaleTableTag[3].setAttribute("hidden", "true");
    }

    document.getElementById("Pokemon").src = PokemonImage;
    document.getElementById("PokemonShiny").src = PokemonImageShiney;
    if (PokemonImageFemale != null) {
        document.getElementById("PokemonFemale").src = PokemonImageFemale;
    }
    if (PokemonImageFemaleShiney != null) {
        document.getElementById("PokemonFemaleShiny").src = PokemonImageFemaleShiney;
    }




    



    PokemonDataDiv.removeAttribute("hidden");
}