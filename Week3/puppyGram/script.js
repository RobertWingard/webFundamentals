console.log('okay');

function petDog(){
    alert('You just pet me')
}

function toggleLogin(btn){
    console.log('something', btn);

    // btn.innerText = "Logout";

    if(btn.innerText === 'Login'){
        btn.innerText = 'Logout';
    }else{
        btn.innerText = 'Login';
    }
}

function removeButton(btn){
    // console.log('removing', btn)
    btn.remove();
}

function switchImg(imgElement){
    console.log(imgElement.src);
    if(imgElement.src === "http://127.0.0.1:5500/webFundamentals/Week3/puppyGram/resources/puppy.jpeg"){
        imgElement.src = "./resources/anothaPuppy.jpeg"
    }else{
        imgElement.src = "./resources/puppy.jpeg"
    }
}

function removeCookieBox(id){
    // console.log('id of the box')
    let elementToRemove =  document.querySelector('#'+id)
    elementToRemove.remove();
}

function increaseLikes(elementID){
    console.log('i like', elementID);
    let spanElement = document.querySelector('#'+ elementID)
    console.log(spanElement.innerText)

    let currentCount = spanElement.innerText;
    currentCount ++;

    spanElement.innerText = currentCount
}

function playVideo(videoElement){
    // console.log('and action', videoElement)
    videoElement.play();
}

function pauseVideo(videoElement){
    // console.log('and action', videoElement)
    videoElement.pause();
}
