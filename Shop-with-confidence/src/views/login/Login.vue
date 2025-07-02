<template>
    <div>
        <div class="header">
            <div class="left">
                <img src="../../assets/img/Login/放心购.jpg" style="width:70px;height:70px;"/>
            </div>
            <div class="right">
                <button class="btn btn-default" style="border:none;background:none" @click="tohome()">返回注册</button>
                <el-divider direction="vertical"></el-divider>
                <button class="btn btn-default" style="border:none;background:none">收藏网站</button>
            </div>
        </div>
        <div style="background:#ff651c;">
            <div class="container">
                <div class="main row">
                    <div class="main-left col-sm-6">
                        <img src="../../assets/img/Login/login-bg.jpg"/>
                    </div>
                    <div class="main-right col-sm-6">
                        <div class="main-right-login">
                            <h4>密码登录</h4>
                            <el-form :rules="rules" ref="ruleForm" label-width="80px" :model="ruleForm">
                                <el-form-item prop="username" label="用户名">
                                    <el-input type="text" v-model="ruleForm.username" placeholder="用户名"></el-input>
                                </el-form-item>
                                <el-form-item prop="password" label="密码">
                                    <el-input type="password" v-model="ruleForm.password" placeholder="密码"></el-input>
                                </el-form-item>
                                <el-form-item prop="password2" label="确认密码" style="margin-bottom:0">
                                    <el-input type="password" v-model="ruleForm.password2" placeholder="确认密码"></el-input>
                                </el-form-item>
                                <el-form-item style="margin-bottom:0">
                                    <el-button @click="" size="mini" style="float:right;border:none">忘记密码</el-button>
                                </el-form-item>
                                <el-form-item>
                                    <el-button class="zhuce" style="width:44%;background:#FF5301;color:white;" @click="submitzhuce()">注册</el-button>
                                    <el-button class="denglu" style="width:44%;background:#FF5301;color:white" @click="submitForm()">登录</el-button>
                                </el-form-item>
                            </el-form>
                            <el-dialog :visible.sync="visable" center :append-to-body='true' :lock-scroll="false" width="30%">
                                <p style="text-align:center;font-size:16px;font-weight:bold">默认密码</p>
                                <p style="text-align:center">用户名：123456</p>
                                <p style="text-align:center">密码：1234456</p>
                            </el-dialog>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="footer">
                <p>关于天猫 商家服务大厅 开放平台 诚聘英才 联系我们 网站合作 法律声明 隐私权政策 知识产权 廉正举报 不当竞争举报</p>
                <p>阿里巴巴集团| 淘宝网 | 天猫 | 聚划算 | 全球速卖通 | 阿里巴巴国际交易市场| 1688 | 阿里妈妈 | 飞猪 | 阿里云计算 | AliOS | 阿里通信 | 万网 | 高德 | UC | 友盟 | 虾米 | 钉钉 | 支付宝</p>
                <p>增值电信业务经营许可证：浙B2-20110446 市场名称登记证：工商网市字3301004119号 出版物网络交易平台服务经营备案证： 新出发浙备字第2019002号</p>
                <p>互联网违法和不良信息举报电话：0571-81683755 blxxjb@alibaba-inc.com 互联网药品信息服务资质证书编号：浙-（经营性）-2017-0005  浙公网安备 33010002000120号</p>
                <p>医疗器械网络交易服务第三方平台备案：（浙）网械平台备字[2018]第00002号</p>
                <p>浙江省网络食品销售第三方平台提供者备案：浙网食A33010002 12318举报 浙B2-20110446-1</p>
                <p>© 2003-现在 FANGXIN-GOU 版权所有</p>
            </div>
        </div>
     </div>
</template>
<script>
export default{
    data(){
         return {
        ruleForm: {
          username: '',
          password: '',
          password2: '',
        },
        visable:false,
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          password2: [
            {  required: true, message: '请再次输入密码',trigger: 'blur' }
          ]
        }
      };
    },
    methods:{
        submitForm(){
            console.log(this.ruleForm)           
            if(this.ruleForm.username == '123456'&&this.ruleForm.password == '123456'&&this.ruleForm.password2 == '123456'){
                this.$message({
                    showClose:true,
                    message:'登录成功！',
                    type:'success'
                })
                this.$router.push('/home');
            }else if(this.ruleForm.password!=this.ruleForm.password2){
                 this.$message({
                    showClose:true,
                    message:'两次密码不一致！',
                    type:'warning'
                })
                this.visable = true
            }else{
                 this.$message({
                    showClose:true,
                    message:'账号或密码输入错误',
                    type:'warning'
                })
               this.visable = true
            }

        },
        submitzhuce(){
            this.$router.push('/zhuce')
        },
        tohome(){
            this.$router.push('/zhuce')
        }
    }
}
</script>
<style scoped>
.header{
    height: 95px;
    padding-top: 10px;
    padding-right:100px;
    padding-left:100px;
}
.header .left{
    float: left;
}
.header .right{
    float: right;
    padding-top: 20px;
}
.main{
    width: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: #FF5301;
}
.main-left, .main-right{
    height: 100%;
}
.main-left{
    position: relative;
    text-align: center;
}
.main-left img{
    width: 70%;
    height: 70%;
    margin:auto;

}
.main-right-login{
    width: 70%;
    /* height: 60vh; */
    /* position: absolute; */
    margin:0 auto;
    background: rgb(255, 255, 255);
    border-radius:25px;
    box-shadow: 10px 10px rgb(0, 0, 0,0.2);
}
.main-right-login h4{
    font-weight:600;
    padding-top: 20px;
    text-align: center;
}
.el-form{
    padding-top: 30px;
    width: 93%;
}
.el-button:hover{
    background: rgb(255, 255, 255);
}
.footer{
    padding-top: 50px;
}
.zhuce, .denglu{
    margin-bottom: 20px;
}
@media screen and (max-width:775px) {
    .header{
         padding-left:10px;
         padding-right:10px;
    }
    .main-left{
        display: none;
    }
    .zhuce{
        width:45% !important;
        /* margin-left: 10px; */
        margin-bottom: 20px;
    }
    .denglu{
        width: 45% !important;
        /* margin-left: 0 !important; */
        margin-bottom: 20px;
    }
    .main-right-login{
        width: 100%;
    }
    .main{
        padding:0
    }
}
</style>