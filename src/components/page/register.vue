<template>
    <div>
        
       
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 报名</el-breadcrumb-item>
                <el-breadcrumb-item>报名列表</el-breadcrumb-item>
            </el-breadcrumb>
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
      label="报名人数"
     >
      <template scope="scope">
      
          <p> {{ scope.row.CLASSNUMBER }}</p>
      
      </template>
    </el-table-column>
     
  
   
    
   
     <el-table-column label="报名详情">
      <template scope="scope">
        <el-button
          size="small"
          @click="handleDetails(scope.$index, scope.row)">详情</el-button>
       
      </template>
    </el-table-column>
    
     <el-table-column label="成班">
      <template scope="scope">
       
            <el-button type="success" plain>成班</el-button>
       
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
            url:'/student/',
            type:'GET',
          
            success:function(e){
            console.log(e);
            

             scope.tableData=e;

        scope.$notify({
          title: '成功',
          message: '报名获取成功',
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