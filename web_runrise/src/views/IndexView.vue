<template>
  <div id="app">
    <div>
        <div class="nav">
            <div class="navbar">
                <img @click="GoIndex" src="../assets/logo.png" alt="" width="150" style="margin-right: 4rem; cursor: pointer;">
                <div class="spantext">远瑞云平台</div>
                <Dropdown trigger="click" @on-click="changedropdown">
                    <div class="spantext">AIGC应用集成 <Icon type="ios-arrow-down" /></div>
                    <template #list>
                        <DropdownMenu>
                            <DropdownItem class="menutext" name="/home">AI知识库建设</DropdownItem>
                            <DropdownItem class="menutext">AI智能客服建设</DropdownItem>
                            <DropdownItem class="menutext">AI微信助手</DropdownItem>
                            <DropdownItem class="menutext">AI企业微信</DropdownItem>
                            <DropdownItem class="menutext">AI公众号建设</DropdownItem>
                            <DropdownItem class="menutext">私有大语言模型搭建</DropdownItem>
                        </DropdownMenu>
                    </template>
                </Dropdown>
                <div @click="opennessAPI" class="spantext">开放API</div>
                <div @click="opennessAPI" class="spantext">AIGC应用学院</div>
            </div>
            <div class="navbar2">
                <div class="spantext">联系我们</div>
            </div>
        </div>
        <div>
            <!-- 右侧内容部分(组件渲染区域)-->
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'layoutName',
    data() {
        return {

        }
    },
    methods:{
        // 开放API页面
        opennessAPI(){
            this.$Message["warning"]({
                background: true,
                content: '本模块预计1.1版本上线'
            });
        },
        // 切换AI应用集成下拉跳转路由
        changedropdown(val){
           if(val){
            this.$router.push(val)
           }
        },
        //跳转首页
        GoIndex(){
            window.location.href = "/";
        }
    }
}
</script>

<style>
.nav {
    border-bottom:1px solid #dedede;
    display: flex;
    padding: 12px 12px;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */

}
.navbar {
    display: flex;
    align-items: center;
    flex: 1;
}
.navbar div {
    margin-right: 10px;
}
.navbar2 {
     display: flex;
     align-items: center;
}
.spantext {
    font-size: 16px;
    padding: 6px 12px;
    margin-top: 6px;
    font-weight: 500;

}
.spantext:hover {
    color: #1A9EC1;
    cursor: pointer;
}
.menutext {
    font-size: 16px;
    padding: 8px 12px;
    margin-top: 8px;
    font-weight: 500;

}
.menutext:hover {
    color: #FFFFFF;
    background-color: #1A9EC1;
    cursor: pointer;
}
</style>
