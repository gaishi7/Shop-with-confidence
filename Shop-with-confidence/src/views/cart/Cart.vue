<template>
    <div class="category">
        <div class="home-header row">
            <div class="header-one col-sm-3"><img style="width:100px;height:100px" src="../../assets/img/Login/放心购2.jpg"/></div>
            <div class="header-two col-sm-6" id="nav3">
                <el-input class="header-two-input" v-model="input" placeholder="请输入搜索文字"></el-input>
                <el-button class="header-two-button">搜索</el-button>
            </div>
            <div class="header-three col-sm-3">
                <el-button class="header-three-button">我的购物车</el-button>
            </div>
        </div>
        <div class="main container">
            <div style="text-align:center">
                <div class="col-sm-3" style="height:20vh;padding:50px"><h4>购物车</h4></div>
                <div class="col-sm-6" style="height:20vh;padding:40px">
                    <el-steps :active="1">
                        <el-step title="购物车" description="存放物品"></el-step>
                        <el-step title="订单确认" description="确认订单"></el-step>
                        <el-step title="完成订单" description="支付订单"></el-step>
                    </el-steps>
                </div>
                <div class="col-sm-3" style="height:20vh;padding:50px"><el-button  style="font-size:16px;background:none;border:none" @click="goshoping()" >继续购物>></el-button></div>
            </div>
            <div class="shopnav" style="text-align:center;padding:0">
                <div class="col-sm-4 car-nav"><p>商品</p></div>
                <div class="col-sm-3 car-nav"><p>单价</p></div>
                <div class="col-sm-3 car-nav"><p>数量</p></div>
                <div class="col-sm-2 car-nav"><p>小计</p></div>
            </div>
            <div>
                <div>
                    <div class="col-sm-4" style="display:flex">
                        <div style="width:100%;flex:1;padding-top:10vh"><el-checkbox @change="handlechecked1" v-model="checked1"></el-checkbox></div>
                        <div style="width:100%;flex:3"><img style="width:100%;height:20vh" src="../../assets/img/category-header/shoe1.jpg" alt=""></div>
                        <div style="width:100%;flex:4;line-height:10px;padding:35px;padding-top:40px;">
                            <p>Nike Air Force 1 '07</p><br/>
                            <p>颜色分类：</p>
                            <p>白色</p>
                        </div>
                    </div>
                    <div class="col-sm-3" style="text-align:center;padding-top:60px;">
                        <p>￥1783.00</p>
                    </div>
                    <div class="col-sm-3" style="text-align:center;padding-top:60px;">
                        <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                    </div>
                    <div class="col-sm-2" style="text-align:center;padding-top:60px;color:red">
                        ￥{{sum1}}
                    </div>
                </div>
                <div>
                    <div class="col-sm-4" style="display:flex;clear:both">
                        <div style="width:100%;flex:1;padding-top:10vh"><el-checkbox  @change="handlechecked2" v-model="checked2"></el-checkbox></div>
                        <div style="width:100%;flex:3"><img style="width:100%;height:20vh" src="../../assets/img/category-header/shoe1.jpg" alt=""></div>
                        <div style="width:100%;flex:4;line-height:10px;padding:35px;padding-top:40px;">
                            <p>Nike Air Force 1 '07</p><br/>
                            <p>颜色分类：</p>
                            <p>白色</p>
                        </div>
                    </div>
                    <div class="col-sm-3" style="text-align:center;padding-top:60px;">
                        <p>￥1000.00</p>
                    </div>
                    <div class="col-sm-3" style="text-align:center;padding-top:60px;">
                        <el-input-number v-model="num2" @change="handleChange2" :min="1" :max="10" label="描述文字"></el-input-number>
                    </div>
                    <div class="col-sm-2" style="text-align:center;padding-top:60px;color:red">
                        ￥{{sum3}}
                    </div>
                </div>
                <div>
                    <div class="col-sm-4" style="display:flex;clear:both">
                        <div style="width:100%;flex:1;padding-top:10vh"><el-checkbox  @change="handlechecked3" v-model="checked3"></el-checkbox></div>
                        <div style="width:100%;flex:3"><img style="width:100%;height:20vh" src="../../assets/img/category-header/shoe1.jpg" alt=""></div>
                        <div style="width:100%;flex:4;line-height:10px;padding:35px;padding-top:40px;">
                            <p>Nike Air Force 1 '07</p><br/>
                            <p>颜色分类：</p>
                            <p>白色</p>
                        </div>
                    </div>
                    <div class="col-sm-3" style="text-align:center;padding-top:60px;">
                        <p>￥500.00</p>
                    </div>
                    <div class="col-sm-3" style="text-align:center;padding-top:60px;">
                        <el-input-number v-model="num3" @change="handleChange3" :min="1" :max="10" label="描述文字"></el-input-number>
                    </div>
                    <div class="col-sm-2" style="text-align:center;padding-top:60px;color:red">
                        ￥{{sum5}}
                    </div>
                </div>
                <div>
                    <div class="col-sm-4" style="display:flex;clear:both">
                        <div style="width:100%;flex:1;padding-top:10vh"><el-checkbox  @change="handlechecked4" v-model="checked4"></el-checkbox></div>
                        <div style="width:100%;flex:3"><img style="width:100%;height:20vh" src="../../assets/img/category-header/shoe1.jpg" alt=""></div>
                        <div style="width:100%;flex:4;line-height:10px;padding:35px;padding-top:40px;">
                            <p>Nike Air Force 1 '07</p><br/>
                            <p>颜色分类：</p>
                            <p>白色</p>
                        </div>
                    </div>
                    <div class="col-sm-3" style="text-align:center;padding-top:60px;">
                        <p>￥200.00</p>
                    </div>
                    <div class="col-sm-3" style="text-align:center;padding-top:60px;">
                        <el-input-number v-model="num4" @change="handleChange4" :min="1" :max="10" label="描述文字"></el-input-number>
                    </div>
                    <div class="col-sm-2" style="text-align:center;padding-top:60px;color:red">
                        ￥{{sum7}}
                    </div>
                </div>
            </div>
            <div style="clear:both;padding-left:16px;width:100%;background:#FF5301">
                <div style="padding-top:2vh;"><el-checkbox @change="handlecheck" style="float:left;padding-top:20px" v-model="checked"></el-checkbox></div>
                <p style="float:left;padding-left:20px;padding-top:20px">全选</p>
                <el-button @click="jiesuan()" type="primary" style="float:right;padding-left:20px;padding-top:22px;width:20vh">结算</el-button>
                <p style="float:right;padding-right:20px;padding-top:20px"  >总计：<strong style="color:red">￥{{money}}</strong></p>
                <p style="float:right;padding-right:20px;padding-top:20px">共 <strong style="color:red">{{shop2}}</strong> 件商品</p>
            </div>
            <div style="clear:both;position:absolute">
                 <el-dialog title="结算" :visible.sync="dialogTableVisible" center :append-to-body='true' :lock-scroll="false" width="30%">
                     <p style="text-align:center">
                         <span style="padding-right:20px;padding-top:20px">总计：<strong style="color:red">￥{{money}}</strong></span>
                         <span style="padding-right:20px;padding-top:20px">共 <strong style="color:red">{{shop2}}</strong> 件商品</span>
                     </p>
                     <p style="text-align:center;margin-top:20px">请用<strong> 支付宝 </strong>支付</p>
                     <img style="width:100%;height:100%" src="../../assets/img/cart/ma.jpg" alt="">
                 </el-dialog>
            </div>
        </div>
        <div class="footer">
        <div class="container footer1 footerhidden">
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
export default {
    data(){
        return{
             dialogTableVisible: false,
             checked:false,
             checked1: false,
             checked2: false,
             checked3: false,
             checked4: false,
             checkindex:false,
             checkindex1:false,
             checkindex2:false,
             checkindex3:false,
             checkindex4:false,
             num1: 1,
             num2: 1,
             num3: 1,
             num4: 1,
             sum1:1783.00,
             sum2:1783.00,
             sum3:1000.00,
             sum4:1000.00,
             sum5:500.00,
             sum6:500.00,
             sum7:200.00,
             sum8:200.00,
             shop:0,
             shop1:0,
             shop2:0,
             shop3:1,
             snum1:0,
             snum2:0,
             snum3:0,
             snum4:0,
             snum5:0,
             shop4:1,
             shop5:1,
             shop6:1,
             money:0,
             money2:0,
        }
    },
    methods:{
        handleChange(value){
           this.sum1 = this.sum2*value
           this.shop++
           this.shop3 = value
           if(this.checked1){
               console.log(this.shop2)
               this.shop2 = value +this.snum3 + this.snum4 + this.snum5
               this.money = this.sum1 + this.money2
           }
           this.snum2 = value
        },
        handleChange2(value){
           this.sum3 = this.sum4*value
           this.shop++
           this.shop4 = value
           if(this.checked2){
               this.shop2 = value +this.snum2 + this.snum4 + this.snum5
               this.money = this.sum3 + this.money2
           }
            this.snum3 = value
        },
        handleChange3(value){
           this.sum5 = this.sum6*value
           console.log(this.sum5)
           this.shop++
           this.shop5 = value
           if(this.checked3){
               this.shop2 = value + this.snum2 + this.snum3 + this.snum5
               this.money = this.sum5 + this.money2
           }
           this.snum4 = value
        },
        handleChange4(value){
           this.sum7 = this.sum8*value
           this.shop++
           this.shop6 = value
           if(this.checked4){
               this.shop2 = value + this.snum2 + this.snum3 + this.snum4
               this.money = this.sum7 + this.money2
           }
           this.snum5 = value
        },
        handlecheck(){
            if(this.checkindex == false){
                this.checked1 = true
                this.checked2 = true
                this.checked3 = true
                this.checked4 = true
                this.checkindex = true;
                if(this.snum2==0){this.snum2=1}
                if(this.snum3==0){this.snum3=1}
                if(this.snum4==0){this.snum4=1}
                if(this.snum5==0){this.snum5=1}
                this.shop2 = this.snum2+this.snum3+this.snum4+this.snum5
                this.money = this.sum1+this.sum3+this.sum5+this.sum7
            }else{
                this.checked1 = false
                this.checked2 = false
                this.checked3 = false
                this.checked4 = false
                this.checkindex = false;
                this.shop2 = 0
                this.money = 0
            }
        },
        handlechecked1(){
            if(this.checkindex1 == false){
                if(this.shop>=0){  
                this.shop2 = this.shop3 + this.shop2
                this.snum1 = this.shop2
                this.shop1++
                this.snum2 = 1
                this.checkindex1 = true
                this.money = this.sum1 + this.money
                this.money2 = this.money
            }
            }else{
                console.log(this.shop3)
                console.log(this.shop2)
                this.shop2 = this.shop2 - this.shop3
                this.checkindex1 = false
                this.money = this.money - this.sum1
            }
            if(this.checkindex1==true&&this.checkindex2==true&&this.checkindex3==true&&this.checkindex4==true){
                this.checked = true
            }
        },
        handlechecked2(){
            if(this.checkindex2 == false){
                if(this.shop>=0){  
                this.shop2 = this.shop4 + this.shop2
                this.snum1 = this.shop2
                this.shop1++
                this.snum3 = 1
                this.checkindex2 = true
                this.money = this.sum3 + this.money
                this.money2 = this.money
            }
            }else{
                console.log(this.shop3)
                console.log(this.shop2)
                this.shop2 = this.shop2 - this.shop4
                this.checkindex2 = false
                this.money = this.money - this.sum3
            }
            if(this.checkindex1==true&&this.checkindex2==true&&this.checkindex3==true&&this.checkindex4==true){
                this.checked = true
            }
        },
        handlechecked3(){
           if(this.checkindex3 == false){
                if(this.shop>=0){  
                this.shop2 = this.shop5 + this.shop2
                this.snum1 = this.shop2
                this.shop1++
                this.snum4 = 1
                this.checkindex3 = true
                this.money = this.sum5 + this.money
                this.money2 = this.money
            }
            }else{
                this.shop2 = this.shop2 - this.shop5
                this.checkindex3 = false
                this.money = this.money - this.sum5
            }
            if(this.checkindex1==true&&this.checkindex2==true&&this.checkindex3==true&&this.checkindex4==true){
                this.checked = true
            }            
        },
        handlechecked4(){
           if(this.checkindex4 == false){
                if(this.shop>=0){  
                this.shop2 = this.shop6 + this.shop2
                this.snum1 = this.shop2
                this.shop1++
                this.snum5 = 1
                this.checkindex4 = true
                this.money = this.sum7 + this.money
                this.money2 = this.money
            }
           }else{
               this.shop2 = this.shop2 - this.shop6
               this.checkindex4 =false
               this.money = this.money - this.sum7
           }
           if(this.checkindex1==true&&this.checkindex2==true&&this.checkindex3==true&&this.checkindex4==true){
                this.checked = true
            }
        },
        jiesuan(){
            this.dialogTableVisible = true
        },
        goshoping(){
            this.$router.push('/home');
        }
    }
}
</script>
<style scoped>
.category{
    width: 100%;
    background: #FF5301;
}
.home-header{
    background: #F8F8F8;
    position: relative;
    top: 10px;
    margin-bottom: 20px;
}
.row{
    margin-left: 0;
    margin-right: 0;
}
.header-one{
    padding-right: 50px;
    text-align: right;
}
.header-two{
    height: 100px;
    padding-top: 30px;
}
.header-three{
    height: 100px;    
    padding: 0;
    padding-top: 30px;
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
}
.main{
    background: #f8f8f8;
}
.container{
    padding: 0;
}
.car-nav{
    background:#FF5301;
    height:45px;
    padding:15px;
    color:white;
    font-size: 16px;
}
.footer{
    margin-top: 20px;
    background: #F4F4F4;
}
.footer1-box p{
    font-size: 13px;
    color: #535353;
}
@media screen and (max-width:750px){
      .header-one,.header-three,.header-two p, .shopnav, .footerhidden,.footer1{
          display: none;
      }
  }
</style>
<style>
#nav3 .el-input__inner {
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border-color: #FF5301;
    background: #F8F8F8;
}
.header-two-input{
    width: 85%;
    background: #F8F8F8;
}
.el-checkbox__inner{
    border:1px solid black;
}

</style>