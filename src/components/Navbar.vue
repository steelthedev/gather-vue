<template>
  <v-toolbar  class="pa-3 bg-white pa-md-8" color="dark">
    <div class="navbar-brand">
        <img src="../assets/img/gather-3.svg" alt="">
    </div>
    <v-spacer></v-spacer>
    <div class="nav-links ma-16 d-none d-md-inline ">
      
        
        <router-link to="/" class="link d-none d-md-inline mx-4">Join</router-link>
        <router-link to="/" class="link d-none d-md-inline mx-4">Host</router-link>
        <router-link to="/signup" class="link d-none d-md-inline mx-4">Sign in</router-link>
        <v-btn class="text-none bg-primary d-none d-md-inline mx-4 nav-btn" flat>Create account</v-btn>
        
     
    </div>
    
    <div class="">
    <v-menu>
      <template v-slot:activator="{ props}">
       
        <v-btn class="navbar-toggler d-md-none d-sm-flex mx-0" v-bind="props" flat>
            <v-icon icon="fa-solid fa-bars-staggered"></v-icon>
        </v-btn>

          
      </template>
      <v-list class="text-center">
        <v-list-item
          v-for="(item, index) in links"
          :key="index"
        >
        <router-link :to="item.to" class="link">{{item.title}}</router-link>
        </v-list-item>
        <v-list-item>
            <v-btn class="text-none bg-primary nav-btn" flat>Create account</v-btn>
        
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
        
     
</v-toolbar>
</template>
<script>
import { ref } from 'vue';
import { mergeProps } from 'vue';
export default{
    setup(){
        const drawer = ref(false)
        const links = ref([
            {to:"/", title:"Join"},
            {to:"/", title:"Host"},
            {to:"/login", title:"Sign in"},
        ])

        return {drawer,mergeProps,links}
    }
}
</script>
<style scoped>

.link{
    color: #000;
    text-decoration: none;
}
.navbar{
    padding:20px 90px;
    margin: 0 auto;
    background: #fff;
}





.nav-link, .nav-btn{
    color: #000000;
    margin: 7px 10px;
}

.link{
    margin: 7px 10px;
}
.nav-link:hover{
    color: #920000;
}

.nav-btn{
    background: #920000;
    color: #ffffff;

    border-radius: 10px;
}

img{
    width: 80%;
}
</style>