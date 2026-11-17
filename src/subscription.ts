import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 285062796,
  name: '本地调试规则合集(CAD看图王+抖音+向日葵)',
  version: 1,
  author: '20984557',
  supportUri: 'https://github.com/yanhuasiyu/gkd-subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
