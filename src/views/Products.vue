<template>
  <div class="products">
    <SearchButton />
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
            <div class="card-image">
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
                </div>
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
import SearchButton from "../components/SearchButton";

export default {
  name: "Products",
  components: {
    SearchButton,
  },
  computed: {
    ...mapGetters(["allProducts"]),
  },
  methods: {
    ...mapActions(["getProducts"]),
  },
  async created() {
    this.getProducts();
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
