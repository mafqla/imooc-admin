<template>
  <div class="login-container">
    <el-form class="login-form">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
        <el-form-item>
          <span class="svg-container">
            <el-icon>
              <avatar />
            </el-icon>
          </span>
          <el-input placeholder="username" name="username" type="text"></el-input>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script setup>
import {Avater} from '@/element'
import {} from 'vue'
</script>

<style lang="scss" scoped></style>
