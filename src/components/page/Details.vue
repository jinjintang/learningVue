<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>订单详情</el-breadcrumb-item>
                <el-breadcrumb-item>订单详情列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

          <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      label="菜名"
    >
      <template scope="scope">
      
          <p> {{ scope.row.dish[1] }}</p>
      
      </template>
    </el-table-column>
    <el-table-column
      label="数量"
     >
      <template scope="scope">
      
          <p> {{ scope.row.num }}</p>
      
      </template>
    </el-table-column>
    <el-table-column
      label="价格"
     >
      <template scope="scope">
      
          <p>{{ scope.row.dish[0] }}</p>
      
      </template>
    </el-table-column>
     <el-table-column
      label="总计(RMB)"
     >
      <template scope="scope">
      
          <p>{{ scope.row.dish[0]*scope.row.num }}</p>
      
      </template>
    </el-table-column>
     
   
    <el-table-column label="操作">
      <template scope="scope">
        <el-tooltip :content="'菜品是否完成'" placement="top">
  <el-switch
    v-model="scope.row.id"
    on-color="#13ce66"
    off-color="#ff4949"
    on-value="100"
    off-value="0">
  </el-switch>
</el-tooltip>
       
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
        value3:0
        
            }
        },
        methods: {
     
    
       handleDetails(index, row){


            console.log(index, row);
                },
       
        },
        mounted(){
       var scope=this;
       var index=scope.$route.params.oid;
        
         console.log(scope.$route)
     A.ajax({
            url:'/web/index.php/orderes/'+index,
            type:'GET',
          
            success:function(e){
            console.log(e);
            e.orderitems.forEach(function(item){

             scope.tableData.push(item);

            })
        scope.$notify({
          title: '成功',
          message: '订单更新成功',
          type: 'success'
             });                          
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