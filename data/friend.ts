export const Friends: Friend[] = [
  {
    title: '峰华前端工程师',
    description: '致力于帮助你以最直观、最快速的方式学会前端开发',
    website: 'https://zxuqian.cn',
    avatar: require('./avatar/zxuqian.png'),
  },
  {
    title: '愧怍',
    description: ' 保持学习，希望在有限的时间内，学到无限的可能',
    website: 'https://kuizuo.cn/',
    avatar: require('./avatar/kuizuo.png'),
  },
  {
    title: '🐏🐏',
    description: ' 嵌入式MCU开发（点灯）硬件设计（上电即炸）三维建模（穿模是我）',
    website: 'https://xyljy.top/',
    avatar: require('./avatar/ljy.png'),
  },
  {
    title: '小佬头',
    description: ' 暗黑烧板王 ',
    website: 'https://boooom.cn/',
    avatar: require('./avatar/xlt.png'),
  },
  {
    title: '月月鸟的碎碎念',
    description: ' 群里最强 ',
    website: 'https://kugeek.cn/',
    avatar: require('./avatar/turing.png'),
  },
  {
    title: '啵贝琴',
    description: '硬件开发、软件编程基层人员',
    website: 'https://littlefairy.top/',
    avatar: require('./avatar/1.png'),
  },

];

export type Friend = {
  title: string;
  description: string;
  website: string;
  avatar?: any;
};
