onload = () =>{
        document.body.classList.remove("container");
};
document.querySelector('.play-audio').addEventListener('click', function() {
        var audio = document.getElementById('myAudio');
        audio.play();
    });
