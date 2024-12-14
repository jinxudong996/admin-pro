<template>
  <router-view />
</template>
<!-- <script>
export default {
  name: 'App'
}
</script> -->
<script setup>
import { useStore } from 'vuex'
import { generateNewStyle, writeNewStyle } from '@/utils/theme'

const store = useStore()
generateNewStyle(store.getters.mainColor).then(newStyleText => {
  writeNewStyle(newStyleText)
})
</script>
<style></style>
