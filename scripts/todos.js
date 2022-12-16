"use strict";
const mainDropdown = document.getElementById("mainDropdown");
window.onload = () =>{
 let outputInf = document.getElementById("outputInf");

   function dropdownPopulate(){

let newOption = document.createElement("option");
newOption.value = " ";
newOption.textContent = "Select a user";
mainDropdown.appendChild(newOption);


fetch(`http://localhost:8083/api/users`)
.then(res => res.json())
.then(usersData =>{
    for(let user of usersData){

        let newOption = document.createElement("option");
        newOption.textContent = user.name;
        newOption.value = user.id;
        mainDropdown.appendChild(newOption);

       
    }
            });
        
    

    }


    dropdownPopulate();

mainDropdown.onchange = () =>{

  

    let mainDropdown = document.getElementById("mainDropdown").value;

    fetch(`http://localhost:8083/api/todos`)
    .then(res => res.json())
    .then(usersData =>{
        for(let user of usersData){
            if(mainDropdown == user.id){
               
                outputInf.innerHTML = `<ul>

                <li>Category: ${user.category} </li>
                <li>Category: ${user.description} </li>
                <li>Category: ${user.deadline} </li>
                <li>Category: ${user.priority} </li>
                <li>Category: ${user.completed} </li>
                </ul> `
            } else if(mainDropdown == ""){
                outputInf.innerHTML = " ";
            }
            
        }
    })
    



 
}






}