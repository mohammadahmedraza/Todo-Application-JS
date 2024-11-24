function generateBgColor() {
    var hexColor = Math.random().toString(15).slice(2, 7).padEnd(6, 5)
    var body = document.querySelector('body');
    var generatedCode = `#${hexColor}`

    body.style.backgroundColor = generatedCode

}

setInterval(generateBgColor, 620)

var input = document.querySelector(".form-control");
var ol = document.querySelector("ol");
var globalArr = [];
function addTodo(){
    ol.innerHTML = "";
    console.log(input.value);
    globalArr.push(input.value);
    console.log(globalArr);
    for(var i=0;i<globalArr.length;i++){
        console.log(`${globalArr[i]}`);
        ol.innerHTML += `<li>${globalArr[i]}
        <div><button class= "btn-1" onclick="todoDelete(${i})"><span class = "icon-trash"><i class="fa-solid fa-trash"></i></span></button>
        <button class= "btn-2" onclick="todoEdited(${i})"><span class = "icon-edit"><i class="fa-regular fa-pen-to-square"></i></span></button></li><br></div>`;
        
    }
    input.value = "";
}

function todoDelete(index){
    globalArr.splice(index , 1);
    ol.innerHTML = "";
    for(var i=0;i<globalArr.length;i++){
        console.log(`${globalArr[i]}`);
        ol.innerHTML += `<li>${globalArr[i]}
        <div><button class="btn-1" onclick="todoDelete(${i})"><span class = "icon-trash"><i class="fa-solid fa-trash"></i></span></button>
        <button class= "btn-2" onclick="todoEdited(${i})"><span class = "icon-edit"><i class="fa-regular fa-pen-to-square"></i></span></div></button></li><br></div>`;
    }
}
function todoEdited(index){
    var editValue = prompt("Enter the value here", globalArr[index])
    globalArr.splice(index,1,editValue)
    ol.innerHTML = ""; 
        for(var i=0;i<globalArr.length;i++){
            console.log(`${globalArr[i]}`);
            ol.innerHTML += `<li>${globalArr[i]}
            <div><button class="btn-1" onclick="todoDelete(${i})"><span class = "icon-trash"><i class="fa-solid fa-trash"></i></span></button>
            <button class= "btn-2" onclick="todoEdited(${i})"><span class = "icon-edit"><i class="fa-regular fa-pen-to-square"></i></span></button></li><br></div>`;
        }
    }