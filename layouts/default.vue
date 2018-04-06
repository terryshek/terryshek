<template>
  <div class="container-fluid">
    <the-header/>
      <main style="margin:40px auto">
        <nuxt/>      
      </main>
    <the-footer/>
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader/TheHeader'
import TheFooter from '@/components/TheFooter'

  export default{
    components:{
      TheHeader,
      TheFooter
    }
  }
</script>

<style>
body{
  font-family: sans-serif, "Lato"
}
</style>
