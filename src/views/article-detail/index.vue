<template>
  <div class="article-detail-container">
    <h2 class="title">{{ detail.title }}</h2>
    <div class="header">
      <span class="author"
        >{{ $t('msg.article.author') }}：{{ detail.author }}</span
      >
      <span class="time"
        >{{ $t('msg.article.publicDate') }}：{{
          $filters.relativeTime(detail.publicDate)
        }}</span
      >
      <el-button type="text" class="edit" @click="onEditClick">{{
        $t('msg.article.edit')
      }}</el-button>
    </div>
    <div class="content" v-html="detail.content"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { articleDetail } from '@/api/article'

// 获取数据
const route = useRoute()
const articleId = route.params.id
const detail = ref({})
const getArticleDetail = async () => {
  detail.value = await articleDetail(articleId)
}
getArticleDetail()
</script>

<style lang="scss" scoped>
.article-detail-container {
  .title {
    font-size: 22px;
    text-align: center;
    padding: 12px 0;
  }
  .header {
    padding: 26px 0;
    .author {
      font-size: 14px;
      color: #555666;
      margin-right: 20px;
    }
    .time {
      font-size: 14px;
      color: #999aaa;
      margin-right: 20px;
    }
    .edit {
      float: right;
    }
  }
  .content {
    font-size: 14px;
    padding: 20px 0;
    border-top: 1px solid #d4d4d4;
  }
}
</style>
