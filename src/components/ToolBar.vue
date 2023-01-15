<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/Jobs">Jobs</router-link>
  </div>
</template>

//scoped 해당 컴포넌트에만 적용
<style scoped>
.header{
    color: white;
    background-color: #42b883;
    display: flex;
    padding: 8px;
}
.header a:active{
  color: #35495e;
}
.header a{
  color: white ;
}
</style>