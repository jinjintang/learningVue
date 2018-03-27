<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 评论</el-breadcrumb-item>
                <el-breadcrumb-item>评论列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <div v-for="(item,index) in ments">
               <div class="dish-comment">
                   <h4>{{index+1}}</h4>
                    <p>{{item.mname}}</p>
                    <img :src="item.avatar" class="images">  
               </div>
               <hr class="style-two">
               <div class="comment">
                    <p>{{item.user+"  说："}}</p>
                    <p>{{item.comment}}</p>
                    <div class="vert" v-on:click="open(index)">
                    <el-tooltip content="回复留言" placement="top">
                        <i class="el-icon-edit"></i>
                     </el-tooltip>  
                    </div>
                    
               </div>
                  <hr class="style-two">
               <div class="reply_text">
                  <el-badge  is-dot  class="item">
                      <el-button size="small">回复</el-button>
                     </el-badge>
                   <span class="mm-span">{{item.reply}}</span>
               </div>
                 <div class="reply"  ref="comment_reply">
                      
                 <el-input type="textarea" v-model="introduciton"></el-input>           <el-button type="primary" @click="onSubmit(index)">提交</el-button>
                 <el-button v-on:click="close(index)">取消</el-button>

            </div>
            <hr class="style-one"> 
            </div>
                                                           
           
       </div>
    </div>
</template>

<script>
  import * as A from "../../../static/lib/ajax.js"
    export default {
        data: function(){
            return {
                introduciton:'',
                comment_id:'',
                ments:[],
                pass:''
            }
        },
        methods: {
        onSubmit(index) {

        var scope=this;
               A.ajax({
            url:'/web/index.php/replies',
            type:'POST',
            data:{
            comment_id:scope.comment_id,
            text:scope.introduciton
            },
            fn:function(e){
             scope.ments[index].reply=e.text;
             console.log(e);
             scope.$message.success('提交成功！');

             scope.$refs.comment_reply[index].style.display='none'; 
                           
          } 
        })
              
            },
            open(index){
            if (this.pass!=='') {
                this.pass.style.display='none';
            }
            this.comment_id=this.ments[index].id;
            this.$refs.comment_reply[index].style.display='block';    
            this.pass=this.$refs.comment_reply[index];
        },
        close(index){
           
           this.$refs.comment_reply[index].style.display='none';
        }
        },
        mounted(){
        var scope=this;
               A.ajax({
            url:'/web/index.php/comments',
            type:'GET',
          
            success:function(e){
          
             e.comment.forEach(function(item){
  
              scope.ments.push(item);

             })
                           
          } 
        })
        }

    }
</script>

<style>
 
 .comment{
    display: flex; 
    width: 100%;
    height: 40px;
    line-height: 40px;
   /* border: 1px solid black;*/
    width: 600px;
    margin-bottom: 20px;
 }  
 .dish-comment{
    display: flex;
    width: 100%;
    height: 60px;
    line-height: 60px;
    margin-top:20px;
     font-size: 14px;
   
 } 
 .dish-comment>p{
    margin-left: 20px;
    font-size: 14px;

 }
 .comment>p{
   width: 300px; 
   height: 60px;
   line-height: 60px;
   font-size: 14px;
 }
.vert{
 display: flex;
 /*border: 1px solid black;*/
 margin-left: 10px;
  width: 60px;
  cursor: pointer;
  margin-top: 55px;
}
.vert i ,.vert p{
    vertical-align: center;
}
                
.reply{
    display: none;
}

.reply_text{
    margin-top: 10px;
    height: 50px;
    line-height: 50px;
}
.reply_text>p{
    width: 400px;
    margin-left: 40px;
}
.images{
  width:60px;
  height: 60px;
  margin-left: 70px;
}
.mm-span{
  margin-left: 30px;
}
hr.style-one {
  width:1200px;
    border: 0;
    height: 1px;
    background: #333;
    background-image: linear-gradient(to right, #ccc, #333, #ccc);
    margin-bottom: 20px;
}
hr.style-two {
  width:500px;
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}
</style>