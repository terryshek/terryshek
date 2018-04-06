<template>
  <transition name="custom-classes-transition" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeInRight"
    appear>
    <section class="bg-muted">
      <div class="d-flex w-100 justify-content-between">
        <h3 class="font-weight-bold text-primary pl-4 pr-4 pt-2">
          EXPERIENCE
        </h3>
      </div>
      <transition-group class="list-group" name="custom-classes-transition" enter-active-class="animated bounceOutDown" leave-active-class="animated fadeInDown"
        appear tag="div">

        <div class="list-group-item flex-column align-items-start border-0 p-0" v-for="(exp, i) in dynamicExp" :key="i" v-if="dynamicExp.length">
          <div class="d-flex w-100 justify-content-between">
            <div class="jumbotron jumbotron-fluid w-100 bg-light">
              <div class="container">
                <div class="display-5">
                  <blockquote class="blockquote">
                    <ul class="list-group p-0">
                      <li class="list-group-item border-0 d-flex justify-content-between align-items-center text-dark bg-light p-0">
                        <h5 class="mb-1 font-weight-bold">{{exp.name}}</h5>
                        <small>
                          <span class="badge badge-warning">{{exp.duration}}</span>
                        </small>
                      </li>
                    </ul>
                    <footer class="blockquote-footer">
                      <cite title="Source Title">{{exp.role}}</cite>
                    </footer>
                  </blockquote>
                  <p class="mb-1">
                    <ul class="list-group list-group-flush text-dark bg-light">
                      <li class="list-group-item bg-light" v-for="(v,i) in exp.des" :key="i">
                        {{v}}
                      </li>
                    </ul>
                  </p>
                  <span class="font-weight-bold">Tech used:
                    <small class="font-weight-bold ">{{exp.tech}}</small>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </transition-group>
    </section>
  </transition>
</template>
<script>
  import _ from 'lodash'

  export default {
    name: "Experience",
    computed: {
      dynamicExp() {
        return _.sortBy(_.get(this.$store.state.experience, '.value', []), 'priority').reverse()
      }
    },
    data() {
      return {
        msg: "Welcome to Your Vue.js App",
        newBook: {
          title: "",
          author: "",
          url: "http://"
        }
      };
    },
  };
</script>