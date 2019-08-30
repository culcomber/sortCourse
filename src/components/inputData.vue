<template>
  <div>
    <el-form id="mForm" :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic" >
      <!--<el-form-item
        prop="email"
        label="邮箱"
        :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
    ]"
      >
        <el-input v-model="dynamicValidateForm.email" ></el-input>
        <el-input v-model="dynamicValidateForm.email" style="margin-top: 20px"></el-input>
      </el-form-item>-->
        <el-form-item
          v-for="(domain, index) in dynamicValidateForm.domains"
          :label="'先修关系' + index"
          :prop="'domains.' + index "
          :rules="{
                required: true, message: '', trigger: 'blur'
              }"
          name="mItem"
        >
          <el-input v-model="domain.relationship" name="mInput" ></el-input>
          <el-button @click.prevent="removeDomain(domain)">删除</el-button>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
          <el-button @click="addDomain">新增关系</el-button>
          <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
        </el-form-item>

    </el-form>
    <!--<p>{{dynamicValidateForm.domains[0]["relationship"]}}</p>-->
    <!--<p>{{dynamicValidateForm.domains[1]["relationship"]}}</p>-->
    <input type="button" @change="dealData"></input>
  </div>
</template>
<script>
  export default {
    name: "inputData",
    data()  {
      return {
        dynamicValidateForm: {
          domains: [{
           relationship:'',
          }],
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            // let dataLink = [];
            // let index = this.dynamicValidateForm.domains.indexOf(item);
            /*for(let i = 0; i<index; i++){
                data[i] = '[' + formName.;
            }*/
            // let aloop = formName.getElementById()
            // str = dynamicValidateForm;

          } else {
            console.log('error submit!!');
            return false;
          }
        });

      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

      removeDomain(item) {
        let index = this.dynamicValidateForm.domains.indexOf(item);
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          relationship: '',
          key: Date.now()
        });
      },

      // dealData : function () {
      //   const str = this.dynamicValidateForm.domains[0][""];
      //   console.log(str);
      // }
    },

  }
</script>

<style scoped>
  .demo-dynamic{
    width: 40%;
    margin-left: 30%;
    margin-top: 5%;
  }

</style>
