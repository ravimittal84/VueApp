<template>
    <div class="container-fluid">
        <h2>Login</h2>
        <div class="form-group">
            <label class="label">Username</label>
            <input class="form-control" type="text" placeholder="Your username">
        </div>
        <div class="form-group">
            <label class="label">Password</label>
            <input class="form-control" type="text" placeholder="Your password">
        </div>
        <button type="submit" class="btn btn-primary">Login</button>        
    </div>
</template>

<script>
export default {
    name: 'Login'
}
</script>
