import i18n from '@/i18n'
import { watch } from 'vue'
import store from '@/store'

export function generateTitle(title) {
  return i18n.global.t('msg.route.' + title)
}
/**
 *
 * @param  {...any} cbs 所有的回调
 */
export function watchSwitchLang(...cbs) {
  watch(
    () => store.getters.language,
    () => {
      cbs.forEach((cb) => cb(store.getters.language))
    }
  )
}
