<template>
  <Navbar />
  <section class="hero">

    <v-container fluid="">
      <v-row justify="center" align-content="center">
        <v-col cols="12" class="text-center">
          <h1 class="big-h1">Quality Video Meetings</h1>
          <v-col cols="8" class="ma-auto">
            <p class="ma-auto md-p"> Secure a meeting and track your time </p>
          </v-col>
        </v-col>

        <v-col sm="8" md="8" lg="5" class="ma-auto text-center pt-2 mt-1">
          <div class="group-btn d-lg-flex d-md-flex ma-auto">
            <div class="form">
              <v-text-field placeholder="Enter your email" class="custom-class" variant="none" name="email"></v-text-field>
            </div>
            <router-link to="/signup" class="link">
              <v-btn class="hero-btn text-none pa-7 align-content-center text-white" flat>Create account</v-btn>
            </router-link>
          </div>

        </v-col>
      </v-row>
    </v-container>
 
</section>

</template>

<script>
import Navbar from '../components/Navbar.vue';
export default{
  components:{Navbar},
  setup(){

  }
}

</script>
<style>

.hero{
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 100vh;
    background-image:url('../assets/img/landing.png') ;

}

.hero .row{
    height: 100vh;
    max-height: 400px; 
}

.hero input{
    padding: 15px;
    width:300px;
    border-radius:20px ;
    margin: 0 10px;
    border: 2px solid #920000;
    
}

.custom-class input{
  background-color: transparent !important;
}

.form-control:hover{
  background: transparent !important;
}

.hero-btn{

    background: #920000;
    color: #ffffff;
    border-radius: 20px;

}

</style>
