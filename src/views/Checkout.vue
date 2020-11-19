<template>
  <div class="checkout">
    <h1 style="font-size: 36px; font-weight: 600">Checkout</h1>
    <div class="checkout-form">
      <div class="profile">
        <div v-if="isLoggedIn">
          <div class="fields">
            <div class="field">{{ user.name }}</div>
            <div class="field">{{ user.email }}</div>
          </div>
        </div>
        <div v-else>
          <b-field>
            <b-input
              placeholder="Name"
              v-model="name"
              type="text"
              icon="user"
              icon-right="close-circle"
            >
            </b-input>
          </b-field>
          <b-field>
            <b-input
              placeholder="Email"
              type="email"
              v-model="email"
              icon="envelope-square"
              icon-right="close-circle"
            >
            </b-input>
          </b-field>
        </div>
      </div>
      <div class="address">
        <div v-if="isLoggedIn">
          <div class="fields">
            <div class="field">{{ user.addressLine1 }}</div>
            <div class="field">{{ user.addressLine2 }}</div>
            <div class="field">{{ user.postalCode }}</div>
            <div class="field">{{ user.state }}</div>
            <div class="field">{{ user.country }}</div>
          </div>
        </div>
        <div v-else>
          <b-field>
            <b-input
              placeholder="Address Line 1"
              icon="address-card"
              v-model="address1"
            >
            </b-input>
          </b-field>
          <b-field>
            <b-input
              placeholder="Address Line 2"
              icon="address-card"
              v-model="address2"
            >
            </b-input>
          </b-field>
          <b-field>
            <b-input
              placeholder="Postal Code"
              icon="map-marker"
              v-model="postalCode"
            >
            </b-input>
          </b-field>
          <b-field>
            <b-input
              placeholder="State/Province"
              type="text"
              icon="flag-usa"
              icon-right="close-circle"
              v-model="state"
            >
            </b-input>
          </b-field>
          <b-field>
            <b-input
              placeholder="Country"
              type="text"
              icon="flag"
              icon-right="close-circle"
              v-model="country"
            >
            </b-input>
          </b-field>
        </div>
      </div>
      <div class="payment">
        <b-field>
          <b-input
            placeholder="Second email"
            type="email"
            icon="envelope-square"
            icon-right="close-circle"
            v-model="secondEmail"
          >
          </b-input>
        </b-field>
        <b-field>
          <b-input
            placeholder="Credit card"
            icon="credit-card"
            v-model="creditCard"
          >
          </b-input>
        </b-field>
      </div>
    </div>

    <div class="item-table">
      <b-table :data="cartItems" :columns="columns"></b-table>
    </div>
    <div class="level-right">
      <p style="margin-top: 20px; font-size: 24px; font-weight: 600">
        Total: ${{ totalCartPrice }}
      </p>
    </div>
    <div class="level">
      <div class="level-left checkout">
        <router-link to="/cart">
          <div class="button">
            <b-icon icon="chevron-circle-left"></b-icon>
            <span>Back to cart</span>
          </div>
        </router-link>
        <!-- <b-button type="is-primary">Back to products</b-button> -->
      </div>
      <div class="level-right checkout" v-if="cartItems.length > 0">
        <b-button type="is-primary" @click="submitOrder">Submit Order</b-button>
      </div>
      <div v-else>
        <b-button type="is-primary" disabled>Submit Order</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Checkout",
  computed: {
    ...mapGetters(["user", "isLoggedIn", "cartItems"]),
  },
  data() {
    return {
      columns: [
        {
          field: "title",
          label: "Product",
        },
        {
          field: "quantity",
          label: "Quantity",
        },
        {
          field: "price",
          label: "Price",
        },
      ],
      name: null,
      email: null,
      address1: null,
      address2: null,
      postalCode: null,
      country: null,
      state: null,
      secondEmail: null,
      creditCard: null,
      totalCartPrice: null,
    };
  },
  mounted() {
    let sumTotal = 0;
    this.cartItems.forEach((item) => {
      sumTotal += item.totalPrice;
    });
    this.totalCartPrice = Math.round((sumTotal + Number.EPSILON) * 100) / 100;
  },
  methods: {
    ...mapActions(["getProfile", "orderProducts", "setCartItems"]),
    submitOrder() {
      let order = {
        name: this.name ? this.name : this.user.name,
        email: this.email ? this.email : this.user.email,
        address1: this.address1 ? this.address1 : this.user.addressLine1,
        address2: this.address2 ? this.address2 : this.user.addressLine2,
        postalCode: this.postalCode ? this.postalCode : this.user.postalCode,
        country: this.country ? this.country : this.user.country,
        state: this.state ? this.state : this.user.state,
        secondEmail: this.secondEmail,
        creditCard: this.creditCard,
        items: this.cartItems,
        userId: this.user._id,
      };

      if (
        !order.name ||
        !order.email ||
        !order.address1 ||
        !order.postalCode ||
        !order.country ||
        !order.state ||
        !order.creditCard ||
        !order.items
      ) {
        this.danger();
        return;
      }
      console.log(order);
      this.orderProducts(order).then((res) => {
        console.log();
        if (res.data.success) {
          this.$router.push("/post-order");
        }
      });
      this.setCartItems([]);
      let quantityIcon = document.getElementById("item-quantity");
      quantityIcon.style =
        "transition: transform 0.6s ease; transform: scale(1.1); background-color: transparent";
    },
    danger() {
      this.$buefy.toast.open({
        duration: 5000,
        message: `Please fill out all the required fields.`,
        type: "is-danger",
      });
    },
  },
};
</script>

<style lang="scss">
.checkout {
  padding: 20px;
  .checkout-form {
    background-color: whitesmoke;
    display: flex;
    margin-top: 20px;
    margin: auto;
    border: 1px solid rgb(202, 202, 202);
    border-radius: 10px;

    .profile {
      padding: 20px;
      width: 600px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    .fields {
      background-color: white;
      padding: 10px;
      border: 1px solid rgb(202, 202, 202);
      border-radius: 10px;

      .field {
        font-weight: 500;
      }
    }

    .address {
      width: 600px;
      padding: 20px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    .payment {
      padding: 20px;
      width: 600px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .item-table {
    margin-top: 20px;
  }
}
</style>
