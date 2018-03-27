<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 统计</el-breadcrumb-item>
                <el-breadcrumb-item>统计列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <i class="el-icon-menu"></i><span>根据食堂筛选</span>
  <el-menu  :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item  v-for="(item,index) in canteens"  :index="String(item.id)" :key="item.id">{{item.name}}</el-menu-item>
 
</el-menu>
   
          <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      label="菜品名称"
    >
      <template scope="scope">
      
          <p> {{ scope.row[0] }}</p>
      
      </template>
    </el-table-column>
    <el-table-column
      label="菜品数量"
     >
      <template scope="scope">
      
          <p> {{ scope.row[1] }}</p>
      
      </template>
    </el-table-column>
   
  </el-table>

    </div>
</template>

<script>
import * as A from "../../../static/lib/ajax.js"

    export default {
        data: function(){
            return {
               
        tableData: [],
        options:[],
        activeIndex:'1',
        canteens:[],
        hash:{}
        
            }
        },
        methods: {
     
    handleSelect(index){
         var scope=this;
         scope.tableData=[];
         scope.hash={};
     A.ajax({
            url:'/web/index.php/orderes',
            type:'POST',
            data:{type:1,cid:index},
            success:function(e){
           
            e.forEach(function(item){
             item.orderitems.forEach(function(item){
                  if (scope.hash[item.mid]==undefined) 
                  {
                     scope.hash[item.mid]=[];
                     scope.hash[item.mid][0]=item.dish[1];
                     scope.hash[item.mid][1]=item.num;
                  }
                  else{
                      scope.hash[item.mid][1]+=item.num;

                  }


             })

            })
          
        for(var item in scope.hash){

          scope.tableData.push(scope.hash[item]);
        }
        console.log(scope.tableData)
        scope.$notify({
          title: '成功',
          message: '统计成功',
          type: 'success'
             });                          
          } 
      }) 
    }
       
       
    },
        mounted(){
      
       var scope=this;
       A.ajax({
            url:'/web/index.php/canteens',
            type:'GET',
          
            success:function(e){
          
             e.canteen.forEach(function(item){
  
              scope.canteens.push(item);

             })
                           
          } 
        }) 
     
      },
    }
</script>
<style>
 .form-box{

  width:300px;

 } 



</style>