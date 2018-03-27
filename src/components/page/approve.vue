
<template>
<div>
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
      
         handleDetails(index,row){

          this.$router.push({path:"/coursedetail",query:{id:row.id}})
         },
         handleSelect(index){

          this.deal(index)

         },   
         deal(params){
          A.ajax({
            url:'/query/'+params,
            type:get,
            success:function(e){
              
            }
          })
         }
        },
        mounted(){
       var scope=this;
     A.ajax({
            url:'/student/',
            type:'GET',
          
            success:function(e){
            console.log(e);
            

             scope.tableData=e;

        scope.$notify({
          title: '成功',
          message: '课程获取成功',
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
            url:'/Classs/',
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