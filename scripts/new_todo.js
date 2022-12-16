"use strict";
const outputInf = document.getElementById("outputInf");
const addBtn = document.getElementById("addBtn");
const mainDropdown = document.getElementById("mainDropdown");
const dropdownForCategory = document.getElementById("dropdownForCategory");
const priorityStatus = document.getElementById("priorityStatus");
const descriptionTxtA = document.getElementById("descriptionTxtA");
const ddateId = document.getElementById("ddateId");

window.onload = () => {


// populate

function dropdownPopulate() {

    let newOption = document.createElement("option");
    newOption.value = " ";
    newOption.textContent = "Select a user";
    mainDropdown.appendChild(newOption);


    fetch(`http://localhost:8083/api/users`)
        .then(res => res.json())
        .then(usersData => {
            for (let user of usersData) {

                let newOption = document.createElement("option");
                newOption.textContent = user.name;
                newOption.value = user.id;
                mainDropdown.appendChild(newOption);
            }
        });



}


dropdownPopulate();

mainDropdown.onchange = () => {



    let mainDropdown = document.getElementById("mainDropdown").value;

    fetch(`http://localhost:8083/api/todos`)
        .then(res => res.json())
        .then(usersData => {
            for (let user of usersData) {
                if (mainDropdown == user.id) {

                    outputInf.innerHTML = `<ul>

            <li>Category: ${user.category} </li>
            <li>Category: ${user.description} </li>
            <li>Category: ${user.deadline} </li>
            <li>Category: ${user.priority} </li>
            <li>Category: ${user.completed} </li>
            </ul> `
                } else if (mainDropdown == "") {
                    outputInf.innerHTML = " ";
                }

            }
        })





}
// second populate
function dropdownPopulateCategory() {

    let newOption = document.createElement("option");
    newOption.value = " ";
    newOption.textContent = "Select a category";
    dropdownForCategory.appendChild(newOption);


    fetch(`http://localhost:8083/api/categories`)
        .then(res => res.json())
        .then(usersData => {
            for (let user of usersData) {

                let newOption = document.createElement("option");
                newOption.textContent = user.name;
                newOption.value = user.id;
                dropdownForCategory.appendChild(newOption);


            }
        });



}


dropdownPopulateCategory();


dropdownForCategory.onchange = () => {



    let dropdownForCategory = document.getElementById("dropdownForCategory").value;

    fetch("http://localhost:8083/api/todos")
        .then(res => res.json())
        .then(usersData => {
            for (let user of usersData) {
                if (dropdownForCategory == user.id) {

                    outputInf.innerHTML = `<ul>

        <li>Category: ${user.category} </li>
        <li>Category: ${user.description} </li>
        <li>Category: ${user.deadline} </li>
        <li>Category: ${user.priority} </li>
        <li>Category: ${user.completed} </li>
        </ul> `
                } else if (dropdownForCategory == "") {
                    outputInf.innerHTML = " ";
                }

            }
        })










}













// endPopulate





  addBtn.onclick = () =>{
   const outputInf = document.getElementById("outputInf")
   let pstData = {
    
    mainDropdown: mainDropdown.value,
    dropdownForCategory: dropdownForCategory.value,
    // priorityStatus: priorityStatus.value,
    descriptionTxtA: descriptionTxtA.value,
    ddateId: ddateId.value

   };

    fetch("http://localhost:8083/api/todos", {
  method: "POST",
  body: JSON.stringify(pstData),
  headers:
  {
    "content-type": "application/json; charset=UTF-8"
  }

    })
    .then(res => res.json())
    .then(json =>{

      window.location.href = "index.html";

    })
    .then(err=>{
      outputInf.innerHTML = "Error"
    })
    
  }
}