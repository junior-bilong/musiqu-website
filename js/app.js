let mySong = document.getElementById('mySong');
let icon = document.getElementById('icon')

icon.onclick = function() {
    if (mySong.paused) {
        mySong.play();
        icon.src = "image/play.png";
    }else {
        mySong.pause();
        icon.src = "image/pause.jpeg"
    }
}

