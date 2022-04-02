<template>
  <!-- <i v-if="icon.includes('el-icon')" class="sub-el-icon" :class="icon"></i> -->
  <el-icon
    v-if="icon.includes('el-icon')"
    class="sub-el-icon"
    :class="icon"
  >
  <component :is="iconName" />
  </el-icon>
  <svg-icon v-else :icon="icon"></svg-icon>
  <span>{{ generateTitle(title) }}</span>
</template>

<script setup>
import { defineProps } from 'vue'
import { generateTitle } from '@/utils/i18n'
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  iconName: {
    type: String
  }
})
</script>

<style lang="scss" scoped></style>
