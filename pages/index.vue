<template>
  <section class="w-100">
      <profile id="profile"/>
      <skill id="skill"/>
      <experience id="experience"/>
      <education id="education"/>
  </section>
</template>

<script>
  import Logo from '@/components/Logo.vue'
  import Profile from '@/components/Profile'  
  import Experience from '@/components/Experience'
  import Avatar from '@/components/Avatar' 
  import Skill from '@/components/Skill' 
  import Education from '@/components/Education' 
  import { mapActions, mapState } from 'vuex'

  export default {
    async fetch({ store }) {
      const ref = ['img', 'contact', 'edu', 'experience', 'personInfo', 'skill', 'slider']
      for(let key in ref)
        await store.dispatch('geiInitRef', ref[key])
      await store.dispatch('setData')
    },
    components: {
      Logo,
      Profile,
      Experience,
      Avatar,
      Skill,
      Education
    },
    computed: {
      ...mapState(['list'])
    },
    methods: {
      ...mapActions(['setData'])
    },
    mounted(){
      console.log(this)
    }
  }
</script>

<style>
  
</style>