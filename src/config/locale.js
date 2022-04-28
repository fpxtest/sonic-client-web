/**
 * 全局统一配置参数
 */
export const LOCALE = {
    ZH_CN: 'zh_CN',
    EN_US: 'en_US',
    ZH_TW: 'zh_TW',
    JA_JP: 'ja_JP'
    // ...更多语言
};

export const localeList = [
    {
        text: '简体中文',
        building: false,
        event: LOCALE.ZH_CN,
    },
    {
        text: '繁體中文',
        building: true,
        event: LOCALE.ZH_TW,
    },
    {
        text: 'English',
        building: true,
        event: LOCALE.EN_US,
    },
    {
        text: '日本語',
        building: true,
        event: LOCALE.JA_JP,
    },
    // ...更多语言
];

export const localeSetting = {
    showPicker: true,
    // Locale
    locale: LOCALE.ZH_CN,
    // available Locales
    availableLocales: [LOCALE.ZH_CN, LOCALE.EN_US, LOCALE.ZH_TW, LOCALE.JA_JP], // ...更多语言
};