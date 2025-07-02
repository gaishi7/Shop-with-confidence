<template>
<div>
    <div class="music1">
        <div class="col-sm-4">
            <button style="padding:0,margin:0;border:none"><img src="../../../assets/img/category-header/music1.jpg" alt="" id="btn1" @click="bofang('music1','svg1')"></button>
            <video id="music1" src="../../../assets/audio/music1.mp4" controls="controls" hidden="true"></video>
            <h5><strong>勋章</strong></h5>
            <svg @click="bofang('music1','svg1')" id="svg1" t="1639310983962" class="music-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2324" width="20" height="20"><path d="M870.2 466.333333l-618.666667-373.28a53.333333 53.333333 0 0 0-80.866666 45.666667v746.56a53.206667 53.206667 0 0 0 80.886666 45.666667l618.666667-373.28a53.333333 53.333333 0 0 0 0-91.333334z" fill="#5C5C66" p-id="2325"></path></svg>
            <svg @click="bofang('music1','svg2')" id="svg2" t="1639311052950" class="music-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4492" width="20" height="20"><path d="M128 128h768v768H128z" p-id="4493"></path></svg>
            <p class="shiting">点击试听</p>
            <p class="name">鹿晗</p>
            <p style="color:red;">￥58.00</p>
        </div>
        <div class="col-sm-4">
            <button style="padding:0,margin:0;border:none"><img src="../../../assets/img/category-header/music2.jpg" @click="bofang('music2','svg3')" alt="" ></button>
            <h5><strong>我曾</strong></h5>
            <video id="music2" controls="controls" hidden="true"></video>
            <svg @click="bofang('music2','svg3')" id="svg3" t="1639310983962" class="music-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2324" width="20" height="20"><path d="M870.2 466.333333l-618.666667-373.28a53.333333 53.333333 0 0 0-80.866666 45.666667v746.56a53.206667 53.206667 0 0 0 80.886666 45.666667l618.666667-373.28a53.333333 53.333333 0 0 0 0-91.333334z" fill="#5C5C66" p-id="2325"></path></svg>
            <svg @click="bofang('music2','svg4')" id="svg4" t="1639311052950" class="music-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4492" width="20" height="20"><path d="M128 128h768v768H128z" p-id="4493"></path></svg>
            <p class="shiting">点击试听</p>
            <p class="name">隔壁老樊</p>
            <p style="color:red;">￥28.00</p>
        </div>
        <div class="col-sm-4">
            <button style="padding:0,margin:0;border:none"><img src="../../../assets/img/category-header/music3.jpg" @click="bofang('music3','svg5')" alt=""></button>
            <h5><strong>三号线</strong></h5>
            <video id="music3" controls="controls" hidden="true"></video>
            <svg @click="bofang('music3','svg5')" id="svg5" t="1639310983962" class="music-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2324" width="20" height="20"><path d="M870.2 466.333333l-618.666667-373.28a53.333333 53.333333 0 0 0-80.866666 45.666667v746.56a53.206667 53.206667 0 0 0 80.886666 45.666667l618.666667-373.28a53.333333 53.333333 0 0 0 0-91.333334z" fill="#5C5C66" p-id="2325"></path></svg>
            <svg @click="bofang('music3','svg6')" id="svg6" t="1639311052950" class="music-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4492" width="20" height="20"><path d="M128 128h768v768H128z" p-id="4493"></path></svg>
            <p class="shiting">点击试听</p>
            <p class="name">刘大壮</p>
            <p style="color:red;">￥35.00</p>
        </div>
    </div>
    <div class="music1">
        <div class="col-sm-4">
            <button style="padding:0,margin:0;border:none"><img src="../../../assets/img/category-header/music4.jpg" @click="bofang('music4','svg7')" alt=""></button>
            <h5><strong>会不会</strong></h5>
            <video id="music4" controls="controls" hidden="true"></video>
            <svg @click="bofang('music4','svg7')" id="svg7" t="1639310983962" class="music-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2324" width="20" height="20"><path d="M870.2 466.333333l-618.666667-373.28a53.333333 53.333333 0 0 0-80.866666 45.666667v746.56a53.206667 53.206667 0 0 0 80.886666 45.666667l618.666667-373.28a53.333333 53.333333 0 0 0 0-91.333334z" fill="#5C5C66" p-id="2325"></path></svg>
            <svg @click="bofang('music4','svg8')" id="svg8" t="1639311052950" class="music-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4492" width="20" height="20"><path d="M128 128h768v768H128z" p-id="4493"></path></svg>
            <p class="shiting">点击试听</p>
            <p class="name">刘大壮</p>
            <p style="color:red;">￥72.00</p>
        </div>
        <div class="col-sm-4">
            <button style="padding:0,margin:0;border:none"><img src="../../../assets/img/category-header/music5.jpg" @click="bofang('music5','svg9')" alt=""></button>
            <h5><strong>沉醉的青丝</strong></h5>
            <video id="music5" controls="controls" hidden="true"></video>
            <svg @click="bofang('music5','svg9')" id="svg9" t="1639310983962" class="music-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2324" width="20" height="20"><path d="M870.2 466.333333l-618.666667-373.28a53.333333 53.333333 0 0 0-80.866666 45.666667v746.56a53.206667 53.206667 0 0 0 80.886666 45.666667l618.666667-373.28a53.333333 53.333333 0 0 0 0-91.333334z" fill="#5C5C66" p-id="2325"></path></svg>
            <svg @click="bofang('music5','svg10')" id="svg10" t="1639311052950" class="music-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4492" width="20" height="20"><path d="M128 128h768v768H128z" p-id="4493"></path></svg>
            <p class="shiting">点击试听</p>
            <p class="name">林宝馨</p>
            <p style="color:red;">￥88.00</p>
        </div>
        <div class="col-sm-4">
            <button style="padding:0,margin:0;border:none"><img src="../../../assets/img/category-header/music6.jpg" @click="bofang('music6','svg11')" alt=""></button>
            <h5><strong>我不是你的宋东野</strong></h5>
            <video id="music6" controls="controls" hidden="true"></video>
            <svg @click="bofang('music6','svg11')" id="svg11" t="1639310983962" class="music-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2324" width="20" height="20"><path d="M870.2 466.333333l-618.666667-373.28a53.333333 53.333333 0 0 0-80.866666 45.666667v746.56a53.206667 53.206667 0 0 0 80.886666 45.666667l618.666667-373.28a53.333333 53.333333 0 0 0 0-91.333334z" fill="#5C5C66" p-id="2325"></path></svg>
            <svg @click="bofang('music6','svg12')" id="svg12" t="1639311052950" class="music-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4492" width="20" height="20"><path d="M128 128h768v768H128z" p-id="4493"></path></svg>
            <p class="shiting">点击试听</p>
            <p class="name">宋东野</p>
            <p style="color:red;">￥99.00</p>
        </div>
    </div>
</div>
</template>
<script>
export default{
    data(){
        return{
            tag:true
        }
    },
    methods:{
        bofang(e,i){
            var audios = document.getElementById(e);
            if(this.tag == true){
                if(i == 'svg1'||i=='svg2'){
                    var a = document.getElementById('svg1');
                    a.style.display = 'none';
                    var a = document.getElementById('svg2');
                    a.style.display = 'inline-block';
                }else if(i == 'svg3'||i=='svg4'){
                    var a = document.getElementById('svg3');
                    a.style.display = 'none';
                    var a = document.getElementById('svg4');
                    a.style.display = 'inline-block';
                }else if(i == 'svg5'||i=='svg6'){
                    var a = document.getElementById('svg5');
                    a.style.display = 'none';
                    var a = document.getElementById('svg6');
                    a.style.display = 'inline-block';
                }else if(i == 'svg7'||i=='svg8'){
                    var a = document.getElementById('svg7');
                    a.style.display = 'none';
                    var a = document.getElementById('svg8');
                    a.style.display = 'inline-block';
                }else if(i == 'svg9'||i=='svg10'){
                    var a = document.getElementById('svg9');
                    a.style.display = 'none';
                    var a = document.getElementById('svg10');
                    a.style.display = 'inline-block';
                }else{
                    var a = document.getElementById('svg11');
                    a.style.display = 'none';
                    var a = document.getElementById('svg12');
                    a.style.display = 'inline-block';
                }
                audios.play();
                this.tag = false;
                console.log(111)
            }else{
                if(i == 'svg1'||i=='svg2'){
                    var a = document.getElementById('svg2');
                    a.style.display = 'none';
                    var a = document.getElementById('svg1');
                    a.style.display = 'inline-block';
                }else if(i == 'svg3'||i=='svg4'){
                    var a = document.getElementById('svg4');
                    a.style.display = 'none';
                    var a = document.getElementById('svg3');
                    a.style.display = 'inline-block';
                }else if(i == 'svg5'||i=='svg6'){
                    var a = document.getElementById('svg6');
                    a.style.display = 'none';
                    var a = document.getElementById('svg5');
                    a.style.display = 'inline-block';
                }else if(i == 'svg7'||i=='svg8'){
                    var a = document.getElementById('svg8');
                    a.style.display = 'none';
                    var a = document.getElementById('svg7');
                    a.style.display = 'inline-block';
                }else if(i == 'svg9'||i=='svg10'){
                    var a = document.getElementById('svg10');
                    a.style.display = 'none';
                    var a = document.getElementById('svg9');
                    a.style.display = 'inline-block';
                }else if(i == 'svg11'||i=='svg12'){
                    var a = document.getElementById('svg12');
                    a.style.display = 'none';
                    var a = document.getElementById('svg11');
                    a.style.display = 'inline-block';
                }
                audios.pause();
                this.tag = true;
            }
        }
    },
    created(){
        bofang();
    }
}
</script>
<style scoped>
.music1, .music1 img{
    width: 100%;
}
.music1 div{
    margin-top: 20px;
    text-align: center;
    height: 40vh;
}
.music1 img{
    height: 21vh;
}
#svg2,#svg4,#svg6,#svg8,#svg10,#svg12{
    display: none;
}
.music-icon{
    margin-left: 35px;
    float: left;
}
.shiting{
    float: left;
}
.name{
    clear: both;
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