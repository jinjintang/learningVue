<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>图表</el-breadcrumb-item>
                <el-breadcrumb-item>图表统计</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
       <div class="charts">
        <div>            
            <div class="content-title">柱状图</div>
            <schart canvasId="bar" width="600" height="400" :data="data1" type="bar" :options="options1"></schart>
        </div>
        <div>            
            <div class="content-title">折线图</div>
            <schart canvasId="line" width="600" height="400" :data="data1" type="line" :options="options1"></schart>
        </div>
         <div>
             
              <div class="content-title">饼状图</div>
             <schart canvasId="pie" width="600" height="400" :data="data2" type="pie" :options="options2"></schart>
         </div>
         <div>
             
             <div class="content-title">环形图</div>
             <schart canvasId="ring" width="600" height="400" :data="data2" type="ring" :options="options2"></schart>

         </div>
        
       </div>
        
    </div>
</template>

<script>
    import Schart from 'vue-schart';
    export default {
        components: {
            Schart
        },
        data: () => ({
            data1:[
                {name:'一食堂',value:1141},
                {name:'二食堂',value:1499},
                {name:'迷你餐厅',value:2260},
                {name:'五食堂',value:1170},
                {name:'清真食堂',value:970},
                {name:'六食堂',value:1450}
            ],
            data2 : [
                {name:'荤菜',value:1200},
                {name:'素材',value:1222},
                {name:'砂锅',value:1283},
                {name:'面食',value:1314},
                {name:'汤类',value:2314}
            ],
            options1: {
                title: '每周食堂订餐排行',
                bgColor: '#829dda',
                titleColor: '#ffffff',
                fillColor: '#72f6ff',
                axisColor: '#eeeeee',
                contentColor: '#bbbbbb'
            },
            options2: {
                title: '每周菜品分类',
                bgColor: '#829dca',
                titleColor: '#ffffff',
                legendColor: '#ffffff'
            }
        })
    }
</script>

<style scoped>
    .content-title{
        clear: both;
        font-weight: 400;
        line-height: 50px;
        margin: 10px 0;
        font-size: 22px;
        color: #1f2f3d;
    }
    .charts{
        display: flex;
        flex-wrap:wrap;
         justify-content: space-between;

    }
    
</style>