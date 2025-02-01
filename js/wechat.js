/**
 * Created by ChrisBi on 16/7/24.
 */
//audio left
function PlayAudioLeft(idx){
    var voice = document.getElementById("voice" + idx);
    var img = document.getElementById("PlayPause" + idx);
    img.onclick = function(){
        if (voice.paused){
            voice.play();
        } else{
            voice.pause();
        }
    }
    voice.addEventListener("play", function (e) {
        img.src = "icon/voice_left_click.gif";
    }, false);
    voice.addEventListener("pause", function (e) {
        img.src = "icon/voice_left.png";
    }, false);

}


//audio right
function PlayAudioRight(idx){
    var voiceR = document.getElementById("voiceMe" + idx);
    var imgR = document.getElementById("PlayPauseMe" + idx);
    imgR.onclick = function(){
        if (voiceR.paused){
            voiceR.play();
        } else{
            voiceR.pause();
        }
    }
    voiceR.addEventListener("play", function (e) {
        imgR.src = "icon/voice_right_click.gif";
    }, false);
    voiceR.addEventListener("pause", function (e) {
        imgR.src = "icon/voice_right.png";
    }, false);
}


