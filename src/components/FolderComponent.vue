<template>
    <div class="folder-box" @contextmenu.prevent="handleRightClick($event)">
      <b-icon-folder class="icon"></b-icon-folder>
      {{ markFields(folder.folderName) }}
      <div></div>
    </div>
</template>

<script>
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
    markFields (text) {
      const MAX_LENGTH = 12
      if (text.length > MAX_LENGTH) {
        return text.substring(0, MAX_LENGTH) + '...'
      }
      return text
    },
    handleRightClick (event) {
      this.isRightClick = true
      console.log(event)
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
