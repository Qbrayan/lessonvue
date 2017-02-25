<template>
  <header class="header">
    <h1 class="headline">This is our <small>store</small></h1>
    <ul class="header-subnav">
      <li><router-link to = "/">Home</router-link></li>
      <li ><router-link to = "/login">Login</router-link></li>
      <li ><router-link to = "/signup">Signup</router-link></li>
    </ul>
  </header>

</template>

<script>
export default {
  name: 'header'
}
</script>
