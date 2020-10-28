<template>
  <div class="search-button-component">
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
              <b-checkbox v-model="categories" native-value="laptop">
                Laptop
              </b-checkbox>
            </b-dropdown-item>

            <b-dropdown-item custom value="tv" aria-role="listitem">
              <b-checkbox v-model="categories" native-value="tv">
                TVs
              </b-checkbox>
            </b-dropdown-item>

            <b-dropdown-item custom value="console" aria-role="listitem">
              <b-checkbox v-model="categories" native-value="console">
                Console & Gaming
              </b-checkbox>
            </b-dropdown-item>
            <b-dropdown-item custom value="pc" aria-role="listitem">
              <b-checkbox v-model="categories" native-value="pc">
                PCs
              </b-checkbox>
            </b-dropdown-item>
            <b-dropdown-item custom value="phone" aria-role="listitem">
              <b-checkbox v-model="categories" native-value="phone">
                Phones
              </b-checkbox>
            </b-dropdown-item>
            <b-dropdown-item custom value="camera" aria-role="listitem">
              <b-checkbox v-model="categories" native-value="camera">
                Cameras
              </b-checkbox>
            </b-dropdown-item>
          </b-dropdown>
        </p>
        <b-input
          placeholder="OnlineShop search..."
          type="search"
          pack="fast"
          expanded
        >
        </b-input>
        <p class="control">
          <b-button class="button" type="is-primary" slot="trigger">
            <span>Search</span>
            <b-icon icon="search"></b-icon>
          </b-button>
        </p>
      </b-field>
    </div>
    <div class="pages">
      <div class="page-buttons">
        <router-link to="/products" class="page-button"
          ><b-button type="is-dark">All Products</b-button></router-link
        >
        <router-link to="/products" class="page-button"
          ><b-button type="is-dark">Seasonal</b-button></router-link
        >
        <router-link to="/products" class="page-button"
          ><b-button type="is-dark">Deals</b-button></router-link
        >
        <router-link to="/products" class="page-button"
          ><b-button type="is-dark">Brands</b-button></router-link
        >
        <router-link to="/products" class="page-button"
          ><b-button type="is-dark">Learn</b-button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchButton",
  data() {
    return {
      categories: [],
    };
  },
};
</script>

<style lang="scss">
.search-button-component {
  .search-bar {
    padding: 40px 200px 20px 200px;

    input.input {
      //   border-radius: 20px;
    }
  }
  .search-icon {
    margin-left: 10px;
    cursor: pointer;
  }

  .pages {
    margin: 20px 0 70px 20px;
    position: relative;
    .page-buttons {
      position: absolute;
      left: 575px;
      .page-button {
        margin: 0 10px 0 0;
      }
    }
  }
}
</style>
