<template>
      <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeInLeft"
      appear
    >
      <section class="bg-dark education">
        <h1 class="font-weight-bold text-info pl-4 pr-4 pt-2">
          EDUCATION
        </h1>
        
        <b-table responsive dark :items="edu" class="table table-responsive w-100 d-block d-md-table"></b-table>
      </section>
      </transition>
</template>
<script>
import { mapState } from "vuex";
import { get} from 'lodash'

export default {
  name: "Education",
  computed:{
    edu(){
      return get(this.$store.state.edu, ".value", [])
    }
  }
};
</script>
