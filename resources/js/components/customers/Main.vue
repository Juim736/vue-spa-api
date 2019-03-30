<template>
    <div class="container">
        <div class="row jsutify-content-center">
            <div class="col-8">
                <div class="card card-default">
                    <div class="card-header">Customers</div>
                    <div class="card-body">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'customer-main'
}
</script>
