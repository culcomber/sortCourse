<template>
  <div>
    <el-form :model="dynamicValidateForm" ref="dynamicValidateForm"  label-width="100px" class="demo-dynamic" >
      <el-row class="demo-row1">
          <el-form-item
            v-for="(domain, index) in dynamicValidateForm.domains"
            :label="'先修关系'+index+':'"
            :key ="domain.key"
            style="margin-top: 20px">

            <el-col :span="4" class="demo-col">
              <el-form-item
                            :prop="'domains.' + index + '.shipBefore' "
                            :rules="[{required: true, message: '请输入先修者', trigger: 'blur,change'},
                                      {min:1, message:'不能为空',trigger:'blur,change'}]"
              >
                <el-input v-model="domain.shipBefore"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4" class="demo-col">
            <el-form-item
                          :prop="'domains.' + index + '.shipAfter'"
                          :rules="{ required: true, message: '请输入后修者', trigger: 'blur,change'}"
            >
                <el-input v-model="domain.shipAfter" ></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="4" >
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
  import {arrayToMatrix,data} from '../javaScript/data_change';
  import {topoRank,topoSet,topoArray} from "../javaScript/topo";

  export default {
    name: "inputData",
    data() {
      return {
        count:'',
        dynamicValidateForm: {
          domains: [{
            shipBefore : '',
            shipAfter: '',
          }]
        },
      };
    },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              console.clear();
              this.$notify({
                title: '成功',
                message: '提交成功',
                type: 'success'
              });

              let dataInput = [];
              for(let i = 0; i<this.dynamicValidateForm.domains.length; i++){
                dataInput[i] = [];
                dataInput[i][0] = this.dynamicValidateForm.domains[i].shipBefore;
                dataInput[i][1] = this.dynamicValidateForm.domains[i].shipAfter;
              }
              console.log(dataInput);

              let matrix = arrayToMatrix(dataInput);
              if(matrix!==-1){
                console.log(matrix);
                topoRank(0,matrix,matrix.length);
                console.log(topoArray);
              }else {
                console.log("有环")
              }
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
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
    text-align: center;
    width: 100%;
    margin-top: 5%;
  }
  .demo-row1{
    width: 50%;
    min-width: border-box;
    margin-left: 38.4%;

  }
  .demo-col{
    min-width: border-box;
    margin-left: 10px;
  }

</style>
