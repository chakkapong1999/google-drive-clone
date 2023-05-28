<template>
  <div id="home">
    <div class="button mt-5 mb-5">
      <button class="btn btn-warning">UPLOAD FILE</button>
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
  </div>
</template>

<script>
import FolderComponent from '@/components/FolderComponent.vue'
export default {
  name: 'HomeView',
  components: {
    FolderComponent
  },
  data () {
    return {
      isShowModal: false,
      showPassword: false,
      folder: {
        folderName: '',
        folderPassword: '',
        folderStatus: 'active',
        folderOwner: ''
      },
      folderProps: []
    }
  },
  methods: {
    cancel () {
      this.clearTempData()
      this.$bvModal.hide('create-modal')
    },
    createFolder () {
      const formData = new FormData()

      formData.append('files', 'filesArray')
      formData.append('payload',
        JSON.stringify(
          {
            folderName: this.folder.folderName,
            folderOwner: this.folder.folderOwner,
            folderStatus: this.folder.folderStatus,
            folderPassword: this.folder.folderPassword
          }
        )

      )

      // console.log(this.folderName)
      // console.log(this.folderPassword)
      // console.log(this.folderStatus)
      // console.log(this.folderOwner)
      console.log(formData)

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
      console.log('clickFolder : ', event)
    }
  }
}
</script>

<style scoped>
#home {
  height: 100vh;
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

.ok-button {
  height: 42px;
  /* margin-top: 0.5rem; */
  margin-bottom: 4px;
  color: white;
  background-color: #4ba659;
  border-color: #4ba659;
  width: 100%;
  display: grid;
  justify-self: center;
  text-align: center;
}

.folder {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 1rem 5rem 2rem 5rem;
}
</style>
