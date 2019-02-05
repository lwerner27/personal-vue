<template>
    <div class="card hoverable">
        <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" :src="imgLink">
        </div>
        <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">{{ name }}<i class="activator material-icons right">more_vert</i></span>
            <p>
                <a :href="githubLink" target="_blank">GitHub Repo</a>
                <a class="right" :href="siteLink" target="_blank" v-if="siteLink.length > 0">Site Link</a>
            </p>
        </div>
        <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">{{ name }}<i class="material-icons right">close</i></span>
            <p>{{ details }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        "name",
        "details",
        "githubLink",
        "siteLink",
        "imgLink"
    ]
}
</script>
