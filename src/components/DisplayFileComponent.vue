<template>
  <div class="display-file-item">
    <div class="file-header">
      <!-- <b-icon-file-pdf/> -->
      <div></div>
      <span>{{ markFields(file.name, 18) }}</span>
      <div class="list-icon">
        <b-icon-list scale="1.5" />
      </div>
    </div>
    <div class="previe-img">
      <img :src="url" alt="Preview">
    </div>
  </div>
</template>

<script>
import { markFields } from '@/utils'
export default {
  name: 'DisplayFileComponent',
  props: {
    file: File
  },
  computed: {
    url () {
      return URL.createObjectURL(this.file)
    }
  },
  methods: {
    markFields
  }

}
</script>

<style scoped>
.display-file-item {
  width: 15rem;
  height: 15rem;
  border: 1px solid rgb(161, 156, 156);
  padding: 0.5rem 0 0.5rem 0;
  border-radius: 5px;
  background-color: rgb(238, 238, 238);
  word-wrap: break-word;
  box-shadow: 1px 3px #888888;
}
.previe-img {
  padding: 0.5rem;
}
img {
  width: 13rem;
  height: 11rem;
}
.file-header {
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  justify-content: center;
}
.list-icon {
  display: flex;
  justify-content: flex-end;
  place-items: center;
  padding-right: 0.5rem;
  cursor: pointer;
}

</style>
