<template>
  <div id="app" class="app">
    <NavBar />
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <div class="views">
      <Errors v-if="error" :msg="error" />
      <router-view></router-view>
    </div>
    <div><Footer /></div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Errors from "./components/Errors";
import { mapGetters } from "vuex";
import Footer from "./components/Footer";

export default {
  components: {
    NavBar,
    Errors,
    Footer,
  },
  computed: {
    ...mapGetters(["error"]),
  },
};
</script>

<style lang="scss">
.app {
  .views {
    min-height: 650px;
  }
}
</style>
