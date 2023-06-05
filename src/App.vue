<template>
  <div id="app">
    <div class="back-drop" v-if="isOpenSpinner">
      <span class="loader"></span>
    </div>
    <router-view />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState: mapSystemState } = createNamespacedHelpers('system')
export default {
  name: 'App',
  computed: {
    ...mapSystemState({
      isOpenSpinner: state => state.isOpenSpinner
    })
  },
  beforeCreate () {
    // const favicon = document.getElementById('favicon')
    // favicon.href = 'https://w7.pngwing.com/pngs/922/746/png-transparent-google-drive-google-drive-google-logo-google-docs-google-angle-text-logo-thumbnail.png'
  }
}
</script>

<style>
body {
  margin: 0 !important;
}

.back-drop {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  place-content: center;
  place-items: center;
  position: absolute !important;
  z-index: 9998;
  background-color: whitesmoke;
  opacity: 0.9;
}

.loader {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
  margin: 15px auto;
  position: relative;
  color: #8f8a8a;
  box-sizing: border-box;
  animation: animloader 1s linear infinite alternate;
}

@keyframes animloader {
  0% {
    box-shadow: -38px -12px, -14px 0, 14px 0, 38px 0;
  }

  33% {
    box-shadow: -38px 0px, -14px -12px, 14px 0, 38px 0;
  }

  66% {
    box-shadow: -38px 0px, -14px 0, 14px -12px, 38px 0;
  }

  100% {
    box-shadow: -38px 0, -14px 0, 14px 0, 38px -12px;
  }
}</style>
