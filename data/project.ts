export const projects: Project[] = [
  {
    title: '项目集',
    description: '我的项目集合，涵盖了大学期间所做的项目',
    preview: '/img/project/xmu.png',
    website: 'https://kdocs.cn/l/cqH6nnUP94mm',
    source: 'https://kdocs.cn/l/cqH6nnUP94mm',
    tags: ['opensource', 'design', 'favorite'],
    type: '🤖Project',
  },
  {
    title: '客运购票系统',
    description: '采用 Linux 内核链表搭建的C语言系统，满足大部分需求，学习使用',
    preview: '/img/project/kernel_list.png',
    website: 'https://github.com/disnox/ticket_system',
    source: 'https://github.com/disnox/ticket_system',
    tags: ['opensource', 'design', 'favorite'],
    type: '🤖Project',
  },
  {
    title: '自助点餐系统',
    description: '基于 Linux 和 C语言 的自助点餐系统',
    preview: '/img/project/self.png',
    website: 'https://github.com/disnox/self_service_order',
    source: 'https://github.com/disnox/self_service_order',
    tags: ['opensource', 'design', 'favorite'],
    type: '🤖Project',
  },
  {
    title: '文件服务器',
    description: '基于 Linux网络编程 和 C语言 的文件服务器',
    preview: '/img/project/server.png',
    website: 'https://github.com/disnox/file_server',
    source: 'https://github.com/disnox/file_server',
    tags: ['opensource', 'design', 'favorite'],
    type: '🤖Project',
  },
  {
    title: 'STM32G431/474 核心板',
    description: '基于 STM32G4 的最小系统，带LCD、RS485、CAN接口',
    preview: '/img/project/g431g474.png',
    website: 'https://oshwhub.com/lylssy/g431-g474-zui-xiao-xi-tong',
    source: 'https://github.com/disnox/disnox_g431',
    tags: ['opensource', 'design', 'favorite'],
    type: '🤖Project',
  },
  {
    title: '线程池示例（内核链表）',
    description: '使用内核链表搭建的线程池示例',
    website: 'https://www.disnox.top/thread_pool2',
    source: 'https://github.com/disnox/thread_pool',
    tags: ['opensource', 'design', 'favorite'],
    type: '🌊Example',
  },
  {
    title: '线程池示例（单向链表）',
    description: '使用单向链表搭建的线程池示例',
    website: 'https://www.disnox.top/thread_pool1',
    source: 'https://github.com/disnox/pool',
    tags: ['opensource', 'design', 'favorite'],
    type: '🌊Example',
  },
  {
    title: '尚宇的小站',
    description: '（强烈推荐）参考尚宇的开源项目实现的个人博客（基于Docusaurus v2 静态网站生成器）',
    preview: '/img/project/blog.png',
    website: 'https://disnox.top',
    source: 'https://github.com/disnox/disnox_blog',
    tags: ['opensource', 'design', 'favorite'],
    type: '📷Copy',
  },
]

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export type TagType =
  | 'favorite'
  | 'opensource'
  | 'product'
  | 'design'
  | 'javascript'
  | 'personal';

export type ProjectType =
  | '💻Linux'
  | '🧠Personal'
  | '🤖Project'
  | '🌊Example'
  | 'Web'
  | '📷Copy'
  | 'App'
  | 'Other';

export type Project = {
  title: string;
  description: string;
  preview?: any;
  website: string;
  source?: string | null;
  tags: TagType[];
  type: ProjectType
};

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: '喜爱',
    description: '我最喜欢的网站，一定要去看看!',
    color: '#e9669e',
  },
  opensource: {
    label: '开源',
    description: '开源项目可以提供灵感!',
    color: '#39ca30',
  },
  product: {
    label: '产品',
    description: '与产品相关的项目!',
    color: '#dfd545',
  },
  design: {
    label: '设计',
    description: '设计漂亮的网站!',
    color: '#a44fb7',
  },
  javascript: {
    label: 'JavaScript',
    description: 'JavaScript 项目',
    color: '#dfd545',
  },
  personal: {
    label: '个人',
    description: '个人项目',
    color: '#12affa',
  },
};

export const TagList = Object.keys(Tags) as TagType[];

export const groupByProjects = projects.reduce((group, project) => {
  const { type } = project;
  group[type] = group[type] ?? [];
  group[type].push(project);
  return group;
},
  {} as Record<ProjectType, Project[]>
)

