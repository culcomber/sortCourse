<template>
  <div>
    <el-form id="mForm" :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic" >
      <el-row>
          <el-form-item
            v-for="(domain, index) in dynamicValidateForm.domains"
            :prop="'domains.' + index"
            name = "mItem"
            :key ="domain.key"
            style="margin-top: 20px"
            :rules="{required: true, message: '必填', trigger: 'blur,change'}">

            <el-col :span="8" >
              <el-form-item :label="'先修者' + index"
                            :rules="{required: true, message: '必填', trigger: 'blur,change'}">
                <el-input v-model="domain.shipBefore" name = "shipBefore"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item  :label="'后修者' + index"
                             :rules="{required: true, message: '必填', trigger: 'blur,change'}">
                <el-input v-model="domain.shipAfter" name = "shipAfter" ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-button @click.prevent="removeDomain(domain)">删除</el-button>
            </el-col>
          </el-form-item>
      </el-row>

      <el-row>
        <el-form-item>
          <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
          <el-button @click="addDomain">新增关系</el-button>
          <!--<el-button @click="resetForm('dynamicValidateForm')">重置</el-button>-->
        </el-form-item>
      </el-row>

    </el-form>

  </div>
</template>
<script>
  import {arrayToMatrix,data} from "../javaScript/data_change";

  export default {
    name: "inputData",
    data() {
      return {
        dynamicValidateForm: {
          domains: [{
            shipBefore: '',
            shipAfter: '',
          }]
        },
      };
    },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$notify({
                title: '成功',
                message: '提交成功',
                type: 'success'
              });
              /*
              let dataLink = [];
              for (let i = 0; i < this.dynamicValidateForm.domains.length; ++i) {
                dataLink[i] = [];
                dataLink[i][0] = this.dynamicValidateForm.domains[i]["shipBefore"];
                dataLink[i][1] = this.dynamicValidateForm.domains[i]["shipAfter"];
              }
             let matrix = arrayToMatrix(dataLink);
             console.log(matrix);
              */
              let dataInput = [];
              for(let i = 0; i<data.length; i++){
                dataInput[i] = [];
                dataInput[i][0] = data[i][0];
                dataInput[i][1] = data[i][1];
              }
              let matrix = arrayToMatrix(dataInput);
              if(matrix!==-1){
                console.log(matrix);
              }else {
                console.log("有环")
              }

              //alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });

        },
        /*
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },
        */
        removeDomain(item) {
          let index = this.dynamicValidateForm.domains.indexOf(item);
          if (index !== 0) {
            this.dynamicValidateForm.domains.splice(index, 1)
          } else {
            this.$alert('到底啦！！！', '删除', {
              confirmButtonText: '确定',
            });
          }
        },
        addDomain() {
          this.dynamicValidateForm.domains.push({
            shipBefore: '',
            shipAfter: '',
            key: Date.now()
          });
        }
      }
  }
</script>

<style scoped>
  .demo-dynamic{
    width: 40%;
    margin-left: 30%;
    margin-top: 5%;
  }
</style>
