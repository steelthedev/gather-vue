<template>
     <div class="col-auto col-md-4 col-xl-2 px-sm-2 px-0  sidebar">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2  min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline"><img src="../assets/img/gather-3.svg" width="100px" alt=""></span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0  align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <router-link to="/dashboard" class="nav-link side-link px-0 mt-2 align-middle" data-toggle="tooltip" data-placement="top" title="Webinars">
                          <i class="fs-4 fa fa-user"></i> <span class="ms-1 d-none d-sm-inline">Profile</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/"  class="nav-link side-link px-0 mt-2 align-middle" data-toggle="tooltip" data-placement="top" title="Meetings">
                            <i class="fs-4 fa fa-handshake"></i> <span class="ms-1 d-none d-sm-inline">Meetings</span> </router-link>
                    </li>
                     <!-- <li>
                        <router-link to="/" class="nav-link side-link px-0 mt-2 align-middle" data-toggle="tooltip" data-placement="top" title="Webinars">
                            <i class="fs-4 fa-podcast fa"></i> <span class="ms-1 d-none d-sm-inline">Webinars</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/" class="nav-link side-link px-0 mt-2 align-middle " data-toggle="tooltip" data-placement="top" title="Recordings">
                            <i class="fs-4 fa fa-microphone"></i> <span class="ms-1 d-none d-sm-inline">Recordings</span></router-link>
                    </li>
                    <li>
                        <router-link to="/" class="nav-link side-link px-0 mt-2 align-middle" data-toggle="tooltip" data-placement="top" title="Settings">
                            <i class="fs-4 fa fa-cog"></i> <span class="ms-1 d-none d-sm-inline">Settings</span> </router-link>
                           
                    </li>
                    <li>
                        <router-link to="/" class="nav-link side-link px-0 mt-2 align-middle" data-toggle="tooltip" data-placement="top" title="User Management">
                            <i class="fs-4 fa fa-user-cog"></i> <span class="ms-1 d-none d-sm-inline">User Management</span> </router-link>
                    </li>
                    <li>
                        <router-link to="/" class="nav-link side-link px-0 mt-2 align-middle" data-toggle="tooltip" data-placement="top" title="Room Management">
                            <i class="fs-4 fa fa-building"></i> <span class="ms-1 d-none d-sm-inline">Room Management</span> </router-link>
                    </li>
                    <li>
                        <router-link to="/" class="nav-link side-link px-0 mt-2 align-middle" data-toggle="tooltip" data-placement="top" title="Account Management">
                            <i class="fs-4 fa fa-user-circle"></i> <span class="ms-1 d-none d-sm-inline">Account Management</span> </router-link>
                    </li> -->

                    <li>
                        <a to="/" class="nav-link btn side-link px-0 mt-2 align-middle" @click="signout" data-toggle="tooltip" data-placement="top" title="Logout">
                            <i class="fs-4 fa fa-arrow-right"></i> <span class="ms-1 d-none d-sm-inline">Logout</span> </a>
                    </li> 
                </ul>
                

            </div>
        </div>
</template>
<script>
import logout from '../composables/auth/logout';
export default{
    setup(){
        const {signout} = logout()
        return{signout}
    
    }
}
</script>
<style scoped>
.sidebar{
    background: #c4c4c4;
    height: 100% !important;
    min-height: 100vh;
    padding: 20px;
    color: #920000;
}

.side-link{
    color: #920000;
    font-weight: 500;
    font-size: 16px;
    background-image: linear-gradient(
        to right,
        #920000,
        #920000 50%,
        #000 50%
      );
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    position: relative;
    transition: all 0.3s ease-in-out;
    
    
}

.side-link:before {
    content: '';
    background: #920000;
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }

.side-link:focus::before, .side-link:hover::before{
    width: 100%;
}

.side-link:focus, .side-link:hover{
    color: #920000;
    background-position: 0;
 
    
}


.side-link{
    margin: 20px 0;
}</style>