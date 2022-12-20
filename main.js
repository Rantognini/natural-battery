let notif = new Audio('audio/notification.mp3');
let comment = new Audio('audio/message.m4a');


function openMessage(){
    
    const msgBox = document.getElementById("message");
    msgBox.style.bottom = "0";
    
    comment.play();


    setTimeout(() => { msgBox.style.bottom = "-50%"; }, 30000);
    
}