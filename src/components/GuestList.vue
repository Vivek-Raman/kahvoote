<template>
  <div id="guest-list">
    <table>
      <tr>
        <th colspan="2">Guest</th>
        <th>Response</th>
      </tr>
      <Guest v-for='guest in this.guests'
        :responseGuestID='guest.guestId'
        :key='guest.index'
        :name='guest.guestName'
        :response='guest.responseValue'
        :photoUrl='guest.photoUrl'
        :isAdmin='guest.admin'
        :viewAsAdmin='$props.viewAsAdmin' />
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import Guest from './Guest.vue'
import api from '../config/api'

export default {
  components: {
    Guest
  },
  data () {
    return {
      setIntervalIDs: [],
      guests: []
    }
  },
  props: ['viewAsAdmin', 'statementID'],
  mounted () {
    this.setIntervalIDs.push(setInterval(() => {
      if (this.$props.statementID === undefined) {
        console.log('Undefined statementID')
        return
      }
      axios({
        method: 'GET',
        url: api.BASE_URL + '/guest/guestsResponses/' + this.$props.statementID
      })
        .then((response) => {
          console.log({ url: response.config.url, status: response.status, data: response.data })
          this.guests = response.data
        })
        .catch((error) => {
          console.error(error)
        })
    }, 5000))
  },
  beforeDestroy () {
    for (var i = 0; i < this.setIntervalIDs.length; ++i) {
      clearInterval(this.setIntervalIDs[i])
    }
  }
}
</script>

<style lang="scss">
  tr {
    height: 78px;
  }
</style>
