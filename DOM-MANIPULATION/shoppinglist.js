const list = document.querySelector("ul");
const item = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener ("click", () =>{
    
    const itemText = item.value;

    item.value = "";

    const listItem = document.createElement("li");
    const span =  document.createElement("span");
    const delBtn =  document.createElement("button");

    span.textContent = itemText;
    delBtn.textContent = "Delete";

    if(span.textContent != ""){
        listItem.appendChild(span);
        listItem.appendChild(delBtn);
        list.appendChild(listItem);
    }

    

    delBtn.addEventListener("click", () => list.removeChild(listItem));
    
    item.focus();

});