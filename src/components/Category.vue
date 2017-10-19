<template>
    <div class="container-fluid">
        <h1>{{ msg }}</h1>
        <div class="row">
            <div class="col-md-3" v-for="(post, title) in posts" v-bind:key="post.id">
                <app-post :link='post.rest_api_enabler.Link'>
                    <h4 slot="title" class="card-title">{{post.title.rendered}}</h4>
                    <p slot="content" class="card-text" v-html="post.excerpt.rendered"></p>
                </app-post>
            </div>
        </div>
    </div>
</template>

<script>
import Post from './post.vue';
import appService from '../app.service';

export default {
    name: 'Category',
    components: {
        'app-post': Post
    },
    data() {
        return {
            id: this.$route.params.id,
            msg: 'Welcome to Your App',
            posts: []
        }
    },
    methods: {
        loadPosts() {
            let categoryId = 2;
            if (this.id === 'mobile') {
                categoryId = 11;
            }
            appService.getposts(categoryId).then(data => {
                this.posts = data;
            });
        }
    },
    watch: {
        '$route'(to, form) {
            this.id = to.params.id;
            this.loadPosts();
        }
    },
    created() {
        this.loadPosts();
        // console.log(this.$route.query.page); // get query params directly using this.$route.query
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
    text-align: center;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
