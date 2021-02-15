<template>
  <tr>
    <td class="guest-avatar">
      <img :src='this.$props.photoUrl' alt='-avatar-'>
    </td>
    <td>
      {{ this.$props.name }}
      <AdminIndicator :isAdmin="this.$props.isAdmin" />
    </td>
    <td>
      <div class="guest-response">
        <div class="response-value">{{ this.$props.response }}</div>
      </div>
    </td>
  </tr>
</template>

<script>
import { mapGetters } from 'vuex'
import AdminIndicator from './AdminIndicator.vue'
export default {
  components: { AdminIndicator },
  data () {
    return {
      setIntervalIDs: []
    }
  },
  updated () {
    this.reloadResponseStatus()
  },
  methods: {
    reloadResponseStatus () {
      // handles colour of circle
      if (this.$props.response === 0 || this.$props.response === null) {
        this.$el.getElementsByClassName('guest-response')[0].classList.remove('has-responded')
      } else {
        this.$el.getElementsByClassName('guest-response')[0].classList.add('has-responded')
      }

      // shows response value if self
      if (this.$props.isMyResponse) {
        this.$el.getElementsByClassName('response-value')[0].classList.remove('hidden')
      } else if (!this.$props.viewAsAdmin) {
        // hides response values if not admin
        this.$el.getElementsByClassName('response-value')[0].classList.add('hidden')
      }
    },
    ...mapGetters(['guestID'])
  },
  props: ['photoUrl', 'responseGuestID', 'name', 'response', 'isAdmin', 'viewAsAdmin']
}
</script>

<style lang="scss">
  .guest-response {
    width: 32px;
    height: 32px;
    background-color: rgb(209, 132, 132);
    box-shadow: 0px 0px 8px -2px rgb(209, 132, 132);
    border-radius: 16px;
    margin: auto;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .guest-response.has-responded {
    background-color: rgb(132, 209, 132);
    box-shadow: 0px 0px 8px -2px rgb(132, 209, 132);
  }

  .guest-avatar {
    text-align: center;
    text-anchor: middle;
  }

  .guest-avatar > img {
    width: 48px;
    height: 48px;
    border-radius: 24px;
    box-shadow: 0px 0px 8px -1px lightgrey;
  }

  .hidden {
    display: none;
  }
</style>
