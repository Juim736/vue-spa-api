<template>
    <div class="container">
       <nav class="navbar navbar-light bg-light justify-content-between">
        <a class="navbar-brand">Header</a>    
        <form class="form-inline">
            <ul class="navbar-nav ml-auto">
                <template v-if="!currentUser">
                    <li>
                        <router-link to="/login" class="nav-link">Login</router-link>
                    </li>
                    <li>
                        <router-link to="/register" class="nav-link">Register</router-link>
                    </li>
                </template>
                <template v-else>
                    <li>
                        <router-link to="/customers" class="nav-link">Customers</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a id="navbarDropdown" class="nav-link dropdown-toggle" role="button" aria-expanded="false" data-toggle="dropdown" area-haspopup="true"  href="#">{{ currentUser.name }}
                            <span class="caret"></span>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdoen">
                            <a href="#" @click.prevent="logout" class="dropdown-item">Logout</a>
                        </div>
                    </li>
                    <li>
                         <a href="#" @click.prevent="logout" class="dropdown-item">Logout</a>
                    </li>
                </template>
            </ul>
        </form>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'app-header',
        methods : {
            logout() {
                this.$store.commit('logout');
                this.$router.push('/login');
            }
        },
        computed : {
            currentUser() {
                return this.$store.getters.currentUser
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
