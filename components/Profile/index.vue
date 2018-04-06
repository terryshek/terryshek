<template>
  <div id="home">
    <transition name="custom-classes-transition" enter-active-class="animated fadeInRight" leave-active-class="animated fadeInLeft"
      appear :after-leave="childrenAnimate = true">
      <!-- Content here -->
      <div class="card bg-dark text-white rounded-0">
        <img class="card-img rounded-0" :src="coverImg" alt="Card image" style="opacity:0.6">
        <div class="card-img-overlay">
          <div class="row justify-content-center align-items-center h-100 w-100">
            <div class="col">
              <div class="d-flex justify-content-center">
                <h1 class="card-title">
                  Hi, I am Terry
                </h1>
              </div>
              <div class="d-flex justify-content-center">
                <div class="card-text">
                  Front end web developer, Hong Kong
                </div>
              </div>
              <div class="card-text">
                <div class="d-flex justify-content-center">
                  <a class="p-3" v-for="(k,v) in dynamicContact" :key="v" :href="k.link">
                    <transition name="custom-classes-transition" enter-active-class="animated rollIn" leave-active-class="animated rollOut" :duration="5000"
                      appear>
                      <i class="fa fa-3x text-white" :class="k.icon">
                      </i>
                    </transition>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <transition :duration="6000" name="custom-classes-transition" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown"
          appear>
          <avatar class="position-absolute fixed-bottom" style="z-index: 1020; margin-bottom: -50px;"/>
        </transition>
      </div>
    </transition>
    <transition name="custom-classes-transition" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeInRight"
      appear>
      <section class="dashbroad" id="intro">
        <div class="row no-gutters pt-5 justify-content-center">
          <div class="col-lg-6 col-sm-12 align-self-center ">
            <div>
              <b-card tag="article" class="border-0 mb-2 mx-auto" body-variant="intro">
                <h1 class="text-info">
                  <b>My Story</b>
                </h1>
                <p class="card-text">
                  {{personDes}}
                </p>
                <!-- <b-button variant="info" href="https://1drv.ms/w/s!AlKtc04flDhPoXA97ZYpy26Gx_DN" target="_blank">
                  <i class="fa fa-id-card-o" aria-hidden="true"></i> DOWNLOAD RESUME
                </b-button> -->
              </b-card>
            </div>
          </div>
          <!-- <div class="col-lg-4 col-sm-12 align-self-center height">
            <div class="p-2">
              <div>
                <slider />
              </div>
            </div>
          </div> -->
          <transition name="custom-classes-transition" enter-active-class="animated slideInUP" leave-active-class="animated slideInUP"
            appear :after-leave="childrenAnimate = true">
            <div v-if="childrenAnimate" class="col-lg-6 col-sm-12 align-self-center height">
              <div>
                <b-card class="border-0" bg-variant="white" text-variant="dark">
                  <h3 class="text-center">
                    <b>
                      <i class="fa fa-info-circle" aria-hidden="true"></i> INFORMATION</b>
                  </h3>
                  <ul class="list-group">
                    <li class="list-group-item flex-column align-items-start text-dark border-0" v-for="item in personInfo" :key="item.val">
                      <div class="d-flex w-100 justify-content-between">
                        <div>
                          <dt>{{item.key}}</dt>
                        </div>
                        <div class="text-left">
                          {{item.val}}
                        </div>
                      </div>
                    </li>
                  </ul>
                </b-card>
              </div>
            </div>
          </transition>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
  import Avatar from '@/components/avatar'
  import { get, filter, isObject } from "lodash";
  export default {
    name: "Profile",
    mounted() {
      console.log(this.personInfo);
    },
    components:{
      Avatar
    },
    computed: {
      dynamicContact() {
        return get(this.$store.state.contact, ".value", []);
      },
      personalImg() {
        return get(this.$store.state.img, ".value", "");
      },
      coverImg() {
        return get(
          this.$store.state.personInfo,
          "coverImg",
          "https://scontent.fhkg4-1.fna.fbcdn.net/v/t1.0-9/15740965_10154480970963171_3547855753606481247_n.jpg?_nc_cat=0&oh=56aa4ac836d2231ec098adcb9df82a76&oe=5B36B4D9"
        );
      },
      personInfo() {
        return filter(this.$store.state.personInfo, (k, v) => {
          return isObject(k);
        });
      },
      personDes() {
        return get(
          this.$store.state.personInfo,
          "des",
          "Opp, some problem happen!"
        );
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