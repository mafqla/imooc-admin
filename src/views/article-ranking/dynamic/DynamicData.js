import i18n from '@/i18n'

const t = i18n.global.t

export default () => [
  {
    label: t('msg.article.ranking'),
    prop: 'ranking'
  },
  {
    label: t('msg.article.title'),
    prop: 'title'
  },
  {
    label: t('msg.article.author'),
    prop: 'author'
  },
  {
    label: t('msg.article.publicDate'),
    prop: 'publicDate'
  },
  {
    label: t('msg.article.desc'),
    prop: 'desc'
  },
  {
    label: t('msg.article.action'),
    prop: 'action'
  }
]
