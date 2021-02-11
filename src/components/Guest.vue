<template>
  <tr>
    <td class="guest-avatar">
      <img :src='this.$props.photoUrl' alt='-avatar-'>
    </td>
    <td>{{ this.$props.name }}</td>
    <td>
      <div class="guest-response">
        <div class="admin-only">{{ this.$props.response }}</div>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  mounted () {
    this.reloadResponseStatus()
  },
  methods: {
    reloadResponseStatus () {
      if (this.$props.response === 0 || this.$props.response === null) {
        this.$el.getElementsByClassName('guest-response')[0].classList.remove('has-responded')
      } else {
        this.$el.getElementsByClassName('guest-response')[0].classList.add('has-responded')
      }
    }
  },
  props: ['photoUrl', 'name', 'response']
}
</script>

<style lang="scss">
  .guest-response {
    width: 28px;
    height: 28px;
    background-color: rgb(209, 132, 132);
    box-shadow: 0px 0px 8px -2px rgb(209, 132, 132);
    border-radius: 14px;
    margin: auto;
  }

  .guest-response > div {
    // TODO: center div in parent
    margin: auto;
  }

  .guest-response.has-responded {
    background-color: rgb(132, 209, 132);
    box-shadow: 0px 0px 8px -2px rgb(132, 209, 132);
  }

  .guest-avatar {
    text-align: center;
    text-anchor: middle;
  }

  img {
    width: 48px;
    height: 48px;
  }
</style>
