const cont_emergente = document.querySelector(".cont_emergente");
const buscar = document.querySelector(".buscar");
const regresar = document.querySelector(".regresar");

buscar.addEventListener("click", ()=>{
	cont_emergente.style.display = "flex";
});

regresar.addEventListener("click", ()=>{
	cont_emergente.style.display = "none";
});