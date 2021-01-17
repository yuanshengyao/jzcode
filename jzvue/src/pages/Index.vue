<template>
  <div class="index-container">
    <div class="swiper-container">
      <el-carousel :interval="10000" trigger="click" type="card" height="300px">
        <el-carousel-item v-for="item in 6" :key="item">
          <div class="card">{{ item }}</div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="less">
.index-container {
  height: 500px;
  width: 1280px;
  margin: 0 auto;
  .swiper-container {
    .el-carousel__item {
      // color: #475669;
      // font-size: 14px;
      // opacity: 0.75;
      line-height: 300px;
      border-radius: 8px;
      box-shadow: 2px 2px 5px #888888;
     
    }

    .el-carousel__item.is-active {
      background: #d3dce6;
    }
      
    .el-carousel__item:nth-child(2n) {
      // background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
      // background-color: #d3dce6;
    }
  }
}
</style>
