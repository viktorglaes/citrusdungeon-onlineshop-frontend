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
            <div class="card-image" style="cursor: pointer; ">
              <figure class="image is-4by3">
                <img :src="product.image" alt="#" />
              </figure>
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
      items: [],
    };
  },
  computed: {
    ...mapGetters(["allProducts", "cartItems"]),
  },
  methods: {
    ...mapActions(["getProducts", "setCartItems"]),
    addToCart(product) {
      product.quantity = 1;
      this.items.push(product);
      this.setCartItems(this.items);
      let quantityIcon = document.getElementById("item-quantity");

      quantityIcon.style =
        "transition: transform 0.6s ease; transform: scale(1.1); background-color: #22C322;";
      setTimeout(function() {
        quantityIcon.style =
          "transition: transform 0.6s ease; transform: scale(0.9); background-color: #22C322;";
      }, 500);
    },
    // makeSmaller(el) {
    //   el.style =
    //     "padding: 3px; transition: transform 0.25s ease; transform: scale(0.5);";
    // },
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
