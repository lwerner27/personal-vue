<template>
  <div>
    <main-section></main-section>
    <about-section />
    <projects-section />
    <git-hub-section />
  </div>
</template>

<script>
import MainSection from '../components/MainSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import GitHubSection from '../components/GitHubSection.vue'
import axios from 'axios'
import { mapMutations } from 'vuex'

export default {
  components: {
    MainSection,
    AboutSection,
    ProjectsSection,
    GitHubSection
  },
  methods: {
    ...mapMutations([
      'ADD_REPOS'
    ]),
    addRepos: function() {
      axios.get("https://api.github.com/users/lwerner27/repos?sort=created&per_page=10")
        .then((res) => {
          this.ADD_REPOS(res.data)
        })
    }
  },
  created() {
    this.addRepos()
  }
}
</script>


<style scoped>

</style>

