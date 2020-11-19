<template>
  <div class="profile">
    <h2 class="header">Profile</h2>
    <div class="columns">
      <div class="column">
        <div class="account-info">
          <div class="info-title">
            <div class="level">
              <div class="level-left">Account</div>
              <b-icon icon="edit" class="icon" style="font-size: 16px"></b-icon>
            </div>
          </div>
          <div class="card" v-if="user">
            <ul class="list-group">
              <li class="list-group-item">Name: {{ user.name }}</li>
              <li class="list-group-item">Username: {{ user.username }}</li>
              <li class="list-group-item">Email: {{ user.email }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="account-info">
          <div class="info-title">
            <div class="level">
              <div class="level-left">Delivery</div>
              <!-- <b-icon icon="edit" class="icon" style="font-size: 16px"></b-icon> -->
              <AddressModal />
            </div>
          </div>
          <div class="card" v-if="user">
            <ul class="list-group">
              <li class="list-group-item">
                Address Line 1: {{ user.addressLine1 }}
              </li>
              <li class="list-group-item">
                Address Line 2: {{ user.addressLine2 }}
              </li>
              <li class="list-group-item">State/Province: {{ user.state }}</li>
              <li class="list-group-item">
                Postal Code: {{ user.postalCode }}
              </li>
              <li class="list-group-item">Country: {{ user.country }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="account-info">
          <div class="info-title">
            Orders
          </div>
          <div class="card" v-if="user">
            <div class="list-group">
              <div
                class="list-group-item"
                v-for="order in orderItems"
                :key="order._id"
              >
                <b>{{ order.items.length }} Item/items</b> on {{ order.date }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddressModal from "./AddressModal";

export default {
  name: "Profile",
  components: {
    AddressModal,
  },
  data() {
    return {
      email: "",
    };
  },
  computed: {
    ...mapGetters(["user", "orderItems"]),
  },
  methods: {
    ...mapActions(["getProfile", "getOrders"]),
  },
  mounted() {
    this.getProfile().then((res) => {
      this.getOrders(res.data.user._id);
    });
    // this.getOrders(this.user._id);
  },
};
</script>

<style lang="scss">
.profile {
  // font-family: Arial, Helvetica, sans-serif;
  .header {
    font-size: 32px;
    padding: 20px;
  }
  .account-info {
    padding: 20px;
    .info-title {
      font-weight: 200;
      font-size: 24px;
      margin-bottom: 10px;
      border-bottom: 1px solid black;
      .icon {
        cursor: pointer;
      }
    }
    .list-group {
      padding: 5px;
    }
  }
}
</style>
