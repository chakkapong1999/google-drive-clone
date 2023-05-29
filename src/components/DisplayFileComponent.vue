<template>
    <div class="display-file-item">
        <span>{{ markFields(file.name, 18) }}</span>
    </div>
</template>

<script>
import { markFields } from '@/utils'
export default {
  name: 'DisplayFileComponent',
  props: {
    file: File
  },
  methods: {
    markFields
  }

}
</script>

<style scoped>
.display-file-item {
  width: 12rem;
  height: 12rem;
  border: 1px solid rgb(161, 156, 156);
  padding: 0.5rem;
  border-radius: 5px;
  background-color: rgb(238, 238, 238);
  word-wrap: break-word;
}
</style>
