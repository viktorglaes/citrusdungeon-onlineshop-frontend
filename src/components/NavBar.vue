<template>
  <div class="navbar-component">
    <b-navbar :transparent="true">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          ONLINESHOP
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ path: '/customer-service' }">
          Customer Service
        </b-navbar-item>
        <b-navbar-dropdown label="Products">
          <b-navbar-item href="#">
            Laptops
          </b-navbar-item>
          <b-navbar-item href="#">
            TVs
          </b-navbar-item>
          <b-navbar-item href="#">
            Console & Gaming
          </b-navbar-item>
          <b-navbar-item href="#">
            PCs
          </b-navbar-item>
          <b-navbar-item href="#">
            Phones
          </b-navbar-item>
          <b-navbar-item href="#">
            Cameras
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template slot="end">
        <b-navbar-item tag="router-link" to="/register" v-if="!isLoggedIn">
          <b-button type="is-primary">Register</b-button>
        </b-navbar-item>
        <b-navbar-item v-if="!isLoggedIn">
          <b-dropdown
            position="is-bottom-left"
            append-to-body
            aria-role="menu"
            trap-focus
          >
            <a class="navbar-item" slot="trigger" role="button">
              <span>Login</span>
              <!-- <b-icon icon="chevron-down"></b-icon> -->
            </a>

            <b-dropdown-item
              aria-role="menu-item"
              :focusable="false"
              custom
              paddingless
            >
              <form @submit.prevent="loginUser">
                <div class="modal-card" style="width:300px;">
                  <section class="modal-card-body">
                    <b-field label="Username">
                      <b-input
                        type="text"
                        placeholder="Your username"
                        required
                        v-model="username"
                      >
                      </b-input>
                    </b-field>

                    <b-field label="Password">
                      <b-input
                        type="password"
                        password-reveal
                        placeholder="Your password"
                        required
                        v-model="password"
                      >
                      </b-input>
                    </b-field>

                    <b-checkbox>Remember me</b-checkbox>
                  </section>
                  <footer class="modal-card-foot">
                    <button class="button is-primary">
                      Login
                    </button>
                  </footer>
                </div>
              </form>
            </b-dropdown-item>
          </b-dropdown>
        </b-navbar-item>

        <b-navbar-item v-if="isLoggedIn">
          <b-dropdown position="is-bottom-left" append-to-body aria-role="menu">
            <a class="navbar-item" slot="trigger" role="button">
              <b-icon icon="user"></b-icon>
            </a>

            <b-dropdown-item custom aria-role="menuitem">
              Logged in as <b>{{ user.username }}</b>
            </b-dropdown-item>
            <hr class="dropdown-divider" />
            <b-dropdown-item aria-role="menuitem">
              <router-link to="/profile"
                ><b-icon icon="user"></b-icon> Profile</router-link
              >
            </b-dropdown-item>
            <b-dropdown-item aria-role="menuitem">
              <router-link to="/about"
                ><b-icon icon="info-circle"></b-icon> About</router-link
              >
            </b-dropdown-item>
            <b-dropdown-item aria-role="menuitem" @click="logoutUser">
              <b-icon icon="sign-out-alt"></b-icon>
              Logout
            </b-dropdown-item>
          </b-dropdown>
        </b-navbar-item>
        <b-navbar-item style="margin-right: 10px">
          <b-icon icon="shopping-cart"></b-icon>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "NavBar",
  computed: {
    ...mapGetters(["isLoggedIn", "user"]),
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["logout", "login"]),
    logoutUser() {
      this.logout();
    },
    loginUser() {
      let user = {
        username: this.username,
        password: this.password,
      };
      this.login(user)
        .then((res) => {
          if (res.data.success === true) {
            this.$router.push("/profile");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss">
.navbar-component {
  .navbar {
    background-color: rgb(19, 19, 19);
  }
  a.navbar-item,
  .navbar-link {
    color: #6d6d6d;
  }
}
</style>
