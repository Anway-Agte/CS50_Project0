const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
   
  

  itemCountSpan.innerHTML ++ ; 
  li = document.createElement("li") ;
  checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.value = 0;
        checkbox.name = "todo";
  checkbox.setAttribute("class" , classNames.TODO_CHECKBOX) ; 
  checkbox.setAttribute("onClick" , "updateCheckCount()") ; 
  li.appendChild(checkbox);
  li.appendChild(document.createTextNode("Task" + itemCountSpan.innerHTML));
  li.setAttribute("class" , classNames.TODO_TEXT) ; 
  button = document.createElement("button") ; 
  button.setAttribute("class" , classNames.TODO_DELETE) ; 
  button.innerHTML = "Delete" ; 
  button.onclick = function(){
    this.parentElement.remove()
    updateCheckCount() ; 
  };
  li.appendChild(button) ; 
  list.appendChild(li) ;
  updateCheckCount() ; 
}

function updateCheckCount(){
  let unchecked = 0 ; 
  checkBoxList = document.getElementsByClassName(classNames.TODO_CHECKBOX) ; 
  for(i=0;i<checkBoxList.length ; i++){

    if( !checkBoxList[i].checked ){

      unchecked ++ ; 
       
    }

  } 
  uncheckedCountSpan.innerHTML = unchecked ; 
} 

