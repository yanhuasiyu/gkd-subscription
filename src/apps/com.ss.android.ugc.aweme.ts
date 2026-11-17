import { defineGkdApp } from '@gkd-kit/define';

/**
 * 抖音 com.ss.android.ugc.aweme
 * 依据历史快照 dy_snap_1794493815040.json（协议弹窗）：
 *  - 有「同意」和「不同意」两个按钮，[text*="同意"] 会误伤，改用前缀 [text^="同意"]
 *  - 加 clickable/visibleToUser 限定，自然覆盖「同意/同意并继续」，排除正文
 * 注：本地订阅里另有一组同名 app 的「完成广告」规则（key0），本文件只对应协议弹窗这一组，
 *     发布为独立订阅后与该本地订阅互不冲突。
 */
export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      key: 0,
      name: '协议弹窗-点击同意',
      activityIds: ['com.ss.android.ugc.aweme.main.MainActivity'],
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[text^="同意"][clickable=true][visibleToUser=true]',
        },
      ],
    },
  ],
});
