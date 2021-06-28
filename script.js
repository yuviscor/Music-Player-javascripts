const musiccontainer = document.querySelector('.music-container');
const play = document.querySelector('#play');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');

const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

//songs

const song = ['cedric','gym','KSI','pattade'];



let songindex = 2;

//initially load

loadsongs(song[songindex])


//update songs

function loadsongs(song){
title.innerText = song;
audio.src =  `music/${song}.mp3`;
cover.src = `images/${song}.jpg`;

}

function playsong(){

musiccontainer.classList.add('play');

play.querySelector('i.fas').classList.remove('fa-play')
play.querySelector('i.fas').classList.add('fa-pause')

audio.play()
}

function pausesong(){

    musiccontainer.classList.remove('play');

    play.querySelector('i.fas').classList.add('fa-play')
    play.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

function pres(){

songindex--;

if(songindex<0){
    songindex = song.length-1;
}

loadsongs(song[songindex])
playsong()
}

function nexts(){

    songindex++;

    if (songindex > song.length-1) {
        songindex = 0;
    }

    loadsongs(song[songindex])
    playsong()



}

function updateprogress(e){
const {duration,currentTime} = e.srcElement;

const progressPercent = (currentTime/duration)*100;

progress.style.width =  `${progressPercent}%`

}

function setprogress(e){

const width = this.clientWidth;
const clickx = e.offsetX;
const duration  = audio.duration;

audio.currentTime = (clickx/width)*duration;





}
//event listner

play.addEventListener('click',()=>{


    const isPlaying = musiccontainer.classList.contains('play');
    

    if(isPlaying){

        pausesong()
    }
    else{
        playsong();
    }
})

prev.addEventListener('click',pres);

next.addEventListener('click', nexts);


audio.addEventListener('timeupdate', updateprogress);
progressContainer.addEventListener('click',setprogress);
audio.addEventListener('ended',nexts);