<template>
  <div class="products">
    <SearchField />
    <div class="search-results">
      <div class="header" style="border-bottom: solid 5px white">
        <p style="margin-left: 10px">{{ allProducts.length }} results</p>
      </div>
      <div class="columns is-multiline">
        <div
          v-for="product in allProducts"
          :key="product._id"
          class="column is-one-quarter"
        >
          <div class="card">
            <div
              class="card-image"
              style="cursor: pointer;"
              @click="
                navigateTo({
                  name: 'Product',
                  params: { productId: product._id },
                })
              "
            >
              <!-- <router-link to="product"> -->
              <figure class="image is-4by3">
                <img :src="product.image" alt="#" />
              </figure>
              <!-- </router-link> -->
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left"></div>
                <div class="media-content">
                  <p class="title is-4">{{ product.title }}</p>
                  <p class="subtitle is-6">{{ product.model }}</p>
                  <p class="subtitle is-6" style="font-weight: bold">
                    ${{ product.price }}
                  </p>
                </div>
              </div>
              <div>
                <b-button @click="addToCart(product)">Add to cart</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SearchField from "../components/SearchField";

export default {
  name: "Products",
  components: {
    SearchField,
  },
  data() {
    return {
      // items: [],
      currentProduct: {},
    };
  },
  computed: {
    ...mapGetters(["allProducts", "cartItems"]),
  },
  methods: {
    ...mapActions(["getProducts", "setCartItems", "setProductById"]),
    addToCart(product) {
      this.currentProduct = {
        quantity: 1,
        totalPrice: product.price,
        price: product.price,
        title: product.title,
      };
      this.cartItems.push(this.currentProduct);
      this.setCartItems(this.cartItems);
      this.applyCartIcon();
    },
    navigateTo(route) {
      this.getProduct(route.params.productId);
      this.$router.push(route);
      // console.log(route.params.productId);
    },
    getProduct(productId) {
      let product = {};
      // for (let i = 0; i < this.allProducts.length; i++) {
      //   if (this.allProducts[i]._id == productId) {
      //     product = this.allProducts[i];
      //   }
      // }
      product = this.allProducts.find((el) => el._id === productId);
      this.setProductById(product);
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
  mounted() {
    this.items = this.cartItems;
  },
  async created() {
    // this.getProducts("");
  },
};
</script>

<style lang="scss">
.products {
  .search-results {
    padding: 20px 50px 50px 50px;

    .header {
      background-color: #f2effb;
      font-size: 24px;
      font-weight: 600;
    }
  }
}
</style>
