<template>
  <div>
        <div>
            <nav class="navbar navbar-default" role="navigation">
                <div class="container">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">放心购</a>
                    </div>
                    <div style="float:right">
                        <ul class="nav navbar-nav">
                            <li><router-link to="/home">首页</router-link></li>
                            <li><router-link to="/category">分类</router-link></li>
                            <li><router-link to="/cart">购物车</router-link></li>
                            <li><router-link to="/profile">我的</router-link></li>
                            <li><router-link to="/nike">nike</router-link></li>
                            <li><router-link to="/lianyiqun">连衣裙</router-link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    <router-view />
    <tab-bar class="tab" style="display:none">
          
       <tab-bar-item path='/home'>
        <img slot="item-icon" src="../assets/img/tabbar/首页.png" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/首页active.png" alt="">
        <div slot="item-text">首页</div>
       </tab-bar-item>


       <tab-bar-item path='/category'>
         <img slot="item-icon" src="../assets/img/tabbar/分类.png" alt="">
         <img slot="item-icon-active" src="../assets/img/tabbar/分类active.png" alt="">
        <div slot="item-text">分类</div>
       </tab-bar-item>


       <tab-bar-item path='/cart'>
         <img slot="item-icon" src="../assets/img/tabbar/购物车.png" alt="">
         <img slot="item-icon-active" src="../assets/img/tabbar/购物车active.png" alt="">
        <div slot="item-text">购物车</div>
       </tab-bar-item>

       
       <tab-bar-item path='/profile'>
         <img slot="item-icon" src="../assets/img/tabbar/我的.png" alt="">
         <img slot="item-icon-active" src="../assets/img/tabbar/我的active.png" alt="">
        <div slot="item-text">我的</div>
       </tab-bar-item>
       
       <tab-bar-item path='/nike'>
         <img slot="item-icon" src="../assets/img/tabbar/nike.png" alt="">
         <img slot="item-icon-active" src="../assets/img/tabbar/nikea.png" alt="">
        <div slot="item-text">nike</div>
       </tab-bar-item>
       
       <tab-bar-item path='/lianyiqun'>
         <img slot="item-icon" src="../assets/img/tabbar/lianyiqun.png" alt="">
         <img slot="item-icon-active" src="../assets/img/tabbar/lianyiquna.png" alt="">
        <div slot="item-text">连衣裙</div>
       </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '../components/tabbar/TabBar'
import TabBarItem from '../components/tabbar/TaBaritem'
export default {
  components: {
    TabBar,
    TabBarItem
  },
  methods:{
  }
}

</script>

<style>

/* @import "./assets/css/base.css"; */
@media screen and (max-width:750px){
  .tab {
    display: inline !important;
  }
  #tab-bar{
  display: flex !important;
  z-index: 1000;
  background-color: #f2f2f2;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -3px 1px rgba(100,100,100,.1);
}
.navbar{
    display: none;
}
}
.navbar{
    margin: 0;
}
.nav li > a.router-link-active{ font-weight: bold;}
.nav li > a.router-link-active span::before{ content: ''; width: 100%; height: 1px; display: block; }
</style>
