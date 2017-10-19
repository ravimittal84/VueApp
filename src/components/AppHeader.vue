<template>
    <ul class="nav">
        <li class="nav-item">
            <router-link exact class="nav-link" to="/category/front-end">Front End</router-link>
        </li>
        <li class="nav-item">
            <router-link exact class="nav-link" :to="{ name: 'category', params: { id: 'mobile' }}">Mobile</router-link>
        </li>
        <li class="nav-item">
            <router-link exact class="nav-link" to="/login">Login</router-link>
        </li>
    </ul>
</template>
