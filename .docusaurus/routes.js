import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'c42'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'a9d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '320'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '55c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'b7d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '30a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '7bf'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'd87'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '6e2'),
    routes: [
      {
        path: '/docs/conclusion',
        component: ComponentCreator('/docs/conclusion', '187'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/data',
        component: ComponentCreator('/docs/data', '501'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/nft',
        component: ComponentCreator('/docs/nft', 'b41'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/protocol',
        component: ComponentCreator('/docs/protocol', 'bd4'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '6b7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
