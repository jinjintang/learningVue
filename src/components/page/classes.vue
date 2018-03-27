<template>
    <div>
        
       
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 班级</el-breadcrumb-item>
                <el-breadcrumb-item>班级列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">上课中</el-menu-item>
 
  <el-menu-item index="2" disabled>已结课</el-menu-item>
  
</el-menu>
<el-table
    :data="tableData"
    border
    style="width: 100%">
  
    <el-table-column
      label="班级名称"
     >
      <template scope="scope">
      
          <p> {{ scope.row.CLASSNAME }}</p>
      
      </template>
    </el-table-column>
    <el-table-column
      label="上课地点"
      >
      <template scope="scope">
      
          <p> {{ scope.row.CLASSADDRESS}}</p>
      
      </template>
    </el-table-column>
     <el-table-column
      label="人数"
     >
      <template scope="scope">
      
          <p> {{ scope.row.CLASSNUMBER }}</p>
      
      </template>
    </el-table-column>
     
    <el-table-column
      label="班长"
     >
      <template scope="scope">
      
          <p>{{ scope.row.CLASSNAME }}</p>
      
      </template>
    </el-table-column>
    <el-table-column
      label="老师"
     >
      <template scope="scope">
      
          <p>{{ scope.row.TEACHERNAME }}</p>
      
      </template>
    </el-table-column>
     <el-table-column
      label="成班时间"
     >
      <template scope="scope">
      
          <p>{{ scope.row.CLASSTIME }}</p>
      
      </template>
    </el-table-column> 
   
    <el-table-column
      label="课程次数"
     >
      <template scope="scope">
      
          <p>{{ scope.row.CLASSCISHU }}</p>
      
      </template>
    </el-table-column>
     <el-table-column label="签到详情">
      <template scope="scope">
        <el-button
          size="small"
          @click="handleDetails(scope.$index, scope.row)">详情</el-button>
       
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
                form: {
                    name: '',
                    cid:'',
                    price:'',
                    introduciton: '',
                    categroy_id:'',
                    avatar:''
                },
        tableData: [],
          options: [],
          cates:[],
          progress:0,
    is_progress_show:false
            }
        },
        methods: {
   
       handleDelete(index, row) {
             index++;
             var realIndex=index
       
            var scope=this;
                 A.ajax({
            url:'/web/index.php/dishes/'+row.id,
            type:'delete',
           
            fn:function(e){
           console.log("1111")
            scope.tableData.splice(realIndex,1);

          } 
      })  
          
          
          },
      

        },
        mounted(){
       var scope=this;
     A.ajax({
            url:'/classs/',
            type:'GET',
          
            success:function(e){
            console.log(e);
            

             scope.tableData=e;

        scope.$notify({
          title: '成功',
          message: '班级获取成功',
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
 .upload-style{
  background:#00d1b2;
    color: #fff;
    width:100%;
    height: 36px;
    cursor: pointer;
    text-align: center;
    line-height: 36px;
 }
.images{
  width:60px;
  height: 60px;
  vertical-align: middle;
}


</style>