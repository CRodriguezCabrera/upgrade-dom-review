/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

1.2 Elimina el elemento que tenga la clase .fn-remove-me.

1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista.

1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html. */

//1.1
const theCountries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let newList = document.createElement("ul");
document.body.appendChild(newList);
for (const country of theCountries) {
	let listItem=document.createElement("li");
	listItem.innerHTML=country;
	newList.appendChild(listItem);
}	

// 1.2
document.querySelector(".fn-remove-me").remove();

//1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let carList = document.createElement("ul");
let listContainer = document.querySelector("[data-function = 'printHere']");
listContainer.appendChild(carList);
for (const car of cars) {
	let carItem = document.createElement("li");
	carItem.innerHTML = car;
	carList.appendChild(carItem);
}

//1.4
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
let myList = document.createElement("ul");
document.body.appendChild(myList)
for (const country of countries){
	let myDiv = document.createElement("div");
	let myH4 = document.createElement("h4");
	let myImg = document.createElement("img");
	myH4.innerHTML = country.title;
	myImg.src = country.imgUrl;
	myDiv.appendChild(myH4);
	myDiv.appendChild(myImg);
	myList.appendChild(myDiv);
}

//1.5
let button = document.createElement("button");
document.body.appendChild(button);
button.innerHTML = "delete";

const deleteLast = () => {
	let lastItem = myList.lastChild;
	lastItem.parentNode.removeChild(lastItem);
}
button.addEventListener("click", deleteLast);

//1.6
/* let imgButton = document.createElement("button");
let titleButton = document.createElement("button")
document.body.appendChild(imgButton);
document.body.appendChild(titleButton);
imgButton.innerHTML = "delete img";
titleButton.innerHTML = "delete title";


imgButton.addEventListener("click", deleteElementImg);
titleButton.addEventListener("click", deleteElementTitle);
 */
