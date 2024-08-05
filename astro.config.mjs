import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '小飞的学习笔记',
			defaultLocale: 'zh-cn',
			locales: {
				// 简体中文文档在 `src/content/docs/zh-cn/` 中。
				'zh-cn': {
					label: '简体中文',
					lang: 'zh-CN',
				},
				// 英文文档在 `src/content/docs/en/` 中。
				en: {
					label: 'English',
				}
			},
			social: {
				github: 'https://github.com/731016',
			},
			logo: {
				src: './src/assets/houston.webp',
			},
			sidebar: [
				{
					label: '笔记',
					items: [
						{ label: 'JavaSE', collapsed: true, autogenerate: { directory: '笔记/JavaSE' } },
						{ label: '反射', collapsed: false, autogenerate: { directory: '笔记/反射' } },
						{ label: '设计模式', collapsed: false, autogenerate: { directory: '笔记/设计模式' } },
						{ label: 'MySQL', collapsed: false, autogenerate: { directory: '笔记/MySQL' } },
						{ label: 'SQLServer', collapsed: true, autogenerate: { directory: '笔记/SQLServer' } },
						{ label: 'JavaWeb', collapsed: true, autogenerate: { directory: '笔记/JavaWeb' } },
						{ label: '前端', collapsed: true, autogenerate: { directory: '笔记/前端' } },
						{ label: 'jQuery', collapsed: true, autogenerate: { directory: '笔记/jQuery' } },
						{ label: '版本控制', collapsed: true, autogenerate: { directory: '笔记/版本控制' } },
						{ label: 'SSM框架', collapsed: false, autogenerate: { directory: '笔记/SSM框架' } },
						{ label: 'Redis', collapsed: false, autogenerate: { directory: '笔记/Redis' } },
						{ label: '消息队列', collapsed: false, autogenerate: { directory: '笔记/消息队列' } },
						{ label: 'linux', collapsed: false, autogenerate: { directory: '笔记/linux' } },
						{ label: '项目', collapsed: false, autogenerate: { directory: '笔记/项目' } },
						{ label: '面试', collapsed: true, autogenerate: { directory: '笔记/面试' } },
						{ label: '开发环境配置', collapsed: true, autogenerate: { directory: '笔记/开发环境配置' } },
						{ label: 'c语言', collapsed: true, autogenerate: { directory: '笔记/c语言' } },
						{ label: 'Python', collapsed: true, autogenerate: { directory: '笔记/Python' } },
						{ label: '计算机网络', collapsed: true, autogenerate: { directory: '笔记/计算机网络' } },
						{ label: '劳动合同法', collapsed: true, autogenerate: { directory: '笔记/劳动合同法' } },
						{ label: '高等数学', collapsed: true, autogenerate: { directory: '笔记/高等数学' } },
						{ label: '代码库', collapsed: true, autogenerate: { directory: '笔记/代码库' } },
						

					],
				},
			],
			editLink: {
				baseUrl: 'https://github.com/731016/study-notes',
			},
			credits: true
		}),
	],
});
