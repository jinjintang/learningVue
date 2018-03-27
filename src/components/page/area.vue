<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 区域</el-breadcrumb-item>
                <el-breadcrumb-item>添加区域</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="区域名称">
                    <el-input v-model="form.AREANAME"></el-input>
                </el-form-item>

                <el-form-item label="所属上级">
                     <el-select v-model="form.parent" placeholder="请选择">
                        <el-option
                          v-for="item in tableData"
                          :key="item.Id"
                          :label="item.AREANAME"
                          :value="item">
                        </el-option>
                         </el-select >
               </el-form-item >
                <el-form-item label="备注">
                    <el-input v-model="form.AREAREMARK"></el-input>
                </el-form-item>
            
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 区域</el-breadcrumb-item>
                <el-breadcrumb-item>区域列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
          <el-table
    :data="tableData"
    border
    style="width: 100%">
  
    <el-table-column
      label="区域名称"
      >
      <template scope="scope">
       
          <p> {{ scope.row.AREANAME}}</p>
       
       
      </template>
    </el-table-column>
    <el-table-column
      label="上级区域"
     >
      <template scope="scope">
       
          <p> {{ scope.row.PARENTNAME }}</p>
       
       
      </template>
    </el-table-column>
     <el-table-column
      label="备注"
     >
      <template scope="scope">
       
          <p> {{ scope.row.AREAREMARK }}</p>
       
       
      </template>
    </el-table-column>
         
  

    <el-table-column label="操作">
      <template scope="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
     <el-dialog title="修改区域" :visible.sync="dialogFormVisible">
  <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="区域名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
            
        
              <el-form-item>
                    <el-button type="primary" @click="onput">提交</el-button>
                    <el-button @click="onclose">取消</el-button>
                </el-form-item>
            </el-form>
  
</el-dialog>
    </div>
</template>

<script>
import * as A from "../../../static/lib/ajax.js"

    export default {
        data: function(){
            return {
                form: {
                
  AREANAME:'',
 AREAREMARK:'',
  parent: ''       
                },
        tableData: [],
        dialogFormVisible:false,
        id:0,
        index:0
            }
        },




        methods: {



     
    onSubmit() {
        var scope=this;
        if (scope.form.AREANAME) {
                 A.ajax({
            url:'/area/',
            type:'POST',
            data:{
              AREAREMARK:scope.form.AREAREMARK,
                AREACODE: '',
  AREALEVEL: 0,
  AREANAME:scope.form.AREANAME,
  AREAREMARK: '',
  AREASTATE: 0,
  Id: 0,
  
  PARENTID: scope.form.parent.Id,
  PARENTNAME:scope.form.parent.AREANAME,
          
            },
            fn:function(e){
           
              scope.$message.success('提交成功！');
             scope.tableData.push(e);
             scope.form.name='';                    
          } 
      })  
     }
     else{
       scope.$notify({
          title: '警告',
          message: '信息填写不能为空',
          type: 'warning'
             });   
            return false;

     }
               
            },
       onput(){
        var scope=this;

           if (scope.form.name) {
           A.ajax({
            url:'/web/index.php/categroys/'+scope.id,
            type:'put',
            data:{
               name:scope.form.name
               
            },
            fn:function(e){
           
            scope.tableData.splice(scope.index,1,e);
              scope.form.name='';
              scope.form.avatar=''; 
              scope. dialogFormVisible=false;

          } 
      })  
    }
    else{

       scope.$notify({
          title: '警告',
          message: '信息填写不能为空',
          type: 'warning'
             });   
            return false;

    }
       },
       onclose(){
            this.dialogFormVisible=false;
            scope.form.name=''; 
          },

        handleEdit(index, row) {
          this.dialogFormVisible=true;
          
            this.index=index;
            this.id=row.id;
                },
       handleDelete(index, row) {
             var realIndex=index
       
            var scope=this;
                 A.ajax({
            url:'/web/index.php/categroys/'+row.id,
            type:'delete',
           
            fn:function(e){
           console.log("1111")
            scope.tableData.splice(realIndex,1);

          } 
      })  
          
          
          }
        },
        mounted(){
       var scope=this;
     A.ajax({
            url:'/area/',
            type:'GET',
          
            success:function(e){
            
            //e.categroy.forEach(function(item){

             scope.tableData = e;

            //})
        scope.$notify({
          title: '成功',
          message: '区域获取成功',
          type: 'success'
             });                          
          } 
      })  

        },
    }
</script>