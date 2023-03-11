<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'


export default {
  components:{},
  name: 'App',

  data: () => ({
    //
  }),
  beforeCreate(){
    this.$store.commit('initializeStore')
    const token = this.$store.state.token
    if (token) {
        axios.defaults.headers.common['Authorization'] = "Token " + token
    } else {
        axios.defaults.headers.common['Authorization'] = ""
    }
  }
}
</script>
<style>

@import url("https://use.typekit.net/txr6jva.css");

*{
  font-family: 'montserrat', sans-serif;
}

.big-h1{
    font-size: 90px;   
    color: #920000;
    font-family: 'montserrat',sans-serif;
    font-weight: 500;
    font-style: normal;
}

.md-p{
    font-size: 25px;
    color: #000000;
    font-family: 'montserrat',sans-serif;
    font-weight: 400;
    font-style: normal;
}

.link{
  color: #000000;
  text-decoration: none;
}

/** login & sign up**/



.signin, .login{
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 100vh;
}

.form h6{
    font-size: 25px;
    color: #920000;
    font-family: 'montserrat',sans-serif;
    font-weight: 550;
}


.form-title::after{
    content: "";
    position: absolute;
    width: 30%;
    height: 4px;
    margin: auto;
    left: 44px;
    background: #920000;
    transition: all 0.5s;
}

.login .form-title::after{
    content: "";
    position: absolute;
    width: 14%;
    height: 4px;
    margin: auto;
    left: 100px;
    background: #920000;
    transition: all 0.5s;
}
.form-title{
    position:relative;
}



.form-container{
    background: #ffffff;
    width: 500px;
    height: 100%;
    box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.5);
    padding: 30px;
    border-radius: 10px;

}


.form-container input{
    padding: 15px;
    border-radius: 10px;
    background:#920000 ;
    color: #ffffff;
}

.form-container .l-btn{
    padding: 15px;
    color: #ffffff;
    background: #920000;
    border-radius: 10px;
    width: 100%;
}
.form-container .l-btn:hover{
   
    background: #920000 !important;
  
}

.form-container input:focus{
    background: #920000;
    color: #ffffff;
}

.form-container input::placeholder{
    color: #c4c4c4 !important;
}


small a{
    text-decoration: none;
    color: #000000;
}



.personal-items input{
    border: 2px solid #920000;
    border-radius: 10px;
}

.personal-items .g-btn{
    color: #ffffff;
    background: #920000;
    padding: 8px;
    border-radius: 10px;
    margin: 0 4px;
}

.personal-items .g-btn:hover{
    color: #ffffff;
}


@media screen and (max-width:475px) {
  

  .login .form-title::after{
      display: none !important;
  }
  
}


@media screen and (max-width:576px) {



.navbar{
  padding:10px;
  margin:0px;
 
}

.navbar button{
  color: #920000;
}


.navbar-brand{
  margin-left:0 !important;
}

.navbar-brand img{
  width: 200px !important;
}


.nav-link, .nav-btn{
  color: #000000;
  margin:0px;
}



/** hero **/


.hero input{
  padding: 12px;
  width:300px;
  border-radius:20px ;
  margin: 0 auto ;
  border: 2px solid #920000;
}


.hero-btn{

  background: #920000;
  color: #ffffff;
  border-radius: 20px;
  padding: 12px ;
  width: 200px;
  margin: 0 auto;
  margin-top: 4px;
}

.big-h1{
  font-size: 47px;   
  color: #920000;
  font-family: 'montserrat',sans-serif;
  font-weight: 500;
  font-style: normal;
  margin-top: 40px;
  overflow: hidden;
}

.md-p{
  font-size: 15px;
  color: #000000;
  font-family: 'montserrat',sans-serif;
  font-weight: 400;
  font-style: normal;
}


/** login && signup**/

.form-title::after{
  content: "";
  position: absolute;
  width: 20%;
  height: 4px;
  margin: auto;
  left: 0;
  background: #920000;
  transition: all 0.5s;
  display: block !important;
}

.login .form-title::after{
  content: "";
  position: absolute;
  width: 14%;
  height: 4px;
  margin: auto;
  left: 0 !important;
  background: #920000;
  transition: all 0.5s;
}


.signin, .login{
  padding:20px;
}

}







@media screen and (max-width:780px) {

  .navbar{
      padding:2px;
      margin:0;
     
  }
  
  .navbar button{
      color: #920000;
  }
  
  
  .navbar-brand{
      margin-left:0;
  }
  
  .navbar-brand img{
      width: 50%;
  }
  
  
  .nav-link, .nav-btn{
      color: #000000;
      margin:0px;
  }
  
  .navbar-nav{
      margin: 0 auto;
  }

  .nav-btn{
      background: #920000;
      color: #ffffff;
      border-radius: 10px;
  }






/** hero **/


.hero input{
  padding: 12px;
  width:300px;
  border-radius:20px ;
  margin: 0 auto ;
  border: 2px solid #920000;
}


.hero-btn{

  background: #920000;
  color: #ffffff;
  border-radius: 20px;
  padding: 12px ;
  width: 200px;
  margin: 0 auto;
  margin-top: 4px;
}

.big-h1{
  font-size: 47px;   
  color: #920000;
  font-family: 'montserrat',sans-serif;
  font-weight: 500;
  font-style: normal;
  margin-top: 40px;
  overflow: hidden;
}

.md-p{
  font-size: 15px;
  color: #000000;
  font-family: 'montserrat',sans-serif;
  font-weight: 400;
  font-style: normal;
}




  /** login && signup **/
  
  .form-title::after{
      content: "";
      position: absolute;
      width: 20%;
      height: 4px;
      margin: auto;
      left: 120px !important;
      background: #920000;
      transition: all 0.5s;
  }


  .login .form-title::after{
      content: "";
      position: absolute;
      width: 14%;
      height: 4px;
      margin: auto;
      left: 175px !important;
      background: #920000;
      transition: all 0.5s;
  }

  }
  
  

@media screen and (max-width:960px) {

  .navbar-nav{
      margin: 0 auto;
  }




/** hero **/


.hero input{
  padding: 12px;
  width:300px;
  border-radius:20px ;
  margin: 0 auto ;
  border: 2px solid #920000;
}


.hero-btn{

  background: #920000;
  color: #ffffff;
  border-radius: 20px;
  padding: 12px ;
  width: 200px;
  margin: 0 auto;
  margin-top: 4px;
}

.big-h1{
  font-size: 47px;   
  color: #920000;
  font-family: 'montserrat',sans-serif;
  font-weight: 500;
  font-style: normal;
  margin-top: 40px;
  overflow: hidden;
}

.md-p{
  font-size: 15px;
  color: #000000;
  font-family: 'montserrat',sans-serif;
  font-weight: 400;
  font-style: normal;
}

  
  .form-title::after{
      content: "";
      position: absolute;
      width: 20%;
      height: 4px;
      margin: auto;
      left: 120px;
      background: #920000;
      transition: all 0.5s;
  }

  .login .form-title::after{
      content: "";
      position: absolute;
      width: 14%;
      height: 4px;
      margin: auto;
      left: 175px !important;
      background: #920000;
      transition: all 0.5s;
  }
}


</style>
