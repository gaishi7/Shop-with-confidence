<template>
<div>
    <div class="music1">
        <div class="col-sm-4">
            <button style="padding:0,margin:0;border:none"><img @click="bofang('music1','svg1')" src="../../../assets/img/category-header/music7.png" alt=""></button>
            <video id="music1"  controls="controls" hidden="true"></video>
            <h5><strong>苦茶</strong></h5>
            <svg @click="bofang('music1','svg1')" id="svg1" t="1639310983962" class="music-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2324" width="20" height="20"><path d="M870.2 466.333333l-618.666667-373.28a53.333333 53.333333 0 0 0-80.866666 45.666667v746.56a53.206667 53.206667 0 0 0 80.886666 45.666667l618.666667-373.28a53.333333 53.333333 0 0 0 0-91.333334z" fill="#5C5C66" p-id="2325"></path></svg>
            <svg @click="bofang('music1','svg2')" id="svg2" t="1639311052950" class="music-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4492" width="20" height="20"><path d="M128 128h768v768H128z" p-id="4493"></path></svg>
            <p class="shiting">点击试听</p>
            <p class="name">yihuik苡慧</p>
            <p style="color:red;">￥15.00</p>
        </div>
        <div class="col-sm-4">
            <button style="padding:0,margin:0;border:none"><img  @click="bofang('music2','svg3')" src="../../../assets/img/category-header/music8.jpg" alt=""></button>
            <h5><strong>七里香</strong></h5>
            <video id="music2" controls="controls" hidden="true"></video>
            <svg @click="bofang('music2','svg3')" id="svg3" t="1639310983962" class="music-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2324" width="20" height="20"><path d="M870.2 466.333333l-618.666667-373.28a53.333333 53.333333 0 0 0-80.866666 45.666667v746.56a53.206667 53.206667 0 0 0 80.886666 45.666667l618.666667-373.28a53.333333 53.333333 0 0 0 0-91.333334z" fill="#5C5C66" p-id="2325"></path></svg>
            <svg @click="bofang('music2','svg4')" id="svg4" t="1639311052950" class="music-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4492" width="20" height="20"><path d="M128 128h768v768H128z" p-id="4493"></path></svg>
            <p class="shiting">点击试听</p>
            <p class="name">周杰伦</p>
            <p style="color:red;">￥98.00</p>
        </div>
        <div class="col-sm-4">
            <button style="padding:0,margin:0;border:none"><img @click="bofang('music3','svg5')" src="../../../assets/img/category-header/music9.jpg" alt=""></button>
            <h5><strong>江南</strong></h5>
            <video id="music3" controls="controls" hidden="true"></video>
            <svg @click="bofang('music3','svg5')" id="svg5" t="1639310983962" class="music-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2324" width="20" height="20"><path d="M870.2 466.333333l-618.666667-373.28a53.333333 53.333333 0 0 0-80.866666 45.666667v746.56a53.206667 53.206667 0 0 0 80.886666 45.666667l618.666667-373.28a53.333333 53.333333 0 0 0 0-91.333334z" fill="#5C5C66" p-id="2325"></path></svg>
            <svg @click="bofang('music3','svg6')" id="svg6" t="1639311052950" class="music-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4492" width="20" height="20"><path d="M128 128h768v768H128z" p-id="4493"></path></svg>
            <p class="shiting">点击试听</p>
            <p class="name">林俊杰</p>
            <p style="color:red;">￥55.00</p>
        </div>
    </div>
    <div class="music1">
        <div class="col-sm-4">
            <button style="padding:0,margin:0;border:none"><img @click="bofang('music4','svg7')" src="../../../assets/img/category-header/music10.jpg" alt=""></button>
            <h5><strong>某某</strong></h5>
            <video id="music4" controls="controls" hidden="true"></video>
            <svg @click="bofang('music4','svg7')" id="svg7" t="1639310983962" class="music-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2324" width="20" height="20"><path d="M870.2 466.333333l-618.666667-373.28a53.333333 53.333333 0 0 0-80.866666 45.666667v746.56a53.206667 53.206667 0 0 0 80.886666 45.666667l618.666667-373.28a53.333333 53.333333 0 0 0 0-91.333334z" fill="#5C5C66" p-id="2325"></path></svg>
            <svg @click="bofang('music4','svg8')" id="svg8" t="1639311052950" class="music-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4492" width="20" height="20"><path d="M128 128h768v768H128z" p-id="4493"></path></svg>
            <p class="shiting">点击试听</p>
            <p class="name">孟凡明</p>
            <p style="color:red;">￥32.00</p>
        </div>
        <div class="col-sm-4">
            <button style="padding:0,margin:0;border:none"><img @click="bofang('music5','svg9')" src="../../../assets/img/category-header/music11.jpg" alt=""></button>
            <h5><strong>十年</strong></h5>
            <video id="music5" controls="controls" hidden="true"></video>
            <svg @click="bofang('music5','svg9')" id="svg9" t="1639310983962" class="music-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2324" width="20" height="20"><path d="M870.2 466.333333l-618.666667-373.28a53.333333 53.333333 0 0 0-80.866666 45.666667v746.56a53.206667 53.206667 0 0 0 80.886666 45.666667l618.666667-373.28a53.333333 53.333333 0 0 0 0-91.333334z" fill="#5C5C66" p-id="2325"></path></svg>
            <svg @click="bofang('music5','svg10')" id="svg10" t="1639311052950" class="music-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4492" width="20" height="20"><path d="M128 128h768v768H128z" p-id="4493"></path></svg>
            <p class="shiting">点击试听</p>
            <p class="name">陈奕迅</p>
            <p style="color:red;">￥97.00</p>
        </div>
        <div class="col-sm-4">
            <button style="padding:0,margin:0;border:none"><img @click="bofang('music6','svg11')" src="../../../assets/img/category-header/music12.jpg" alt=""></button>
            <h5><strong>年轮</strong></h5>
            <video id="music6" controls="controls" hidden="true"></video>
            <svg @click="bofang('music6','svg11')" id="svg11" t="1639310983962" class="music-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2324" width="20" height="20"><path d="M870.2 466.333333l-618.666667-373.28a53.333333 53.333333 0 0 0-80.866666 45.666667v746.56a53.206667 53.206667 0 0 0 80.886666 45.666667l618.666667-373.28a53.333333 53.333333 0 0 0 0-91.333334z" fill="#5C5C66" p-id="2325"></path></svg>
            <svg @click="bofang('music6','svg12')" id="svg12" t="1639311052950" class="music-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4492" width="20" height="20"><path d="M128 128h768v768H128z" p-id="4493"></path></svg>
            <p class="shiting">点击试听</p>
            <p class="name">张碧晨</p>
            <p style="color:red;">￥77.00</p>
        </div>
    </div>
</div>
</template>
<script>
export default{
    data(){
        return{
            
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