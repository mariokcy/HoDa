    var myVideo=document.getElementById("video1");
    var endPoint=0;
    function playPause() {
            if (myVideo.paused)
                myVideo.play();
            else
                myVideo.pause();
    }
    function goTo(x)
    {
        //check length error
        myVideo.currentTime=x;
        myVideo.play();
    }
    function play(x,y)
    {
        //detect x<y
        setStop(y);
        goTo(x);
    }
    function onPlay()
    {
        if(myVideo.currentTime>endPoint)
            myVideo.pause();
    }
    function setStop(stop){endPoint=stop;}
    //eventhandler
    myVideo.ontimeupdate=function(){onPlay();}
