<template>
    <div class="container-fluid">
        <div v-if="isAuthenticated">
            <div class="row">
                <div class="col-9">
                    Hello {{username}}!
                </div>
                <div class="col">
                    <button @click="logout" class="btn btn-default">Logout</button>
                </div>
            </div>

        </div>
        <div v-else>
            <h2>Login</h2>
            <div class="form-group">
                <label class="label">Username</label>
                <input class="form-control" v-model="username" type="text" placeholder="Your username">
            </div>
            <div class="form-group">
                <label class="label">Password</label>
                <input class="form-control" v-model="password" type="text" placeholder="Your password">
            </div>
            <button @click="login" type="submit" class="btn btn-primary">Login</button>
        </div>
    </div>
</template>

<script>
// import eventBus from '../event-bus';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    // watch: {
    //     isAuthenticated: function(val) {
    //         if (val) {
    //             appService.getProfile()
    //                 .then(data => {
    //                     this.profile = data;
    //                 });
    //         } else {
    //             this.profile = {};
    //         }

    //         eventBus.$emit('authStatusUpdate', val);
    //     }
    // },
    methods: {
        ...mapActions({
            logout: 'logout'
        }),
        login() {
            this.$store.dispatch('login', { username: this.username, password: this.password})
                .then(() => {
                    this.username = '';
                    this.password = '';
                });
        }
    },
    computed: {
        ...mapGetters(['isAuthenticated'])
    }
}
</script>
