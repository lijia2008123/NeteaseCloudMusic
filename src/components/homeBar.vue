<template>
  <div class="main">
    <div class="found" @click="tabChange('found')">
      <van-icon class="iconfont active found-active" class-prefix='icon' name='netease-cloud-music-fill' v-if="useTabStore.activeKey === 'found'" />
      <van-icon class="iconfont found" v-else class-prefix='icon' name='netease-cloud-music-line' />
    </div>
    <div class="mine" @click="tabChange('mine')">
      <van-icon class="iconfont active" v-if="useTabStore.activeKey === 'mine'" class-prefix='icon' name='yinleyule' />
      <van-icon class="iconfont music" class-prefix='icon' name='yinle' v-else />
    </div>
    <div class="user" @click="tabChange('user')">
      <van-icon class="iconfont active" v-if="useTabStore.activeKey === 'user'" class-prefix='icon' name='qunfengyonghu' />
      <van-icon class="iconfont user" v-else class-prefix='icon' name='yonghuguanli_huaban' />
    </div>
  </div>
</template>

<script setup lang="ts">
import { tabStore} from '@/store/tab'

const useTabStore = tabStore()
const tabChange = (type:string) => {
  useTabStore.changeTab(type)
}


</script>

<style scoped  lang="scss">
.main{
  height: 45px;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  .iconfont{
    font-size: 30px;
  }
  .found-active{
    font-size: 35px;
  }
  .music{
    font-size: 24px;
  }
  .active{
    color: #d65148;
  }
}
</style>
