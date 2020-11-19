<template>
  <div class="customer-service-component">
    <div class="page-title">
      How can we help you today?
    </div>
    <div class="services-cards">
      <div class="columns is-multiline">
        <div class="column is-one-quarter">
          <div class="services-card">
            <div class="service-icon">
              <b-icon icon="shipping-fast" size="is-large"></b-icon>
            </div>
            <div class="service-title">Your orders</div>
          </div>
        </div>
        <div class="column is-one-quarter">
          <div class="services-card">
            <div class="service-icon">
              <b-icon icon="phone-alt" size="is-large"></b-icon>
            </div>

            <div class="service-title">Contact Us</div>
          </div>
        </div>
        <div class="column is-one-quarter">
          <div class="services-card">
            <div class="service-icon">
              <b-icon icon="question-circle" size="is-large"></b-icon>
            </div>
            <div class="service-title">FAQ</div>
          </div>
        </div>
        <div class="column is-one-quarter">
          <div class="services-card">
            <div class="service-icon">
              <b-icon icon="box" size="is-large"></b-icon>
            </div>
            <div class="service-title">Returns & Refunds</div>
          </div>
        </div>
        <div class="column is-one-quarter">
          <div class="services-card">
            <div class="service-icon">
              <b-icon icon="address-card" size="is-large"></b-icon>
            </div>
            <div class="service-title">Your Account</div>
          </div>
        </div>
        <div class="column is-one-quarter">
          <div class="services-card">
            <div class="service-icon">
              <b-icon icon="briefcase" size="is-large"></b-icon>
            </div>
            <div class="service-title">Careers</div>
          </div>
        </div>
        <div class="column is-one-quarter">
          <div class="services-card">
            <div class="service-icon">
              <b-icon icon="truck-loading" size="is-large"></b-icon>
            </div>
            <div class="service-title">Service Agreement</div>
          </div>
        </div>
        <div class="column is-one-quarter">
          <div class="services-card">
            <div class="service-icon">
              <b-icon icon="info-circle" size="is-large"></b-icon>
            </div>
            <div class="service-title">Help</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.customer-service-component {
  .page-title {
    padding: 40px;
    text-align: center;
    font-size: 32px;
    box-shadow: 0px 4px 6px -6px #222;
    font-family: Arial, Helvetica, sans-serif;
  }

  .services-cards {
    padding: 20px;
    .services-card {
      height: 200px;
      background-color: #7957d5;
      color: white;
      //   position: relative;
      text-align: center;
      cursor: pointer;

      .service-icon {
        padding-top: 50px;
      }

      .service-title {
        padding-top: 20px;
        font-size: 24px;
        // position: absolute;
        // bottom: 10%;
        // left: 5%;
      }
    }
  }
}
</style>
