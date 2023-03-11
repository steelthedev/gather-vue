<template>
    <Navbar />
<section class="signin">
    <v-container>
        <v-row justify="center">
            <div class="form-container mb-4">
                <v-form class="form mt-3" @submit.prevent="handlesubmit">
                    <v-row justify="center">
                        <v-col lg="8" md="12" class="text-center">
                            <div class="form-title">
                                <h6>Create account</h6>
                            </div>
                        </v-col>
                        <v-col lg="12" cols="12">
                            <div class="form-group">
                                <v-text-field placeholder="Name" v-model="full_name" class="text-white" variant="plain"></v-text-field>
                            </div>
                        </v-col>


                        <v-col lg="12" cols="12">
                            <div class="form-group">
                                <v-text-field  placeholder="Email Address" v-model="email" class="text-white" variant="plain"></v-text-field>
                            </div>
                        </v-col>


                        <v-col lg="12" cols="12" >
                            <div class="form-group">
                                <v-text-field  placeholder="Password" v-model="password" class="text-white" variant="plain" type="password"></v-text-field>
                            </div>
                        </v-col>
                            

                        <v-col lg="12" class="text-center" cols="12" >
                            <small class="mb-3">By creating an account, you agree to all terms and conditions of the company.</small>
                            <div class="form-group text-center">
                                <v-btn class="l-btn mb-3 text-none pa-7 align-content-center mt-3" type="submit" flat>Create Account</v-btn>
                                <small class="text-center"><router-link to="/login"  class=""> Already have an account? </router-link></small>
                            </div>
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
import signup from '../../composables/auth/signup';
export default{
    components:{Navbar},
    setup(){
        const {email,password,full_name,handlesubmit} = signup()
    
    return{email,password,full_name,handlesubmit}
    }

}
</script>
<style>
.signin{
    background-image:url(../../assets/img/landing.png)
}
</style>
