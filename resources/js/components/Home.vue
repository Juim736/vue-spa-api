<template>
    <div class="container">
        <div class="col-4 offset-4">
            <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{ welcome }}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'home',
        computed : {
            welcome () {
                return this.$store.getters.welcome
            }
        }
    }
</script>
