function addTask(){
    var taskinput = document.getElementById("taskInput");
    var input = taskinput.value;
    if (input == ''){
        alert("you must add something");
        return;
    }
    input.value = '';
    var list = document.getElementById("tasklist");
    var item = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change",function(){
        if(this.checked){
            item.classList.add("completed");
        }
        else{
            item.classList.remove("completed");
        }
    });
    var label = document.createElement("label");
    label.textContent = input;
    item.appendChild(checkbox);
    item.appendChild(label);
    list.appendChild(item);

}