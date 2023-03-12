<template>
    <section class="video-streams" id="video-streams">
    <div class="container">
        <div class="row justify-content-center" id="video-streams-container">
            <div class="col-lg-8 text-center">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <div class="video-container" id="user-container-${user.uid}">
                            <div class="username"><span class="user-name"></span></div>
                            <div class="video-player m-auto" id="user-${user.uid}">
                                <img src="../../assets/img/01.jpg" alt="">
                            </div>
                        </div>
                     
                     </div>
        
                     <div class="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <div class="video-container" id="user-container-${user.uid}">
                            <div class="username"><span class="user-name"></span></div>
                            <div class="video-player m-auto" id="user-${user.uid}">
                                <img src="../../assets/img/01.jpg" alt="">
                            </div>
                        </div>
                     
                     </div>
        
                     <div class="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <div class="video-container" id="user-container-${user.uid}">
                            <div class="username"><span class="user-name"></span></div>
                            <div class="video-player m-auto" id="user-${user.uid}">
                                <img src="../../assets/img/01.jpg" alt="">
                            </div>
                        </div>
                     
                     </div>
        
                     <div class="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <div class="video-container" id="user-container-${user.uid}">
                            <div class="username"><span class="user-name"></span></div>
                            <div class="video-player m-auto" id="user-${user.uid}">
                                <img src="../../assets/img/01.jpg" alt="">
                            </div>
                        </div>
                     
                     </div>
        
        
                     <div class="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <div class="video-container" id="user-container-${user.uid}">
                            <div class="username"><span class="user-name"></span></div>
                            <div class="video-player m-auto" id="user-${user.uid}">
                                <img src="../../assets/img/01.jpg" alt="">
                            </div>
                        </div>
                     
                     </div>
        
                     <div class="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <div class="video-container" id="user-container-${user.uid}">
                            <div class="username"><span class="user-name"></span></div>
                            <div class="video-player m-auto" id="user-${user.uid}">
                                <img src="../../assets/img/01.jpg" alt="">
                            </div>
                        </div>
                     
                     </div>
        
        
                     <div class="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <div class="video-container" id="user-container-${user.uid}">
                            <div class="username"><span class="user-name"></span></div>
                            <div class="video-player m-auto" id="user-${user.uid}">
                                <img src="../../assets/img/01.jpg" alt="">
                            </div>
                        </div>
                     
                     </div>
                
                </div>
            </div>
            <div class="col-lg-4 d-none d-lg-block">
                <div class="chat-container">
                    <div class="chat-title m-auto text-center mt-3">
                        <h6>Live chat</h6>
                        <p>Chat disappears after meeting ends</p>
                    </div>
                    <div class="chat-main">
                        <div class="message-container mb-3 d-flex p-2">
                            <img src="../../assets/img/01.jpg" class="rounded-circle" width="10%" alt="">
                            <div class="message m-2">
                                <span>Hello love</span>
                            </div>
                        </div>

                        <div class="message-container float-end d-flex">
                            <img src="../../assets/img/01.jpg" class="rounded-circle" width="10%" alt="">
                            <div class="message m-2 text-center">
                                <span class="">Hello love</span>
                            </div>
                        </div>
                    </div>
                    <div class="chat-input d-flex text-center">
                        <div class="form-group ">
                            <input type="text" class="form-control" id="chat-message">
                        </div>
                        <i class="fa fa-paper-plane mt-3"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center fixed-block fixed-bottom m-auto">
            <div class="col-lg-3 m-auto  mt-3">
            <div id="controls-wrapper" class="d-flex">
                <div id="icon-wrapper" class="m-3">
                    <i  alt="" class="fa fa-microphone" id="mic-btn"></i>
                </div>
                <div id="icon-wrapper" class="m-3">
                    <i  alt="" class="fa fa-video" id="camera-btn"></i>
                </div>
                <div id="icon-wrapper" class="m-3">
                    <i  alt="" class="fa fa-file" id="screen-btn"></i>
                </div>
                <div id="icon-wrapper" class="m-3">
                    <i  alt="" class="fa fa-bars-staggered" id="screen-btn"></i>
                </div>
                <div id="icon-wrapper" class="m-3">
                    <i  alt="" class="fa fa-phone" id="leave-btn"></i>
                </div>
            </div>
            </div>
        </div>
 
    </div>
   
</section>
</template>
<script>
export default {
    setup(){
        
    }
}
</script>
<style>
/* @import url(../../assets/room.css); */

.video-streams{
    height: 85vh;
    width: 100%;
}

.video-container{
    border: 1px solid #920000;
    border-radius: 5px;
    max-height: 300px;
    width: 300px;
    padding: 10px;

}


.video-player{
    height: 150px;
    width: 150px ;
    border-radius: 50%;
    background: #920000;
}

.video-player img{
    width: 100%;
    border-radius: 50%;
}


#icon-wrapper .fa{
    cursor: pointer;
    padding: 20px;
    border-radius:5px;
    color:#000;
    background: #c4c4c4;
    margin:0;
    font-size: 20px;
    justify-content: center;
}






#leave-btn{
    background: red !important;
    color: #fff !important;
}


.chat-container{
    height: 90vh;
    border: 1px solid #920000;
    width: 90%;
    border-radius: 20px;
    position: relative;
}

.chat-title h6{
    color: #920000;
}

.chat-title p{
    font-size: 13px;
}

.message-container{
    padding: 0 10px;
}



.message-container img{
    width: 17%;
    margin: 0 3px;
}

.message{
    padding: 5px 10px;
    background: #fff;
    box-shadow: 0 0 6px rgba(73, 72, 72, 0.2);
    border-radius: 100px;
    align-items: center;
}

.message span{
    margin: 0 auto;
}


.chat-input{
    padding: 10px;
    width: 100%;
    bottom: 1px;
    position: absolute;
    
}

.chat-input input{
    width:100%;
    padding: 8px;
    border: 2px solid #920000;
    border-radius: 20px;
}

.chat-input .fa-send{
    margin:auto 10px;
    font-size: 20px;
    color: #920000;
}



@media screen and (max-width: 476px) {
    #icon-wrapper .fa{
        padding: 10px !important;
        margin:0;
        font-size:17px !important;

    }
}


@media screen and (max-width:576px) {
    #icon-wrapper .fa{
        cursor: pointer;
        padding: 20px;
        border-radius:5px;
        color:#000;
        background: #c4c4c4;
        margin:0;
        font-size: 15px;
        margin: 0 auto;
        justify-content: center;
    }
    

.video-container{
    border: 1px solid #920000;
    border-radius: 5px;
    max-height: 300px;
    width: 100%;
    padding: 30px;

}
    

.video-streams{
    height: 85vh;
    width: 100%;
    padding: 30px;
}
    
    
}

</style>