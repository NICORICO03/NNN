function playAudio(audioId) {
    const audioPlayer = document.getElementById('audioPlayer');
    
    switch(audioId) {
        case 'audio1':
            audioPlayer.src = 'audio1.mp3';
            break;
        case 'audio2':
            audioPlayer.src = 'audio2.mp3';
            break;
        case 'audio3':
            audioPlayer.src = 'audio3.mp3';
            break;
        case 'audio4':
            audioPlayer.src = 'audio4.mp3';
            break;
        case 'audio5':
            audioPlayer.src = 'audio5.mp3';
            break;
        default:
            audioPlayer.src = '';
    }

    audioPlayer.play();
    audioPlayer.style.display = 'block';
}