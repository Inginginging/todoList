const toDoForm=document.querySelector(".js-toDoForm");
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.querySelector(".js-toDoList");

const TODOS_LS= "todos";

let toDos=[]; //스토리지에 저장될 배열 설정. deleteToDo함수에서 배열이 변하므로 let으로 설정.

function deleteToDo(event){
    const btn= event.target; //✔버튼에 click이벤트가 작용한다는것을 보여줌
    const li=btn.parentNode; //li를 btn의 부모노드로 지정. 그래야만 li별 id로 구분 가능
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){ //filter함수를 통해 조건에 살아남은 배열 요소들만 반환.
        return toDo.id !== parseInt(li.id); //li의 id값은 문자열이므로 정수로 변환.
    });
    toDos = cleanToDos; //스토리지에 저장된 toDos 함수를 cleanToDos함수로 업데이트.
    saveToDos(); // 다시 저장.
}

function saveToDos(){ //toDoObj를 배열형태(toDos)로 로칼스토리지에 저장하는 함수
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));  //객체형태로 저장되는 toDoObj를 string화하여 저장.
}

function paintToDo(text){
    const li = document.createElement("li");  
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length+1; //각 리스트별, toDoObj별 id를 주기위해 newId만듬
    delBtn.innerText='❌';
    delBtn.addEventListener("click",deleteToDo);
    span.innerText=text;
    li.appendChild(span);
    li.appendChild(delBtn);  //span과 delBtn을 li의 자식 노드로 집어 넣음.
    toDoList.appendChild(li); //그러한 li들을 todoList의 자식 노드로 집어 넣음.
    li.id=newId;
    const toDoObj={ 
        text: text,
        id: newId
    };
    toDos.push(toDoObj);  //toDos배열에 객제들을 집어 넣음.
    saveToDos();
}

function handlesubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function loadToDos(){
    const loadedToDos =localStorage.getItem(TODOS_LS);
    if(loadedToDos !==null){
        //toDoList.innerText="If you done, press '✔'";
        const parsedToDos = JSON.parse(loadedToDos); 
        parsedToDos.forEach(function(todo){   
            paintToDo(todo.text);
        }) /*forEach를 통해 콜백함수를 모두 실행. 콜백함수란. 이벤트가 발생하거나 특정시점에 도달했을때
             시스템에서 호출되는 함수. 또한 특정함수의 인자로 넘겨서 코드 내부에서 호출되는 함수 */
       
    }

}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handlesubmit);
}

init();