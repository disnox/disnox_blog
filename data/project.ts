export const projects: Project[] = [
  {
    title: '尚宇的小站',
    description: '（强烈推荐）参考愧怍的开源项目实现的个人博客（基于Docusaurus v2 静态网站生成器）',
    preview: '/img/blog/blog.png',
    website: 'https://kuizuo.cn',
    source: 'https://github.com/disnox/disnox_blog',
    tags: ['opensource', 'design', 'favorite'],
    type: 'Copy',
  },

  {
    title: 'test',
    description: 'test',
    website: 'https://github.com/mini-vue',
    tags: ['opensource'],
    type: 'Project'
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
  | 'Personal'
  | 'Project'
  | 'Web'
  | 'Copy'
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

