// console.log("FrontEnd JS ishga tushdi");

//const { response } = require("../app");

//const { response } = require("../app");

// function itemTemplate(item) {
//     return ` <li
//             class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
//             >
//             <span class="item-text">${item.reja}</span>
//             <div>
//                 <button data-id= ${item_id}"
//                 class="edit-me btn btn-secondary btn-sm mr-1">
//                     O'zgartirish
//                 </button>
//                 <button data-id= ${item_id}"" class="delete-me btn btn-danger btn-sm">O'chirish</button>
//             </div>
//         </li>`;
// }
// let createField = document.getElementById("create-field");
// document.getElementById("create-form").addEventListener("submit", function (e) {
//     e.preventDefault();

//     axios
//     .post("/create-item", {reja: createField.value})
//     .then((response) => {
//         document.getElementById("item-list")
//         .insertAdjacentHTML("beforeend",itemTemplate(response.date))
//         createField.value = "";
//         createField.focus();
//     })
//     .catch((err) => {
//         console.log("Iltimos qaytadan urinib ko'ring!");
//     });
// });

// // document.addEventListener("click",function (e) {
// // // delete operation
// // console.log(e.target);
// // if(e.target.classList.contains("delete-me")) {
// //  if (confirm ("Aniq o'chirmoqchimisiz?")) {
// //    axios.post("/delete-item", {id: e.target.getAttribute("data-id")})
// //      .then(response =>{
// //         console.log(response.data);
// //     e.target.parentElement.parentElement.remove();
// //      })
// //      .catch(err => {
// //         console.log("Iltimos qaytadan urinib ko'ring!");
// //      }); 
// //  } 
// // }
// // // edit operation
// // if(e.target.classList.contains("edit-me")) {
// //     alert("siz edit tugmasini bosdingiz");
// // }
// // });
// document.addEventListener("click", function (e) {
// //    delete oper
//     if(e.target.classList.contains("delete-me")) {
//         if(confirm("Aniq o'chirmoqchimisiz"))
//         axios
//             .post("/delete-item", {id: e.target.getAttribute("data-id") })
//         .then((response) => {
//             console.log("deleted",response.data);
//             e.target.parentElement.parentElement.remove();
//         })
//         .catch((err) => {
//             console.log("iltimos qaytadan urunib ko'ring");
//         });
//     }
    console.log("Frontend uchun yozilgan JS ishga tushdi.");

const createField = document.getElementById("create-field");

function itemTemplate(item) {
    return `<li
                class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
                >
                <span class="item-text">${item.reja}</span>
                <div>
                    <button
                        data-id="${item._id}"
                        class="edit-me btn btn-secondary btn-sm mr-1"
                        >
                        O'zgartirish
                    </button>
                    <button
                        data-id="${item._id}"
                        class="delete-me btn btn-danger btn-sm"
                        >
                        O'chirish
                    </button>
                </div>
            </li>`;
}


document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    axios
    .post("/create-item", {reja: createField.value })
    .then(response => {
        document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data));
        createField.value = "";
        createField.focus();
    }).catch(err => {
        console.log("iltimos qaytadan harakat qilib ko'ring");
    });
});

// delete amali uchun funcrion va buyruqlar yozish.

document.addEventListener("click", function (e) {
//    delete oper
    if(e.target.classList.contains("delete-me")) {
        if(confirm("Aniq o'chirmoqchimisiz"))
        axios
            .post("/delete-item", {id: e.target.getAttribute("data-id") })
        .then((response) => {
            console.log("deleted",response.data);
            e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
            console.log("iltimos qaytadan urunib ko'ring");
        });
    }
    

        
   
   


    
// edit oper
  if(e.target.classList.contains("edit-me")) {

        let userInput = prompt("O'zgartirish kiriting!", 
            e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
       if (userInput) {
         axios.post("/edit-item", {id: e.target.getAttribute("data-id"),
            new_input: userInput,

     })
     .then(response => {
      console.log(response.data); 
       e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput;
     })
     .catch(err => {
              console.log("iltimos qaytadan urunib ko'ring");
          });        
        } 
        }
    });

    document.getElementById("clean-all").addEventListener("click", function(){
     axios.post("/delete-all", { delete_all: true}).then((response) => {
        alert(response.data.state);
        document.location.reload();
     });   
    });
