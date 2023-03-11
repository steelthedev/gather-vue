<template>
  <section class="dashboard">
<div class="container-fluid">
    <div class="row flex-nowrap">
       <Sidebar />
        <div class="col py-3">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <a href="" class="p-link float-end mt-5 pt-2">Edit <i class="fa fa-pencil"></i></a>
                    <div class="profile-picture d-lg-flex">
                        <img src="../../assets/img/01.jpg" width="120px" max-width="150px" alt="">
                        <div class="p-title m-4">
                            <h2>{{ user.full_name }}</h2>
                            <span>{{ user.email }}</span>
                        </div>
                    </div>          
                </div>
                
                <div class="col-lg-10 mt-3 ">
                    <div class="personal-heading">
                        <h6>Personal</h6>
                    </div>
                    <div class="row personal-items">
                        <div class="col-4">
                            <h6>Phone number</h6>
                            <h6>Language</h6>
                            <h6>Time Zone</h6>
                        </div>

                        <div class="col-4">
                            <h6>{{ user.phone_number }}</h6>
                            <h6>English</h6>
                            <h6>GMT +1</h6>
                        </div>


                        <div class="col-4">
                         <p><a href="" class="p-link">Add number</a></p> 
                            <p><a href="" class="p-link">Edit <i class="fa fa-pencil"></i></a></p>
                            <p><a href="" class="p-link">Edit <i class="fa fa-pencil"></i></a></p>
                        </div>

                    </div>
                </div>

                <div class="col-lg-10">
                    <div class="personal-heading">
                        <h6>Meetings</h6>
                    </div>
                    <div class="row personal-items">
                        <div class="col-4">
                            <h6>Personal meeting ID</h6>
                          
                        </div>

                        <div class="col-4">
                            <h6>******7788</h6>
                            <div class="form-group d-lg-flex">
                                <input type="text" placeholder="Metting link" class="form-control shadow-none">
                                <button class="btn g-btn">Generate</button>
                            </div>
                          
                        </div>


                        <div class="col-4">
                         <p><a href="" class="p-link">Add number</a></p> 
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
</section>
</template>
<script>
import { onMounted } from 'vue';
import Sidebar from '../../components/Sidebar.vue';
import getUser from '../../composables/dashboard/getUser';

export default{
    components: { Sidebar },
    setup() {
        const {user,getuser} = getUser()

        onMounted(()=>{
            getuser()
        })

        return {user}
    },

}

</script>
<style scoped>
/** dashboard **/

img{
    width: 100px;
}


.profile-picture img{
    border-radius: 30px;
}

.p-title h2{
    color: #920000;
    font-size: 27px;
    font-weight: 600;
}

.p-title span{
    color: #000000;
    font-size: 16px;
    font-weight: 500;
}

.p-link{
    color: #920000;
    text-decoration: none;
}

.p-link:hover{
    color: #920000;
}


.personal-heading{
    background: #c4c4c4;
    padding: 8px;
    border-radius: 10px;
}


.personal-heading h6, .personal-items h6{
    margin: 0 auto;
    color: #000000;
    font-size: 16px;
    font-weight:600;
}

.personal-items{
    padding: 10px;
}
.personal-items h6{
    margin: 20px 0;
}

.personal-items p{
  margin: 17px 0;
}


</style>