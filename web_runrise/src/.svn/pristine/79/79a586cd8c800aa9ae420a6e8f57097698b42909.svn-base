<style scoped>
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-con{
        height: 100%;
        width: 100%;
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
    .dev-run-preview .dev-run-preview-edit{ display: none }
    .runrise-logo{
        height: 64px;
        width: 100%;
        background-color: #1A9EC1;
        border-bottom-style: solid;
        border-bottom-color: #fff;
        border-bottom-width: 1px;
        vertical-align: middle;
        align-items: center;
        padding: 10px 20px;
    }
</style>
<template>
    <div class="layout">
        <Layout :style="{minHeight: '100vh'}">
            <Sider style="background-color: #1A9EC1;" collapsible :collapsed-width="78" v-model="isCollapsed">
                <div class="runrise-logo">
                    <img @click="GoIndex" src="../assets/logo_white.png" alt="" width="160">
                </div>
                <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                    <MenuItem name="1-1" to="/home/FileCreate">
                        <Icon type="ios-navigate"></Icon>
                        <span>文档生成</span>
                    </MenuItem>
                    <MenuItem name="1-2" to="/home/FileComm">
                        <Icon type="ios-search"></Icon>
                        <span>文档对话</span>
                        
                    </MenuItem>
                    <MenuItem name="1-3" to="/home/ReportRead">
                        <Icon type="ios-settings"></Icon>
                        <span>行业研报</span>
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
                <Content :style="{padding: '0 16px 16px'}">
                    <Breadcrumb :style="{margin: '16px 0'}">
                        <BreadcrumbItem to="/">首页</BreadcrumbItem>
                        <BreadcrumbItem to="Introduction">远瑞云平台</BreadcrumbItem>
                        <BreadcrumbItem>文档生成</BreadcrumbItem>
                    </Breadcrumb>
                    <Card>
                        <div style="height: 600px">
                            <keep-alive>
                                <router-view></router-view>
                            </keep-alive>
                        </div>
                    </Card>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                isCollapsed: false
            };
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        }
    }
</script>
