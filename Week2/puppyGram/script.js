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
    if(imgElement.src === "http://127.0.0.1:5500/Week3/puppyGram/resources/puppy.jpeg"){
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

function searchPuppy(){
    console.log('searching for a puppy name')
    let element = document.querySelector('#name-search');
    // console.log(element.value)
    alert(`You searched for a puppy named ${element.value}`);
}


function chooseLocation(element){
    console.log('choosing a location', element.value);
    // alert('You are seaching for a pet in this location ' + element.value)
    alert(`You are searching for a dog in ${element.value}. Come by anytime!`)
}