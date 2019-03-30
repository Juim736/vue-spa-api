import Home from './components/Home.vue';
import Login from './components/auth/Login.vue';
import CustomersMain from './components/customers/Main.vue';
import CustomerList from './components/customers/List.vue';

export const routes = [
    {
        path: '/',
        name : 'Home',
        component: Home,
        meta : {
            reuiresAuth : true
        }
    },
    {
        path: '/login',
        name : 'login',
        component: Login
    },
    {
        path: '/customers',
        name : 'Customers',
        component: CustomersMain,
        meta : {
            reuiresAuth : true
        },
        children : [
            {
                path : '/',
                component : CustomerList
            }
            // {
            //     path : 'new',
            //     component : NewCustomer
            // },
            // {
            //     path : ':id',
            //     component : Customer
            // }
        ]
    }
]