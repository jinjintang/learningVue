<template><div>
<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="课程名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="课程封面">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
<el-form-item label="课程价格">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="开课人数">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="课程区域">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="课程等级">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="上课时间">
    <el-input v-model="form.name"></el-input>
  </el-form-item>

  <el-form-item label="课程备注">
    <el-input v-model="form.name"></el-input>
  </el-form-item>

  <el-form-item label="课程概要">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="课程内容">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  
  <el-form-item>
    <el-button type="primary" @click="onSubmit">通过</el-button>
    <el-button>拒绝</el-button>
  </el-form-item>
</el-form></div></template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    mounted(){

      let id = this.$route.query.id
      

    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>