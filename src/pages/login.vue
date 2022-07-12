<template>
	<div class="login">
		<span class="register">注册</span>
		<div class="logo">
			<!-- <img :src="logo" alt=""> -->
		</div>
		<div class="user-info">
			<div class="user-input">
				<van-form @submit="onSubmit">
					<van-cell-group inset>
						<van-field
							v-if="loginType === 'phone' || loginType === 'sms'"
							v-model="query.phone"
							name="phone"
							label="手机号"
							placeholder="请输入手机号"
							:rules="[{ required: true, message: '请输入手机号' }]"
							clearable
						/>
						<van-field
							v-if="loginType === 'mail'"
							v-model="query.email"
							name="email"
							label="邮箱"
							placeholder="请输入邮箱"
							:rules="[{ required: true, message: '请输入邮箱' }]"
							clearable
						/>
						<van-field
							v-if="loginType === 'phone' || loginType === 'mail'"
							v-model="query.password"
							type="password"
							name="password"
							label="密码"
							placeholder="请输入密码"
							:rules="[{ required: true, message: '请输入密码' }]"
							clearable
						/>
						<van-field
							v-if="loginType === 'sms'"
							v-model="query.captcha"
							center
							clearable
							name="captcha"
							label="短信验证码"
							placeholder="请输入短信验证码"
							type="digit"
						>
							<template #button>
								<van-button size="small" type="primary" @click="sendSmsBtn" :disabled="isSend">{{ isSend ? `${countNum}s重新发送` : smsBtnText }}</van-button>
							</template>
						</van-field>

					</van-cell-group>
					<div style="margin: 16px;">
						<van-button round block :loading="loading" color="#fff" native-type="submit" loading-type="spinner">
							登录
						</van-button>
					</div>
				</van-form>
			</div>
			<div class="msg">
				<van-checkbox shape="square" icon-size='14px' checked-color='#fff' v-model="checked">服务条款、隐私政策</van-checkbox>
			</div>
			<div class="icons">
				<van-icon name="chat-o" size="1.5rem" @click="changeLoginType('sms')" v-if="loginType !== 'sms'" />
				<van-icon name="free-postage" size="1.5rem" @click="changeLoginType('mail')" v-if="loginType !== 'mail'" />
				<van-icon name="qr" size="1.5rem" @click="changeLoginType('qr')" v-if="loginType !== 'qr'" />
				<van-icon name="shield-o" size="1.5rem" @click="changeLoginType('phone')" v-if="loginType !== 'phone'" />
			</div>
		</div>

	</div>
</template>
<script setup lang="ts">
import { useUserStore} from '@/store/user'
import logo from '@/assets/logo.png'
import { onBeforeUnmount, reactive, ref, toRaw } from 'vue'
import router from '@/router'
import { sendSms } from '@/api/user.js'
import { Toast } from 'vant';

const userStore = useUserStore()
let loginType:string= $ref('phone')
const query = reactive({
	phone: '',
	password: '',
	captcha: null
})
let loading:boolean = $ref(false)
let isSend:boolean = $ref(false)
let smsBtnText:string = $ref('发送验证码')
let countNum:number = $ref(10)
const sendSmsBtn = () => {
	if (!query.phone) {
		return
	}
	sendSms({
		phone: query.phone
	}).then(res => {
		if (res.code === 200) {
			Toast('发送成功')
			isSend = true
			let timer = setInterval(() => {
				countNum --
				if (countNum <= 0) {
					clearInterval(timer)
					countNum = 10
					isSend = false
				}
			}, 1000)
		} else {
			Toast(res.message)
		}
	})
}
const checked = $ref(false)
const onSubmit = (values: object) => {
	if (!checked) {
		Toast('请先同意服务条款')
		return
	}
	loading = true
	userStore.userLogin(toRaw(query), loginType).then(res => {
		loading = false
	})
}
const changeLoginType = (type:string) => {
	if (type === 'qr') {
		Toast('开发中...')
		return
	}
	loginType = type
}
onBeforeUnmount(() => {
	loading = false
})

</script>
<style lang="scss" scoped>
.login{
	position: relative;
	height: 100%;
	background: rgb(51, 44, 44);
	// background: #dd2d1e;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	.logo{
		// padding-top: 50%;
		// padding-bottom: 50%;
		img{
			width: 30%;
		}
	}
	.user-info{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 28px;
		.user-input{
			width: 90%;
		}
		.msg{
			margin-top: 10px;
			color: #fff;
		}
		.icons{
			position: absolute;
			bottom: 23px;
			display: flex;
			justify-content: space-around;
			width: 38%;
		}
	}
	.register{
		position: absolute;
		right: 20px;
		top: 20px;
		color: #fff;
	}
}

</style>
<style lang="scss">
.login{
	.van-button__text{
    color: #d52e25;
    font-size: 16px;
	}
	.van-loading__line{
    color: #d52e25;
	}
	.van-loading__line:before{
    color: #d52e25;
	}
	.msg{
		.van-checkbox{
			margin-top: -3px;
		}
		.van-checkbox__label{
			color: #fff;
		}
		.van-icon-success:before {
			color: #dd2d1e;
		}
	}
}

</style>