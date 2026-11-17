import { defineGkdApp } from '@gkd-kit/define';

/**
 * 向日葵远程控制 com.oray.sunlogin
 * 依据两张历史快照（同一 App 接入两套第三方广告 SDK）：
 *  - snap_oray_1794584832124.json（30 节点，smartdigimkt / sdm_myoffer_* 半屏广告）
 *    关闭按钮 vid=sdm_myoffer_btn_close_id，右上角 X；避开容器/卡片/CTA/反馈控件
 *  - snap_oray_1794840342286.json（24 节点，AnyThink / anythink_myoffer_* 竖屏广告）
 *    关闭按钮 vid=anythink_myoffer_btn_close_id，右上角 X；避开 banner/CTA/root 容器
 * 两套 myoffer 关闭按钮 vid 均以 *_myoffer_btn_close_id 结尾，按精确 vid 分两组最稳。
 */
export default defineGkdApp({
  id: 'com.oray.sunlogin',
  name: '向日葵远程控制',
  groups: [
    {
      key: 0,
      name: '半屏广告-点击关闭按钮(sdm_myoffer)',
      activityIds: [
        'com.smartdigimkt.sdk.basead.ui.ATPortraitTranslucentActivity',
      ],
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches:
            '[vid="sdm_myoffer_btn_close_id"][clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 1,
      name: '竖屏广告-点击关闭按钮(anythink_myoffer)',
      activityIds: ['com.anythink.core.common.inner.ui.ATPortraitActivity'],
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches:
            '[vid="anythink_myoffer_btn_close_id"][clickable=true][visibleToUser=true]',
        },
      ],
    },
  ],
});
