<template>
  <div class="address-modal">
    <section>
      <div>
        <div @click="isModalActive = true">
          <b-icon icon="edit" class="icon" style="font-size: 16px"></b-icon>
        </div>
      </div>

      <b-modal v-model="isModalActive" :width="640" scroll="keep">
        <div class="card full-padding">
          <b-field label="Address Line 1">
            <b-input v-model="addressLine1"></b-input>
          </b-field>
          <b-field label="Address Line 2">
            <b-input v-model="addressLine2"></b-input>
          </b-field>

          <b-field label="State/Province">
            <b-input v-model="state"> </b-input>
          </b-field>

          <b-field label="Postal Code">
            <b-input v-model="postalCode"> </b-input>
          </b-field>
          <b-field label="Country">
            <b-input v-model="country"> </b-input>
          </b-field>
          <div class="level">
            <div class="level-left">
              <b-button>Cancel</b-button>
            </div>
            <div class="level-right">
              <b-button type="is-primary" @click="saveAddress">Save</b-button>
            </div>
          </div>
        </div>
      </b-modal>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["user"]),
  },
  data() {
    return {
      isModalActive: false,
      addressLine1: null,
      addressLine2: null,
      state: null,
      postalCode: null,
      country: null,
    };
  },
  methods: {
    saveAddress() {
      let user = {
        addressLine1: this.addressLine1,
        addressLine2: this.addressLine2,
        state: this.state,
        postalCode: this.postalCode,
        country: this.country,
        id: this.user._id,
      };
      console.log(user);
      this.isModalActive = false;
    },
  },
};
</script>

<style lang="scss">
.address-modal {
  // border-radius: 50%;
  .full-padding {
    padding: 20px;
  }
}
</style>
