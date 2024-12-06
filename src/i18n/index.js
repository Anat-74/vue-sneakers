import { createI18n } from 'vue-i18n'
import messages from "@intlify/unplugin-vue-i18n/messages";

const localeStorageLang = localStorage.getItem('lang')
const defaultLocale = 'ru'

export const allLocales = ['ru', 'by']

export const i18n = createI18n({
   legacy: false,
   globalInjection: true,
   locale: localeStorageLang || defaultLocale,
   fallbackLocale: "ru",
   messages: messages,
})
 
// Установить новую локаль.
export async function setLocale (locale) {
// Загрузить локаль, если она еще недоступна.
   if (!i18n.global.availableLocales.includes(locale)) {
     const messages = await loadLocale(locale)
 
// произошла ошибка fetch().
     if (messages === undefined) {
       return;
     }
 
// Добавить локаль.
      i18n.global.setLocaleMessage(locale, messages)
   }
 
// Установить локаль.
   i18n.global.locale.value = locale
   localStorage.setItem("lang", locale)
 }
 
// Получить локаль.
function loadLocale(locale) {
    return fetch(`./locale/${locale}.json`)
     .then((response) => {
        if (response.ok) {
         return response.json()
       }
       throw new Error("Что-то пошло не так!");
     })
     .catch((error) => {
       console.error(error)
     })
 }