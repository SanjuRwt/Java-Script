var music = document.querySelector("audio");
var img = document.querySelector("img");
var play = document.getElementById('play');
var prev = document.getElementById('prev');
var next = document.getElementById('next');


var songs = [
    {
        title:"Dheere Dheere",
        artist:"Yo_Yo_Honey_Singh",
        image: "img/dheere theam.jpg",
        aud:"song/Dheere_Dheere_Se_Meri_Zindagi_-_Yo_Yo_Honey_Singh_Song___Slowed_And_Reverb_Lofi_Mix(128k).mp3"
    },
    {
        name:"Bewafa.mp3",
        title:"Bewafa song",
        artist:"Imran Khan",
        image: "img/Bewafa.jpg",
        aud:  "song/Bewafa.mp3"
    },
    {
        name:"song3",
        title:"Khaab_song",
        artist:"Yo_Yo_Honey_Singh",
        image: "img/khaab.jpg",
        aud:  "song/Khaab_song.mp3"
    }
]

var isPlaying = false;

function playMusic() {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play', "fa-pause")
    img.classList.add("anime")
};

function pauseMusic() {
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause', "fa-play")
    img.classList.remove("anime")
};

play.addEventListener('click', () => {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
});

var loadMusic=(songs)=>{
    document.querySelector('.title').innerHTML=songs.title;
    document.querySelector('.artistName').innerHTML=songs.artist;
    document.querySelector('.im').src=`${songs.image}`;
    document.querySelector('.song1').src=`${songs.aud}`;
};
loadMusic(songs[0])
var songIndex=0;

const nextSong=()=>{
    songIndex=(songIndex+1)%songs.length;
    loadMusic(songs[songIndex]);
};

const prevSong=()=>{
    songIndex=(songIndex-1+songs.length)%songs.length;
    loadMusic(songs[songIndex]);
};
next.addEventListener('click',nextSong);
prev.addEventListener('click',prevSong);

loadMusic();