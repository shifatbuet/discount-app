const Welcome = () => import('./components/Welcome.vue' /* webpackChunkName: "resource/js/components/welcome" */)
const CategoryList = () => import('./components/category/List.vue' /* webpackChunkName: "resource/js/components/category/list" */)
const CategoryCreate = () => import('./components/category/Add.vue' /* webpackChunkName: "resource/js/components/category/add" */)
const CategoryEdit = () => import('./components/category/Edit.vue' /* webpackChunkName: "resource/js/components/category/edit" */)
const CouponList = () => import('./components/coupon/List.vue' /* webpackChunkName: "resource/js/components/coupon/list" */)
const CouponCreate = () => import('./components/coupon/Add.vue' /* webpackChunkName: "resource/js/components/coupon/add" */)
const CouponEdit = () => import('./components/coupon/Edit.vue' /* webpackChunkName: "resource/js/components/coupon/edit" */)

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
    },
    {
        name: 'categoryList',
        path: '/category',
        component: CategoryList
    },
    {
        name: 'categoryEdit',
        path: '/category/:id/edit',
        component: CategoryEdit
    },
    {
        name: 'categoryAdd',
        path: '/category/add',
        component: CategoryCreate
    },
    {
        name: 'couponList',
        path: '/coupon',
        component: CouponList
    },
    {
        name: 'couponEdit',
        path: '/coupon/:id/edit',
        component: CouponEdit
    },
    {
        name: 'couponAdd',
        path: '/coupon/add',
        component: CouponCreate
    }
]
