<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Update Coupon</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="update">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Title</label>
                                    <input type="text" class="form-control" v-model="coupon.code">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Description</label>
                                    <input type="text" class="form-control" v-model="coupon.description">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Discount</label>
                                    <input type="text" class="form-control" v-model="coupon.discount">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Discount type</label>
                                    <input type="text" class="form-control" v-model="coupon.discount_type">
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"coupon-category",
    data(){
        return {
            coupon:{
                code:"",
                description:"",
                discount:"",
                discount_type:"",
                _method:"patch"
            }
        }
    },
    mounted(){
        this.showCoupon()
    },
    methods:{
        async showCoupon(){
            await this.axios.get(`/api/coupon/${this.$route.params.id}`).then(response=>{
                const { code, description, discount, discount_type } = response.data
                this.coupon.code = code
                this.coupon.description = description
                this.coupon.discount = discount
                this.coupon.discount_type = discount_type
            }).catch(error=>{
                console.log(error)
            })
        },
        async update(){
            await this.axios.post(`/api/category/${this.$route.params.id}`,this.category).then(response=>{
                this.$router.push({name:"couponList"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>
