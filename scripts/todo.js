"use strict";
const mainDropdown = document.getElementById("mainDropdown");
window.onload = () =>{
 let outputInf = document.getElementById("outputInf");
mainDropdown.onchange = () =>{

    let newOption = document.createElement("option");
    newOption.value = " ";
    newOption.textContent = "Select a user";
    mainDropdown.appendChild(newOption);


    fetch(`http://localhost:8083/api/users`)
    .then((res) => res.json)
    .then((data) =>{
        data.forEach(user => {
            let newOption = document.createElement("option");
            newOption.textContent = user.name;
            newOption.value = user.id;
            mainDropdown.appendChild(newOption);
            
        });
    })


    let mainDropdown = document.getElementById("mainDropdown").value;

    fetch(`http://localhost:8083/api/todos`)
    .then((res) => res.json())
    .then((data) =>{
        data.forEach(user => {
            if(mainDropdown == user.id){
               
                outputInf.innerHTML = `${user.category}`
            }
            
        });
    })
    

}






}