const hamburguer = document.querySelector(".hamburguer");

function toggleMenu(){
    const linksMenu = document.querySelector(".container")
    
    linksMenu.classList.toggle("show-menu");
}

hamburguer.addEventListener("click", toggleMenu);

//Compactado

/* 

document.querySelector(".hamburguer").addEventListener("click", () => 
    document.querySelector(".container").classList.toggle("show-menu"));

*/