<template>
    <div class="row">
        <div class="col-12 mb-2 text-end">
            <router-link :to='{name:"couponAdd"}' class="btn btn-primary">Create</router-link>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Coupon</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Code</th>
                                    <th>Description</th>
                                    <th>Discount</th>
                                    <th>Discount type</th>
                                    <th>Expired at</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody v-if="coupons.length > 0">
                                <tr v-for="(coupon,key) in coupons" :key="key">

                                    <td>{{ coupon.id }}</td>
                                    <td>{{ coupon.code }}</td>
                                    <td>{{ coupon.description }}</td>
                                    <td>{{ coupon.discount }}</td>
                                    <td>{{ coupon.discount_type }}</td>
                                    <td v-bind:class="`${new Date() > new Date(coupon.expired_at) ? 'color-red bold' : ''}`">{{ coupon.expired_at }}</td>
                                    <td>
                                        <button type="button" @click="deleteCoupon(coupon.id)" class="btn btn-danger">Delete</button>
                                    </td>

                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4" align="center">No Coupons Found.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"coupons",
    data(){
        return {
            coupons:[]
        }
    },
    mounted(){
        this.getCoupons()
    },
    methods:{
        async getCoupons(){
            await this.axios.get('/api/coupon').then(response=>{
                this.coupons = response.data
            }).catch(error=>{
                console.log(error)
                this.coupons = []
            })
        },
        deleteCoupon(id){
            if(confirm("Are you sure to delete this coupon ?")){
                this.axios.delete(`/api/coupon/${id}`).then(response=>{
                    this.getCoupons()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>
