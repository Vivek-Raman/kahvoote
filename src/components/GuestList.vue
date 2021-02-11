<template>
  <div id="guest-list">
    <table>
      <tr>
        <th colspan="2">Guest</th>
        <th>Response</th>
      </tr>
      <Guest v-for='guest in this.guests'
        :key='guest.index'
        :uniqueID='guest.index'
        :name='guest.name'
        :response='guest.response'
        :photoUrl='guest.photoUrl' />
    </table>
  </div>
</template>

<script>
import Guest from './Guest.vue'

export default {
  components: {
    Guest
  },
  data () {
    return {
      guests: [],
      isAdmin: false
    }
  },
  mounted () {
    // TODO: Integration
    const response = [
      {
        roomId: '001',
        guestName: 'Vivek Raman',
        isAdmin: false,
        photoUrl: 'https://i.imgur.com/9pNffkj.png',
        response: 18
      }, {
        roomId: '001',
        guestName: 'Shreeyansh Shahi',
        isAdmin: false,
        photoUrl: 'https://i.imgur.com/9pNffkj.png',
        response: null
      }, {
        roomId: '001',
        guestName: 'Akshay Kumar Yadav',
        isAdmin: false,
        photoUrl: 'https://i.imgur.com/9pNffkj.png',
        response: 15
      }
    ]

    response.forEach(e => {
      this.guests.push({
        name: e.guestName,
        response: e.response,
        photoUrl: e.photoUrl
      })
    })
  }
}
</script>

<style lang="scss">
  tr {
    height: 78px;
  }
</style>
