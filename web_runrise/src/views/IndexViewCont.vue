<template>
    <div class="hello">
        <div class="divBox">
            <div class="divBox_cont">
                <div class="divBox_cont_body">
                    <h1>Runrise.AI</h1>
                    <p>RunriseAI（远瑞创新云）是基于大数据和生成式人工智能技术的企业研发创新赋能平台，针对企业公示大数据、行业研报大数据、政策法规大数据进行向量化处理和近似度计算，聚合国内外多种基础大语言模型，面向创业者和企业用户提供智能办公、研发项目、知识产权、科技申报、财税顾问等AI赋能服务。</p>
                    <div class="divBox_cont_body_box">
                        <div @click="getDara" class="divBox_cont_body_btn btn1">立即体验</div>
                        <div class="divBox_cont_body_btn btn2">联系我们</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="divBox2">
            <div class="divBox2_box">
                <div>
                    <img src="../assets/logo2_grey.png" alt="远瑞创新云logo" style="width:135px">
                </div>
                <div class="divBox2_box_span">
                    沪ICP备2023060400号-2
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'IndexViewCont',
    data() {
        return {
           
        }
    },
    methods:{
        // 立即体验
        getDara(){
            this.$router.push("/home")
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.divBox {
  height: 530px;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0ibm9uZSI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iLjA0IiBzdHJva2Utd2lkdGg9Ii41IiBkPSJNLjI1LjI1aDQ3LjV2NDcuNUguMjV6Ii8+PC9zdmc+'),url('../assets/noise-light-4ad252a68aa138773496b42b26e08d98.png'),linear-gradient(to bottom,#0000 40%,rgb(172 230 244));
  background-size: 48px 48px,100% 100%,100%;
}
.divBox_cont {
    width: 66%;
    margin: 0 auto;
}
.divBox_cont_body {
    position: relative;
    top: 115px;
}
h1 {
    font-size: 3.5rem;
    line-height: 1;
    margin-bottom: 1.5rem;
    color:rgb(28, 30, 33);
}
.divBox_cont_body p {
    font-size: 0.98rem;
    line-height: 1.5rem;
    max-width: 32rem;
    margin-bottom: 20px;
}
.divBox_cont_body_box {
    display: flex;
}
.divBox_cont_body_btn {
    padding: 10px 48px;
    border-radius: 4px;
    font-weight: 900;
    font-size:15px;
}
.btn1 {
    background-color:rgb(26, 158, 193);
    color: #fff;
    border:1px solid rgb(229, 231, 235);
    margin-right: 15px;
}
.btn2 {
    background: rgba(26, 158, 193, 0.1);
    color: rgb(26, 158, 193);
    border: 1px solid rgb(26, 158, 193);
}
.divBox_cont_body_btn:hover {
    cursor: pointer;
}
.divBox2 {
    margin-top: 125px;
    background-color: #fbfbfb;
}
.divBox2_box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 67%;
    margin: 0 auto;
    padding: 2rem 0;
}
.divBox2_box_span {
    color: gray;
    font-size: 12px;
}
.divBox2_box_span:hover {
    cursor: pointer;
    text-decoration: underline;
}
</style>
