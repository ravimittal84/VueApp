<template>
    <ul class="nav">
        <li class="nav-item">
            <router-link exact class="nav-link" to="/category/front-end">Front End</router-link>
        </li>
        <li class="nav-item">
            <router-link exact class="nav-link" :to="{ name: 'category', params: { id: 'mobile' }}">Mobile</router-link>
        </li>
        <li class="nav-item">
            <router-link exact class="nav-link" to="/login">
                <span v-if="isAuthenticated">Logout</span>
                <span v-else>Login</span>
            </router-link>
        </li>
    </ul>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['isAuthenticated'])
    }
}
</script>
