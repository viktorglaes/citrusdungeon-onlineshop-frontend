<template>
  <div class="product-component">
    <div class="container">
      <div class="product-container image">
        <img :src="product.image" alt="" />
      </div>
      <div class="product-container description">
        <p class="title">{{ product.title }}</p>
        <p class="subtitle">{{ product.model }}</p>
        <div>
          <!-- The Mac Pro is a series of workstations and servers for professionals
          designed, manufactured, and sold by Apple Inc. since 2006. The Mac
          Pro, in most configurations and in terms of speed and performance, is
          the most powerful computer that Apple offers. It is one of four
          desktop computers in the current Macintosh lineup, sitting above the
          consumer Mac Mini and iMac, and alongside the all-in-one iMac Pro. -->
          {{ product.description }}
        </div>
        <div class="cart-buttons">
          <b-field>
            <b-numberinput v-model="quantity"></b-numberinput>
          </b-field>
          <b-button style="width: 400px;" @click="addToCart(product)"
            >Add to cart</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Product",
  computed: {
    ...mapGetters(["product", "cartItems"]),
  },
  data() {
    return {
      quantity: 1,
      currentProduct: {},
    };
  },
  methods: {
    ...mapActions(["setCartItems"]),
    addToCart(product) {
      this.currentProduct = {
        quantity: this.quantity,
        totalPrice: this.quantity * product.price,
        price: product.price,
        title: product.title,
      };

      this.cartItems.push(this.currentProduct);
      this.setCartItems(this.cartItems);
      this.applyCartIcon();
      this.currentProduct = {};
    },
    applyCartIcon() {
      let quantityIcon = document.getElementById("item-quantity");
      quantityIcon.style =
        "transition: transform 0.6s ease; transform: scale(1.1); background-color: #22C322;";
      setTimeout(function() {
        quantityIcon.style =
          "transition: transform 0.6s ease; transform: scale(0.9); background-color: #22C322;";
      }, 500);
    },
  },
};
</script>

<style lang="scss">
.product-component {
  padding: 20px;
  .container {
    // padding-top: 50px;
    display: flex;
    .product-container {
      margin-left: auto;
      margin-right: auto;
      padding: 50px;

      .cart-buttons {
        margin-top: 3em;
        text-align: center;
      }
    }

    .image {
      margin-left: -150px;
      //   max-width: 600px;
    }

    .description {
      max-width: 500px;
    }
  }
}
</style>
