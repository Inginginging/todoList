const form = document.querySelector(".js-greetForm");
const input= form.querySelector('input');
const greeting= document.querySelector(".js-greetings");

const User_Ls = 'currentuser';
const showing_CN = 'showing';

function saveName(text){  //localStorage의 currentuser값으로 text를 넘겨서 저장.
    localStorage.setItem(User_Ls, text);
}  

function handleEvent(event){
   event.preventDefault();   //form의 값이 자동 제출 되는것을 막음.
   const currentvalue = input.value;
   paintGreeting(currentvalue);
   saveName(currentvalue);  
}

function askForName(){   //사용자를 묻는 함수
    form.classList.add(showing_CN);   //what is your name의 form이 보임.
    form.addEventListener("submit",handleEvent)
}

function paintGreeting(text){  //사용자에게 인사하는 함수
    form.classList.remove(showing_CN);  //폼 자체를 안보이게 함.
    greeting.classList.add(showing_CN); //<h4>테그를 보이게 함.
    greeting.innerText=`Welcome ${text}`;  
}

function loadName(){
    const currentUser= localStorage.getItem(User_Ls);
    if (currentUser === null){   //currentUser값이 없다면 askForName 실행
        askForName();
    }
    else{
        paintGreeting(currentUser);
    }
}


function init(){
    loadName();
}

init();
