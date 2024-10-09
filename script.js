
console.log("Testing the JS");

// Declare variables
let completedCount = 0;
let todoID = 1;

const todoArray = [];

// Declare HTML element
const inputTodo = document.querySelector("#inputTodo");
const addBtn = document.querySelector("#addBtn");
const infoTodo = document.querySelector ("#infoTodo");
const todoList = document.querySelector ("ul");
const countTodo = document.querySelector ("#countTodo");



// Function for changing status on todoItem
function changeStatus(completed){

    let changeIndex = 0;
    todoArray[changeIndex] = completed;
    console.log(todoArray);
}


addBtn.addEventListener(
    "click", 
    function(){
        //get value from input
        const text = inputTodo.value;

        // condition: check input not empty.
         if(text.length == 0)
        {
            infoText.innerText = "Input must not be empty";
            infoText.classList.add('alert')
            setTimeout (()=>{
                infoText.classList.remove('alert');
            }, 2000)
            return;
        }
         else {
            infoText.innerText = "";
        }  

        // add new html element in ul.
        const listItem = document.createElement("li");
        todoList.appendChild(listItem);

        const itemLabel = document.createElement("span");
        itemLabel.innerText = text;
        itemLabel.setAttribute('class','text');
        listItem.appendChild(itemLabel);

        const  trashcan = document.createElement("span");
        trashcan.innerHTML = '&#X1F5D1;';
        trashcan.setAttribute('class','trashcan');
        listItem.appendChild(trashcan);


        // add eventlistener to the new li-element.
        itemLabel.addEventListener("click", function () {

             // The listener code.
            if(listItem.getAttribute("class") == "completed")
            {
                completedCount--;
                listItem.setAttribute("class", "");
                changeStatus(false)
            }
            else
            {
                completedCount++;
                listItem.setAttribute("class", "completed");
                changeStatus(true)
            }

            
            countTodo.innerHTML = `${completedCount} completed`;
            });

        // add listener to trashcan
        trashcan.addEventListener(
        "click",
        function(){
            listItem.remove();
        });
         
       //Add array
       const todoObject = {};
       todoObject.id =todoID;
       todoObject.name = text;
       todoObject.completed = false;
       todoArray.push(todoObject);
       // console.log(todoArray);

       // set input empty
       todoID++;
       inputTodo.value = "";
    
    });