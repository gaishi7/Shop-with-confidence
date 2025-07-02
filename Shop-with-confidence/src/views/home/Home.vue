<template>
<div class="home">
    <div class="home-header row">
        <div class="header-one col-sm-3"><img style="width:100px;height:100px" src="../../assets/img/Login/放心购2.jpg"/></div>
        <div class="header-two col-sm-6" id="nav1">
            <el-input class="header-two-input" v-model="input" placeholder="请输入内容"></el-input>
            <el-button class="header-two-button">搜索</el-button>
            <p>
                <a><router-link to="/lianyiqun">新款连衣裙</router-link></a>
                <a href="https://s.taobao.com/search?spm=a21bo.jianhua.201856-fline.2.6b6511d9iBzTWZ&q=%E5%9B%9B%E4%BB%B6%E5%A5%97&refpid=420461_1006&source=tbsy&style=grid&tab=all&pvid=d0f2ec2810bcec0d5a16d5283ce59f67">四件套</a>
                <a href="https://s.taobao.com/search?spm=a21bo.jianhua.201856-fline.3.6b6511d9iBzTWZ&q=T%E6%81%A4&refpid=420462_1006&source=tbsy&style=grid&tab=all&pvid=d0f2ec2810bcec0d5a16d5283ce59f67">潮流T恤</a>
                <a href="https://s.taobao.com/search?spm=a21bo.jianhua.201856-fline.3.6b6511d9iBzTWZ&q=T%E6%81%A4&refpid=420462_1006&source=tbsy&style=grid&tab=all&pvid=d0f2ec2810bcec0d5a16d5283ce59f67">时尚女鞋</a>
                <a href="https://s.taobao.com/search?spm=a21bo.jianhua.201856-fline.3.6b6511d9iBzTWZ&q=T%E6%81%A4&refpid=420462_1006&source=tbsy&style=grid&tab=all&pvid=d0f2ec2810bcec0d5a16d5283ce59f67">短裤</a>
                <a href="https://s.taobao.com/search?spm=a21bo.jianhua.201856-fline.3.6b6511d9iBzTWZ&q=T%E6%81%A4&refpid=420462_1006&source=tbsy&style=grid&tab=all&pvid=d0f2ec2810bcec0d5a16d5283ce59f67">半身裙</a>
                <a href="https://s.taobao.com/search?spm=a21bo.jianhua.201856-fline.3.6b6511d9iBzTWZ&q=T%E6%81%A4&refpid=420462_1006&source=tbsy&style=grid&tab=all&pvid=d0f2ec2810bcec0d5a16d5283ce59f67">行车记录仪</a>
                <a href="https://s.taobao.com/search?spm=a21bo.jianhua.201856-fline.3.6b6511d9iBzTWZ&q=T%E6%81%A4&refpid=420462_1006&source=tbsy&style=grid&tab=all&pvid=d0f2ec2810bcec0d5a16d5283ce59f67">耳机</a>
            </p>
        </div>
        <div class="header-three col-sm-3">
            <el-button class="header-three-button" @click="gogouwuche()">我的购物车</el-button>
        </div>
    </div>
    <div class="container home-main">
        <div>
            <div class="col-sm-2" style="padding:4px;">
                <div style="margin:0;background:white;max-height:50vh;border-radius:20px;overflow:hidden;">
                    <div style="float:left">
                        <img src="../../assets/img/Login/放心购2.jpg" style="width:50px;border-radius:50px;margin:10px;float:left"/>
                        <span style="float:left;padding-top:15px">Hi~欢迎放心购！<br/><router-link to="/">登录</router-link> | 注册</span>
                    </div>
                    <el-divider></el-divider>
                    <div class="hmoe-main-left-all">
                        <a href="#"><div><img src="../home/img/京东.png"/><p>京东</p></div></a>
                        <a href="#"><div><img src="../home/img/天猫.png"/><p>天猫</p></div></a>
                        <a href="#"><div><img src="../home/img/充值.png"/><p>充值</p></div></a>
                        <a href="#"><div><img src="../home/img/吃货.png"/><p>吃货</p></div></a>
                        <a href="#"><div><img src="../home/img/学生超市消费.png" /><p>超市</p></div></a>
                        <a href="#"><div><img src="../home/img/我的福利.png" /><p>福利</p></div></a>
                        <a href="#"><div><img src="../home/img/淘宝.png" /><p>淘宝</p></div></a>
                        <a href="#"><div><img src="../home/img/滴滴出行.png" /><p>滴滴</p></div></a>
                    </div>
                    <el-divider></el-divider>
                    <div style="padding-left:10px">
                        <a href="#"><p>有了360儿童电话手表...</p></a>
                        <a href="#"><p>有了360儿童电话手表...</p></a>
                        <a href="#"><p>有了360儿童电话手表...</p></a>
                        <br/>
                    </div>
                </div>
            </div>
            <div class="col-sm-6" style="padding:4px;">
                 <div style="margin:0;border-radius:20px;">
                     <div class="block">
                        <el-carousel height="50vh">
                            <el-carousel-item v-for="item in imgForm" :key="item">
                                <img style="width:100%;height:100%;border-radius:20px;" :src="item.src"/>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                 </div>
            </div>
            <div class="col-sm-2" style="padding:4px;">
                 <div style="margin:0;border-radius:20px;">
                     <div style="height:100%;margin-bottom:10px;border-radius:20px"><img style="width:100%;height:100%;border-radius:20px" src="../home/img/product/衣服3.jpg"></div>
                     <div style="height:100%;margin-bottom:10px;border-radius:20px"><img style="width:100%;height:100%;border-radius:20px" src="../home/img/product/衣服2.jpg"></div>
                     <div class="shop3" style="height:100%;margin-bottom:10px;border-radius:20px"><img style="width:100%;height:100%;border-radius:20px" src="../home/img/product/衣服2.jpg"></div>
                 </div>
            </div>
            <div class="col-sm-2"  style="padding:4px;">
                 <div style="background:white;margin:0;border-radius:20px;overflow:hidden">
                    <el-popover
                        placement="right"
                        title="家用电器"
                        width="800"
                        trigger="hover"
                        content="">
                        <a href="#"><p><strong style="margin-right:37px">电视 > </strong>全面屏电视 教育电视 OLED电视 智慧屏 4k超清电视 55英寸 65英寸 电视配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">空调 > </strong>新风空调 以旧换新 空调挂机 空调柜机 空调套装 新一级能效 挂机1.5匹 柜机3匹 变频空调 中央空调 移动空调</p></a>
                        <a href="#"><p><strong style="margin-right:23px">洗衣机 > </strong>滚筒洗衣机 洗烘洗衣机 波轮洗衣机 迷你洗衣机 烘干机 洗衣机配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">冰箱 > </strong>多门 对开门 三门 双门 冷柜/冰吧 酒柜 冰箱配件</p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨卫大电 > </strong>油烟机 燃气灶 烟灶套装 集成灶 消毒柜 洗碗机 电热水器 燃气热水器 空气能热水器 太阳能热水器 嵌入式除烟机<span style="margin-left:83px;">灶具配件</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨房小电 > </strong>破壁机 咖啡机 榨汁机 电炖锅 果蔬净化清洗机 面包</p></a>
                        <a href="#"><p><strong style="margin-right:10px">生活电器 > </strong>取暖器 加湿器 空气净化器 饮水机 茶吧机 吸尘器 扫地机器人 洗地机 蒸汽/电动拖把 除螨仪 挂烫机/熨斗 擦地/擦<span style="margin-left:83px;">窗机器人 干衣机 除湿机</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">个护健康 > </strong>剃须刀 电动牙刷 冲牙器 电吹风 理发器 美容仪 按摩椅 足浴盆</p></a>
                        <el-button size="mini" slot="reference" style="border:none;border-radius:20px;background: none;">家用电器</el-button>
                    </el-popover><br/>
                    <el-popover
                        placement="right"
                        title="手机 / 运营商 / 数码"
                        width="800"
                        trigger="hover"
                        content="">
                        <a href="#"><p><strong style="margin-right:37px">电视 > </strong>全面屏电视 教育电视 OLED电视 智慧屏 4k超清电视 55英寸 65英寸 电视配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">空调 > </strong>新风空调 以旧换新 空调挂机 空调柜机 空调套装 新一级能效 挂机1.5匹 柜机3匹 变频空调 中央空调 移动空调</p></a>
                        <a href="#"><p><strong style="margin-right:23px">洗衣机 > </strong>滚筒洗衣机 洗烘洗衣机 波轮洗衣机 迷你洗衣机 烘干机 洗衣机配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">冰箱 > </strong>多门 对开门 三门 双门 冷柜/冰吧 酒柜 冰箱配件</p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨卫大电 > </strong>油烟机 燃气灶 烟灶套装 集成灶 消毒柜 洗碗机 电热水器 燃气热水器 空气能热水器 太阳能热水器 嵌入式除烟机<span style="margin-left:83px;">灶具配件</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨房小电 > </strong>破壁机 咖啡机 榨汁机 电炖锅 果蔬净化清洗机 面包</p></a>
                        <a href="#"><p><strong style="margin-right:10px">生活电器 > </strong>取暖器 加湿器 空气净化器 饮水机 茶吧机 吸尘器 扫地机器人 洗地机 蒸汽/电动拖把 除螨仪 挂烫机/熨斗 擦地/擦<span style="margin-left:83px;">窗机器人 干衣机 除湿机</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">个护健康 > </strong>剃须刀 电动牙刷 冲牙器 电吹风 理发器 美容仪 按摩椅 足浴盆</p></a>
                        <el-button size="mini" slot="reference" style="border:none;border-radius:20px;background: none;">手机 / 运营商 / 数码</el-button>
                    </el-popover><br/>
                    <el-popover
                        placement="right"
                        title="家居 / 家具 / 家装 / 厨具"
                        width="800"
                        trigger="hover"
                        content="">
                        <a href="#"><p><strong style="margin-right:37px">电视 > </strong>全面屏电视 教育电视 OLED电视 智慧屏 4k超清电视 55英寸 65英寸 电视配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">空调 > </strong>新风空调 以旧换新 空调挂机 空调柜机 空调套装 新一级能效 挂机1.5匹 柜机3匹 变频空调 中央空调 移动空调</p></a>
                        <a href="#"><p><strong style="margin-right:23px">洗衣机 > </strong>滚筒洗衣机 洗烘洗衣机 波轮洗衣机 迷你洗衣机 烘干机 洗衣机配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">冰箱 > </strong>多门 对开门 三门 双门 冷柜/冰吧 酒柜 冰箱配件</p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨卫大电 > </strong>油烟机 燃气灶 烟灶套装 集成灶 消毒柜 洗碗机 电热水器 燃气热水器 空气能热水器 太阳能热水器 嵌入式除烟机<span style="margin-left:83px;">灶具配件</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨房小电 > </strong>破壁机 咖啡机 榨汁机 电炖锅 果蔬净化清洗机 面包</p></a>
                        <a href="#"><p><strong style="margin-right:10px">生活电器 > </strong>取暖器 加湿器 空气净化器 饮水机 茶吧机 吸尘器 扫地机器人 洗地机 蒸汽/电动拖把 除螨仪 挂烫机/熨斗 擦地/擦<span style="margin-left:83px;">窗机器人 干衣机 除湿机</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">个护健康 > </strong>剃须刀 电动牙刷 冲牙器 电吹风 理发器 美容仪 按摩椅 足浴盆</p></a>
                        <el-button size="mini" slot="reference" style="border:none;border-radius:20px;background: none;">家居 / 家具 / 家装 / 厨具</el-button>
                    </el-popover><br/>
                    <el-popover
                        placement="right"
                        title="男装 / 女装 / 童装 / 内衣"
                        width="800"
                        trigger="hover"
                        content="">
                        <a href="#"><p><strong style="margin-right:37px">电视 > </strong>全面屏电视 教育电视 OLED电视 智慧屏 4k超清电视 55英寸 65英寸 电视配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">空调 > </strong>新风空调 以旧换新 空调挂机 空调柜机 空调套装 新一级能效 挂机1.5匹 柜机3匹 变频空调 中央空调 移动空调</p></a>
                        <a href="#"><p><strong style="margin-right:23px">洗衣机 > </strong>滚筒洗衣机 洗烘洗衣机 波轮洗衣机 迷你洗衣机 烘干机 洗衣机配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">冰箱 > </strong>多门 对开门 三门 双门 冷柜/冰吧 酒柜 冰箱配件</p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨卫大电 > </strong>油烟机 燃气灶 烟灶套装 集成灶 消毒柜 洗碗机 电热水器 燃气热水器 空气能热水器 太阳能热水器 嵌入式除烟机<span style="margin-left:83px;">灶具配件</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨房小电 > </strong>破壁机 咖啡机 榨汁机 电炖锅 果蔬净化清洗机 面包</p></a>
                        <a href="#"><p><strong style="margin-right:10px">生活电器 > </strong>取暖器 加湿器 空气净化器 饮水机 茶吧机 吸尘器 扫地机器人 洗地机 蒸汽/电动拖把 除螨仪 挂烫机/熨斗 擦地/擦<span style="margin-left:83px;">窗机器人 干衣机 除湿机</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">个护健康 > </strong>剃须刀 电动牙刷 冲牙器 电吹风 理发器 美容仪 按摩椅 足浴盆</p></a>
                        <el-button size="mini" slot="reference" style="border:none;border-radius:20px;background: none;">男装 / 女装 / 童装 / 内衣</el-button>
                    </el-popover><br/>
                    <el-popover
                        placement="right"
                        title="美妆 / 个护清洁 / 宠物"
                        width="800"
                        trigger="hover"
                        content="">
                        <a href="#"><p><strong style="margin-right:37px">电视 > </strong>全面屏电视 教育电视 OLED电视 智慧屏 4k超清电视 55英寸 65英寸 电视配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">空调 > </strong>新风空调 以旧换新 空调挂机 空调柜机 空调套装 新一级能效 挂机1.5匹 柜机3匹 变频空调 中央空调 移动空调</p></a>
                        <a href="#"><p><strong style="margin-right:23px">洗衣机 > </strong>滚筒洗衣机 洗烘洗衣机 波轮洗衣机 迷你洗衣机 烘干机 洗衣机配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">冰箱 > </strong>多门 对开门 三门 双门 冷柜/冰吧 酒柜 冰箱配件</p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨卫大电 > </strong>油烟机 燃气灶 烟灶套装 集成灶 消毒柜 洗碗机 电热水器 燃气热水器 空气能热水器 太阳能热水器 嵌入式除烟机<span style="margin-left:83px;">灶具配件</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨房小电 > </strong>破壁机 咖啡机 榨汁机 电炖锅 果蔬净化清洗机 面包</p></a>
                        <a href="#"><p><strong style="margin-right:10px">生活电器 > </strong>取暖器 加湿器 空气净化器 饮水机 茶吧机 吸尘器 扫地机器人 洗地机 蒸汽/电动拖把 除螨仪 挂烫机/熨斗 擦地/擦<span style="margin-left:83px;">窗机器人 干衣机 除湿机</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">个护健康 > </strong>剃须刀 电动牙刷 冲牙器 电吹风 理发器 美容仪 按摩椅 足浴盆</p></a>
                        <el-button size="mini" slot="reference" style="border:none;border-radius:20px;background: none;">美妆 / 个护清洁 / 宠物</el-button>
                    </el-popover><br/>
                    <el-popover
                        placement="right"
                        title="女鞋 / 箱包 / 钟表"
                        width="800"
                        trigger="hover"
                        content="">
                        <a href="#"><p><strong style="margin-right:37px">电视 > </strong>全面屏电视 教育电视 OLED电视 智慧屏 4k超清电视 55英寸 65英寸 电视配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">空调 > </strong>新风空调 以旧换新 空调挂机 空调柜机 空调套装 新一级能效 挂机1.5匹 柜机3匹 变频空调 中央空调 移动空调</p></a>
                        <a href="#"><p><strong style="margin-right:23px">洗衣机 > </strong>滚筒洗衣机 洗烘洗衣机 波轮洗衣机 迷你洗衣机 烘干机 洗衣机配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">冰箱 > </strong>多门 对开门 三门 双门 冷柜/冰吧 酒柜 冰箱配件</p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨卫大电 > </strong>油烟机 燃气灶 烟灶套装 集成灶 消毒柜 洗碗机 电热水器 燃气热水器 空气能热水器 太阳能热水器 嵌入式除烟机<span style="margin-left:83px;">灶具配件</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨房小电 > </strong>破壁机 咖啡机 榨汁机 电炖锅 果蔬净化清洗机 面包</p></a>
                        <a href="#"><p><strong style="margin-right:10px">生活电器 > </strong>取暖器 加湿器 空气净化器 饮水机 茶吧机 吸尘器 扫地机器人 洗地机 蒸汽/电动拖把 除螨仪 挂烫机/熨斗 擦地/擦<span style="margin-left:83px;">窗机器人 干衣机 除湿机</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">个护健康 > </strong>剃须刀 电动牙刷 冲牙器 电吹风 理发器 美容仪 按摩椅 足浴盆</p></a>
                        <el-button size="mini" slot="reference" style="border:none;border-radius:20px;background: none;">女鞋 / 箱包 / 钟表</el-button>
                    </el-popover><br/>
                     <el-popover
                        placement="right"
                        title="房产 / 汽车 / 汽车用品"
                        width="800"
                        trigger="hover"
                        content="">
                        <a href="#"><p><strong style="margin-right:37px">电视 > </strong>全面屏电视 教育电视 OLED电视 智慧屏 4k超清电视 55英寸 65英寸 电视配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">空调 > </strong>新风空调 以旧换新 空调挂机 空调柜机 空调套装 新一级能效 挂机1.5匹 柜机3匹 变频空调 中央空调 移动空调</p></a>
                        <a href="#"><p><strong style="margin-right:23px">洗衣机 > </strong>滚筒洗衣机 洗烘洗衣机 波轮洗衣机 迷你洗衣机 烘干机 洗衣机配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">冰箱 > </strong>多门 对开门 三门 双门 冷柜/冰吧 酒柜 冰箱配件</p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨卫大电 > </strong>油烟机 燃气灶 烟灶套装 集成灶 消毒柜 洗碗机 电热水器 燃气热水器 空气能热水器 太阳能热水器 嵌入式除烟机<span style="margin-left:83px;">灶具配件</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨房小电 > </strong>破壁机 咖啡机 榨汁机 电炖锅 果蔬净化清洗机 面包</p></a>
                        <a href="#"><p><strong style="margin-right:10px">生活电器 > </strong>取暖器 加湿器 空气净化器 饮水机 茶吧机 吸尘器 扫地机器人 洗地机 蒸汽/电动拖把 除螨仪 挂烫机/熨斗 擦地/擦<span style="margin-left:83px;">窗机器人 干衣机 除湿机</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">个护健康 > </strong>剃须刀 电动牙刷 冲牙器 电吹风 理发器 美容仪 按摩椅 足浴盆</p></a>
                        <el-button size="mini" slot="reference" style="border:none;border-radius:20px;background: none;">房产 / 汽车 / 汽车用品</el-button>
                    </el-popover><br/>
                    <el-popover
                        placement="right"
                        title="母婴 / 玩具乐器"
                        width="800"
                        trigger="hover"
                        content="">
                        <a href="#"><p><strong style="margin-right:37px">电视 > </strong>全面屏电视 教育电视 OLED电视 智慧屏 4k超清电视 55英寸 65英寸 电视配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">空调 > </strong>新风空调 以旧换新 空调挂机 空调柜机 空调套装 新一级能效 挂机1.5匹 柜机3匹 变频空调 中央空调 移动空调</p></a>
                        <a href="#"><p><strong style="margin-right:23px">洗衣机 > </strong>滚筒洗衣机 洗烘洗衣机 波轮洗衣机 迷你洗衣机 烘干机 洗衣机配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">冰箱 > </strong>多门 对开门 三门 双门 冷柜/冰吧 酒柜 冰箱配件</p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨卫大电 > </strong>油烟机 燃气灶 烟灶套装 集成灶 消毒柜 洗碗机 电热水器 燃气热水器 空气能热水器 太阳能热水器 嵌入式除烟机<span style="margin-left:83px;">灶具配件</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨房小电 > </strong>破壁机 咖啡机 榨汁机 电炖锅 果蔬净化清洗机 面包</p></a>
                        <a href="#"><p><strong style="margin-right:10px">生活电器 > </strong>取暖器 加湿器 空气净化器 饮水机 茶吧机 吸尘器 扫地机器人 洗地机 蒸汽/电动拖把 除螨仪 挂烫机/熨斗 擦地/擦<span style="margin-left:83px;">窗机器人 干衣机 除湿机</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">个护健康 > </strong>剃须刀 电动牙刷 冲牙器 电吹风 理发器 美容仪 按摩椅 足浴盆</p></a>
                        <el-button size="mini" slot="reference" style="border:none;border-radius:20px;background: none;">母婴 / 玩具乐器</el-button>
                    </el-popover><br/>
                    <el-popover
                        placement="right"
                        title="食品 / 酒类 / 生鲜 / 特产"
                        width="800"
                        trigger="hover"
                        content="">
                        <a href="#"><p><strong style="margin-right:37px">电视 > </strong>全面屏电视 教育电视 OLED电视 智慧屏 4k超清电视 55英寸 65英寸 电视配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">空调 > </strong>新风空调 以旧换新 空调挂机 空调柜机 空调套装 新一级能效 挂机1.5匹 柜机3匹 变频空调 中央空调 移动空调</p></a>
                        <a href="#"><p><strong style="margin-right:23px">洗衣机 > </strong>滚筒洗衣机 洗烘洗衣机 波轮洗衣机 迷你洗衣机 烘干机 洗衣机配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">冰箱 > </strong>多门 对开门 三门 双门 冷柜/冰吧 酒柜 冰箱配件</p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨卫大电 > </strong>油烟机 燃气灶 烟灶套装 集成灶 消毒柜 洗碗机 电热水器 燃气热水器 空气能热水器 太阳能热水器 嵌入式除烟机<span style="margin-left:83px;">灶具配件</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨房小电 > </strong>破壁机 咖啡机 榨汁机 电炖锅 果蔬净化清洗机 面包</p></a>
                        <a href="#"><p><strong style="margin-right:10px">生活电器 > </strong>取暖器 加湿器 空气净化器 饮水机 茶吧机 吸尘器 扫地机器人 洗地机 蒸汽/电动拖把 除螨仪 挂烫机/熨斗 擦地/擦<span style="margin-left:83px;">窗机器人 干衣机 除湿机</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">个护健康 > </strong>剃须刀 电动牙刷 冲牙器 电吹风 理发器 美容仪 按摩椅 足浴盆</p></a>
                        <el-button size="mini" slot="reference" style="border:none;border-radius:20px;background: none;">食品 / 酒类 / 生鲜 / 特产</el-button>
                    </el-popover><br/>
                    <el-popover
                        placement="right"
                        title="食品 / 酒类 / 生鲜 / 特产"
                        width="800"
                        trigger="hover"
                        content="">
                        <a href="#"><p><strong style="margin-right:37px">电视 > </strong>全面屏电视 教育电视 OLED电视 智慧屏 4k超清电视 55英寸 65英寸 电视配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">空调 > </strong>新风空调 以旧换新 空调挂机 空调柜机 空调套装 新一级能效 挂机1.5匹 柜机3匹 变频空调 中央空调 移动空调</p></a>
                        <a href="#"><p><strong style="margin-right:23px">洗衣机 > </strong>滚筒洗衣机 洗烘洗衣机 波轮洗衣机 迷你洗衣机 烘干机 洗衣机配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">冰箱 > </strong>多门 对开门 三门 双门 冷柜/冰吧 酒柜 冰箱配件</p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨卫大电 > </strong>油烟机 燃气灶 烟灶套装 集成灶 消毒柜 洗碗机 电热水器 燃气热水器 空气能热水器 太阳能热水器 嵌入式除烟机<span style="margin-left:83px;">灶具配件</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨房小电 > </strong>破壁机 咖啡机 榨汁机 电炖锅 果蔬净化清洗机 面包</p></a>
                        <a href="#"><p><strong style="margin-right:10px">生活电器 > </strong>取暖器 加湿器 空气净化器 饮水机 茶吧机 吸尘器 扫地机器人 洗地机 蒸汽/电动拖把 除螨仪 挂烫机/熨斗 擦地/擦<span style="margin-left:83px;">窗机器人 干衣机 除湿机</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">个护健康 > </strong>剃须刀 电动牙刷 冲牙器 电吹风 理发器 美容仪 按摩椅 足浴盆</p></a>
                        <el-button size="mini" slot="reference" style="border:none;border-radius:20px;background: none;">食品 / 酒类 / 生鲜 / 特产</el-button>
                    </el-popover><br/>
                    <el-popover
                        placement="right"
                        title="艺术 / 礼品鲜花 / 农资绿植"
                        width="800"
                        trigger="hover"
                        content="">
                        <a href="#"><p><strong style="margin-right:37px">电视 > </strong>全面屏电视 教育电视 OLED电视 智慧屏 4k超清电视 55英寸 65英寸 电视配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">空调 > </strong>新风空调 以旧换新 空调挂机 空调柜机 空调套装 新一级能效 挂机1.5匹 柜机3匹 变频空调 中央空调 移动空调</p></a>
                        <a href="#"><p><strong style="margin-right:23px">洗衣机 > </strong>滚筒洗衣机 洗烘洗衣机 波轮洗衣机 迷你洗衣机 烘干机 洗衣机配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">冰箱 > </strong>多门 对开门 三门 双门 冷柜/冰吧 酒柜 冰箱配件</p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨卫大电 > </strong>油烟机 燃气灶 烟灶套装 集成灶 消毒柜 洗碗机 电热水器 燃气热水器 空气能热水器 太阳能热水器 嵌入式除烟机<span style="margin-left:83px;">灶具配件</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨房小电 > </strong>破壁机 咖啡机 榨汁机 电炖锅 果蔬净化清洗机 面包</p></a>
                        <a href="#"><p><strong style="margin-right:10px">生活电器 > </strong>取暖器 加湿器 空气净化器 饮水机 茶吧机 吸尘器 扫地机器人 洗地机 蒸汽/电动拖把 除螨仪 挂烫机/熨斗 擦地/擦<span style="margin-left:83px;">窗机器人 干衣机 除湿机</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">个护健康 > </strong>剃须刀 电动牙刷 冲牙器 电吹风 理发器 美容仪 按摩椅 足浴盆</p></a>
                        <el-button size="mini" slot="reference" style="border:none;border-radius:20px;background: none;">艺术 / 礼品鲜花 / 农资绿植</el-button>
                    </el-popover><br/>
                    <el-popover
                        placement="right"
                        title="图书 / 文娱 / 教育 / 电子书"
                        width="800"
                        trigger="hover"
                        content="">
                        <a href="#"><p><strong style="margin-right:37px">电视 > </strong>全面屏电视 教育电视 OLED电视 智慧屏 4k超清电视 55英寸 65英寸 电视配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">空调 > </strong>新风空调 以旧换新 空调挂机 空调柜机 空调套装 新一级能效 挂机1.5匹 柜机3匹 变频空调 中央空调 移动空调</p></a>
                        <a href="#"><p><strong style="margin-right:23px">洗衣机 > </strong>滚筒洗衣机 洗烘洗衣机 波轮洗衣机 迷你洗衣机 烘干机 洗衣机配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">冰箱 > </strong>多门 对开门 三门 双门 冷柜/冰吧 酒柜 冰箱配件</p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨卫大电 > </strong>油烟机 燃气灶 烟灶套装 集成灶 消毒柜 洗碗机 电热水器 燃气热水器 空气能热水器 太阳能热水器 嵌入式除烟机<span style="margin-left:83px;">灶具配件</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨房小电 > </strong>破壁机 咖啡机 榨汁机 电炖锅 果蔬净化清洗机 面包</p></a>
                        <a href="#"><p><strong style="margin-right:10px">生活电器 > </strong>取暖器 加湿器 空气净化器 饮水机 茶吧机 吸尘器 扫地机器人 洗地机 蒸汽/电动拖把 除螨仪 挂烫机/熨斗 擦地/擦<span style="margin-left:83px;">窗机器人 干衣机 除湿机</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">个护健康 > </strong>剃须刀 电动牙刷 冲牙器 电吹风 理发器 美容仪 按摩椅 足浴盆</p></a>
                        <el-button size="mini" slot="reference" style="border:none;border-radius:20px;background: none;">图书 / 文娱 / 教育 / 电子书</el-button>
                    </el-popover><br/>
                    <el-popover
                        placement="right"
                        title="机票 / 酒店 / 旅游 / 生活"
                        width="800"
                        trigger="hover"
                        content="">
                        <a href="#"><p><strong style="margin-right:37px">电视 > </strong>全面屏电视 教育电视 OLED电视 智慧屏 4k超清电视 55英寸 65英寸 电视配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">空调 > </strong>新风空调 以旧换新 空调挂机 空调柜机 空调套装 新一级能效 挂机1.5匹 柜机3匹 变频空调 中央空调 移动空调</p></a>
                        <a href="#"><p><strong style="margin-right:23px">洗衣机 > </strong>滚筒洗衣机 洗烘洗衣机 波轮洗衣机 迷你洗衣机 烘干机 洗衣机配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">冰箱 > </strong>多门 对开门 三门 双门 冷柜/冰吧 酒柜 冰箱配件</p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨卫大电 > </strong>油烟机 燃气灶 烟灶套装 集成灶 消毒柜 洗碗机 电热水器 燃气热水器 空气能热水器 太阳能热水器 嵌入式除烟机<span style="margin-left:83px;">灶具配件</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨房小电 > </strong>破壁机 咖啡机 榨汁机 电炖锅 果蔬净化清洗机 面包</p></a>
                        <a href="#"><p><strong style="margin-right:10px">生活电器 > </strong>取暖器 加湿器 空气净化器 饮水机 茶吧机 吸尘器 扫地机器人 洗地机 蒸汽/电动拖把 除螨仪 挂烫机/熨斗 擦地/擦<span style="margin-left:83px;">窗机器人 干衣机 除湿机</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">个护健康 > </strong>剃须刀 电动牙刷 冲牙器 电吹风 理发器 美容仪 按摩椅 足浴盆</p></a>
                        <el-button size="mini" slot="reference" style="border:none;border-radius:20px;background: none;">机票 / 酒店 / 旅游 / 生活</el-button>
                    </el-popover><br/>
                    <el-popover
                        placement="right"
                        title="安装 / 维修 / 清洗 / 二手"
                        width="800"
                        trigger="hover"
                        content="">
                        <a href="#"><p><strong style="margin-right:37px">电视 > </strong>全面屏电视 教育电视 OLED电视 智慧屏 4k超清电视 55英寸 65英寸 电视配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">空调 > </strong>新风空调 以旧换新 空调挂机 空调柜机 空调套装 新一级能效 挂机1.5匹 柜机3匹 变频空调 中央空调 移动空调</p></a>
                        <a href="#"><p><strong style="margin-right:23px">洗衣机 > </strong>滚筒洗衣机 洗烘洗衣机 波轮洗衣机 迷你洗衣机 烘干机 洗衣机配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">冰箱 > </strong>多门 对开门 三门 双门 冷柜/冰吧 酒柜 冰箱配件</p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨卫大电 > </strong>油烟机 燃气灶 烟灶套装 集成灶 消毒柜 洗碗机 电热水器 燃气热水器 空气能热水器 太阳能热水器 嵌入式除烟机<span style="margin-left:83px;">灶具配件</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨房小电 > </strong>破壁机 咖啡机 榨汁机 电炖锅 果蔬净化清洗机 面包</p></a>
                        <a href="#"><p><strong style="margin-right:10px">生活电器 > </strong>取暖器 加湿器 空气净化器 饮水机 茶吧机 吸尘器 扫地机器人 洗地机 蒸汽/电动拖把 除螨仪 挂烫机/熨斗 擦地/擦<span style="margin-left:83px;">窗机器人 干衣机 除湿机</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">个护健康 > </strong>剃须刀 电动牙刷 冲牙器 电吹风 理发器 美容仪 按摩椅 足浴盆</p></a>
                        <el-button size="mini" slot="reference" style="border:none;border-radius:20px;background: none;">安装 / 维修 / 清洗 / 二手</el-button>
                    </el-popover><br/>
                    <el-popover
                        placement="right"
                        title="安装 / 维修 / 清洗 / 二手"
                        width="800"
                        trigger="hover"
                        content="">
                        <a href="#"><p><strong style="margin-right:37px">电视 > </strong>全面屏电视 教育电视 OLED电视 智慧屏 4k超清电视 55英寸 65英寸 电视配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">空调 > </strong>新风空调 以旧换新 空调挂机 空调柜机 空调套装 新一级能效 挂机1.5匹 柜机3匹 变频空调 中央空调 移动空调</p></a>
                        <a href="#"><p><strong style="margin-right:23px">洗衣机 > </strong>滚筒洗衣机 洗烘洗衣机 波轮洗衣机 迷你洗衣机 烘干机 洗衣机配件</p></a>
                        <a href="#"><p><strong style="margin-right:37px">冰箱 > </strong>多门 对开门 三门 双门 冷柜/冰吧 酒柜 冰箱配件</p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨卫大电 > </strong>油烟机 燃气灶 烟灶套装 集成灶 消毒柜 洗碗机 电热水器 燃气热水器 空气能热水器 太阳能热水器 嵌入式除烟机<span style="margin-left:83px;">灶具配件</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">厨房小电 > </strong>破壁机 咖啡机 榨汁机 电炖锅 果蔬净化清洗机 面包</p></a>
                        <a href="#"><p><strong style="margin-right:10px">生活电器 > </strong>取暖器 加湿器 空气净化器 饮水机 茶吧机 吸尘器 扫地机器人 洗地机 蒸汽/电动拖把 除螨仪 挂烫机/熨斗 擦地/擦<span style="margin-left:83px;">窗机器人 干衣机 除湿机</span></p></a>
                        <a href="#"><p><strong style="margin-right:10px">个护健康 > </strong>剃须刀 电动牙刷 冲牙器 电吹风 理发器 美容仪 按摩椅 足浴盆</p></a>
                        <el-button size="mini" slot="reference" style="border:none;border-radius:20px;background: none;">安装 / 维修 / 清洗 / 二手</el-button>
                    </el-popover><br/>
                </div>
            </div>
        </div>
        <div class="home-main2" style="clear:both">
            <div class="col-sm-2 block1" style="padding:4px;padding-top:0px">
                    <el-carousel height="32.1vh">
                        <el-carousel-item v-for="item in imgList" :key="item">
                            <img :src="item.src" style="width:100%;height:100%;border-top-left-radius: 20px;border-bottom-left-radius: 20px;" />
                        </el-carousel-item>
                    </el-carousel>
            </div>
            <div class="col-sm-8 block2" style="padding:4px;background:white;height:32.1vh">
                <div class="col-sm-3"><img style="width:100%;height:100%" src="../../assets/img/shop/shop1.jpg"/><a href="https://item.jd.com/69575252188.html">顺丰隔日达玛莎拉蒂手表男石英表防水小三针计时皮表带防水十大品牌男表夏季新款欧美潮流腕表 R8871618013</a><p>￥1788.90</p></div>
                <div class="col-sm-3"><img style="width:100%;height:100%" src="../../assets/img/shop/shop2.jpg"/><a href="https://item.jd.com/100009776714.html">小米净水器家用净水机S1 800G厨下式 RO反渗透5级过滤 无罐直饮水 双出水龙头 超国家一级水效 智能互联</a><p>￥2553.60</p></div>
                <div class="col-sm-3"><img style="width:100%;height:100%" src="../../assets/img/shop/shop3.jpg"/><a href="https://item.jd.com/10037151069406.html">Apple/苹果 iPhone 13 (A2634) 全网通 5G手机 蓝色 全网通 128G【官方标配】</a><p>￥568.00</p></div>
                <div class="col-sm-3"><img style="width:100%;height:100%" src="../../assets/img/shop/shop4.jpg"/><a href="https://item.jd.com/10032619863425.html">高档316不锈钢保温男女泡茶杯大容量便携大号水杯子TX. 樱桃红 1000ml</a><p>￥399.00</p></div>
            </div>
            <div class="col-sm-2 block3" style="padding:4px;padding-top:0px">
                    <el-carousel height="32.1vh">
                        <el-carousel-item v-for="item in imgList" :key="item">
                            <img :src="item.src" style="width:100%;height:100%" />
                        </el-carousel-item>
                    </el-carousel>
            </div>
        </div>
        <div style="clear:both" class="home-main3">
            <div class="home-main3-three" style="clear:both">
                <h3 style="text-align:center;padding-top:7vh"><strong>// 天猫国际 //</strong></h3>
                <div style="margin-top:40px">
                    <div class="col-sm-6" style="padding:20px;background:white;border-top-left-radius:20px;border-bottom-left-radius:20px;">
                        <div style="width:100%;height:100%;">
                            <h3 style="padding-left:5px;"><strong>每日特价</strong><span style="color:red">*</span></h3>
                            <a href="#">
                                <div class="col-sm-4" style="background:#f4f4f4;padding-bottom:50px;border-radius:20px;padding-top:50px">
                                    <img style="width:100%;height:100%;padding:20px;" src="../../assets/img/home_shop/shop1.png" alt="">
                                    <p style="text-align:center;">梦黛丽(MENGDAILI)</p>
                                    <p style="text-align:center;color:red">￥1000.00</p>
                                </div>
                            </a>
                            <div class="col-sm-8">
                                <div>
                                    <a href="#">
                                        <div class="col-sm-6">
                                            <img style="width:70%;height:70%;text-align:center" src="../../assets/img/home_shop/shop2.png" alt="">
                                            <p style="font-size:12px;padding-left:15px;padding-top:10px">红心木瓜5斤</p>
                                            <p style="padding-left:20px;color:red;line-height:0">￥15.9</p>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div class="col-sm-6">
                                            <img style="width:70%;height:70%;text-align:center" src="../../assets/img/home_shop/shop3.png" alt="">
                                            <p style="font-size:12px;padding-left:15px;padding-top:10px">红心木瓜5斤</p>
                                            <p style="padding-left:20px;color:red;line-height:1px">￥15.9</p>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <div class="col-sm-6" style="padding-top:20px">
                                            <img style="width:70%;height:70%" src="../../assets/img/home_shop/shop4.png" alt="">
                                            <p style="font-size:12px;padding-left:15px;padding-top:10px">红心木瓜5斤</p>
                                            <p style="padding-left:20px;color:red;line-height:1px">￥15.9</p>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div class="col-sm-6" style="padding-top:20px">
                                            <img style="width:70%;height:70%" src="../../assets/img/home_shop/shop5.png" alt="">
                                            <p style="font-size:12px;padding-left:15px;padding-top:10px">红心木瓜5斤</p>
                                            <p style="padding-left:20px;color:red;line-height:1px">￥15.9</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 row container" style="padding:20px;background:white;border-top-right-radius:20px;border-bottom-right-radius:20px;border-left:1px solid #f4f4f4">
                        <div style="width:100%;height:100%;">
                            <h3 style="padding-left:5px;"><strong>每日特价</strong><span style="color:red">*</span></h3>
                            <a href="#">
                                <div class="col-sm-4" style="background:#f4f4f4;padding-bottom:50px;border-radius:20px;padding-top:50px">
                                    <img style="width:100%;height:100%;padding:20px;" src="../../assets/img/home_shop/shop1.png" alt="">
                                    <p style="text-align:center;">梦黛丽(MENGDAILI)</p>
                                    <p style="text-align:center;color:red">￥1000.00</p>
                                </div>
                            </a>
                            <div class="col-sm-8">
                                <div>
                                    <a href="#">
                                        <div class="col-sm-6">
                                            <img style="width:70%;height:70%;text-align:center" src="../../assets/img/home_shop/shop2.png" alt="">
                                            <p style="font-size:12px;padding-left:15px;padding-top:10px">红心木瓜5斤</p>
                                            <p style="padding-left:20px;color:red;line-height:0">￥15.9</p>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div class="col-sm-6">
                                            <img style="width:70%;height:70%;text-align:center" src="../../assets/img/home_shop/shop3.png" alt="">
                                            <p style="font-size:12px;padding-left:15px;padding-top:10px">红心木瓜5斤</p>
                                            <p style="padding-left:20px;color:red;line-height:1px">￥15.9</p>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <div class="col-sm-6" style="padding-top:20px">
                                            <img style="width:70%;height:70%" src="../../assets/img/home_shop/shop4.png" alt="">
                                            <p style="font-size:12px;padding-left:15px;padding-top:10px">红心木瓜5斤</p>
                                            <p style="padding-left:20px;color:red;line-height:1px">￥15.9</p>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div class="col-sm-6" style="padding-top:20px">
                                            <img style="width:70%;height:70%" src="../../assets/img/home_shop/shop5.png" alt="">
                                            <p style="font-size:12px;padding-left:15px;padding-top:10px">红心木瓜5斤</p>
                                            <p style="padding-left:20px;color:red;line-height:1px">￥15.9</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="home-main3-three-one  home-main3-three" style="clear:both">
                <div style="margin:0;border-radius:20px;padding-top:30px">
                     <div class="block">
                        <el-carousel height="45vh">
                        <el-carousel-item v-for="item in imgForm2" :key="item">
                            <img style="width:100%;height:100%;border-radius:20px;" :src="item.src"/>
                        </el-carousel-item>
                        </el-carousel>
                    </div>
                 </div>
            </div>
            <div class="home-main3-three-two  home-main3-three" style="clear:both;background:white;height:53vh">
                <div class="col-sm-4" style="background:white;margin-top:30px;border-top-left-radius:20px;border-bottom-left-radius:20px;">
                    <h3><strong>新品首发</strong><span style="color:red">*</span></h3>
                    <div style="margin:0;">
                        <div class="block">
                            <el-carousel type="card" height="40vh">
                            <el-carousel-item v-for="item in imgForm3" :key="item">
                                <a href="#">
                                    <img style="width:100%;height:60%;border-radius:20px;margin-top:20px" :src="item.src"/>
                                    <p style="text-align:center;margin-top:10px">{{item.show}}</p>
                                    <h4 style="color:red;text-align:center">{{item.price}}</h4>
                                </a>
                            </el-carousel-item>
                            </el-carousel>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4" style="background:white;margin-top:30px;border-left:1px solid #f4f4f4;">
                    <h3><strong>寻宝</strong><span style="color:red">*</span></h3>
                    <div style="margin-top:30px">
                        <div class="col-sm-4">
                            <a href="#"><img style="width:100%;height:100%" src="../../assets/img/xunbao/shop1.png" alt=""></a>
                        </div>
                        <div class="col-sm-8">
                            <a href="#">
                                <p>卡贝伯爵地垫门口入户门进门脚垫家用卫生间浴室门垫吸水防滑</p>
                                <p style="color:red">￥<span style="font-size:18px">110</span>.00</p>
                            </a>
                        </div>
                    </div>
                    <div style="clear:both;padding-top:20px">
                        <div class="col-sm-4">
                            <a href="#"><img style="width:100%;height:100%" src="../../assets/img/xunbao/shop2.png" alt=""></a>
                        </div>
                        <div class="col-sm-8">
                            <a href="#">
                                <p>VANS（万斯）低帮情侣板鞋 黑白 VansOld Skool VN000D3HY2</p>
                                <p style="color:red">￥<span style="font-size:18px">449</span>.00</p>
                            </a>
                        </div>
                    </div>
                    <div class="shop2" style="clear:both;padding-top:20px;">
                        <div class="col-sm-4">
                            <a href="#">
                                <img style="width:100%;height:100%" src="../../assets/img/xunbao/shop3.png" alt="">
                            </a>
                        </div>
                        <div class="col-sm-8">
                            <a href="#">
                                <p>COACH蔻驰 CHARLES查尔斯系列 简约米兰编织链 时尚欧美</p>
                                <p style="color:red;padding-bottom:10px">￥<span style="font-size:18px">1240</span>.00</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 guang" style="background:white;;margin-top:30px;border-left:1px solid #f4f4f4;border-top-right-radius:20px;border-bottom-right-radius:20px;">
                    <h3><strong>逛好店</strong><span style="color:red">*</span></h3>
                    <div  style="height:18vh;background:#f9f9f9;margin-top:30px">
                        <a href="#">
                            <div class="col-sm-7">
                                <p class="shop2">索尼（SONY） FW-<span style="margin-left:10px">65BA35G 65英寸 专业...</span></p>
                                <el-tag size="mini" type="danger">自营</el-tag>
                                <el-tag size="mini" type="success">随心所动</el-tag>
                                <p style="font-size:13px;color:#B1BDBD;margin-top:25px">113.9万人关注</p>
                            </div>
                            <div class="col-sm-5"><img style="width:100%;height:100%;margin-top:10px" src="../../assets/img/dian/shop1.png" alt=""></div>
                        </a>
                    </div>
                    <a href="#">
                        <div style="height:18vh;margin-top:20px;background:#f9f9f9;margin-bottom:16px;">
                            <div class="col-sm-7">
                                <p class="shop2">小米无线充电宝10000白 <span style="margin-left:10px">  适用小米苹果安卓redmi...</span></p>
                                <el-tag size="mini" type="danger">自营</el-tag>
                                <el-tag size="mini" type="warning">极速狂飙</el-tag>
                                <p style="font-size:13px;color:#B1BDBD;margin-top:25px">113.9万人关注</p>
                            </div>
                            <div class="col-sm-5"><img style="width:100%;height:100%;margin-top:10px" src="../../assets/img/dian/shop2.png" alt=""></div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="home-main3-one home-main3-three" style="clear:both">
                <h3 style="text-align:center;padding-top:7vh"><strong>// 频道广场 //</strong></h3>
                <div>
                    <a href="#"><div class="col-sm-3 book" style="padding:10px;margin-top:20px">
                        <img style="width:100%;height:100%;border-radius:20px" src="../../assets/img/shop/book.png" alt="">
                    </div></a>
                    <a href="#"><div class="col-sm-3 shengxian" style="padding:10px;margin-top:20px">
                        <img style="width:100%;height:100%;border-radius:20px" src="../../assets/img/shop/xian.png" alt="">
                    </div></a>
                    <a href="#"><div class="col-sm-3" style="padding:10px;margin-top:20px">
                        <div>
                            <img style="width:100%;height:50%;border-radius:20px" src="../../assets/img/shop/shop4.png" alt="">
                        </div>
                        <div style="padding-top:10px;">
                             <img style="width:100%;height:50%;border-radius:20px" src="../../assets/img/shop/shop5.png" alt="">
                        </div>
                    </div></a>
                    <a href="#"><div class="col-sm-3" style="padding:10px;margin-top:20px">
                        <div>
                            <img style="width:100%;height:50%;border-radius:20px" src="../../assets/img/shop/shop6.png" alt="">
                        </div>
                        <div style="padding-top:10px;">
                             <img style="width:100%;height:50%;border-radius:20px" src="../../assets/img/shop/shop7.png" alt="">
                        </div>
                    </div></a>
                </div>
                <div style="clear:both">
                    <a href="#"><div class="col-sm-3">
                        <div>
                             <img style="width:100%;height:50%;border-radius:20px" src="../../assets/img/shop/shop8.png" alt="">
                        </div>
                        <div style="padding-top:10px;">
                             <img style="width:100%;height:50%;border-radius:20px" src="../../assets/img/shop/shop9.png" alt="">
                        </div>
                    </div></a>
                    <a href="#"><div class="col-sm-3">
                        <div>
                             <img style="width:100%;height:50%;border-radius:20px" src="../../assets/img/shop/shop10.png" alt="">
                        </div>
                        <div style="padding-top:5px;">
                             <img style="width:100%;height:50%;border-radius:20px" src="../../assets/img/shop/shop11.png" alt="">
                        </div>
                    </div></a>
                    <a href="#"><div class="col-sm-3">
                        <div>
                             <img style="width:100%;height:50%;border-radius:20px" src="../../assets/img/shop/shop12.png" alt="">
                        </div>
                        <div style="padding-top:10px;">
                             <img style="width:100%;height:50%;border-radius:20px" src="../../assets/img/shop/shop13.png" alt="">
                        </div>
                    </div></a>
                    <a href="#"><div class="col-sm-3">
                        <div>
                             <img style="width:100%;height:50%;border-radius:20px" src="../../assets/img/shop/shop14.png" alt="">
                        </div>
                        <div style="padding-top:10px;">
                             <img style="width:100%;height:50%;border-radius:20px" src="../../assets/img/shop/shop15.png" alt="">
                        </div>
                    </div></a>
                </div>
                
            </div>
            <div class="home-main3-two  home-main3-three" style="clear:both">
                <h3 style="text-align:center;padding-top:7vh"><strong>// 为你推荐 //</strong></h3>
                <div style="padding-top:10px;background:white">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                        <router-link class="nav-link" to="/home" >精选</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link" to="/zhineng">智能先锋</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link" to="/jujia">居家优品</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link" to="/jujia">超市百货</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link" to="/jujia">时尚达人</router-link>
                        </li>
                    </ul>
                    <router-view></router-view>
                </div>
            </div>
        </div>
         <div style="clear:both" class="home-main2-hr">
            <span class="line"></span>
            <span class="text">END</span>
            <span class="line"></span>
        </div>
        <div class="home-main2-last home-main3-three">
            <div class="col-sm-3" style="padding-right:50px">
                <svg t="1639205872136" class="last-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3719" width="35" height="35"><path d="M511.168026 0.031999l-431.154526 135.323771 2.23993 510.768038 1.183963 10.047686c3.263898 15.231524 23.551264 95.197025 101.564826 170.938658 61.854067 60.254117 202.489672 133.43583 270.135558 168.538733l7.551764 3.935877 45.662573 24.383238 34.366926-17.567451c36.510859-17.631449 222.489047-109.11659 294.550795-179.226399 79.517515-77.373582 98.684916-156.699103 102.428799-178.394425l2.591919-513.391957-431.154526-135.387769zM726.745289 538.959158l-161.690947 0 0 161.690947-107.772632 0 0-161.690947-161.690947 0 0-107.772632 161.690947 0 0-161.690947 107.772632 0 0 161.690947 161.690947 0 0 107.772632z" p-id="3720" fill="#8a8a8a"></path></svg><span>消费者保障</span>
                <p>保障范围 退货退款流程 服务中心 更多特色服务</p>
            </div>
            <div class="col-sm-3" style="padding-right:50px">
                <svg t="1639207198325" class="last-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4839" width="35" height="35"><path d="M512 0C230.008471 0 0 230.008471 0 512s230.008471 512 512 512 512-230.008471 512-512S793.991529 0 512 0z m-1.264941 815.013647a45.628235 45.628235 0 0 1-45.537883-45.537882c-0.030118-25.088 20.449882-45.537882 45.537883-45.537883s45.537882 20.449882 45.537882 45.537883-20.449882 45.537882-45.537882 45.537882z m170.556235-369.603765c-11.986824 21.534118-35.297882 47.826824-70.174118 78.637177-23.431529 20.871529-38.701176 36.111059-45.929411 45.929412-13.854118 19.124706-18.522353 40.026353-20.419765 63.09647-1.957647 23.853176-9.005176 49.362824-40.749176 44.634353-25.118118-3.704471-30.840471-24.877176-29.936942-45.929412 1.054118-22.799059 5.029647-42.827294 11.685647-60.114823 5.933176-15.36 15.269647-30.930824 28.340706-46.772706 9.517176-11.444706 26.834824-28.069647 51.651765-49.995294 24.937412-22.076235 41.020235-39.544471 48.519529-52.61553 7.499294-12.950588 11.173647-27.256471 11.173647-42.646588 0-27.949176-10.902588-52.495059-32.707764-73.758117-42.074353-40.749176-113.633882-43.369412-156.882824-3.011765-19.305412 18.010353-31.593412 45.658353-39.062588 82.462117-10.631529 52.254118-79.480471 34.514824-71.589647-8.161882 18.703059-100.743529 80.293647-167.725176 186.518588-168.207059 51.410824-0.240941 101.857882 21.263059 136.463059 52.886589 34.032941 31.081412 51.109647 68.698353 51.109647 112.971294 0 25.479529-5.993412 49.061647-18.010353 70.595764z" fill="#8a8a8a" p-id="4840"></path></svg><span>新手上路</span>
                <p>新手专区 消费警示 交易安全 24小时在线帮助 免费开店</p>
            </div>
            <div class="col-sm-3" style="padding-right:50px">
                <svg t="1639207344753" class="last-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5118" width="35" height="35"><path d="M66.861292 358.794689l890.276393 0 0 137.449465-890.276393 0 0-137.449465Z" p-id="5119" fill="#8a8a8a"></path><path d="M877.166305 179.076538 435.369204 179.076538 146.778436 179.076538c-44.060495 0-79.917144 39.660278-79.917144 88.447425l0 61.825091 890.276393 0 0-4.889357 0-7.225565 0-49.655933C957.137685 218.845287 921.281035 179.076538 877.166305 179.076538z" p-id="5120" fill="#8a8a8a"></path><path d="M66.861292 756.477061c0 48.677653 35.856649 88.446401 79.917144 88.446401l274.955212 0 455.43368 0c44.113707 0 79.970356-39.659255 79.970356-88.446401l0-230.786247-890.276393 0L66.861292 756.477061zM664.907017 719.587895l166.896124 0c7.659447 0 13.907755 6.247284 13.907755 13.907755 0 7.66047-6.247284 13.908778-13.907755 13.908778L664.907017 747.404428c-7.66047 0-13.908778-6.247284-13.908778-13.908778C650.998239 725.836203 657.245524 719.587895 664.907017 719.587895z" p-id="5121" fill="#8a8a8a"></path></svg><span>付款方式</span>
                <p>快捷支付 信用卡 余额宝 蚂蚁花呗 货到付款</p>
            </div>
            <div class="col-sm-3" style="padding-right:50px">
                <svg t="1639207519768" class="last-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5879" width="35" height="35"><path d="M552.05868 121.010595q86.793806 7.511002 162.738386 45.483293t131.859821 98.06031 88.04564 138.953545 32.130399 167.328443q0 94.304808-35.885901 176.508557t-97.225754 143.96088-144.378158 97.225754-176.508557 35.468623q-94.304808 0-177.343113-35.468623t-144.795436-97.225754-97.643032-143.96088-35.885901-176.508557q0-77.613692 24.619397-147.299104t68.850856-126.435208 104.319478-98.477588 131.859821-61.757131q-8.345558-25.036675-20.446618-49.656072t-23.784841-43.814181-20.863896-31.295844-10.849226-12.101059q64.260799 10.849226 109.326813 30.04401t73.858191 38.806846 42.562347 34.634067 15.439283 17.525672zM311.706601 347.175224q-23.367563 0-39.224124 14.187449t-15.856561 35.051345q0 20.02934 15.856561 34.216789t39.224124 14.187449q22.533007 0 38.389568-14.187449t15.856561-34.216789q0-20.863896-15.856561-35.051345t-38.389568-14.187449zM356.772616 641.773431q11.683782-35.051345 12.101059-60.922575t-18.777506-45.066015q-12.518337-11.683782-20.446618-19.194784t-16.273839-14.604727-19.194784-15.022005-29.209454-21.281174l-35.051345 52.577017 65.095355 39.224124q10.849226 6.676447 18.360228 15.856561 6.676447 8.345558 8.762836 20.02934t-5.424613 26.705786q-6.676447 14.187449-25.453953 35.468623t-37.97229 40.475958q-22.533007 22.533007-49.238794 46.735126l84.290139 51.742461q21.698452-46.735126 32.964955-70.102689t17.108394-35.885901 9.180114-21.281174 9.180114-25.453953zM813.274654 700.192339q6.676447-57.584352 6.676447-103.484923t-2.503667-78.448248q-3.338223-38.389568-8.345558-66.764466-10.01467-30.878566-48.404238-49.238794-16.691117-7.511002-40.475958-13.352893t-58.00163-7.511002-78.865526 2.08639-102.233089 14.604727q4.172779-9.180114 7.92828-16.273839t6.259169-12.935615q3.338223-6.676447 5.007335-12.518337l-76.779136-22.533007q-10.01467 30.878566-23.367563 59.253464-11.683782 24.202119-28.374898 50.907905t-37.555012 44.231459q15.022005 8.345558 27.540342 14.187449 10.849226 5.841891 19.194784 10.01467t8.345558 3.338223q11.683782-10.849226 21.698452-22.115729t19.194784-22.950285q9.180114-4.172779 18.360228-7.92828t18.360228-7.92828q-10.849226 19.194784-27.540342 44.231459t-33.382233 44.231459l32.547677 28.374898 12.518337-12.518337 13.352893-14.187449q8.345558-7.511002 17.525672-17.525672l42.562347 0 3.338223 60.922575-123.514262 0 0 35.051345 123.514262 0 0 73.440913-4.172779 0-14.187449 0q-10.01467 0-20.863896-0.834556t-19.612062-2.920945-11.266504-6.259169q-6.676447-10.01467-3.755501-27.123064t3.755501-28.792176l-62.591687 0-7.511002 1.669112q-5.841891 36.720456 0 65.095355 2.503667 12.518337 7.511002 23.784841t14.187449 20.02934 22.950285 14.187449 33.799511 4.590057q37.555012 0.834556 67.599022-5.007335t52.994295-15.022005 39.641402-19.612062 26.705786-17.94295l10.849226 40.05868 60.922575-25.036675-38.389568-94.304808 21.698452 0 0-35.051345-108.492258 0 0-60.922575 105.98859 0 0-35.051345-190.278729 0q10.01467-12.518337 19.194784-25.871231t10.849226-20.02934l-32.547677-8.345558q63.426243-10.849226 113.499593-10.849226 20.863896 0 41.310513 2.08639t36.303178 7.92828 25.453953 15.856561 9.597392 25.036675l0 215.315403q-1.669112 20.02934-10.849226 35.051345-8.345558 13.352893-25.871231 23.367563t-49.238794 8.345558l-45.90057-7.511002-10.849226 33.382233q56.749796 16.691117 102.650367 14.187449 20.02934-0.834556 39.224124-5.841891t34.634067-16.273839 26.288509-30.04401 14.187449-47.98696zM643.025265 666.810106q-17.525672 13.352893-43.396903 22.533007l0-65.92991 63.426243 0-29.209454 9.180114z" p-id="5880" fill="#8a8a8a"></path></svg><span>淘宝特色</span>
                <p>手机淘宝 旺旺/旺信 大众评审</p>
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
export default {
    data(){
        return{
            imgForm:[
                {
                    src:require('@/assets/img/swipper/swipper1.jpg')
                },
                {
                    src:require('@/assets/img/swipper/swipper3.jpg')
                },
                {
                    src:require('@/assets/img/swipper/swipper4.jpg')
                },
                {
                    src:require('@/assets/img/swipper/swipper5.jpg')
                }
            ],
            imgList:[
                {
                    src:require('@/assets/img/swipper/swipper2.jpg')
                },
                {
                    src:require('@/assets/img/swipper/swipper6.jpg')
                },
                {
                    src:require('@/assets/img/swipper/swipper7.jpg')
                }
            ],
            imgForm2:[
                {
                    src:require('@/assets/img/swipper/swipper8.jpg')
                },
                {
                    src:require('@/assets/img/swipper/swipper9.jpg')
                },
                {
                    src:require('@/assets/img/swipper/swipper10.jpg')
                }
            ],
            imgForm3:[
                {
                    src:require('@/assets/img/swipper/swipper11.png'),
                    show:'HEFANG何方珠宝',
                    price:'￥940.00'

                },
                {
                    src:require('@/assets/img/swipper/swipper12.png'),
                    show:'TWEE海洋之心',
                    price:'￥1783.00'
                },
                {
                    src:require('@/assets/img/swipper/swipper13.png'),
                    show:'T400跳动的心',
                    price:'￥239.00'
                },
                {
                    src:require('@/assets/img/swipper/swipper14.png'),
                    show:'Versace范思哲/Versus范瑟丝',
                    price:'￥2000.00'
                }
            ],
            visible: false,
            fadeInElements: [],
        }
    },
    methods:{
        gogouwuche(){
            this.$router.push('/cart')
        },
        handleScroll (evt) {
            for (var i = 0; i < this.fadeInElements.length; i++) {
            var elem = this.fadeInElements[i]
            if (this.isElemVisible(elem)) {
            elem.style.opacity = '1'
            elem.style.transform = 'scale(1)'
            this.fadeInElements.splice(i, 1) // 只让它运行一次
            }
      }
    },
    isElemVisible (el) {
      var rect = el.getBoundingClientRect()
      var elemTop = rect.top + 200 // 200 = buffer
      var elemBottom = rect.bottom
      return elemTop < window.innerHeight && elemBottom >= 0
    },
    buttontext(){
        window.scrollTo({
            behavior:'smooth',
            top:0
                
        })
    },
},
    mounted () {
        // 先获取全部需要过渡效果的元素
        this.fadeInElements = Array.from(document.getElementsByClassName('home-main3-three'))
        // 监听鼠标滚动事件 
        document.addEventListener('scroll', this.handleScroll)
  },
}
</script>
<style scoped>
.home{
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
.home-main{
    /* height: 100vh; */
    background: #F4F4F4;
    border-radius: 20px;
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
.header-two p a{
    font-size: 13px;
    margin: 3px;
    color: black;
}
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .el-divider--horizontal{
      clear:both;
  }
  .hmoe-main-left-all div img{
      width:20px;
  }
  .hmoe-main-left-all{
  float:none;
  clear:both;
  display:flex;
  flex-flow:row;
  flex-wrap:wrap; 
  padding-left: 10px;
  padding-bottom: 10px;
  gap: 18px;
  overflow:hidden
  }
  .home-main3-three{
    opacity: 0;
    transition: 0.3s all ease-out;
    transform: scale(0.3);
    box-sizing: border-box;
    /* display: inline-block; */
  }
  .home-main2 .block1, .home-main2 .block2, .home-main2 .block3{
      margin-top:20px
  }
 .block1{
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
  }
  .block3{
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
  }
  .block2 a{
      color: black;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      text-decoration: none;
      margin-top: 2vh;
  }
    .block2 a:hover{
        color:#FF5301;
    }
    .block2{
        text-align: center;
        margin-top: 10px;
        color: red;
    }
    .block2 p{
        margin-top: 1.5vh;
    }
    .home-main2-hr{
        height: 40px;
        width: 200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        padding-top: 6vh;
    }
.line {
  height: 1px;
  flex-grow: 1;
  background-color: #c9c9c9;
    }
.text{
    color: #c9c9c9;
    padding: 5px;
    }
    .home-main2-last{
        margin-top: 8vh;
        margin-bottom: 24vh;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
    .last-icon{
        float: left;
    }
    .home-main2-last span{
        float: left;
        margin-left:7px;
        margin-top: 7px;
        color: #8a8a8a;
    }
    .home-main2-last p{
        clear: both;
        color: #8a8a8a;
    }
    .footer{
        margin-top: 20px;
        background: #F4F4F4;
    }
    .footer1-box p{
        font-size: 13px;
        color: #535353;
    }
.home-main3-one a{
    text-decoration:none;
    color:black
}
.home-main3-one a div div,.book,.shengxian{
    transition: all 0.5s;
}
.home-main3-one a div div:hover,.book:hover,.shengxian:hover{
    transform: scale(1.05);
}
a{
    text-decoration: none;
    color: black;
}
a:hover{
    color: #FF5301;
}
a div{
    transition: all 0.5s;
}
a div:hover{
    transform: scale(1.05);
} 
.shop3{
    display: none;
}
@media screen and (max-width:750px){
      .header-one,.header-three,.header-two p,.guang{
          display: none;
      }
     .hmoe-main-left-all div img{
      width:50px;
      }
    .hmoe-main-left-all{
        gap: 20px;
      }
      .footer1{
          display: none;
      }
      .el-carousel__container, .block2{
          height: 100% !important;
      }
      .home-main3-three-two{
          height: 100% !important;
      }
      

  }
  @media screen and (min-width:750px) and (max-width:953px){
      .shop3{
          display: inline-block;
      }
      .shop2{
          display:none;
      }
  }
</style>
<style>
#nav1 .el-input__inner {
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border-color: #FF5301;
    background: #F8F8F8;
}
#nav1 .el-input{
    width: 85%;
    background: #F8F8F8;
}
.el-carousel__item[data-v-3dd2e005]:nth-child(2n+1),.el-carousel__item[data-v-3dd2e005]:nth-child(2n){
    background: white;
}
</style>