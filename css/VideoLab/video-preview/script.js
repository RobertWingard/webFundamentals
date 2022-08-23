console.log("page loaded...");

function playVideo(leftVideo){
    leftVideo.play()
}

function pauseVideo(leftVideo){
    leftVideo.pause()
}

function mainVideo(vid){
    let vid1 = document.querySelector(".vid1").src
    console.log(vid.src, vid1)
}