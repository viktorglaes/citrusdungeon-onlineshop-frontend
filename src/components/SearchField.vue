<template>
  <div class="search-field-component">
    <div class="search-bar">
      <b-field>
        <p class="control">
          <!--maybe use this here v-show="$route.name === 'Products'" -->
          <b-dropdown>
            <button class="button" slot="trigger" size="is-small">
              <span>Categories</span>
              <b-icon icon="chevron-down"></b-icon>
            </button>

            <b-dropdown-item custom value="laptop" aria-role="listitem">
              <b-checkbox
                v-model="searchParams.categories"
                native-value="laptop"
                :value="true"
              >
                Laptop
              </b-checkbox>
            </b-dropdown-item>

            <b-dropdown-item custom value="tv" aria-role="listitem">
              <b-checkbox v-model="searchParams.categories" native-value="tv">
                TVs
              </b-checkbox>
            </b-dropdown-item>

            <b-dropdown-item custom value="console" aria-role="listitem">
              <b-checkbox
                v-model="searchParams.categories"
                native-value="console"
              >
                Console & Gaming
              </b-checkbox>
            </b-dropdown-item>
            <b-dropdown-item custom value="pc" aria-role="listitem">
              <b-checkbox v-model="searchParams.categories" native-value="pc">
                PCs
              </b-checkbox>
            </b-dropdown-item>
            <b-dropdown-item custom value="phone" aria-role="listitem">
              <b-checkbox
                v-model="searchParams.categories"
                native-value="phone"
              >
                Phones
              </b-checkbox>
            </b-dropdown-item>
            <b-dropdown-item custom value="camera" aria-role="listitem">
              <b-checkbox
                v-model="searchParams.categories"
                native-value="camera"
              >
                Cameras
              </b-checkbox>
            </b-dropdown-item>

            <b-dropdown-item
              custom
              value="select_all"
              aria-role="listitem"
              class="selection"
            >
              <div @click="selectAllCategories">Select all</div>
            </b-dropdown-item>
            <b-dropdown-item
              custom
              value="deselect_all"
              aria-role="listitem"
              class="selection"
            >
              <div @click="unselectAllCategories">Unselect all</div>
            </b-dropdown-item>
          </b-dropdown>
        </p>
        <b-input
          placeholder="OnlineShop search..."
          type="search"
          pack="fast"
          expanded
          v-model="searchParams.title"
          @keyup.native.enter="searchProduct"
        >
        </b-input>
        <p class="control">
          <b-button
            class="button"
            type="is-primary"
            slot="trigger"
            @click="searchProduct"
            style="width: 150px;"
          >
            <div v-if="isLoading === true">
              <b-button style="width: 150px;" loading type="is-primary"
                >Loading</b-button
              >
            </div>
            <div v-else>
              <span>Search</span> <b-icon icon="search"></b-icon>
            </div>
          </b-button>
        </p>
      </b-field>
    </div>

    <div class="pages">
      <div class="page-buttons">
        <router-link to="/products" class="page-button">
          <div @click="searchAllProducts">All Products</div>
        </router-link>
        <router-link to="/products" class="page-button">Seasonal</router-link>
        <router-link to="/products" class="page-button">Deals</router-link>
        <router-link to="/products" class="page-button">Brands</router-link>
        <router-link to="/products" class="page-button">Learn</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SearchField",
  data() {
    return {
      searchParams: {
        title: "",
        categories: ["laptop", "tv", "console", "pc", "phone", "camera"],
      },
      isLoading: false,
      // filteredProducts: []
    };
  },
  computed: {
    ...mapGetters(["allProducts"]),
  },
  methods: {
    ...mapActions(["getProducts"]),
    // searchProduct() {
    //   return this.filteredProducts.filter((product) => {
    //     return product.title.match(this.search)
    //   })
    // },
    async searchProduct() {
      if (this.$route.name !== "Products") {
        this.$router.push("/products");
      }
      this.isLoading = true;
      await this.getProducts(this.searchParams);
      this.isLoading = false;
    },
    selectAllCategories() {
      this.searchParams.categories = [
        "laptop",
        "tv",
        "console",
        "pc",
        "phone",
        "camera",
      ];
    },
    unselectAllCategories() {
      this.searchParams.categories = [];
    },
    searchAllProducts() {
      this.selectAllCategories();
      this.searchParams.title = "";
      this.getProducts(this.searchParams);
    },
  },
};
</script>

<style lang="scss">
.search-field-component {
  .search-bar {
    padding: 40px 200px 0px 200px;

    input.input {
      //   border-radius: 20px;
    }
  }
  .search-icon {
    margin-left: 10px;
    cursor: pointer;
  }

  .pages {
    margin: 20px 0 0px 20px;
    position: relative;
    text-align: center;
    .page-buttons {
      .page-button {
        margin: 0 50px 0 0;
        padding: 10px;
        display: inline-block;
        font-size: 20px;
        font-weight: 600;
        text-transform: uppercase;
      }
      .page-button:after {
        display: block;
        content: "";
        border-bottom: solid 2px rgb(59, 59, 59);
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
      }
      .page-button:hover:after {
        transform: scaleX(1);
      }
      a.page-button {
        color: rgb(59, 59, 59);
      }
    }
  }
  .selection {
    cursor: pointer;
  }
}
</style>
