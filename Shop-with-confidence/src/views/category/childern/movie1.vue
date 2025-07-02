<template>
<div>
    <div class="music1">
        <div class="col-sm-4">
            <button style="padding:0,margin:0;border:none"><img src="../../../assets/img/category-header/movie1.jpg" alt=""></button>
            <h5><strong>最好的我们</strong></h5>
            <p>主演: 刘昊然、谭松韵、王栎鑫、董晴</p>
            <p style="color:red;">￥34.00</p>
        </div>
        <div class="col-sm-4">
            <button style="padding:0,margin:0;border:none"><img src="../../../assets/img/category-header/movie2.jpg" alt=""></button>
            <h5><strong>我的少女时代</strong></h5>
            <p>主演：王大陆、宋芸桦、李玉玺</p>
            <p style="color:red;">￥16.00</p>
        </div>
        <div class="col-sm-4">
            <button style="padding:0,margin:0;border:none"><img src="../../../assets/img/category-header/movie3.jpg" alt=""></button>
            <h5><strong>那年花开</strong></h5>
            <p>主演：孙俪、陈晓、何润东、胡杏儿</p>
            <p style="color:red;">￥46.00</p>
        </div>
    </div>
    <div class="music1">
        <div class="col-sm-4">
            <button style="padding:0,margin:0;border:none;margin-top:25px"><img src="../../../assets/img/category-header/movie4.jpg" alt=""></button>
            <h5><strong>同桌的你</strong></h5>
            <p>主演：周冬雨、林更新、曹阳</p>
            <p style="color:red;">￥22.00</p>
        </div>
        <div class="col-sm-4">
            <button style="padding:0,margin:0;border:none;margin-top:25px"><img src="../../../assets/img/category-header/movie5.jpg" alt=""></button>
            <h5><strong>左耳</strong></h5>
            <p>主演：陈都灵、欧豪、杨洋、胡夏、马思纯</p>
            <p style="color:red;">￥88.00</p>
        </div>
        <div class="col-sm-4">
            <button style="padding:0,margin:0;border:none;margin-top:25px"><img src="../../../assets/img/category-header/movie6.jpg" alt=""></button>
            <h5><strong>致青春</strong></h5>
            <p>主演：:陈瑶、杨玏、张丹峰、马可、蔡文静</p>
            <p style="color:red;">￥99.00</p>
        </div>
    </div>
</div>
</template>
<style scoped>
.music1, .music1 img{
    width: 100%;
}
.music1 div{
    margin-top: 20px;
    text-align: center;
}
.music1 img{
    height: 21vh;
}
.btn{display: inline-block; padding: 5px 10px; font-size: 12px; color: #fff; border: 2px solid #FF5301; background-color: #FF5301; text-decoration: none; transition: 0.4s;}
.btn:hover{background-color: transparent; color: #FF5301; transition: 0.4s;}
@media screen and (max-width:750px){ 
    .music1 div{
        height: 100%;
    }
    .music1 img{
        height: 100%;
    }
}
</style>