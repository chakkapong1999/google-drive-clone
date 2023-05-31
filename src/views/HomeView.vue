<template>
  <div id="home">
    <div class="button mt-5 mb-5">
      <!-- <button class="btn btn-warning" @click="uploadFile">UPLOAD FILE</button> -->
      <button class="btn btn-primary" @click="isShowModal = true">CREATE FOLDER</button>
    </div>
    <b-modal centered v-model="isShowModal" title="New Folder" id="create-modal">
      <div class="bubble">
        <input type="text" class="form-control" placeholder="Folder Name" v-model="folder.folderName" />
        <b-form-checkbox v-model="showPassword" :value="true" :unchecked-value="false">
          Password
        </b-form-checkbox>
        <input v-if="showPassword" type="password" class="form-control" placeholder="Password" v-model="folder.folderPassword" />
      </div>

      <template #modal-footer>
        <button class="btn btn-secondary" @click="cancel()">
          CANCEL
        </button>
        <button class="btn btn-success" @click="createFolder()">
          CREATE
        </button>
      </template>
    </b-modal>
    <hr>
    <div class="folder" v-if="folderProps.length > 0">
      <template v-for="(item, index) of folderProps">
        <FolderComponent :folder="item" :key="index" @clickFolder="clickFolder"/>
      </template>
    </div>
    <div class="display-file-box">
      <template v-for="(file, index) in filesArrays">
        <DisplayFileComponent :file="file" :key="index"/>
      </template>
    </div>
    <div class="files" v-if="isInsideFolder">
      <div class="drop-file" @drop="drop" @dragover="dragover" @dragleave="dragleave">
        <input id="uploadFile" ref="file" type="file" @change="onFileChange" multiple hidden>
        <div class="upload-box" @click="uploadFile">
          <div>
            Drag and Drop files here or<span style="text-decoration: underline;"> Click here </span>to upload your files
          </div>
          <div>
            <b-icon-upload scale="2" class="mt-5" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FolderComponent from '@/components/FolderComponent.vue'
import DisplayFileComponent from '@/components/DisplayFileComponent.vue'
import { markFields, successToast } from '@/utils'
export default {
  name: 'HomeView',
  components: {
    FolderComponent,
    DisplayFileComponent
  },
  data () {
    return {
      isInsideFolder: false,
      isShowModal: false,
      showPassword: false,
      folder: {
        folderName: '',
        folderPassword: '',
        folderStatus: 'active',
        folderOwner: ''
      },
      folderProps: [],
      filesArrays: []
    }
  },
  methods: {
    markFields,
    successToast,
    async callData () {
      const response = await this.$api.getFiles({
        owner: 'Test'
      })
      console.log(response)
    },
    cancel () {
      this.clearTempData()
      this.$bvModal.hide('create-modal')
    },
    createFolder () {
      const folder = {
        folderName: this.folder.folderName,
        folderOwner: this.folder.folderOwner,
        folderStatus: this.folder.folderStatus,
        folderPassword: this.folder.folderPassword
      }
      this.folderProps.push(folder)
      this.clearTempData()
      this.$bvModal.hide('create-modal')
    },
    clearTempData () {
      this.folder = {
        folderName: '',
        folderOwner: '',
        folderStatus: 'active',
        folderPassword: ''
      }
      this.showPassword = false
    },
    clickFolder (event) {
      this.isInsideFolder = true
      console.log('clickFolder : ', event)
    },
    uploadFile () {
      if (!this.isInsideFolder) {
        alert('cannot upload')
      } else {
        document.getElementById('uploadFile').click()
      }
    },
    async onFileChange () {
      this.filesArrays = [...this.$refs.file.files]

      const formData = new FormData()
      for (let i = 0; i < this.filesArrays.length; i++) {
        const file = this.filesArrays[i]
        formData.append('files', file)
      }

      console.log('onFileChange')

      // const response = await this.$api.uploadFiles(formData)

      // console.log(response)
    },
    drop (event) {
      event.preventDefault()
      this.$refs.file.files = event.dataTransfer.files
      this.onFileChange()
    },
    dragleave (event) {
      event.preventDefault()
    },
    dragover (event) {
      event.preventDefault()
    }
  }
}
</script>

<style scoped>
#home {
  padding-bottom: 1rem;
}

.button {
  display: flex;
  justify-content: center;
  gap: 5rem 1rem;
}

.bubble {
  display: grid;
  word-break: break-all;
  row-gap: 18px;
  padding: 1rem;
  width: 100%;
}

.folder {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 1rem 5rem 2rem 5rem;
}

.files {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
}
.drop-file {
  min-height: 20rem;
  border: 2px dashed black;
  display: grid;
  place-items: center;
  justify-content: center;
  text-align: center;
  word-wrap: break-word;
  padding: 1rem;
}
#uploadFile {
  width: 100%;
  height: 100%;
}
.upload-box {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  column-gap: 2rem;
}
.display-file-box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* flex-direction: column; */
  place-items: center;
  padding: 1rem;
  text-align: center;
  gap: 1rem;
}
</style>
