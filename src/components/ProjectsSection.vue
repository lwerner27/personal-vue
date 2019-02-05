<template>
    <div class="main-container">
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <h1>FEATURED PROJECTS</h1>
                </div>
            </div>
            <div class="row">
                <div v-for="(project, index) in projects" v-bind:key="index" class="col s12 l4">
                    <custom-card :name="project.name" :details="project.details" :githubLink="project.githubLink" :siteLink="project.siteLink" :imgLink="project.imgLink"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CustomCard from './CustomCard.vue'
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            projects: "featuredProjects",
        })
    },
    components: {
        CustomCard
    }
}
</script>


<style scoped>
    .main-container {
        background-color: #076EC5;
        padding-bottom: 20px;
    }
    h1 {
        color: white;
        text-align: left;
    }
</style>

