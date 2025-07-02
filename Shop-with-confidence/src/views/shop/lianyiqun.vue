<template>
    <div class="lianyiqun">
        <div class="home-header row">
            <div class="header-one col-sm-3"><img style="width:60px;height:60px" src="../../assets/img/Login/放心购2.jpg"/></div>
            <div class="header-two col-sm-6" id="nav2">
                <el-input class="header-two-input" v-model="input" placeholder="请输入搜索文字"></el-input>
                <el-button class="header-two-button">搜索</el-button>
            </div>
        </div>
        <div class="main1 container-fluid">
            <div class="col-sm-9">
                <div class="baobei">
                            <!-- Nav tabs -->
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                            <router-link class="nav-link" to="/lianyiqun" >所有宝贝</router-link>
                            </li>
                            <li class="nav-item">
                            <router-link class="nav-link" to="/lianyiqun">天猫</router-link>
                            </li>
                            <li class="nav-item">
                            <router-link class="nav-link" to="/lianyiqun">二手</router-link>
                            </li>
                        </ul>
                </div>
                <div class="fenlei">
                    <p>所有分类></p>
                </div>
                <div>
                    <div class="pinpai row">
                        <div class="col-sm-1" style="height:100%"><p>品牌：</p></div>
                        <div class="col-sm-11" style="height:100%">
                            <el-checkbox><span style="display:inline-block">UR</span></el-checkbox>
                            <el-checkbox><span>VERO MEDA</span></el-checkbox>
                            <el-checkbox><span>ONLY</span></el-checkbox>
                            <el-checkbox><span >ZARA</span></el-checkbox>
                            <el-checkbox><span>one more</span></el-checkbox>
                            <el-checkbox><span>乐町</span></el-checkbox>
                            <el-checkbox><span>梅子熟了</span></el-checkbox>
                            <el-checkbox><span>三彩</span></el-checkbox>
                            <el-checkbox><span>蒂妮家</span></el-checkbox>
                            <el-checkbox><span>伊芙丽</span></el-checkbox>
                            <el-checkbox><span>茵曼</span></el-checkbox>
                            <el-checkbox><span>森马</span></el-checkbox>
                            <el-checkbox><span>音儿</span></el-checkbox>
                            <el-checkbox><span>返利斯</span></el-checkbox>
                            <el-checkbox><span>香影</span></el-checkbox>
                            <el-checkbox><span>Amii</span></el-checkbox>
                        </div>
                    </div>
                    <div>
                        <div class="pinpai row" style="padding-top:10px">
                            <div class="col-sm-1" style="height:100%"><p>款式：</p></div>
                            <div class="col-sm-11" style="height:100%">
                                <el-checkbox><span style="display:inline-block">拼接</span></el-checkbox>
                                <el-checkbox><span>纽扣</span></el-checkbox>
                                <el-checkbox><span>系带</span></el-checkbox>
                                <el-checkbox><span >印花</span></el-checkbox>
                                <el-checkbox><span>拉链</span></el-checkbox>
                                <el-checkbox><span>荷叶边</span></el-checkbox>
                                <el-checkbox><span>褶皱</span></el-checkbox>
                                <el-checkbox><span>蝴蝶结</span></el-checkbox>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="pinpai row" style="padding-top:10px">
                            <div class="col-sm-1" style="height:100%"><p>尺码：</p></div>
                            <div class="col-sm-11" style="height:100%">
                                <el-checkbox><span style="display:inline-block">XXS</span></el-checkbox>
                                <el-checkbox><span>XS</span></el-checkbox>
                                <el-checkbox><span>S</span></el-checkbox>
                                <el-checkbox><span >M</span></el-checkbox>
                                <el-checkbox><span>均码</span></el-checkbox>
                                <el-checkbox><span>XL</span></el-checkbox>
                                <el-checkbox><span>2XL</span></el-checkbox>
                                <el-checkbox><span>XXXXL</span></el-checkbox>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="pinpai row" style="padding-top:10px">
                            <div class="col-sm-1" style="height:100%"><p>女装：</p></div>
                            <div class="col-sm-11" style="height:100%">
                                <el-checkbox><span style="display:inline-block">连衣裙</span></el-checkbox>
                                <el-checkbox><span>大码女装</span></el-checkbox>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="pinpai row" style="padding-top:10px;border-bottom:1px solid rgba(0,0,0,0.2)">
                            <div class="col-sm-1" style="height:100%"><p>筛选：</p></div>
                            <div class="col-sm-11" style="height:100%">
                                <el-select style="width:10vh;color:black" v-model="value" placeholder="裙长">
                                    <el-option value="中长款">中长款</el-option>
                                    <el-option value="短款">短款</el-option>
                                    <el-option value="中款">中款</el-option>
                                    <el-option value="超短">超短</el-option>
                                </el-select>
                                <el-select style="width:14vh;color:black" v-model="value" placeholder="适用年龄">
                                    <el-option value="17周岁">17周岁以下</el-option>
                                    <el-option value="18-24">18-24周岁</el-option>
                                    <el-option value="25-29">25-29周岁</el-option>
                                    <el-option value="30-34">30-34周岁</el-option>
                                </el-select>
                                <el-select style="width:10vh;color:black" v-model="value" placeholder="裙型">
                                    <el-option value="A字裙">A字裙</el-option>
                                    <el-option value="大摆裙">大摆裙</el-option>
                                    <el-option value="百褶裙">百褶裙</el-option>
                                    <el-option value="公主裙">公主裙</el-option>
                                </el-select>
                                <el-select style="width:10vh;color:black" v-model="value" placeholder="腰型">
                                    <el-option value="高腰">高腰</el-option>
                                    <el-option value="中腰">中腰</el-option>
                                    <el-option value="宽松腰">宽松腰</el-option>
                                    <el-option value="松紧腰">松紧腰</el-option>
                                </el-select>
                                <el-select style="width:14vh;color:black" v-model="value" placeholder="相关类型">
                                    <el-option value="女装">女装</el-option>
                                    <el-option value="女包">女包</el-option>
                                    <el-option value="男装">男装</el-option>
                                    <el-option value="流行女鞋">流行女鞋</el-option>
                                </el-select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="xiang row" style="margin-top:15px;">
                    <div class="col-sm-2"><p>您是不是想找：</p></div>
                    <div class="col-sm-10">
                        <span style="padding:0;margin:0;display:inline-block">连衣裙秋</span>
                        <span>连衣裙长袖</span>
                        <span>半身裙</span>
                        <span>裙子</span>
                        <span>连衣裙气质</span>
                        <span>连衣裙法式</span>
                        <span>连衣裙显瘦</span>
                        <span>吊带裙</span>
                        <span>吊带连衣裙</span>
                        <span>连衣裙</span>
                    </div>
                </div>
                <div class="main3 row">
                    <div class="zonghe">
                        <span>综合排序</span>
                        <span>销量</span>
                        <span>信用</span>
                        <span>
                            <el-select style="width:10vh" v-model="value" placeholder="价格">
                                <el-option value="价格从低到高">价格从低到高</el-option>
                                <el-option value="价格从低到高">价格从高到低</el-option>
                                <el-option value="价格从低到高">总价从高到低</el-option>
                                <el-option value="价格从低到高">总价从低到高</el-option> 
                            </el-select>
                            <el-input class="jiage" style="width:8vh;" size="mini" placeholder="￥"></el-input> -
                            <el-input class="jiage" style="width:8vh;" size="mini" placeholder="￥"></el-input>
                        </span>
                        <span style="display:inline-block;float:right">
                            <el-select style="width:12vh" v-model="value" placeholder="发货地">
                                <el-option value="北京">北京</el-option>
                                <el-option value="上海">上海</el-option>
                                <el-option value="天津">天津</el-option>
                                <el-option value="浙江">浙江</el-option>
                            </el-select>
                        </span>
                    </div>
                    <div class="baoyou">
                        <div style="height:100%">
                            <el-checkbox><span style="display:inline-block">包邮</span></el-checkbox>
                            <el-checkbox><span>赠送退货运费险</span></el-checkbox>
                            <el-checkbox><span>新品</span></el-checkbox>
                            <el-checkbox><span >公益宝贝</span></el-checkbox>
                            <el-checkbox><span>二手</span></el-checkbox>
                            <el-checkbox><span>天猫</span></el-checkbox>
                            <el-checkbox><span>正品保障</span></el-checkbox>
                            <el-checkbox><span>7+天内退货</span></el-checkbox>
                            <el-checkbox><span>海外商品</span></el-checkbox>
                        </div>
                    </div>
                </div>
                <div class="main4">
                    <div class="col-sm-3" style="margin-top:20px;padding:5px">
                        <div class="row" style="border:1px solid rgba(0,0,0,0.2);padding:10px">
                            <a href="#"><img style="width:100%;margin-top:10px;" src="../../assets/img/lianyiqun/shop3.jpg" alt=""></a>
                            <p style="padding-top:5px"><span style="color:red">￥100.00</span><span style="float:right;color:rgba(0,0,0,0.4)">200+付款</span></p>
                            <a href="#"><p>秋季2021年新款小个子牛仔背带裙子秋冬女显瘦黑色连衣裙小众设计</p></a>
                            <p style="float:right;color:rgba(0,0,0,0.4)">广东广州</p>
                        </div>
                    </div>
                    <div class="col-sm-3" style="margin-top:20px;padding:5px">
                        <div class="row" style="border:1px solid rgba(0,0,0,0.2);padding:10px">
                            <a href="#"><img style="width:100%;margin-top:10px;" src="../../assets/img/lianyiqun/shop4.jpg" alt=""></a>
                            <p style="padding-top:5px"><span style="color:red">￥100.00</span><span style="float:right;color:rgba(0,0,0,0.4)">200+付款</span></p>
                            <a href="#"><p>秋季2021年新款小个子牛仔背带裙子秋冬女显瘦黑色连衣裙小众设计</p></a>
                            <p style="float:right;color:rgba(0,0,0,0.4)">广东广州</p>
                        </div>
                    </div>
                    <div class="col-sm-3" style="margin-top:20px;padding:5px">
                        <div class="row" style="border:1px solid rgba(0,0,0,0.2);padding:10px">
                            <a href="#"><img style="width:100%;margin-top:10px;" src="../../assets/img/lianyiqun/shop5.jpg" alt=""></a>
                            <p style="padding-top:5px"><span style="color:red">￥100.00</span><span style="float:right;color:rgba(0,0,0,0.4)">200+付款</span></p>
                            <a href="#"><p>秋季2021年新款小个子牛仔背带裙子秋冬女显瘦黑色连衣裙小众设计</p></a>
                            <p style="float:right;color:rgba(0,0,0,0.4)">广东广州</p>
                        </div>
                    </div>
                    <div class="col-sm-3" style="margin-top:20px;padding:5px">
                        <div class="row" style="border:1px solid rgba(0,0,0,0.2);padding:10px">
                            <a href="#"><img style="width:100%;margin-top:10px;" src="../../assets/img/lianyiqun/shop6.jpg" alt=""></a>
                            <p style="padding-top:5px"><span style="color:red">￥100.00</span><span style="float:right;color:rgba(0,0,0,0.4)">200+付款</span></p>
                            <a href="#"><p>秋季2021年新款小个子牛仔背带裙子秋冬女显瘦黑色连衣裙小众设计</p></a>
                            <p style="float:right;color:rgba(0,0,0,0.4)">广东广州</p>
                        </div>
                    </div>
                    <div class="col-sm-3" style="margin-top:20px;padding:5px">
                        <div class="row" style="border:1px solid rgba(0,0,0,0.2);padding:10px">
                            <img style="width:100%;margin-top:10px;" src="../../assets/img/lianyiqun/shop3.jpg" alt="">
                            <p style="padding-top:5px"><span style="color:red">￥100.00</span><span style="float:right;color:rgba(0,0,0,0.4)">200+付款</span></p>
                            <a href="#"><p>秋季2021年新款小个子牛仔背带裙子秋冬女显瘦黑色连衣裙小众设计</p></a>
                            <p style="float:right;color:rgba(0,0,0,0.4)">广东广州</p>
                        </div>
                    </div>
                    <div class="col-sm-3" style="margin-top:20px;padding:5px">
                        <div class="row" style="border:1px solid rgba(0,0,0,0.2);padding:10px">
                            <img style="width:100%;margin-top:10px;" src="../../assets/img/lianyiqun/shop3.jpg" alt="">
                            <p style="padding-top:5px"><span style="color:red">￥100.00</span><span style="float:right;color:rgba(0,0,0,0.4)">200+付款</span></p>
                            <a href="#"><p>秋季2021年新款小个子牛仔背带裙子秋冬女显瘦黑色连衣裙小众设计</p></a>
                            <p style="float:right;color:rgba(0,0,0,0.4)">广东广州</p>
                        </div>
                    </div>
                    <div class="col-sm-3" style="margin-top:20px;padding:5px">
                        <div class="row" style="border:1px solid rgba(0,0,0,0.2);padding:10px">
                            <img style="width:100%;margin-top:10px;" src="../../assets/img/lianyiqun/shop3.jpg" alt="">
                            <p style="padding-top:5px"><span style="color:red">￥100.00</span><span style="float:right;color:rgba(0,0,0,0.4)">200+付款</span></p>
                            <a href="#"><p>秋季2021年新款小个子牛仔背带裙子秋冬女显瘦黑色连衣裙小众设计</p></a>
                            <p style="float:right;color:rgba(0,0,0,0.4)">广东广州</p>
                        </div>
                    </div>
                    <div class="col-sm-3" style="margin-top:20px;padding:5px">
                        <div class="row" style="border:1px solid rgba(0,0,0,0.2);padding:10px">
                            <img style="width:100%;margin-top:10px;" src="../../assets/img/lianyiqun/shop3.jpg" alt="">
                            <p style="padding-top:5px"><span style="color:red">￥100.00</span><span style="float:right;color:rgba(0,0,0,0.4)">200+付款</span></p>
                            <a href="#"><p>秋季2021年新款小个子牛仔背带裙子秋冬女显瘦黑色连衣裙小众设计</p></a>
                            <p style="float:right;color:rgba(0,0,0,0.4)">广东广州</p>
                        </div>
                    </div>
                    <div class="col-sm-3" style="margin-top:20px;padding:5px">
                        <div class="row" style="border:1px solid rgba(0,0,0,0.2);padding:10px">
                            <img style="width:100%;margin-top:10px;" src="../../assets/img/lianyiqun/shop3.jpg" alt="">
                            <p style="padding-top:5px"><span style="color:red">￥100.00</span><span style="float:right;color:rgba(0,0,0,0.4)">200+付款</span></p>
                            <a href="#"><p>秋季2021年新款小个子牛仔背带裙子秋冬女显瘦黑色连衣裙小众设计</p></a>
                            <p style="float:right;color:rgba(0,0,0,0.4)">广东广州</p>
                        </div>
                    </div>
                    <div class="col-sm-3" style="margin-top:20px;padding:5px">
                        <div class="row" style="border:1px solid rgba(0,0,0,0.2);padding:10px">
                            <img style="width:100%;margin-top:10px;" src="../../assets/img/lianyiqun/shop3.jpg" alt="">
                            <p style="padding-top:5px"><span style="color:red">￥100.00</span><span style="float:right;color:rgba(0,0,0,0.4)">200+付款</span></p>
                            <a href="#"><p>秋季2021年新款小个子牛仔背带裙子秋冬女显瘦黑色连衣裙小众设计</p></a>
                            <p style="float:right;color:rgba(0,0,0,0.4)">广东广州</p>
                        </div>
                    </div>
                    <div class="col-sm-3" style="margin-top:20px;padding:5px">
                        <div class="row" style="border:1px solid rgba(0,0,0,0.2);padding:10px">
                            <img style="width:100%;margin-top:10px;" src="../../assets/img/lianyiqun/shop3.jpg" alt="">
                            <p style="padding-top:5px"><span style="color:red">￥100.00</span><span style="float:right;color:rgba(0,0,0,0.4)">200+付款</span></p>
                            <a href="#"><p>秋季2021年新款小个子牛仔背带裙子秋冬女显瘦黑色连衣裙小众设计</p></a>
                            <p style="float:right;color:rgba(0,0,0,0.4)">广东广州</p>
                        </div>
                    </div>
                    <div class="col-sm-3" style="margin-top:20px;padding:5px">
                        <div class="row" style="border:1px solid rgba(0,0,0,0.2);padding:10px">
                            <img style="width:100%;margin-top:10px;" src="../../assets/img/lianyiqun/shop3.jpg" alt="">
                            <p style="padding-top:5px"><span style="color:red">￥100.00</span><span style="float:right;color:rgba(0,0,0,0.4)">200+付款</span></p>
                            <a href="#"><p>秋季2021年新款小个子牛仔背带裙子秋冬女显瘦黑色连衣裙小众设计</p></a>
                            <p style="float:right;color:rgba(0,0,0,0.4)">广东广州</p>
                        </div>
                    </div>
                    <div class="col-sm-3" style="margin-top:20px;padding:5px">
                        <div class="row" style="border:1px solid rgba(0,0,0,0.2);padding:10px">
                            <img style="width:100%;margin-top:10px;" src="../../assets/img/lianyiqun/shop3.jpg" alt="">
                            <p style="padding-top:5px"><span style="color:red">￥100.00</span><span style="float:right;color:rgba(0,0,0,0.4)">200+付款</span></p>
                            <a href="#"><p>秋季2021年新款小个子牛仔背带裙子秋冬女显瘦黑色连衣裙小众设计</p></a>
                            <p style="float:right;color:rgba(0,0,0,0.4)">广东广州</p>
                        </div>
                    </div>
                    <div class="col-sm-3" style="margin-top:20px;padding:5px">
                        <div class="row" style="border:1px solid rgba(0,0,0,0.2);padding:10px">
                            <img style="width:100%;margin-top:10px;" src="../../assets/img/lianyiqun/shop3.jpg" alt="">
                            <p style="padding-top:5px"><span style="color:red">￥100.00</span><span style="float:right;color:rgba(0,0,0,0.4)">200+付款</span></p>
                            <a href="#"><p>秋季2021年新款小个子牛仔背带裙子秋冬女显瘦黑色连衣裙小众设计</p></a>
                            <p style="float:right;color:rgba(0,0,0,0.4)">广东广州</p>
                        </div>
                    </div>
                    <div class="col-sm-3" style="margin-top:20px;padding:5px">
                        <div class="row" style="border:1px solid rgba(0,0,0,0.2);padding:10px">
                            <img style="width:100%;margin-top:10px;" src="../../assets/img/lianyiqun/shop3.jpg" alt="">
                            <p style="padding-top:5px"><span style="color:red">￥100.00</span><span style="float:right;color:rgba(0,0,0,0.4)">200+付款</span></p>
                            <a href="#"><p>秋季2021年新款小个子牛仔背带裙子秋冬女显瘦黑色连衣裙小众设计</p></a>
                            <p style="float:right;color:rgba(0,0,0,0.4)">广东广州</p>
                        </div>
                    </div>
                    <div class="col-sm-3" style="margin-top:20px;padding:5px">
                        <div class="row" style="border:1px solid rgba(0,0,0,0.2);padding:10px">
                            <img style="width:100%;margin-top:10px;" src="../../assets/img/lianyiqun/shop3.jpg" alt="">
                            <p style="padding-top:5px"><span style="color:red">￥100.00</span><span style="float:right;color:rgba(0,0,0,0.4)">200+付款</span></p>
                            <a href="#"><p>秋季2021年新款小个子牛仔背带裙子秋冬女显瘦黑色连衣裙小众设计</p></a>
                            <p style="float:right;color:rgba(0,0,0,0.4)">广东广州</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="col-sm-3 left" style="margin-top:35px">
                <h4 style="padding-left:20px">掌柜热卖</h4>
                <div style="width:100%;padding:20px;border:1px solid rgba(0,0,0,0.2)"><a href="#"><img style="width:100%" src="../../assets/img/lianyiqun/shop1.png" alt=""></a></div>
                <div style="width:100%;padding:20px;border:1px solid rgba(0,0,0,0.2);margin-top:10px"><a href="#"><img style="width:100%" src="../../assets/img/lianyiqun/shop2.png" alt=""></a></div>
                <div style="width:100%;padding:20px;border:1px solid rgba(0,0,0,0.2);margin-top:10px"><a href="#"><img style="width:100%" src="../../assets/img/lianyiqun/shop2.png" alt=""></a></div>
                <div style="width:100%;padding:20px;border:1px solid rgba(0,0,0,0.2);margin-top:10px"><a href="#"><img style="width:100%" src="../../assets/img/lianyiqun/shop2.png" alt=""></a></div>
                <div style="width:100%;padding:20px;border:1px solid rgba(0,0,0,0.2);margin-top:10px"><a href="#"><img style="width:100%" src="../../assets/img/lianyiqun/shop2.png" alt=""></a></div>
                <div style="width:100%;padding:20px;border:1px solid rgba(0,0,0,0.2);margin-top:10px"><a href="#"><img style="width:100%" src="../../assets/img/lianyiqun/shop2.png" alt=""></a></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.main1{
    margin-left:50px;
    margin-right:50px;
}
.lianyiqun{
    color: black;
}
.home-header{
    background: #F8F8F8;
    position: relative;
    top: 10px;
}
.row{
    margin-left: 0;
    margin-right: 0;
}
.header-one{
    padding-top: 10px;
    padding-right: 50px;
    text-align: right;
}
.header-two{
    height: 80px;
    padding-top: 20px;
}
.header-three{
    height: 130px;    
    padding: 0;
    /* padding-top: 30px; */
    margin: 0;
}
.header-two-button{
    position: absolute;
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-color: #FF5301;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    background: #FF5301;
    color: white;
    font-weight: 600;
}
.header-three-button{
    border-color: #cfcfcf;
    color: #FF5301;
    background: #F8F8F8;
    padding-left: 100px;
}
.baobei{
    margin-top: 20px;
}
a{
    color: #FF5301;
    font-size: 18px;
}
.nav-tabs{
    border-bottom:2px solid #FF5301;
}
.nav-tabs>li{
    margin-bottom: 0;
}
.fenlei{
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-top:none;
    border-bottom:0.5px dashed rgba(0, 0, 0, 0.2);
}
.fenlei p{
    color:rgba(0,0,0,0.5);
    font-size:14px;
    padding-top:10px;
    padding-left:20px
}
.pinpai p,.xiang p{
    color:rgba(0,0,0,0.5);
}
.pinpai{
    line-height: 30px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-top:none;
    border-bottom:0.5px dashed rgba(0, 0, 0, 0.2);
}
.pinpai el-checkbox{
    padding-left:25px;
    padding-right:25px;
}
.xiang{
    padding-top: 10px;
    line-height:20px;
    border: 1px solid rgba(0, 0, 0, 0.2);
}
 .xiang span{
    padding-left:10px;
    padding-right:10px;
 }
 .zonghe{
     margin-top: 15px;
     border: 1px solid rgba(0, 0, 0, 0.2);
     background: #f4f4f4;
 }
 .zonghe span{
     padding-left:20px;
     padding-right:20px;
 }
 .baoyou{
     padding-top: 10px;
     padding-bottom: 5px;
     padding-left:25px;
     border: 1px solid rgba(0, 0, 0, 0.2);
     border-top: none;
 }
 .left div:hover{
     transition: 0.5s;
     padding: 10px !important;
 }
 .main4 p{
     font-size: 13px;
 }
 .main4 a{
     color:black;
     text-decoration: none;
 }
 .main4 a:hover{
     color: #FF5301;
 }
 .main4 .row:hover{
     border-color:#FF5301 !important;
 }
 @media screen and (max-width:750px){
      .header-one{
          display: none;
      }
  }
</style>
<style>
#nav2 .el-input__inner {
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border-color: #FF5301;
    background: #F8F8F8;
}
#nav2 .el-input{
    width: 85%;
    background: #F8F8F8;
}
.pinpai .el-checkbox__inner{
    border: 1px solid rgba(0, 0, 0, 0.2);
}
.pinpai .el-input__inner, .zonghe .el-input__inner{
    border: none;
    background: none;
}
.pinpai .el-input__inner::placeholder, .zonghe .el-input__inner::placeholder{
    color: black;
}
.jiage .el-input__inner{
     border: 1px solid rgba(0, 0, 0, 0.2);
     background: white;
}
</style>