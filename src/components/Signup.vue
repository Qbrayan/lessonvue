<template>
<div class="login-area">
  <div class="row" >
    <div class="large-6 columns small-centered columns">
      <div class="signup-panel">
        <p class="welcome"> Sign up using this form</p>
        <form>
          <div class="row collapse">
            <div class="small-2 columns ">
              <span class="prefix"><i class="fi-lock"></i></span>
            </div>
            <div class="small-10 columns ">
              <input v-model="user.name" type="text" placeholder="Enter name here">
            </div>
          </div>
          <div class="row collapse">
            <div class="small-2 columns">
              <span class="prefix"><i class="fi-mail"></i></span>
            </div>
            <div class="small-10  columns">
              <input v-model="user.username" type="text" placeholder="Enter your email address here">
            </div>
          </div>
          <div class="row collapse">
            <div class="small-2 columns ">
              <span class="prefix"><i class="fi-lock"></i></span>
            </div>
            <div class="small-10 columns ">
              <input v-model="user.password" type="password" placeholder="Enter password here">
            </div>
          </div>
          <a @click.prevent="signinUser" class="button ">Sign Up! </a>
        </form>
      </div>
    </div>
   </div>
  </div>
</template>

<script>

// import VueResource from 'vue-resource'

export default {
  data () {
    return {
      user: {
        name: null,
        username: null,
        password: null
      }
    }
  },
  methods: {
    signupUser () {}
  },
  mounted () {
  }
}
</script>

<styles> 

</styles>
