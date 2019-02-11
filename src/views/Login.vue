<template>
    <div class="main-container valign-wrapper">
        <div class="container">
            <div class="row">
                <form class="col s12 m4 offset-m4 z-depth-3">
                    <h5 class="center">LOGIN</h5>
                    <div class="row">
                        <div class="input-field col s12">
                            <input v-model="username" id="username" type="text">
                            <label for="username">Username</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input v-model="password" id="password" type="password" class="validate">
                            <label for="password">Password</label>
                        </div>
                    </div>
                    <button class="btn waves-effect waves-light blue darken-4" type="submit" name="action">Submit
                        <i class="material-icons right">send</i>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    data: () => (
        {
            username: "",
            password: ""
        }
    ),
    computed: {
        ...mapState([
            'isLoggedIn',
            'jwt'
        ])
    },
    methods: {
        ...mapMutations([
            "UPDATE_LOGIN_STATUS",
            "UPDATE_JWT"
        ]),
        updateLoginStatus: function() {
            this.UPDATE_LOGIN_STATUS()
        },
        updateJwt: function(jwt) {
            this.UPDATE_JWT(jwt)
        }
    }
}
</script>



<style scoped>
    .main-container {
        height: 100vh;
    }

    .row {
        padding-bottom: 10px;
    }

    button {
        margin-bottom: 10px;
    }

    /* label focus color */
    .input-field input[type=text]:focus+label {
        color: #0d47a1;
    }

    /* label underline focus color */
    .input-field input[type=text]:focus {
        border-bottom: 1px solid #0d47a1;
        box-shadow: 0 1px 0 0 #0d47a1;
    }

    /* label focus color */
    .input-field input[type=password]:focus+label {
        color: #0d47a1;
    }

    /* label underline focus color */
    .input-field input[type=password]:focus {
        border-bottom: 1px solid #0d47a1;
        box-shadow: 0 1px 0 0#0d47a1;
    }
</style>
