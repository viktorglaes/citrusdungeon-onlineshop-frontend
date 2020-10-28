<template>
  <div class="home">
    <SearchButton />
    <div class="items">
      <div class="columns">
        <div class="column">
          <div id="laptop" class="img-gradient">
            <div class="img-title">LAPTOPS</div>
          </div>
        </div>
        <div class="column">
          <div id="tv" class="img-gradient">
            <div class="img-title">TVs</div>
          </div>
        </div>
        <div class="column">
          <div id="gaming" class="img-gradient">
            <div class="img-title">CONSOLE & GAMING</div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div id="pc" class="img-gradient">
            <div class="img-title">PCs</div>
          </div>
        </div>
        <div class="column">
          <div id="phone" class="img-gradient">
            <div class="img-title">PHONES</div>
          </div>
        </div>
        <div class="column">
          <div id="camera" class="img-gradient">
            <div class="img-title">CAMERAS</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchButton from "../components/SearchButton";

export default {
  name: "Home",
  components: {
    SearchButton,
  },
};
</script>

<style lang="scss">
.home {
  // .search-bar {
  //   padding: 40px 200px 20px 200px;

  //   input.input {
  //     border-radius: 20px;
  //   }
  // }

  // .sub-pages {
  //   margin: 20px 0 0 20px;
  //   .page-button {
  //     margin: 0 10px 0 0;
  //     left: 34%;
  //   }
  // background-color: #f2effb;
  //   .sub-page {
  //     padding: 20px 20px 20px 20px;
  //   }
  // }

  .items {
    // margin-top: 20px;
    text-align: center;
    padding: 20px;

    .img-gradient {
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
      background-image: linear-gradient(
          to bottom,
          rgba(245, 246, 252, 0.52),
          rgba(117, 19, 93, 0.73)
        ),
        url("../assets/laptop.jpg");
    }
    #tv {
      background-image: linear-gradient(
          to bottom,
          rgba(245, 246, 252, 0.52),
          rgba(117, 19, 93, 0.73)
        ),
        url("../assets/tv.jpg");
    }
    #gaming {
      background-image: linear-gradient(
          to bottom,
          rgba(245, 246, 252, 0.52),
          rgba(117, 19, 93, 0.73)
        ),
        url("../assets/gaming.jpg");
    }
    #pc {
      background-image: linear-gradient(
          to bottom,
          rgba(245, 246, 252, 0.52),
          rgba(117, 19, 93, 0.73)
        ),
        url("../assets/pc.png");
    }
    #phone {
      background-image: linear-gradient(
          to bottom,
          rgba(245, 246, 252, 0.52),
          rgba(117, 19, 93, 0.73)
        ),
        url("../assets/phone.png");
    }
    #camera {
      background-image: linear-gradient(
          to bottom,
          rgba(245, 246, 252, 0.52),
          rgba(117, 19, 93, 0.73)
        ),
        url("../assets/camera.jpg");
    }
  }
}
</style>
