<template>
  <div class="about">
    <div id="about-img" class="img-gradient">
      <div class="about-title">
        ABOUT CISHOP
        <div class="subtitle">
          <p>Learn about the fastest growing online shop in North America.</p>
        </div>
      </div>
    </div>
    <div class="container-title">
      <h2 class="title">Who we are</h2>
      <div class="flex-container">
        <div class="content">
          <p>
            CiSHOP is an ecommerce store providing North America with fast
            product deliveries in a growing online market.
          </p>

          <p>
            <b>Why choose CiSHOP?</b><br />
            Quickest deliveries <br />
            Great supply<br />
            Latest products
          </p>
        </div>
        <div class="images">
          <img
            src="https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_1280.jpg"
            alt=""
          />
          <img
            src="https://cdn.pixabay.com/photo/2016/02/21/20/24/courier-1214227_1280.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="container-title">
      <h2 class="title">Sample Page</h2>
      <div class="flex-container">
        <div class="content">
          <p>
            This page is open source and anyone has the right to use this
            project.
          </p>
          <br />
        </div>
        <!-- <div class="images">
          <img
            src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg"
            alt=""
          />
          <img
            src="https://cdn.pixabay.com/photo/2016/02/21/20/24/courier-1214227_1280.jpg"
            alt=""
          />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.about {
  .img-gradient {
    height: 480px;
    background-size: cover;
    color: white;
    padding: 20px;
    position: relative;

    .about-title {
      font-size: 36px;
      font-weight: 600;
      position: absolute;
      bottom: 15%;
      left: 35%;
      text-shadow: 4px 4px #2222228c;

      .subtitle {
        font-size: 24px;
        color: white;
        width: 400px;
      }
    }
  }
  #about-img {
    background-image: linear-gradient(
        to bottom,
        transparent,
        rgba(0, 0, 0, 0.73)
      ),
      url("https://cdn.pixabay.com/photo/2018/05/04/20/01/website-3374825_1280.jpg");
  }

  .container-title {
    padding: 20px;
    margin: 50px 0 0 200px;

    .title {
      font-size: 60px;
      color: rgb(168, 168, 168);
      font-weight: 300;
    }
    .flex-container {
      display: flex;
      .content {
        font-size: 18px;
        width: 300px;
      }
      .images {
        margin-left: 70px;
        img {
          width: 450px;
          padding: 0 20px 20px 20px;
        }
      }
    }
  }
}
</style>
