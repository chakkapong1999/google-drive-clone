<template>
    <div class="folder-box" @contextmenu.prevent="handleRightClick($event)" @click="clickFolder">
      <b-icon-folder class="icon"></b-icon-folder>
      {{ markFields(folder.folderName, 12) }}
      <div></div>
    </div>
</template>

<script>
import { markFields } from '@/utils'
export default {
  name: 'FolderComponent',
  props: {
    folder: Object
  },
  data () {
    return {
      isRightClick: false
    }
  },
  methods: {
    markFields,
    handleRightClick (event) {
      this.isRightClick = true
      console.log(event)
    },
    clickFolder () {
      this.$emit('clickFolder', this.folder)
    }
  }
}
</script>

<style scoped>
.folder-box {
  border: 1px solid rgb(161, 156, 156);
  border-radius: 5px;
  width: 10rem;
  height: 2.5rem;
  text-align: center;
  word-break: break-all;
  display: flex;
  justify-content: space-evenly;
  place-items: center;
  cursor: pointer;
  /* padding: 0 0 0 1rem; */
}

.folder-box:hover {
  background-color: rgb(223, 221, 221);
}
</style>
