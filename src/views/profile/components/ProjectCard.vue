<template>
  <el-card class="user-container">
    <template #header>
      <div class="header">
        <span>{{ $t('msg.profile.introduce') }}</span>
      </div>
    </template>

    <div class="user-profile">
      <!-- 头像 -->
      <div class="box-center">
        <pan-thumb
          :image="$store.getters.userInfo.avatar"
          :height="'100px'"
          :width="'100px'"
          :hoverable="false"
        >
          <div>Hello</div>
          {{ $store.getters.userInfo.title }}
        </pan-thumb>
      </div>
      <!-- 姓名 && 角色 -->
      <div class="box-center">
        <div class="user-name text-center">
          {{ $store.getters.userInfo.username }}
        </div>
        <div class="user-role text-center text-muted">
          {{ $store.getters.userInfo.title }}
        </div>
      </div>
    </div>
    <!-- 简介 -->
    <div class="project-bio">
      <div class="project-bio-section">
        <div class="project-bio-section-header">
          <svg-icon icon="introduce" />
          <span>{{ $t('msg.profile.projectIntroduction') }}</span>
        </div>
        <div class="project-bio-section-body">
          <div class="text-muted">
            {{ $t('msg.profile.muted') }}
          </div>
        </div>
      </div>
    </div>

    <div class="project-bio-section">
      <div class="project-bio-section-header">
        <svg-icon icon="reward" /><span>{{
          $t('msg.profile.projectFunction')
        }}</span>
      </div>
      <div class="project-bio-section-body">
        <div class="progress-item" v-for="item in features" :key="item.id">
          <div>{{ item.title }}</div>
          <el-progress :percentage="item.percentage" status="success" />
        </div>
      </div>
    </div>
  </el-card>
</template>
<script setup>
import PanThumb from '@/components/PanThumb'
import { defineProps } from 'vue'
defineProps({
  features: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.user-container {
  .text-muted {
    font-size: 14px;
    color: #777;
  }

  .user-profile {
    text-align: center;
    .user-name {
      font-weight: bold;
    }

    .box-center {
      padding-top: 10px;
    }

    .user-role {
      padding-top: 10px;
      font-weight: 400;
    }
  }

  .project-bio {
    margin-top: 20px;
    color: #606266;
    span {
      padding-left: 4px;
    }

    .project-bio-section {
      margin-bottom: 36px;
      .project-bio-section-header {
        border-bottom: 1px solid #dfe6ec;
        padding-bottom: 10px;
        margin-bottom: 10px;
        font-weight: bold;
      }
      .project-bio-section-body {
        .progress-item {
          margin-top: 10px;
          div {
            font-size: 14px;
            margin-bottom: 2px;
          }
        }
      }
    }
  }
}
</style>
