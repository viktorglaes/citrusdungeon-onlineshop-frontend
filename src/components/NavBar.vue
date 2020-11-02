<template>
  <div class="navbar-component">
    <b-navbar :transparent="true">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="../assets/logo.png" alt="#" style="max-height: 2.5rem" />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ path: '/customer-service' }">
          Customer Service
        </b-navbar-item>
        <b-navbar-dropdown label="Products">
          <div @click="selectNavCategory($event)">
            <b-navbar-item href="#" id="laptop">
              Laptops
            </b-navbar-item>
            <b-navbar-item href="#" id="tv">
              TVs
            </b-navbar-item>
            <b-navbar-item href="#" id="console">
              Console & Gaming
            </b-navbar-item>
            <b-navbar-item href="#" id="pc">
              PCs
            </b-navbar-item>
            <b-navbar-item href="#" id="phone">
              Phones
            </b-navbar-item>
            <b-navbar-item href="#" id="camera">
              Cameras
            </b-navbar-item>
          </div>
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
              <router-link to="/profile" tag="div"
                ><b-icon icon="user"></b-icon> Profile</router-link
              >
            </b-dropdown-item>
            <b-dropdown-item aria-role="menuitem">
              <router-link to="/about" tag="div"
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
      searchParams: {
        title: "",
        categories: null,
      },
    };
  },
  methods: {
    ...mapActions(["logout", "login", "getProducts"]),
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
    selectNavCategory(event) {
      if (this.$route.name !== "Products") {
        this.$router.push("/products");
      }
      let targetId = event.target.id;
      this.searchParams.categories = [targetId];
      this.getProducts(this.searchParams);
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
