import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                
                               
                {
                    path: '/coursedetail',
                    component: resolve => require(['../components/page/coursedetail.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/dish',
                    component: resolve => require(['../components/page/DishList.vue'], resolve)    // 菜单列表组件
                },
                {
                    path: '/course',
                    component: resolve => require(['../components/page/course.vue'], resolve)    // 菜单列表组件
                },{
                    path: '/register',
                    component: resolve => require(['../components/page/register.vue'], resolve)    // 菜单列表组件
                },{
                    path: '/classes',
                    component: resolve => require(['../components/page/classes.vue'], resolve)    // 菜单列表组件
                },{
                    path: '/categroy',
                    component: resolve => require(['../components/page/categroy.vue'], resolve)    // 菜单列表组件
                },{
                    path: '/rank',
                    component: resolve => require(['../components/page/rank.vue'], resolve)    // 菜单列表组件
                },{
                    path: '/area',
                    component: resolve => require(['../components/page/area.vue'], resolve)    // 菜单列表组件
                },{
                    path: '/order',
                    component: resolve => require(['../components/page/order.vue'], resolve)    // 菜单列表组件
                },{
                    path: '/approve',
                    component: resolve => require(['../components/page/approve.vue'], resolve)    // 菜单列表组件
                },
                
                 {
                    path: '/canteen',
                    component: resolve => require(['../components/page/Canteen.vue'], resolve)    // 食堂列表组件
                },
                {
                    path: '/order',
                    component: resolve => require(['../components/page/Order.vue'], resolve)    // 订单列表组件
                },
                {
                    path: '/reply',
                    component: resolve => require(['../components/page/Reply.vue'], resolve)    // 回复列表组件
                },
                {
                    path: '/categroy',
                    component: resolve => require(['../components/page/Categroy.vue'], resolve)    // 分类列表组件
                },
                {
                    path: '/count',
                    component: resolve => require(['../components/page/Count.vue'], resolve)    // 统计列表组件
                },
                {
                    path: '/details/:oid',
                    component: resolve => require(['../components/page/Details.vue'], resolve)    // 订单列表组件
                },
                {
                    path: '/student',
                    component: resolve => require(['../components/page/student.vue'], resolve)    // 订单列表组件
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
