<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  components:{},
  name: 'App',

  data: () => ({
    //
  }),
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

</style>