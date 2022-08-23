function likes(increase){
    // console.log('up it', increase);
    let spanElement = document.querySelector(`#${increase}`);
    // console.log(spanElement.innerText)

    let currentCount = spanElement.innerText;
    currentCount ++;
    spanElement.innerText = currentCount

}

