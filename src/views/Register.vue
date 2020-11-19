<template>
  <div class="register">
    <div class="register-container">
      <div class="container-left">
        <img
          src="https://cdn.pixabay.com/photo/2018/05/08/08/42/handshake-3382503_1280.jpg"
          alt=""
        />
      </div>
      <div class="container-right">
        <div class="form-title">
          <p>Register</p>
        </div>
        <div class="form">
          <template>
            <section>
              <div class="form-container">
                <div class="user">
                  <b-field label="Name">
                    <b-input placeholder="John Doe" v-model="name"></b-input>
                  </b-field>

                  <b-field label="Username">
                    <b-input placeholder="johndoe" v-model="username"></b-input>
                  </b-field>

                  <b-field label="Email">
                    <b-input type="email" placeholder="john@" v-model="email">
                    </b-input>
                  </b-field>

                  <b-field label="Password">
                    <b-input
                      placeholder="Password"
                      type="password"
                      v-model="password"
                    ></b-input>
                  </b-field>
                  <b-field label="Confirm Password">
                    <b-input
                      placeholder="Confirm Password"
                      type="password"
                      v-model="confirm_password"
                    ></b-input>
                  </b-field>
                </div>
                <div class="address">
                  <b-field label="Address Line 1">
                    <b-input
                      placeholder="5th Avenue"
                      v-model="addressLine1"
                    ></b-input>
                  </b-field>
                  <b-field label="Address Line 2">
                    <b-input
                      placeholder="Unit 555"
                      v-model="addressLine2"
                    ></b-input>
                  </b-field>
                  <b-field label="State/Province">
                    <b-input placeholder="ON" v-model="state"></b-input>
                  </b-field>
                  <b-field label="Postal Code">
                    <b-input
                      placeholder="M2M2M2"
                      v-model="postalCode"
                    ></b-input>
                  </b-field>
                  <b-field label="Country">
                    <b-input placeholder="Canada" v-model="country"></b-input>
                  </b-field>
                </div>
              </div>
            </section>
          </template>
        </div>
        <div class="level" style="margin-top: 10px">
          <div class="level-left">
            <p class="sign-in" @click="openLogin()">Already have an account?</p>
          </div>
          <div class="level-right">
            <b-button @click="registerUser()">Register</b-button>
          </div>
        </div>
      </div>
    </div>
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
      addressLine1: null,
      addressLine2: null,
      state: null,
      postalCode: null,
      country: null,
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
        addressLine1: this.addressLine1,
        addressLine2: this.addressLine2,
        state: this.state,
        postalCode: this.postalCode,
        country: this.country,
      };
      this.register(user)
        .then((res) => {
          if (res.data.success) {
            this.$router.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openLogin() {
      let loginButton = document.getElementById("login-navbar");
      loginButton.click();
    },
  },
};
</script>

<style lang="scss">
.register {
  margin-bottom: -5.5px;
  background-color: #7957d5;
  color: white;

  .register-container {
    display: flex;

    .container-right {
      margin: auto;
      padding: 20px;
      .form {
        background-color: white;
        padding: 20px;
        border-radius: 10px;

        .form-container {
          display: flex;

          .user {
            padding: 10px;
            // min-width: 300px;
          }

          .address {
            padding: 10px;
            // min-width: 200px;
          }
        }
      }
    }
  }
  .form-title {
    font-size: 32px;
    color: #fff;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
  }

  .sign-in {
    cursor: pointer;

    // :hover {
    //   color: red;
    // }
  }

  .sign-in:hover {
    color: rgb(224, 224, 224);
  }
}
</style>
