<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Add Coupon</h4>
                </div>
                <p v-if="coupon.errors.length">
                    <span class="color-red">
                        <b>Please correct the following error(s):</b>
                    </span>
                <ul>
                    <li v-for="error in coupon.errors">{{ error }}</li>
                </ul>
                </p>
                <div class="card-body">
                    <form
                        @submit="checkForm"
                    >
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Code
                                        <span class="color-red">*</span>
                                    </label>
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
                                    <label>Discount
                                        <span class="color-red">*</span>
                                    </label>
                                    <input type="text" class="form-control" v-model="coupon.discount">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Discount Type
                                        <span class="color-red">*</span>
                                    </label><br>
                                    <div class="form-control">
                                        <input type="radio" v-model="coupon.discount_type" value="1">Fixed Amount
                                        <input type="radio" v-model="coupon.discount_type" value="2">Percentage
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Expired at
                                        <span class="color-red">*</span>
                                    </label>

                                        <datetime class="form-control" placeholder="Select Date" format="YYYY-MM-DD H:i:s" v-model="coupon.expired_at"></datetime>

                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import datetime from 'vuejs-datetimepicker';

export default {
    name:"add-coupon",
    components: {
        datetime
    },
    data(){
        return {
            coupon:{
                code:"",
                description:"",
                discount:"",
                discount_type:"",
                expired_at:"",
                errors: [],
            }
        }
    },
    methods:{
        async create(){
            await this.axios.post('/api/coupon',this.coupon).then(response=>{
                this.$router.push({name:"couponList"})
            }).catch(error=>{
                console.log(error)
                this.coupon.errors.push(error.response.data.errors);
            })
        },
        checkForm: function (e) {
            if (this.coupon.code && this.coupon.discount && this.coupon.discount_type && this.coupon.expired_at) {
                this.create()
            }

            this.coupon.errors = [];

            if (!this.coupon.code) {
                this.coupon.errors.push('Code required.');
            }

            if (!this.coupon.discount) {
                this.coupon.errors.push('Discount required.');
            }

            if (!this.coupon.discount_type) {
                this.coupon.errors.push('Discount type required.');
            }

            if (!this.coupon.expired_at) {
                this.coupon.errors.push('Expired at required.');
            }

            e.preventDefault();
        }
    }
}
</script>
