const body = document.querySelector('body');

const IMG_NUMBER = 3;

function paintImg(imgNumber){  //random숫자에 해당하는 이미지를 인자로 받아 body에 나타내는 함수.
    const image = new Image();  //Image()는 ㅑㅡㅁㅎㄷ 속성을 갖는 객체를 생성하는 메소드.
    image.src = `image/${imgNumber+1}.jpg`;
    image.classList.add('bgImage');
    body.appendChild(image);
}

function genRandom(){  //random숫자를 반환하는 함수.
    const number=Math.floor(Math.random() *IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom(); //genRandom에서 랜덤 숫자를 받아와 randomNumber에 부여.
    paintImg(randomNumber); 
}

init();