

function play(name){
    let track = document.getElementById(name);
    track.play();
}
window.addEventListener('keydown',function(e){
    console.log('hii')
    let key = e.keyCode;
    if(key === 65){
        play('A');
    } else if(key === 83){
        play('S')
    } else if(key === 68){
        play('D')
    } else if(key === 70){
        play('F')
    } else if(key === 71){
        play('G')
    } else if(key === 72){
        play('H')
    } else if(key === 74){
        play('J')
    } else if(key === 75){
        play('K')
    } else if(key === 76){
        play('L')
    }
});

/* document.body.addEventListener('keypress',function(e){
    var key = e.keyCode;
    if(key === 13){
        console.log('keypress for => ' + key);
    }
    
});

document.body.addEventListener('keyup',function(e){
    var key = e.keyCode;
    if(key === 13){
        console.log('keyup for => ' + key);
    }
    
}); */