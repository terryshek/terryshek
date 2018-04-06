<template>
  <transition name="custom-classes-transition" enter-active-class="animated fadeInRight" leave-active-class="animated fadeInLeft"
    appear>
    <section class="techSkill bg-warning p-4 text-light card" id="skill">
      <h1 class="card-title">
        <b>SKILLS</b>
      </h1>
      <div class="list-group" v-for="(k,v) in dynamicSkill" :key="v" v-if="v!='.key'">
        <div class="list-group-item list-group-item-action flex-column align-items-start border-0 bg-warning">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">
              <b>{{v}}</b>
            </h5>
            <span class="badge badge-secondary d-flex align-items-center bg-info">
              <small>{{k.length}}</small>
            </span>
          </div>
          <div class="d-flex flex-row flex-wrap">
            <div class="p-2" :key="i" v-for="(v,i) in k">{{(i < (k.length-1))?v+ ", ":v}}</div>
            </div>
          </div>
        </div>
    </section>
  </transition>
</template>

<script>
  import { get } from 'lodash'

  export default {
    name: "Skill",
    computed: {
      dynamicSkill() {
        return get(this.$store.state, 'skill', {})
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  [v-cloak] {
    display: none;
  }
</style>