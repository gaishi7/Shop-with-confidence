<template>
<div>
    <div class="header" style="width:100%;background:#f4f4f4">
        <el-carousel style="text-align:center" height="14vh">
            <el-carousel-item v-for="item in pForm" :key="item">
                <p style="margin-top:10px">{{item.p1}}</p>
                <p>{{item.p2}}</p>
                <p>{{item.p3}}<a href="#">{{item.a1}}</a></p>
            </el-carousel-item>
        </el-carousel>
    </div>
    <div class="main container">
        <div class="main-header" :style="show">
            <div class="col-sm-2">
                <a href="#"><span>首页</span></a>
            </div>
            <div class="col-sm-2">
                <a href="#"><span>所有宝贝</span></a>
            </div>
            <div class="col-sm-2">
                <a href="#"><span>周日上新</span></a>
            </div>
            <div class="col-sm-2">
                <a href="#"><span>斜挎包</span></a>
            </div>
            <div class="col-sm-2">
                <a href="#"><span>单肩包</span></a>
            </div>
            <div class="col-sm-2">
                <a href="#"><span>通勤大包</span></a>
            </div>
        </div>
        <div class="controlnav" @click="opennav()">
            <svg t="1639792380911" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2077" width="40" height="40"><path d="M887.212102 264.644379 320.083527 264.644379c-29.826306 0-54.012148-23.896246-54.012148-53.723575s24.185842-53.723575 54.012148-53.723575l567.127552 0c29.827329 0 54.012148 23.896246 54.012148 53.723575S917.039431 264.644379 887.212102 264.644379z" p-id="2078" fill="#707070"></path><path d="M887.212102 562.426483 320.083527 562.426483c-29.826306 0-54.012148-24.408923-54.012148-54.235229 0-29.828352 24.185842-54.235229 54.012148-54.235229l567.127552 0c29.827329 0 54.012148 24.406876 54.012148 54.235229C941.22425 538.018583 917.039431 562.426483 887.212102 562.426483z" p-id="2079" fill="#707070"></path><path d="M887.212102 859.18528 320.083527 859.18528c-29.826306 0-54.012148-24.407899-54.012148-54.235229s24.185842-54.235229 54.012148-54.235229l567.127552 0c29.827329 0 54.012148 24.407899 54.012148 54.235229S917.039431 859.18528 887.212102 859.18528z" p-id="2080" fill="#707070"></path><path d="M153.565003 257.94377l-47.261397 0c-13.05534 0-23.630187-10.601452-23.630187-23.655769l0-47.234791c0-13.080923 10.574846-23.630187 23.630187-23.630187l47.261397 0c13.054317 0 23.630187 10.549264 23.630187 23.630187l0 47.234791C177.19519 247.341295 166.61932 257.94377 153.565003 257.94377L153.565003 257.94377z" p-id="2081" fill="#707070"></path><path d="M153.565003 852.076372l-47.261397 0c-13.05534 0-23.630187-10.600429-23.630187-23.655769l0-47.233768c0-13.080923 10.574846-23.63121 23.630187-23.63121l47.261397 0c13.054317 0 23.630187 10.550287 23.630187 23.63121l0 47.233768C177.19519 841.475943 166.61932 852.076372 153.565003 852.076372L153.565003 852.076372z" p-id="2082" fill="#707070"></path><path d="M153.565003 541.507034l-47.261397 0c-13.05534 0-23.630187-10.601452-23.630187-23.655769l0-47.234791c0-13.080923 10.574846-23.630187 23.630187-23.630187l47.261397 0c13.054317 0 23.630187 10.549264 23.630187 23.630187l0 47.234791C177.19519 530.905582 166.61932 541.507034 153.565003 541.507034L153.565003 541.507034z" p-id="2083" fill="#707070"></path></svg>
        </div>
        <div class="main-one">
            <div class="col-sm-4" style="margin-top:20px;padding:30px;border:1px solid #f4f4f4;">
                <div>
                    <video muted class="img-one" :style="imgone" controls="controls" autoplay="autoplay" loop>
                        <source src="../../assets/img/nike/shop1-2.mp4" />
                    </video>
                    <img class="img-two" :style="imgtwo" src="../../assets/img/nike/shop1-1.jpg" alt="">
                    <img class="img-three" :style="imgthree" src="../../assets/img/nike/shop1-3.png" alt="">
                    <img class="img-four" :style="imgfour" src="../../assets/img/nike/shop1-4.png" alt="">
                </div>
                <div class="showbig" style="margin-top:20px">
                    <div :style="smallimg1" class="col-md-3 col-sm-3 col-3 small-img" @mouseenter="handleimg1()">
                        <video style="width:100%;height:100%" src="../../assets/img/nike/shop1-2.mp4" alt=""></video>
                    </div>
                    <div :style="smallimg2" class="col-md-3 col-sm-3 col-3 small-img" @mouseenter="handleimg2()">
                        <img style="width:100%;height:100%" src="../../assets/img/nike/shop1-1.jpg" alt="">
                    </div>
                    <div :style="smallimg3" class="col-md-3 col-sm-3 col-3 small-img" @mouseenter="handleimg3()">
                        <img style="width:100%;height:100%" src="../../assets/img/nike/shop1-3.png" alt="">
                    </div>
                    <div :style="smallimg4" class="col-md-3 col-sm-3 col-3 small-img" @mouseenter="handleimg4()">
                        <img style="width:100%;height:100%" src="../../assets/img/nike/shop1-4.png" alt="">
                    </div>
                </div>
                <div style="clear:both">
                    <p style="float:left;padding-top:30px;font-size:13px;color:rgba(0,0,0,0.6)"><el-rate style="float:left" v-model="value" max="1"></el-rate>
                        收藏商品 （53761人气）
                    </p>
                    <a href="#"><p style="float:right;padding-top:30px;font-size:13px;color:rgba(0,0,0,0.6)">举报</p></a>
                </div>
            </div>
            <div class="col-sm-6 shuoming" style="margin-top:10px;padding-left:40px">
                <h4>Nike Air Force 1 '07</h4>
                <p style="color:red">女子运动鞋</p>
                <div style="background:#f4f4f4;padding:10px;padding-bottom:1px">
                    <p><span>价格</span><del style="margin-left:30px">￥1020.00</del></p>
                    <p><span>促销价</span><span style="font-size:20px;color:red;margin-left:17px">￥749.00</span></p>
                </div>
                <div style="border-bottom:2px solid #f4f4f4">
                    <p style="margin-left:15px;margin-top:15px"><span style="margin-right:40px">运费</span>广东广州 至 德州 德城区 快递：0.00 平邮：20.00</p>
                </div>
                <div style="padding-top:15px;">
                    <div class="col-sm-4 month"><p>月销量<span style="color:red;padding-left:5px">200+</span></p></div>
                    <div class="col-sm-4 month"><p>累计评价<span style="color:red;padding-left:5px">2072</span></p></div>
                    <div class="col-sm-4 month"><p>送天猫积分<strong style="padding-left:5px;">64</strong></p></div>
                    <div><el-divider></el-divider></div>
                </div>
                <div>
                    <p><span style="float:left;padding-left:17px">选择尺码</span><span style="float:right;padding-right:15px">尺码表</span></p>
                    <div style="clear:both;padding-left:17px;padding-top:10px">
                        <el-button>35</el-button>
                        <el-button>36</el-button>
                        <el-button>37</el-button>
                        <el-button>38</el-button>
                        <el-button>39</el-button>
                        <el-button>40</el-button>
                        <el-button>41</el-button>
                    </div>
                </div>
                <div style="padding-top:20px">
                    <span style="padding-left:20px;padding-right:40px">数量</span>
                    <el-input-number size="small" v-model="num1" :min="1" :max="10" label="描述文字"></el-input-number>
                    <span style="padding-left:10px">件</span>
                    <span style="padding-left:30px">库存434件</span>
                </div>
                <div>
                    <p style="padding-left:20px;padding-top:10px">花呗分期 <span style="padding-left:10px">@登录后确认是否享有该服务 什么是花呗分期</span></p>
                    <el-button style="margin-left:90px">￥<strong>249.67</strong>×3期<p style="padding-top:15px">（含手续费）</p></el-button>
                    <el-button>￥<strong>249.67</strong>×6期<p style="padding-top:15px">（含手续费）</p></el-button>
                    <el-button>￥<strong>249.67</strong>×12期<p style="padding-top:15px">（含手续费）</p></el-button>
                </div>
                <div style="padding-top:40px;padding-left:80px">
                    <div class="col-sm-6">
                        <el-button style="width:100%;margin-bottom:20px" type="danger" >立即购买</el-button>
                    </div>
                    <div class="col-sm-6">
                        <el-button style="width:100%;margin-bottom:20px" type="danger">
                            <svg t="1639639160159" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1934" width="12" height="12"><path d="M848 712H318.4c-25.6 0-46.4-19.2-48-41.6L240 201.6c-1.6-25.6-16-46.4-38.4-57.6l-48-20.8c-12.8-4.8-25.6 0-32 12.8s0 25.6 12.8 32l46.4 20.8c6.4 3.2 11.2 9.6 11.2 17.6l28.8 468.8c3.2 48 46.4 86.4 96 86.4H848c12.8 0 24-11.2 24-24s-11.2-25.6-24-25.6z" p-id="1935" fill="#ffffff"></path><path d="M884.8 265.6c-14.4-16-35.2-25.6-57.6-25.6H337.6c-12.8 0-24 11.2-24 24s11.2 24 24 24h489.6c8 0 16 3.2 20.8 9.6 4.8 6.4 8 14.4 8 22.4l-38.4 211.2v1.6c-1.6 14.4-12.8 24-27.2 25.6l-420.8 32c-12.8 1.6-22.4 12.8-22.4 25.6 1.6 12.8 11.2 22.4 24 22.4h1.6l419.2-32c36.8-3.2 67.2-30.4 70.4-67.2l38.4-212.8v-1.6c4.8-20.8-1.6-43.2-16-59.2z" p-id="1936" fill="#ffffff"></path><path d="M305.6 856m-56 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0Z" p-id="1937" fill="#ffffff"></path><path d="M753.6 856m-56 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0Z" p-id="1938" fill="#ffffff"></path></svg>
                            <span>加入购物车</span>
                        </el-button>
                    </div>
                </div>
            </div>
            <div class="col-sm-2" style="border-left:2px solid #f4f4f4;margin-top:20px">
                <div><img style="width:100%" src="../../assets/img/nike/shop1-5.png" alt=""></div>
                <div style="margin-top:10px"><img style="width:100%" src="../../assets/img/nike/shop1-8.png" alt=""></div>
                <div style="margin-top:10px"><img style="width:100%" src="../../assets/img/nike/shop1-9.png" alt=""></div>
            </div>
        </div>
        <div class="main-two" >
            <div class="col-sm-12" style="padding-left:0;padding-top:60px;">
                <div class="col-sm-3" style="padding-left:0;padding-right:0;border:1px solid rgba(0,0,0,0.2)">
                    <div>
                        <div style="padding:5px;padding-top:25px;text-align:center;background:#f4f4f4;"><p>NIKE官方旗舰店</p></div>
                        <div style="border-top:1px solid rgba(0,0,0,0.2)">
                            <p style="text-align:center;padding-top:20px">天猫11年店</p>
                            <div class="col-sm-4"><p>描述</p><p style="color:red">4.8👆</p></div>
                            <div class="col-sm-4"><p>服务</p><p style="color:red">5.2👆</p></div>
                            <div class="col-sm-4"><p>物流</p><p style="color:red">6.6👆</p></div>
                            <div class="col-sm-6"><el-button type="success" size="small">进店逛逛</el-button></div>
                            <div class="col-sm-6"><el-button type="warning" size="small">收藏店铺</el-button></div>
                        </div>
                    </div>
                    <div style="clear:both;padding-top:20px">
                        <div style="padding:1px;padding-top:13px;text-align:left;background:#f4f4f4;">
                            <p style="margin-left:20px">本店搜索</p>
                        </div>
                        <div>
                            <p style="padding-left:20px;margin-top:10px"><span>关键字 </span><el-input placeholder="关键字" size="small" style="width:70%"></el-input></p>
                            <p style="padding-left:20px;margin-top:10px"><span style="padding-right:20px">价格</span><el-input placeholder="￥" size="small" style="width:32%"></el-input> - <el-input placeholder="￥" size="small" style="width:32%"></el-input></p>
                            <el-button type="danger" size="mini" style="margin-left:70px">搜索</el-button>
                        </div>

                    </div>
                    <div style="clear:both;padding-top:20px">
                        <div style="padding:1px;padding-top:13px;text-align:left;background:#f4f4f4;">
                            <p style="margin-left:20px">宝贝分类</p>
                        </div>
                        <div>
                            <el-collapse v-model="activeNames" @change="handleChange">
                                <el-collapse-item title="功能 Function" name="1" style="padding-left:20px">
                                    <a href="#"><div>休闲长裤</div></a>
                                    <a href="#"><div>牛仔裤</div></a>
                                </el-collapse-item>
                                <el-collapse-item title="大小 The Size" name="2" style="padding-left:20px">
                                    <a href="#"><div>衬衣</div></a>
                                    <a href="#"><div>卫衣</div></a>
                                    <a href="#"><div>夹克</div></a>
                                    <a href="#"><div>棉服</div></a>
                                    <a href="#"><div>羽绒服</div></a>
                                    <a href="#"><div>马甲</div></a>
                                </el-collapse-item>
                                <el-collapse-item title="2020年夏季新品" name="3" style="padding-left:20px">
                                    <a href="#"><div>运动T恤</div></a>
                                    <a href="#"><div>运动帽</div></a>
                                    <a href="#"><div>板鞋/休闲鞋</div></a>
                                </el-collapse-item>
                                <el-collapse-item title="2021年夏季新品" name="4" style="padding-left:20px">
                                    <a href="#"><div>双肩背包</div></a>
                                    <a href="#"><div>足球鞋</div></a>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                    </div>
                    <div style="clear:both;padding-top:20px">
                        <div style="padding:1px;padding-top:13px;text-align:left;background:#f4f4f4;">
                            <p style="margin-left:20px">宝贝推荐</p>
                        </div>
                        <div>
                            <div class="col-sm-12" style="text-align:center;border-bottom:1px solid rgba(0,0,0,0.2)">
                                <img style="width:100%;padding:20px" src="../../assets/img/category-header/shoe2.jpg" alt="">
                                <p>Nike Air Force 1 '08</p>
                                <p style="color:red">￥890.00</p>
                            </div>
                            <div class="col-sm-12" style="text-align:center;border-bottom:1px solid rgba(0,0,0,0.2)">
                                <img style="width:100%;padding:20px" src="../../assets/img/category-header/shoe3.jpg" alt="">
                                <p>Nike Air Force 1 '09</p>
                                <p style="color:red">￥890.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-9">
                    <div style="width:100%;height:60px;background:#f4f4f4;text-align:center;line-height:60px"><p>商品详情</p></div>
                    <div>
                        <h5 style="text-align:center;padding:30px">此产品不参加网站促销活动和折扣优惠活动。</h5>
                        <p style="padding-left:20px">Nike Air Force 1 '07 女子运动鞋革新经典篮球鞋，演绎人们所熟知的特色：利落皮革和大胆配色，令人耳目一新。</p>
                        <ul style="padding-top:20px">
                            <li>显示颜色： 白色/白色/白色/白色</li>
                            <li>款式： DD8959-100</li>
                        </ul>
                    </div>
                    <div class="col-sm-6" style="margin-top:20px">
                        <img style="width:100%" src="../../assets/img/nike/shop1-5.png" alt="">
                    </div>
                    <div class="col-sm-6" style="margin-top:20px">
                        <img style="width:100%" src="../../assets/img/nike/shop1-6.png" alt="">
                    </div>
                    <div class="col-sm-12" style="margin-top:20px">
                        <p >价格说明（此说明仅当出现价格比较时有效)</p>
                        <p>划线价格：划线的价格可能是商品的专柜价吊牌价或正品零售价指导价或该商品的曾经展示过的销售价等，仅供您参考。未划线价格：未划线的价格是商品在本平台上的销售标价，具体的成交价格可能因顾客使用优惠券、礼品卡等情况发生变化，最终以订单结算页价格为准。</p>
                    </div>
                    <div class="col-sm-6" style="margin-top:20px">
                        <img style="width:100%" src="../../assets/img/nike/shop1-3.png" alt="">
                    </div>
                    <div class="col-sm-6" style="margin-top:20px">
                        <img style="width:100%" src="../../assets/img/nike/shop1-4.png" alt="">
                    </div>
                </div>
                <div class="col-sm-12" style="margin-top:20px;padding:0">
                    <img style="width:100%" src="../../assets/img/nike/shop1-10.jpg" alt="">
                </div>
                <div class="col-sm-12" style="margin-top:20px;padding:0">
                    <img style="width:100%" src="../../assets/img/nike/shop1-11.jpg" alt="">
                </div>
                <div class="col-sm-12" style="margin-top:20px;padding:0">
                    <img style="width:100%" src="../../assets/img/nike/shop1-12.jpg" alt="">
                </div>
                <div class="col-sm-12" style="margin-top:20px;padding:0;text-align:center">
                    <img style="width:70%" src="../../assets/img/nike/shop1-13.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="container footer1">
            <div class="col-sm-3"  style="margin-top:8vh;margin-bottom:5vh;">
                <svg style="float:left;margin-right:10px;" t="1639211121625" class="footer-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11525" width="55" height="55"><path d="M207.91 795.702c25.103 1.767 45.748 7.147 61.894 16.146 12.53-19.762 26.911-49.32 43.057-88.805 1.766-7.147 6.265-13.455 13.455-18.837 3.574 0 5.382-0.883 5.382-2.692-5.382-5.382-25.145-10.763-59.204-16.145-16.145 50.247-37.674 86.996-64.584 110.333zM716.521 666.531l-51.13 26.91c39.44 34.101 70.85 71.733 94.187 113.026l56.513-37.677c-19.763-19.719-52.939-53.82-99.57-102.259zM711.14 626.164c17.912 17.956 29.602 31.41 34.983 40.367l43.057-34.984c-41.29-34.058-73.583-60.969-96.877-80.731 3.572 1.808 10.764 2.691 21.527 2.691 10.766 1.808 18.838 2.689 24.219 2.689-3.614-12.528-4.497-39.439-2.69-80.731v-67.276c-1.807-30.485 0-52.896 5.383-67.277-14.382 3.616-42.174 4.5-83.423 2.691H536.22v-37.675h164.155c35.866 0 68.16 1.808 96.879 5.383v-56.513c-30.527 5.383-63.702 8.074-99.569 8.074H536.22c0-19.721 3.574-35.867 10.765-48.44 3.573-1.766 5.383-3.574 5.383-5.382-1.81-1.766-8.999-3.574-21.529-5.383-12.573 0-28.719-0.882-48.44-2.69 3.575 16.146 4.458 36.792 2.692 61.895H331.699c-46.673 0-78.966-2.691-96.878-8.074v53.822c8.957-1.766 42.132-2.691 99.57-2.691h150.7v37.675H363.992c-41.292 0-65.511-0.883-72.659-2.691v5.382c3.574 21.529 5.382 41.292 5.382 59.203v75.35c-1.808 25.145-3.616 44.866-5.382 59.205v16.145h24.22c14.338-1.765 32.293-3.573 53.821-5.381H485.09v40.366a4191.158 4191.158 0 0 1-150.7 2.691c-46.674 0-81.658-1.767-104.952-5.383 8.956 21.528 15.222 42.173 18.838 61.895 8.956-5.383 145.317-12.53 409.042-21.528a537.041 537.041 0 0 0 53.822-2.694zM485.09 510.45H347.846v-43.058H485.09v43.058z m0-80.733H347.846v-45.748H485.09v45.748z m51.13-45.748h148.01v45.748H536.22v-45.748z m0 83.423h148.01v43.058H536.22v-43.058z m0 83.423h142.627l-32.293 21.528 29.602 16.146H536.22v-37.674zM627.716 709.588c1.767 50.248-23.336 71.733-75.349 64.586h-80.733c-37.676 1.766-53.821-7.189-48.439-26.911V714.97c0-17.912 4.457-30.484 13.455-37.675l2.691-2.691c-12.572-3.573-36.792-6.264-72.659-8.072v16.147c0 8.997 0.883 18.835 2.691 29.602v51.129c-7.19 43.059 28.677 62.777 107.643 59.203h86.114c41.249 0 69.043-5.382 83.423-16.145 16.147-8.999 30.485-30.528 43.057-64.588-23.336 0-43.98-10.763-61.894-32.292z" p-id="11526" fill="#FA2D4E"></path><path d="M520.074 741.88l56.512-18.837c-8.999-21.529-20.645-45.748-34.983-72.658L485.09 663.84c17.912 30.528 29.601 56.513 34.984 78.04z" p-id="11527" fill="#FA2D4E"></path><path d="M512 0.006C229.234 0.006 0.006 229.234 0.006 512c0 282.767 229.228 511.994 511.994 511.994 282.767 0 511.994-229.228 511.994-511.994S794.767 0.006 512 0.006z m315.817 827.811c-41.039 41.039-88.811 73.251-141.987 95.743-55.02 23.273-113.506 35.073-173.83 35.073-60.324 0-118.809-11.8-173.83-35.072-53.177-22.492-100.948-54.704-141.987-95.743-41.04-41.039-73.252-88.811-95.744-141.987C77.167 630.809 65.367 572.324 65.367 512c0-60.324 11.8-118.809 35.072-173.83 22.492-53.177 54.705-100.948 95.744-141.987 41.039-41.04 88.811-73.252 141.987-95.744C393.191 77.167 451.676 65.367 512 65.367c60.324 0 118.81 11.8 173.83 35.072 53.177 22.492 100.948 54.705 141.987 95.744s73.251 88.811 95.743 141.987c23.272 55.021 35.072 113.506 35.072 173.83 0 60.324-11.8 118.809-35.072 173.83-22.492 53.177-54.704 100.948-95.743 141.987z" p-id="11528" fill="#FA2D4E"></path></svg>
                <span style="float:left"><strong style="font-size:18px">品质保障</strong><p style="font-size:16px;color:#535353;">品质护航，购物无忧</p></span>
            </div>
            <div class="col-sm-3"  style="margin-top:8vh;margin-bottom:5vh;">
                <svg style="float:left;margin-right:10px;" t="1639211786915" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12604" width="55" height="55"><path d="M716.547141 409.428903 451.708334 436.893418 451.708334 312.636417c0-12.484336-10.152221-22.61916-22.63758-22.61916-12.502755 0-22.636556 10.134825-22.636556 22.61916l0 128.939651-126.499066 13.126972c-12.429077 1.284249-21.461801 12.410658-20.194948 24.858154 1.230014 11.640108 11.051707 20.305465 22.490224 20.305465 0.788969 0 1.578961-0.073678 2.367931-0.146333l121.815393-12.595876 0 112.214734c0 65.230654 17.514909 105.639992 104.668875 105.639992l121.705899 0c25.207102 0 84.23345 0 84.23345-69.179592 0-12.483312-10.134825-22.636556-22.63758-22.636556s-22.61916 10.153244-22.61916 22.636556c0 18.984377-1.542122 23.905456-38.977733 23.905456L511.083629 659.70504c-53.902654 0-59.375296-11.42112-59.375296-60.366879L451.708334 482.425428l269.499967-27.943422c12.4301-1.302669 21.463848-12.447497 20.177552-24.858154C740.10058 417.175331 728.791 408.216285 716.547141 409.428903zM511.102049 908.697951c-218.937384 0-397.062248-178.12384-397.062248-397.043828 0-218.955804 178.12384-397.081691 397.062248-397.081691 218.956827 0 397.080667 178.124863 397.080667 397.081691C908.182716 730.574111 730.058876 908.697951 511.102049 908.697951M511.102049 69.316715c-243.906056 0-442.337407 198.448748-442.337407 442.337407s198.431352 442.320011 442.337407 442.320011c243.925499 0 442.355827-198.449771 442.355827-442.320011C953.457876 267.765463 755.027547 69.316715 511.102049 69.316715" p-id="12605" fill="#FA2D4E"></path></svg>
                <span style="float:left"><strong style="font-size:18px">七天无理由退换货</strong><p style="font-size:16px;color:#535353;">为您提供售后无忧保障</p></span>
            </div>
            <div class="col-sm-3"  style="margin-top:8vh;margin-bottom:5vh;">
                <svg style="float:left;margin-right:10px;" t="1639211965439" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13498" width="55" height="55"><path d="M512.537805 4.093235C232.773837 4.093235 5.172019 231.685734 5.172019 511.439258c0 279.736115 227.601818 507.32759 507.365786 507.32759 279.76704 0 507.368858-227.591475 507.368858-507.32759C1019.90656 231.685734 792.303718 4.093235 512.537805 4.093235zM512.537805 966.843187c-251.129651 0-455.438029-204.298957-455.438029-455.404032 0-251.120333 204.307354-455.422464 455.438029-455.422464 251.130675 0 455.443149 204.299981 455.443149 455.422464C967.979827 762.543206 763.668378 966.843187 512.537805 966.843187zM490.074214 527.631974c-2.18071-14.180966-15.551795-23.882957-29.614694-21.702246l-50.692608 7.808819L409.766912 404.345118l51.927754 0c14.33303 0 25.964339-11.629875 25.964339-25.962291 0-14.33344-11.631411-25.962291-25.964339-25.962291l-51.927754 0 0-86.539982c0-14.334464-11.619123-25.962291-25.962291-25.962291-14.344294 0-25.964339 11.627827-25.964339 25.962291l0 86.539982-34.615774 0 0-51.924603c0-14.33344-11.621171-25.962291-25.964339-25.962291-14.342246 0-25.963315 11.628851-25.963315 25.962291l0 61.676711c0 19.808154-11.89335 31.961907-20.418867 31.961907-14.34327 0-25.964339 11.628851-25.964339 25.962291 0 14.332416 11.621171 25.962291 25.964339 25.962291 26.58048 0 49.602662-16.885555 62.177587-41.715098l44.784784 0 0 117.371174-107.156787 16.496742c-14.174413 2.18071-23.894118 15.431475-21.712384 29.612442 1.968947 12.829184 13.031322 22.00617 25.624678 22.00617 1.310925 0 2.646426-0.101274 3.982848-0.303923l99.263795-15.280026 0 176.258353c0 14.335488 11.620147 25.961267 25.964339 25.961267 14.34327 0 25.962291-11.625779 25.962291-25.961267L409.769138 566.270021l58.605056-9.025536C482.536243 555.063808 492.255027 541.812019 490.074214 527.631974zM755.944141 404.345139 652.091754 404.345139l0-51.924603 86.543528 0c14.334054 0 25.963315-11.629875 25.963315-25.962291 0-14.33344-11.629363-25.962291-25.963315-25.962291l-86.543528 0 0-69.231781c0-14.334464-11.629363-25.962291-25.962291-25.962291-14.335078 0-25.963315 11.626803-25.963315 25.962291l0 69.231781-69.235641 0c-14.335078 0-25.963315 11.628851-25.963315 25.962291 0 14.332416 11.628339 25.962291 25.963315 25.962291l69.235641 0 0 51.924603-86.545574 0c-14.332006 0-25.96137 11.628851-25.96137 25.961267 0 14.33344 11.629363 25.963315 25.96137 25.963315l242.32372 0c14.335078 0 25.963315-11.629875 25.963315-25.963315C781.907558 415.97399 770.278195 404.345139 755.944141 404.345139zM755.944141 525.501542l-51.924684 0 0-34.616402c0-14.33344-11.629363-25.962291-25.964339-25.962291-14.33303 0-25.962291 11.628851-25.962291 25.962291l0 34.616402L513.619448 525.501542c-14.332006 0-25.96137 11.628851-25.96137 25.963315 0 14.332416 11.629363 25.961267 25.96137 25.961267l138.471282 0 0 123.607202c0 23.343616 0 33.01079-48.006246 33.01079-14.33303 0-25.960346 11.630899-25.960346 25.962291 0 14.334464 11.627315 25.963315 25.960346 25.963315 29.903258 0 99.932979 0 99.932979-84.936499L704.017463 577.427128l51.924684 0c14.335078 0 25.963315-11.628851 25.963315-25.961267C781.907558 537.131418 770.278195 525.501542 755.944141 525.501542zM539.583795 603.38944c-14.33303 0-25.964339 11.628851-25.964339 25.961267l0 51.924603c0 14.334464 11.631411 25.963315 25.964339 25.963315 14.335078 0 25.963315-11.628851 25.963315-25.963315l0-51.924603C565.547213 615.018291 553.918874 603.38944 539.583795 603.38944z" p-id="13499" fill="#FA2D4E"></path></svg>
                <span style="float:left"><strong style="font-size:18px">特色服务体验</strong><p style="font-size:16px;color:#535353;">为您呈现不一样的服务</p></span>
            </div>
            <div class="col-sm-3"  style="margin-top:8vh;margin-bottom:5vh;">
                <svg style="float:left;margin-right:10px;" t="1639212179867" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19434" width="60" height="60"><path d="M511.333 63.333c-247.424 0-448 200.576-448 448s200.576 448 448 448 448-200.576 448-448-200.576-448-448-448z m271.529 719.529c-35.286 35.287-76.359 62.983-122.078 82.321-47.3 20.006-97.583 30.15-149.451 30.15-51.868 0-102.15-10.144-149.451-30.15-45.719-19.337-86.792-47.034-122.078-82.321-35.287-35.286-62.983-76.359-82.321-122.078-20.006-47.3-30.15-97.583-30.15-149.451s10.144-102.15 30.15-149.451c19.337-45.719 47.034-86.792 82.321-122.078 35.286-35.287 76.359-62.983 122.078-82.321 47.3-20.006 97.583-30.15 149.451-30.15 51.868 0 102.15 10.144 149.451 30.15 45.719 19.337 86.792 47.034 122.078 82.321 35.287 35.286 62.983 76.359 82.321 122.078 20.006 47.3 30.15 97.583 30.15 149.451s-10.144 102.15-30.15 149.451c-19.337 45.719-47.034 86.792-82.321 122.078z" fill="#FA2D4E" p-id="19435"></path><path d="M642.045 285.629c-26.482-39.772-72.632-61.676-129.945-61.676-45.43 0-81.73 14.938-107.891 44.4-21.679 24.415-34.958 57.378-39.469 97.974-3.153 28.378-0.747 50.163-0.462 52.553 2.091 17.549 18.02 30.084 35.56 27.991 17.549-2.09 30.081-18.011 27.991-35.56-0.019-0.161-1.845-16.636 0.52-37.916 2.077-18.688 7.877-44.708 23.717-62.547 13.679-15.406 33.317-22.895 60.034-22.895 35.722 0 62.235 11.462 76.675 33.147 15.268 22.93 14.215 52.064 6.398 70.765-4.475 10.704-25.708 30.276-42.77 46.002-35.924 33.111-73.07 67.349-73.07 108.723v61.457c0 17.673 14.327 32 32 32s32-14.327 32-32V546.59c0-0.684 0.354-7.103 12.607-21.925 10.498-12.696 25.413-26.444 39.837-39.739 24.981-23.025 48.576-44.774 58.443-68.379 8.323-19.912 11.834-42.319 10.153-64.799-1.794-24.014-9.516-46.877-22.328-66.119z" fill="#FA2D4E" p-id="19436"></path><path d="M512.099 702.965m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z" fill="#FA2D4E" p-id="19437"></path></svg>
                <span style="float:left"><strong style="font-size:18px">帮助中心</strong><p style="font-size:16px;color:#535353;">您的购物指南周到服务</p></span>
            </div>
        </div>
        <div class="container footer1">
            <div style="width:100%;height:1px;border-top:1px solid #c9c9c9;margin-bottom:4vh;margin-top:0;"></div>
            <div class="footer1-box">
                <div class="col-sm-2">
                    <h4><strong>购物指南</strong></h4>
                    <p>免费注册</p>
                    <p>开通支付宝</p>
                    <p>支付宝充值</p>
                </div>
                <div class="col-sm-2">
                    <h4><strong>天猫保障</strong></h4>
                    <p>发票保障</p>
                    <p>售后规则</p>
                    <p>缺货赔付</p>
                </div>
                <div class="col-sm-2">
                    <h4><strong>支付方式</strong></h4>
                    <p>快捷支付</p>
                    <p>信用卡</p>
                    <p>余额宝</p>
                    <p>蚂蚁花呗</p>
                    <p>货到付款</p>
                </div>
                <div class="col-sm-3">
                    <h4><strong>商家服务</strong></h4>
                    <p>天猫规则</p>
                    <p>商家入驻</p>
                    <p>商家中心</p>
                    <p>天猫智库</p>
                    <p>物流服务</p>
                    <p>喵言喵语</p>
                    <p>运营服务</p>
                </div>
                <div class="col-sm-2">
                    <h4 style=""><strong>手机天猫</strong></h4>
                    <img src="../../assets/img/footer/ma.jpg" style="width:80%;text-align:center"/>
                </div>
            </div>
        </div>
        <div style="background:black;border-top:2px solid #FF5301;padding-top:10px;">
        <div class="container">
                <p style="color:#F4F4F4;font-size:13px">阿里巴巴集团 | 淘宝网 | 天猫 | 聚划算 | 全球速卖通 | 阿里巴巴国际交易市场 | 1688 | 阿里妈妈 | 飞猪 | 淘小铺 | 阿里云计算 | AliOS | 阿里通信 | 一淘 | 万网 | 高德 | UC | 友盟 | 阿里安全 | 大麦网 | 钉钉 | 支付宝 | 优酷 | 土豆 | 阿里健康 | 阿里影业 | 网商银行 |</p>
                <p style="margin-top:2vh;color:#F4F4F4;font-size:13px">关于淘宝 营销中心 廉正举报 联系客服 开放平台 诚征英才 联系我们 隐私权 政策 法律声明 知识产权 不当竞争举报 规则意见征集 | <span style="font-size:12px;color: #a2a2a2;">© 2003-现在 Taobao.com 版权所有</span></p>
                <p style="color:#a2a2a2;">增值电信业务经营许可证：浙B2-20080224|增值电信业务经营许可证（跨地区）： B2-20150210|浙网文（2019）1033-086号|浙江省网络食品销售第三方平台提供者备案：浙网食A33010001|</p>
                <p style="color:#a2a2a2;"><img style="width:20px;height:20px;" src="../../assets/img/footer/gongan.jpg" />浙公网安备 33010002000078号 | 浙B2-20080224-1 | 广播电视节目制作经营许可证（浙）字第01012号 | 市场名称登记证：工商网市字3301004120号 | 医疗器械网络交易服务第三方平台备案：（浙）网械平台备字[2018]第00004号 |</p>
            </div>
        </div>
    </div>
</div>  
</template>
<script>
export default{
    data(){
        return{
            pForm:[
                {
                    p1:'专属定制Air Force 1 By You低、中、高帮及Unlocked限',
                    p2:'定款现已上线，丰富配色灵感搭配质感材料和个性文字，',
                    p3:'打造你的专属经典风范。',
                    a1:'立刻定制'
                },
                 {
                    p1:'Nike App 超级星期五每周五中午上线独家福利，超多限时',
                    p2:'优惠和专属惊喜等你体验。前往 Nike App 收获更多精 ',
                    p3:'彩',
                    a1:'即刻下载'
                }
            ],
            imgone:{display:'inline-block'},
            imgtwo:{display:'none'},
            imgthree:{display:'none'},
            imgfour:{display:'none'},
            smallimg1:{border:'2px solid black'},
            smallimg2:{border:'none'},
            smallimg3:{border:'none'},
            smallimg4:{border:'none'},
            value: null,
            num1:1,
             activeNames: ['1'],
             show:{display:''},
             showif:false
        }
    },
    methods:{
        handleimg1(){
            this.imgone = {display:'inline-block'},
            this.imgtwo = {display:'none'},
            this.imgthree = {display:'none'},
            this.imgfour = {display:'none'},
            this.smallimg1 = {border:'2px solid black'},
            this.smallimg2 = {border:'none'},
            this.smallimg3 = {border:'none'},
            this.smallimg4 = {border:'none'}
        },
        handleimg2(){
            this.imgone = {display:'none'},
            this.imgtwo = {display:'inline-block'},
            this.imgthree = {display:'none'},
            this.imgfour = {display:'none'},
            this.smallimg1 = {border:'none'},
            this.smallimg2 = {border:'2px solid black'},
            this.smallimg3 = {border:'none'},
            this.smallimg4 = {border:'none'}
        },
        handleimg3(){
            this.imgone = {display:'none'},
            this.imgtwo = {display:'none'},
            this.imgthree = {display:'inline-block'},
            this.imgfour = {display:'none'},
            this.smallimg1 = {border:'none'},
            this.smallimg2 = {border:'none'},
            this.smallimg3 = {border:'2px solid black'},
            this.smallimg4 = {border:'none'}
        },
        handleimg4(){
            this.imgone = {display:'none'},
            this.imgtwo = {display:'none'},
            this.imgthree = {display:'none'},
            this.imgfour = {display:'inline-block'},
            this.smallimg1 = {border:'none'},
            this.smallimg2 = {border:'none'},
            this.smallimg3 = {border:'none'},
            this.smallimg4 = {border:'2px solid black'}
        },
        opennav(){
            if(this.showif == false){
                this.show = {display:'inline-block'};
                this.showif = true
            }else{
                this.show = {display:'none'};
                this.showif = false
            }
        }
    }
}

</script>
<style scoped>
.main-header div{
    text-align: center;
    padding-top:20px;
}
.main-header div a{
    text-decoration: none;
    color:black;
}
.main-header div a:hover{
    color: #FF5301;
}
.img-one, .img-two, .img-three, .img-four{
    width:100%;
    height:100%
}
a{
    text-decoration: none;
    color: black;
}
a:hover{
    color: #FF5301;
}
.footer{
    margin-top: 20px;
    background: #F4F4F4;
}
.footer1-box p{
    font-size: 13px;
    color: #535353;
}
.controlnav{
    float:right;
    display: none;
}
@media screen and (max-width:768px){
    .main-header{
        display: none;
        clear: both;
    }
    .main{ 
        width: 100%;
        margin: 0 auto;
        text-align: center;
    }
    .controlnav{
        display: inline-block;
    }
    .main-one{
        padding-top: 25px;
    }
    .showbig{
        display: flex;
        flex-flow: row;
    }
    .shuoming{
        clear: both;
        text-align:left;
        border:2px solid #f4f4f4;
    }
    .month{
        float: left;
    }
}
</style>