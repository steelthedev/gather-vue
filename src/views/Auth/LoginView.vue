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
                                <h6>Sign in</h6>
                            </div>
                        </v-col>
                       


                        <v-col lg="12" cols="12" >
                            <div class="form-group">
                                <v-text-field  placeholder="Email Address" v-model="email" class="text-white" variant="plain"></v-text-field>
                            </div>
                        </v-col>


                        <v-col lg="12" cols="12" >
                            <div class="form-group">
                                <v-text-field  placeholder="Password" v-model="password" class="text-white" variant="plain" type="password"></v-text-field>
                            </div>
                        </v-col>
                            

                        <v-col lg="12" cols="12"  >
                           
                                <v-btn class="l-btn  text-none pa-7 align-content-center" type="submit" flat>Login</v-btn>
                              
                        </v-col>

                            

                       
                    </v-row>
                </v-form>
            </div>
        </v-row>
    </v-container>

</section>
</template>
<script>
import Navbar from '../../components/Navbar.vue';
import login from '../../composables/auth/login';
export default{
    components:{Navbar},
    setup(){
        const {email,password,handlesubmit} = login()

        return {email,password,handlesubmit}
    }
}
</script>
<style>
.login{
    background-image:url(../../assets/img/landing.png);
}
</style>