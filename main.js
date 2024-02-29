const input = document.querySelector('#input');
const createButton = document.querySelector('#create_button');
const todoList = document.querySelector('#todo_list');
const modal = document.querySelector('.modal__window');
const delYesButton = document.querySelector('.green_button');
const delNoButton = document.querySelector('.red_button');




const createTodo = () => {
  if (input.value.trim() === '') {
    return alert('error');
  }

  const div = document.createElement('div');
  div.setAttribute('class', 'block_text');

  const divButtons = document.createElement('div');
  divButtons.setAttribute('class', 'div_button');

  const text = document.createElement('h3');

  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'delete_button');

  const editButton = document.createElement('button');
  editButton.setAttribute('class', 'edit_button');


  deleteButton.innerHTML = 'DELETE';
  editButton.innerHTML = 'EDIT';

  text.innerHTML = input.value;
  divButtons.append(deleteButton, editButton);
  div.append(text, divButtons);
  input.value = '';
  todoList.prepend(div);

  text.addEventListener('click', () => text.classList.toggle('toggle'));
  
  const newText = document.querySelector("#newText")
  newText.style.display = "none"
  const modalHeader = document.querySelector(".modal__header")


  editButton.onclick = () => {
    
    
    modal.style.display = 'block'
    newText.style.display = "block"
    modalHeader.style.display = "none"
    
    delYesButton.onclick=()=>{
      if (newText.value.trim() === '') {
        return alert('error');
      }
      text.innerHTML = newText.value
      modal.style.display="none"
    }
    newText.value=" "
    delNoButton.onclick=()=>{
      modal.style.display = "none"
    }
  }


  deleteButton.addEventListener('click', (event) => {
    newText.style.display = "none"
    modalHeader.style.display = "block"
    const parentDiv = event.target.parentNode.parentNode; // Получить родительский див
    modal.style.display = 'block'; // Показать модальное окно
    delYesButton.onclick = () => {
      parentDiv.remove(); // Удалить только этот див
      modal.style.display = 'none'; // Скрыть модальное окно
    };
    delNoButton.onclick = () => {
      modal.style.display = 'none';
    }
  });
  
};

createButton.onclick = createTodo;

window.onkeydown = (event) => {
  if (event.code === 'Enter') {
    createTodo();
  }
};
