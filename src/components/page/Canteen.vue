<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>新建课程</el-breadcrumb-item>
                <el-breadcrumb-item>添加食堂</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
          <el-form ref="form" :model="form" label-width="80px" :rules="rules" >
                <el-form-item label="食堂名称" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
            
                                   
               <el-form-item label="食堂图片">
                  <label for="upload22" ><p class="upload-style">点击上传</p></label>
                  <input type="file" id="upload22" hidden="true" v-on:change="uploadFile($event)" >
                   <el-progress :percentage="progress" v-show="is_progress_show" ></el-progress>
                   <div slot="tip" class="el-upload__tip"></div>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" @click="onSubmit('form')">提交</el-button>
                  <el-button @click="close('form')">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 食堂</el-breadcrumb-item>
                <el-breadcrumb-item>食堂列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
          <el-table
    :data="tableData"
    border
    style="width: 100%">
  
    <el-table-column
      label="食堂名称"
      width="180">
      <template scope="scope">
    
          <p> {{ scope.row.name }}</p>
           
      </template>
    </el-table-column>
     <el-table-column
      label="食堂图片"

     >
      <template scope="scope">
      
        <img :src="scope.row.avatar" class="images">
      
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
<el-dialog title="修改食堂" :visible.sync="dialogFormVisible">
  <el-form ref="form1" :model="form1" label-width="80px" :rules="rules" >
                <el-form-item label="食堂名称" prop="name">
                    <el-input v-model="form1.name"></el-input>
                </el-form-item>
            
                                   
               <el-form-item label="食堂图片">
                  <label for="upload" ><p class="upload-style">点击上传</p></label>
                  <input type="file" id="upload" hidden="true" v-on:change="uploadFile($event)" >
                  
                   <div slot="tip" class="el-upload__tip"></div>
              </el-form-item>
              <el-form-item>
                    <el-button type="primary" @click="onput('form1')">提交</el-button>
                    <el-button @click="onclose('form1')">取消</el-button>
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
                    name: '',
                    avatar:'',
                    
                    desc: ''
                },
                form1: {
                    name: '',
                    avatar:'',
                    
                    desc: ''
                },
      rules: {
        name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' }
          
              ]
        },
        rules1: {
        name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' }
          
              ]
        },
        tableData: [],
          progress:0,
    is_progress_show:false,
    dialogFormVisible:false,
    index:0,
    id:0,
   
    is_progress_show1:false
            }
        },
        methods: {
     onclose(form){
        this.$refs[form].resetFields();
       this. dialogFormVisible=false;
    var scope=this;
       scope.form.name='';
       scope.form.avatar=''; 
     },
    onSubmit(form) {
       var scope=this;
           if (scope.form.name &&　scope.form.avatar) {

            A.ajax({
            url:'/web/index.php/canteens',
            type:'POST',
            data:{
               name:scope.form.name,
               avatar:scope.form.avatar 
            },
            fn:function(e){
           
              scope.$message.success('提交成功！');
             scope.tableData.push(e);
             scope.form.name='';
              scope.form.avatar=''; 
                                 
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
      close(form){

          this.$refs[form].resetFields();
      },
      onput(form){
                 var scope=this;
           if (scope.form.name &&　scope.form.avatar) {

     
           A.ajax({
            url:'/web/index.php/canteens/'+scope.id,
            type:'put',
            data:{
               name:scope.form1.name,
               avatar:scope.form1.avatar 
            },
            fn:function(e){
           
            scope.tableData.splice(scope.index,1,e);
              scope.form.name='';
              scope.form.avatar=''; 
              scope. dialogFormVisible=false;

          } 
      })                
      }else{

        scope.$notify({
          title: '警告',
          message: '信息填写不能为空',
          type: 'warning'
             });   
            return false;
        
      }
      },
    uploadFile(e){
          var scope=this;  
      scope.is_progress_show=true;
          var ele= e.target || e.srcElement;
          var file=ele.files[0];
               scope.progress=0;
          var formData=new FormData();

              formData.append('file',file);
              
              A.upFile({
                url:"http://106.14.167.106/kl.php",
                    data:formData,
                    uploadState:function(e){
                      scope.progress=Math.floor((e.loaded/e.total)*100);
                           
                    },
                    success:function(e){
                            console.log(e);               
                      scope.form.avatar=e;
                      scope.is_progress_show=false;     
                      scope.progress=0;
                      scope.$notify({
          title: '成功',
          message: '图片上传成功',
          type: 'success'
             });      
                    }

              })
        },  
  
        handleEdit(index, row) {
 
            this.index=index
            this.id=row.id;
           
            this. dialogFormVisible=true;
              


                },
       handleDelete(index, row) {
       
        var realIndex=index
       
            var scope=this;
                 A.ajax({
            url:'/web/index.php/canteens/'+row.id,
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
            url:'/web/index.php/canteens',
            type:'GET',
          
            success:function(e){
            
            e.canteen.forEach(function(item){

             scope.tableData.push(item);

            })
        scope.$notify({
          title: '成功',
          message: '食堂获取成功',
          type: 'success'
             });                          
          } 
      })  

        },
    }
</script>
<style>
  

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
  width:100px;
  height: 50px;
  vertical-align: middle;
}
</style>