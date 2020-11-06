<template>
  <div class="home">
    <SearchField />

    <div class="items">
      <div class="home-season">
        <img
          class="season-img"
          src="https://cdn.pixabay.com/photo/2013/07/12/18/52/presents-153926_960_720.png"
          alt=""
          style="width: 1550px; overflow:hidden; height: 700px;"
        />
        <div class="season-title">
          <p>MERRY CHRISTMAS</p>
          <p class="subtitle">Celebrate the holiday with CiSHOP</p>
        </div>
      </div>
      <div class="category-card">
        <div class="columns is-multiline" @click="selectCategory($event)">
          <div class="column is-one-third">
            <div id="laptop" class="img-gradient">
              <div class="img-title">LAPTOPS</div>
            </div>
          </div>
          <div class="column is-one-third">
            <div id="tv" class="img-gradient">
              <div class="img-title">TVs</div>
            </div>
          </div>
          <div class="column is-one-third">
            <div id="gaming" class="img-gradient">
              <div class="img-title">CONSOLE & GAMING</div>
            </div>
          </div>
          <div class="column is-one-third">
            <div id="pc" class="img-gradient">
              <div class="img-title">PCs</div>
            </div>
          </div>
          <div class="column is-one-third">
            <div id="phone" class="img-gradient">
              <div class="img-title">PHONES</div>
            </div>
          </div>
          <div class="column is-one-third">
            <div id="camera" class="img-gradient">
              <div class="img-title">CAMERAS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchField from "../components/SearchField";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    SearchField,
  },
  data() {
    return {
      searchParams: {
        title: "",
        categories: null,
      },
    };
  },
  methods: {
    ...mapActions(["getProducts"]),
    selectCategory(event) {
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
.home {
  .items {
    // margin-top: 20px;
    text-align: center;
    padding: 20px;

    .home-season {
      position: relative;
      display: inline-block;
      .season-title {
        text-align: left;
        position: absolute;
        left: 10rem;
        color: white;
        bottom: 5rem;
        font-size: 30px;
        font-weight: 600;

        .subtitle {
          font-size: 22px;
          color: #9e9e9e;
        }
      }
    }
    .category-card {
      padding: 50px 100px 20px 100px;
      .img-gradient {
        cursor: pointer;
        height: 400px;
        background-size: cover;
        color: white;
        padding: 20px;
        transition: transform 0.25s ease;
        position: relative;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
          0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11),
          0 8px 16px rgba(0, 0, 0, 0.11);

        .img-title {
          font-size: 32px;
          position: absolute;
          bottom: 10%;
          left: 5%;
          text-shadow: 1px 1px #2222228c;
        }
      }

      .img-gradient:hover {
        transform: scale(0.98);
      }

      #laptop {
        background-image: url("../assets/laptop.jpg");
        background-position: 30%;
      }
      #tv {
        background-image: url("../assets/tv.jpg");
        background-position: 30%;
      }
      #gaming {
        background-image: url("../assets/gaming.jpg");
      }
      #pc {
        background-image: url("../assets/pc.png");
        background-position: 80%;
      }
      #phone {
        background-image: url("../assets/phone.png");
        background-position: 50%;
      }
      #camera {
        background-image: url("../assets/camera.jpg");
        background-position: 40%;
      }
    }
  }
}
</style>
