<template>
  <b-navbar toggleable="md" type="dark" variant="primary" class="pt-0 pb-0" fixed="top">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#" v-scroll-to="{el:'#profile', onDone: onDone, offset: -40}">Profile</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <!-- <li class="nav-item">
          <nuxt-link class="nav-link" tag="a" activeClass="active" to="/" exact>All Post</nuxt-link>                      
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" tag="a" activeClass="active" to="/about" exact>About</nuxt-link>                      
        </li> -->
        <li class="nav-item" :class="{active:link=='profile'}">
          <a href="#" v-scroll-to="{el:'#profile', onDone: ()=>{link='profile'}, offset: -40}" class="nav-link">
            About
          </a>
        </li>
        <li class="nav-item" :class="{active:link=='skill'}">
          <a href="#" v-scroll-to="{el:'#skill', onDone: ()=>{link='skill'}, offset: -40}" class="nav-link">
            Skill
          </a>
        </li>
        <li class="nav-item" :class="{active:link=='experience'}">
          <a href="#" v-scroll-to="{el:'#experience', onDone: ()=>{link='experience'}, offset: -40}" class="nav-link">
            Experience
          </a>
        </li>
        <li class="nav-item" :class="{active:link=='education'}">
          <a href="#" v-scroll-to="{el: '#education', onDone: ()=>{link='education'}, offset: -40}" class="nav-link">
            Education
          </a>
        </li>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
  export default{
    name: "Home",
    data(){
      return{
        link:""
      }
    },
    methods:{
      onDone(e){
        console.log(e)
      }
    }
  }
</script>