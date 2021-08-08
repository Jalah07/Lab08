/* // User Input #1 Takes user input in the form of a review.


document.getElementById("form").addEventListener("click", function showReview() {
    let review = document.getElementById("user_review").value;
    let username = document.getElementById("user_username").value;
    let rating = document.getElementById("user_rating").value;
    let game = document.getElementById("user_game").value;

    display_username.innerHTML = username;
    display_rating.innerHTML = rating;
    display_review.innerHTML = review;
    display_game.innerHTML = game;


});


        

// JQuery in order to hide the form after submit and to hide/show the display rating
 $("#display_rating").hide();

$(document).ready(function(){
    $("#submit-btn").click(function hideForm(){
        $("#form").hide();
        $("#display_rating").show();
        
    });
}); 

// User Input #2 Changes the Background color of the webpage. Requires user to put in a vaild input of any of the 140 colors the browser recognizes. Does it on load.

window.addEventListener("load", function changeBackgroundColor()  {
     
        const validColors =["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen",];

        do {
            color = prompt("Please choose a color for the background. Make sure you enter a vaild CSS color. It's case-sentitive.");
        }
        while(validColors.includes(color) !== true);
        document.body.style.backgroundColor = color;
    

});



// Reset Button for the background color
document.getElementById("reset-color").addEventListener("click", function() {
    document.body.style.backgroundColor = "#0f0f0f";
  });


// User Input #3 Takes the user input from the review rating and display whether the game is good or not.
  document.getElementById("submit-btn").addEventListener("click", function() {
    if (+document.getElementById("user_rating").value >= 80) {
        alert("This is a good game");
        }
    else {
        alert("Sorry this game is not good.");          
    }
  })  


document.getElementById("pokemon-heading").addEventListener("click", function displayPokemon() {
    const container = document.querySelector('#pokemon-container');
    const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
  
    let pokemonNum = prompt("How many pokemon do you want to see?");
    let value = parseInt(pokemonNum);
  
    for(let i = 1; i<=value; i++) {
        const pokemon = document.createElement("div");
        pokemon.classList.add("pokemon")
        const label = document.createElement("span");
        label.innerText = `#${i}`;
        const newImg = document.createElement("img");
        newImg.src = `${baseURL}${i}.png`;
  
        pokemon.appendChild(newImg);
        pokemon.appendChild(label);
        container.appendChild(pokemon);
    
   
}
})
 */
   



