<template>
    <Navbar />
<section class="signin" style="background-image:url(img/landing.png);" >
    <v-container>
        <v-row justify="center">
            <div class="form-container mb-4">
                <v-form class="form mt-3">
                    <v-row justify="center">
                        <v-col lg="8" md="12" class="text-center">
                            <div class="form-title">
                                <h6>Create account</h6>
                            </div>
                        </v-col>
                        <v-col lg="12" cols="12">
                            <div class="form-group">
                                <v-text-field placeholder="Name" class="text-white" variant="none"></v-text-field>
                            </div>
                        </v-col>


                        <v-col lg="12" cols="12">
                            <div class="form-group">
                                <v-text-field  placeholder="Email Address" class="text-white" variant="none"></v-text-field>
                            </div>
                        </v-col>


                        <v-col lg="12" cols="12" >
                            <div class="form-group">
                                <v-text-field  placeholder="Password" class="text-white" variant="none" type="password"></v-text-field>
                            </div>
                        </v-col>
                            

                        <v-col lg="12" cols="12" >
                            <small class="mb-3">By creating an account, you agree to all terms and conditions of the company.</small>
                            <div class="form-group text-center">
                                <v-btn class="l-btn form-control mb-3 text-none pa-7 align-content-center mt-3" flat>Create Account</v-btn>
                                <small class="text-center"><router-link to="/"  class=""> Already have an account? </router-link></small>
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
export default{
    components:{Navbar},
    setup(){

    }
}
</script>
