<template>
  <div class="register">
    <h2>Register</h2>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="name"
          class="form-control"
          id="name"
          aria-describedby="emailHelp"
          v-model="name"
        />
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="username"
          class="form-control"
          id="username"
          aria-describedby="emailHelp"
          v-model="username"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your username with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          v-model="email"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
        />
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm Password</label>
        <input
          type="password"
          class="form-control"
          id="confirm-password"
          v-model="confirm_password"
          placeholder="Confirm Password"
        />
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <router-link to="/login" style="margin-left: 230px"
        ><a href="#">Already have an account?</a></router-link
      >
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      name: null,
      username: null,
      email: null,
      password: null,
      confirm_password: null,
    };
  },
  methods: {
    ...mapActions(["register"]),
    registerUser() {
      let user = {
        username: this.username,
        password: this.password,
        confirm_password: this.confirm_password,
        email: this.email,
        name: this.name,
      };
      this.register(user).then((res) => {
        if (res.data.success) {
          this.$router.push("home");
        }
      });
    },
  },
};
</script>

<style lang="scss">
.register {
  width: 500px;
  left: 35%;
  position: absolute;
}
</style>
