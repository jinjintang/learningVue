<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>课程</el-breadcrumb-item>
                <el-breadcrumb-item>编辑课程</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="课程名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="课程图片">
                  <label for="upload22" ><p class="upload-style">点击上传</p></label>
                  <input type="file" id="upload22" hidden="true" v-on:change="uploadFile($event)" >
                   <el-progress :percentage="progress" v-show="is_progress_show" ></el-progress>
                   <div slot="tip" class="el-upload__tip"></div>
              </el-form-item>
               <el-form-item label="课程价格">
                    <el-input v-model="form.price"></el-input>
                </el-form-item>
               <el-form-item label="课程等级">
                     <el-select v-model="form.cid" placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.id"
                          :label="item.name"
                          :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="开班人数">
                    <el-input v-model="form.price"></el-input>
                </el-form-item>
                <el-form-item label="开班时间">
                    <el-input v-model="form.price"></el-input>
                </el-form-item>
                 <el-form-item label="所属分类">
                     <el-select v-model="form.categroy_id" placeholder="请选择">
                        <el-option
                          v-for="item in cates"
                          :key="item.id"
                          :label="item.name"
                          :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>   
                <el-form-item label="课程描述">
                    <el-input type="textarea" v-model="form.introduciton "></el-input>
                </el-form-item>                 
                <el-form-item label="课程内容">
                    <el-input type="textarea" v-model="form.introduciton "></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <el-button @click="close">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 课程</el-breadcrumb-item>
                <el-breadcrumb-item>课程列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">待审核</el-menu-item>
 
  <el-menu-item index="2" disabled>已审核</el-menu-item>
  <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">未通过</a></el-menu-item>
</el-menu>
<div class="line">
  


</div>


        
       
       
<el-table
    :data="tableData"
    border
    style="width: 100%">
  
    <el-table-column
      label="课程名称"
     >
      <template scope="scope">
      
          <p> {{ scope.row.CLASSNAME }}</p>
      
      </template>
    </el-table-column>

     <el-table-column
      label="成班人数"
     >
      <template scope="scope">
      
          <p> {{ scope.row.CLASSNUMBER }}</p>
      
      </template>
    </el-table-column>
     
    
    
     <el-table-column
      label="上课时间"
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
     <el-table-column label="课程详情">
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
     
    onSubmit() {
        var scope=this;
          if (scope.form.name==='') {
               scope.$notify({
            title: '警告',
            message: '菜品名称不能为空',
            type: 'warning'
             });    
             return false;
             }      
           if (scope.form.cid==='') {
               scope.$notify({
            title: '警告',
            message: '所属食堂不能为空',
            type: 'warning'
             });    
             return false;
             } 

        if (scope.form.avatar==='') {
               scope.$notify({
            title: '警告',
            message: '菜品图片不能为空',
            type: 'warning'
             });    
             return false;
             }      
         if (scope.form.price==='') {
               scope.$notify({
            title: '警告',
            message: '菜品价格不能为空',
            type: 'warning'
             });    
             return false;
             }  

        if (scope.form.categroy_id==='') {
               scope.$notify({
            title: '警告',
            message: '菜品分类不能为空',
            type: 'warning'
             });    
             return false;
             }           
           A.ajax({
            url:'/web/index.php/dishes',
            type:'POST',
            data:scope.form,
            fn:function(e){
            console.log(e);
            scope.$message.success('提交成功！');
            scope.tableData.unshift(e);
                                 
          } 
      })  

               
            },
        close(){
          var scope=this;
        scope.form.categroy_id='';
        scope.form.price='';
        scope.form.avatar='';
        scope.form.cid='';
         scope.form.name='';
          scope.form.introduciton='';


        },

        handleEdit(index, row) {
                console.log(index, row);
                },
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
                    }

              })
        }  

        },
        mounted(){
       var scope=this;
     A.ajax({
            url:'/web/index.php/dishes',
            type:'GET',
          
            success:function(e){
            console.log(e);
            e.forEach(function(item){

             scope.tableData.push(item);

            })
        scope.$notify({
          title: '成功',
          message: '菜品获取成功',
          type: 'success'
             });                          
          } 
      })  
      A.ajax({
            url:'/web/index.php/canteens',
            type:'GET',
          
            success:function(e){
          
             e.canteen.forEach(function(item){
  
              scope.options.push(item);

             })
                           
          } 
        })
       A.ajax({
            url:'/web/index.php/categroys',
            type:'GET',
          
            success:function(e){
          
             e.categroy.forEach(function(item){
  
              scope.cates.push(item);

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