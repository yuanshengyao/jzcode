<template>
  <div class="index-container">
    <div class="swiper-container">
      <el-carousel :interval="4000" type="card" height="500px">
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
  // background: #2c3e50;
  background: #191a20;
  .swiper-container {
    height: 500px;
    .el-carousel__item .card {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
    }
      
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
  }
}
</style>
