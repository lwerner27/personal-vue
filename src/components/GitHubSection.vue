<template>
    <div class="main-container">
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <h1>GITHUB REPOS</h1>
                    <h6>These are the 10 most recent projects on my GitHub (pulled from the GitHub API).</h6>
                </div>
                <div class="row">
                    <div v-if="repos.length === 0" class="col s12 center">
                        <custom-preloader />
                    </div>
                    <div class="col s12" v-else>
                        <table class="responsive-table highlight">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(repo, index) in repos" v-bind:key="index">
                                    <td>{{ repo.name }}</td>
                                    <td>{{ repo.description }}</td>
                                    <td>
                                        <a :href="repo.svn_url" target="_blank" class="waves-effect waves-light btn blue darken-4">Link</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CustomPreloader from './CustomPreloader.vue'
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState([
            'repos'
        ])
    },
    components: {
        CustomPreloader
    }
}
</script>

<style>
    .main-container {
        padding-bottom: 20px;
    }
</style>


