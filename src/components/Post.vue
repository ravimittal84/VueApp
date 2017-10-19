<template>
    <div class="card">
        <div class="card-body">
            <slot name="title"></slot>
            <slot name="content"></slot>
        </div>
        <div class="card-footer">
            <a :href="link" target="_blank" class="pull-right">Read more</a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Post',
    props: ['link']
}
</script>
<style scoped>
    .card{
        padding-bottom: 40px;
        height: 100%;
    }

    .card-footer{
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
    }
</style>
