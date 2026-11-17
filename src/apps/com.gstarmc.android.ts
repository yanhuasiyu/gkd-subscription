import { defineGkdApp } from '@gkd-kit/define';

/**
 * CAD看图王 com.gstarmc.android
 * 依据历史快照：
 *  - 首页表格广告关闭按钮 vid=imageViewHome_TableAds_Close（弹窗 9 节点快照）
 *  - 信息流广告关闭按钮 vid=itemADTextViewClose + text=关闭广告（snapshot_new_ad 223 节点）
 * 仅匹配明确的关闭控件，不点广告图本身（viewBannerAD / imageViewHomeAd 无关闭按钮）。
 */
export default defineGkdApp({
  id: 'com.gstarmc.android',
  name: 'CAD看图王',
  groups: [
    {
      key: 0,
      name: '首页弹窗广告-表格广告',
      activityIds: ['com.stone.app.ui.activity.MainActivityHome'],
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: '[vid="imageViewHome_TableAds_Close"][visibleToUser=true]',
        },
      ],
    },
    {
      key: 1,
      name: '信息流广告-关闭广告按钮',
      activityIds: ['com.stone.app.ui.activity.MainActivityHome'],
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches:
            '[vid="itemADTextViewClose"][text="关闭广告"][visibleToUser=true]',
        },
      ],
    },
  ],
});
