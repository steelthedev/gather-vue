<template>
    <Navbar />
<section class="login" style="background-image:url(img/landing.png);" >
    <v-container>
        <v-row justify="center">
            <div class="form-container mb-4">
                <v-form class="form mt-3">
                    <v-row justify="center">
                        <v-col lg="8" md="12" class="text-center">
                            <div class="form-title">
                                <h6>Sign in</h6>
                            </div>
                        </v-col>
                       


                        <v-col lg="12">
                            <div class="form-group">
                                <v-text-field  placeholder="Email Address" class="text-white" variant="none"></v-text-field>
                            </div>
                        </v-col>


                        <v-col lg="12">
                            <div class="form-group">
                                <v-text-field  placeholder="Password" class="text-white" variant="none" type="password"></v-text-field>
                            </div>
                        </v-col>
                            

                        <v-col lg="12">
                           
                                <v-btn class="l-btn form-control  text-none pa-7 align-content-center" flat>Login</v-btn>
                              
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
