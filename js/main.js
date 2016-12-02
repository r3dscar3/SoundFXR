$(document).ready(function () {
    
    $('.stop').on('click', function () {
        window.location.reload(true);
    });
    
    var sfxBaseUrl = "sfx/";
    var songBaseUrl = "songs/";
    var sfxAudio = ["thunder-loud.mp3", "telephone_ringing.mp3", "glass_shatter.mp3", "dial_tone.mp3", "Firework-1.wav", "Firework-2.mp3"];
    var songAudio = ["Circus-music.mp3", "funeral-piano.mp3", "airplane.mp3", "rain-thunder.mp3", "mystery-jam.mp3", "park-noises.mp3", "Laurel-and-Hardy.mp3"];

    $('.sfx .btn').on('click', function () {
        var sfx = $(this).attr('id').substring(1); //get the index of button
        var sfxPlaying = new Audio(sfxBaseUrl + sfxAudio[sfx - 1]);

        sfxPlaying.play();

    });

    $('.songs .btn').on('click', function () {
        var song = $(this).attr('id').substring(1); //get the index of button
        var songPlaying = new Audio(songBaseUrl + songAudio[song - 1]);

        songPlaying.play();
    });
});