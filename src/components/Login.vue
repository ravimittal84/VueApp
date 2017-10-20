<template>
    <div class="container-fluid">
        <div v-if="isAuthenticated">
            <div class="row">
                <div class="col-9">
                    Hello {{profile.firstName}}!
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
import appService from '../app.service';

export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: '',
            isAuthenticated: false,
            profile: {}
        }
    },
    watch: {
        isAuthenticated: function(val) {
            if (val) {
                appService.getProfile()
                    .then(data => {
                        this.profile = data;
                    });
            } else {
                this.profile = {};
            }
        }
    },
    methods: {
        login() {
            appService.login({ username: this.username, password: this.password })
                .then(data => {
                    window.localStorage.setItem('token', data.token);
                    window.localStorage.setItem('tokenExpiration', data.expiration);
                    this.username = '';
                    this.password = '';
                    this.isAuthenticated = true;
                }).catch(res => {
                    window.alert('could not login!');
                    console.log(res);
                });
        },
        logout() {
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('tokenExpiration');
            this.isAuthenticated = false;
            this.profile = {};
        }
    },
    created() {
        let expiration = window.localStorage.getItem('tokenExpiration');
        var unixTimestamp = new Date().getTime() / 1000;
        if (expiration !== null && parseInt(expiration) - unixTimestamp > 0) {
            this.isAuthenticated = true;
            this.profile = {};
        }
    }
}
</script>
