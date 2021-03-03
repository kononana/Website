let book = document.querySelector(".book");
let popup = document.querySelector(".modal-content");
let closeM = document.querySelector(".modal-content-close");


book.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-content-show");
    login.focus();
    overlay.classList.add("overlay-show");
});
closeM.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("overlay-show");
});


document.querySelector("form").onsubmit = function(e) {
    e.preventDefault();
    let name = document.querySelector('#login').value;
    let phone = document.querySelector('#tele').value;
    let date = document.querySelector('#date').value;
    let time = document.querySelector('#time').value;
    localStorage["name"] = name;
    localStorage["phone"] = phone;
    localStorage["date"] = date;
    localStorage["time"] = time;
    console.log(localStorage);
    popup.classList.remove("modal-content-show");
    note.classList.add("success-show");
};

//Закрыть сообщение об отправке//
let note = document.querySelector(".success");
let closeNote = note.querySelector(".modal-content-close")
closeNote.addEventListener("click", function(evt) {
    note.classList.remove("success-show");
});



//Map // 
let link = document.querySelector(".buttonMap");
let popup1 = document.querySelector(".modal-content-map");
let closeMap = popup1.querySelector(".modal-content-close");
var overlay = document.querySelector(".overlay");
link.addEventListener("click", function(evt) {
    evt.preventDefault;
    popup1.classList.add("modal-content-map-show");
    overlay.classList.add("overlay-show");

});
closeMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup1.classList.remove("modal-content-map-show");
    overlay.classList.remove("overlay-show");
});


//карточки.//
let catalog = [
    { id: 1, name: "Салат морской", price: "400", description: "printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled", image: "img/dish.jpg" },
    { id: 2, name: "Лазанья", price: "500", description: "printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled", image: "img/dish5.jpg" },
    { id: 3, name: "Крем-суп", price: "350", description: "printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled", image: "img/dish9.jpg" },
    { id: 4, name: "Креветки", price: "640", description: "printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled", image: "img/dish8.jpg" },
    { id: 5, name: " Паэлья", price: "470", description: "printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled", image: "img/dish4.jpg" },
    { id: 6, name: "Запеканка", price: "340", description: "printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled", image: "img/dish55.jpg" },
];

createRows(catalog);

function createRows(array) {

    let div = document.querySelector(".spec");
    for (let elem of array) {
        let row = document.createElement("p");
        row.innerHTML = `
         <div class="foodM">       
        <img class="food1__img" src="${elem.image}" alt="#">
            <h3 class="food__title">${elem.name}</h3>
             <p class="food__desc">${elem.description}</p>
            <p>${elem.price} <sup><small>руб</small></sup></p>
          <hr>
          <button class="button_plus">Подробнее</button>
      </div>    
      `;
        div.append(row);
    }
}