<template>
  <div>
    <p class="input">输入关系</p>
    <el-form id="mForm" :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic" >

      <el-row>
          <el-form-item
            v-for="(domain, index) in dynamicValidateForm.domains"
            :prop="'domains.' + index"
            name = "mItem"
            :key ="domain.key"
            style="margin-top: 20px"
            :rules="{required: true, message: '必填', trigger: 'blur,change'}">

            <el-col :span="10" >
              <el-form-item :label="'先修者' + index"
                            :rules="{required: true, message: '必填', trigger: 'blur,change'}">
                <el-input v-model="domain.shipBefore" name = "shipBefore"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item  :label="'后修者' + index"
                             :rules="{required: true, message: '必填', trigger: 'blur,change'}">
                <el-input v-model="domain.shipAfter" name = "shipAfter" ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-button @click.prevent="removeDomain(domain)">删除</el-button>
            </el-col>
          </el-form-item>
      </el-row>

      <el-row style="padding: 0 150px">
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
  import {arrayToMatrix} from "../javaScript/data_change.js";
  import {allRank} from "../javaScript/topo"

  export default {
    name: "inputData",
    data() {
      return {
        dynamicValidateForm: {
          domains: [{
            shipBefore: '',
            shipAfter: '',
          }],
            dataInput : undefined
        },
      };
    },
      methods: {
        submitForm(formName) {
          let that = this
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$notify({
                title: '成功',
                message: '提交成功',
                type: 'success'
              });
              this.dataInput = [];
              for(let i = 0; i<this.dynamicValidateForm.domains.length; i++){
                this.dataInput[i] = [];
                this.dataInput[i][0] = this.dynamicValidateForm.domains[i]["shipBefore"];
                this.dataInput[i][1] = this.dynamicValidateForm.domains[i]["shipAfter"];
              }
              let matrix = arrayToMatrix(this.dataInput);
              this.$store.state.tArray=this.dataInput;
              let flag = allRank(0,matrix,matrix.length)
              if(flag.length !== 0){
                setTimeout(function () {
                  that.$router.push({ path:'/relationGraph'  })
                },2000)
              }else {
                this.$alert('数据逻辑错误！', '异常', {
                  confirmButtonText: '确定',
                  callback: action => {
                    this.$message({
                      type: 'info',
                      message: `action: ${ action }`
                    });
                  }
                });
                setTimeout(function () {
                  that.$router.push({ path:'/relationGraph'  })
                },2000)

              }
            } else {
              this.$alert('数据输入错误！', '异常', {
                confirmButtonText: '确定',
                callback: action => {
                  this.$message({
                    type: 'info',
                    message: `action: ${ action }`
                  });
                }
              });
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
  .input{
    font-size: xx-large;
    color: #6f98e6;
    text-align: center;
    margin: 0;
    padding-top: 32px;
  }
  .demo-dynamic{
    width: 40%;
    margin-left: 30%;
    padding: 6% 0;
  }

</style>
