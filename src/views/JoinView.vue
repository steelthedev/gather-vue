<template>
    <Navbar />
<section class="login" >
    <v-container>
        <v-row justify="center">
            <div class="form-container mb-4">
                <v-form class="form mt-3" @submit.prevent="handlesubmit">
                    <v-row justify="center">
                        <v-col lg="8" md="12" class="text-center">
                            <div class="form-title">
                                <h6>Join a meeting</h6>
                            </div>
                        </v-col>
                       

                        <v-col lg="12" cols="12" >
                            <div class="form-group">
                                <v-text-field  placeholder="Room Id" v-model="room_id" class="text-white" variant="plain"></v-text-field>
                            </div>
                        </v-col>



                        <v-col lg="12" cols="12"  >
                          
                                <v-btn class="l-btn  text-none pa-7 align-content-center" @click="handlesubmit" type="submit" flat>Join</v-btn>
                          
                        </v-col>

                            

                       
                    </v-row>
                </v-form>
            </div>
        </v-row>
    </v-container>

</section>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import joinMeeting from '../composables/room/join.js'
export default{
    components:{Navbar},
    setup(){
         const {room_id, handlesubmit} = joinMeeting()

        return {room_id, handlesubmit}
    }
}
</script>
<style>
.login{
    background-image:url(../assets/img/landing.png);
}
</style>