<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 订单</el-breadcrumb-item>
                <el-breadcrumb-item>订单列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

          <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      label="订单时间"
    >
      <template scope="scope">
      
          <p> {{ scope.row.time }}</p>
      
      </template>
    </el-table-column>
    <el-table-column
      label="订单编号"
     >
      <template scope="scope">
      
          <p> {{ scope.row.id }}</p>
      
      </template>
    </el-table-column>
    <el-table-column
      label="所属食堂"
     >
      <template scope="scope">
      
          <p>{{ scope.row.cname }}</p>
      
      </template>
    </el-table-column>
     <el-table-column
      label="总计(RMB)"
     >
      <template scope="scope">
      
          <p>{{ scope.row.price }}</p>
      
      </template>
    </el-table-column>
     <el-table-column
      label="用户名"
     >
      <template scope="scope">
      
          <p>{{ scope.row.user}}</p>
      
      </template>
    </el-table-column>
    <el-table-column
      label="用餐时间"
     >
      <template scope="scope">
      
          <p>{{ scope.row.eattime}}</p>
      
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template scope="scope">
        <el-button
          size="small"
          @click="handleDetails(scope.$index, scope.row)">订单详情</el-button>
       
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
               
        tableData: []
        
            }
        },
        methods: {
     
    
       handleDetails(index, row){
   var router='/details/'+row.id;
      this.$router.push(router);
           
                },
       
        },
        mounted(){
       var scope=this;
     A.ajax({
            url:'/web/index.php/orderes',
            type:'GET',
          
            success:function(e){
            console.log(e);
            e.forEach(function(item){

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