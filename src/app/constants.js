// @flow

import { IApp } from './types';

export const INITIAL: IApp = {
  theme: localStorage.getItem('theme') || 'light',
  navigation: [
    { icon: 'pageview', text: 'overview', route: '/overview' },
    { icon: 'face', text: 'helloWorld', route: '/hello-world' },
    {
      icon: 'loyalty',
      text: '101Guide',
      children: [
        {
          text: 'components',
          children: [
            { text: 'props', route: '/101-guide/components/props' },
            { text: 'slots', route: '/101-guide/components/slots' },
          ],
        },
        { text: 'lifecycleHooks', route: '/101-guide/lifecycle-hooks' },
        { text: 'transitions', route: '/101-guide/transitions' },
        { text: 'mixins', route: '/101-guide/mixins' },
        { text: 'directives', route: '/101-guide/directives' },
        { text: 'filters', route: '/101-guide/filters' },
        {
          text: 'routing',
          children: [
            { text: 'dynamicMatching', route: '/101-guide/routing/dynamic-matching' },
            { text: 'nestedRoutes', route: '/101-guide/routing/nested-routes' },
            { text: 'guards', route: '/101-guide/routing/guards', disabled: true },
          ],
        },
        { text: 'stateManagement', route: '/101-guide/state-management' },
      ],
    },
    {
      icon: 'business',
      text: 'crudOperations',
      children: [
        { text: 'basic', route: '/crud-operations/basic' },
        { text: 'rest', route: '/crud-operations/rest' },
        { text: 'graphql', route: '/crud-operations/graphql' },
      ],
    },
    {
      icon: 'contacts',
      text: 'formControls',
      children: [
        { text: 'textFields', route: '/form-controls/text-fields' },
        { text: 'selects', route: '/form-controls/selects' },
        { text: 'selectionControls', route: '/form-controls/selection-controls' },
        { text: 'pickers', route: '/form-controls/pickers' },
      ],
    },
    {
      icon: 'fa fa-table',
      text: 'dataTable',
      children: [
        { text: 'paginator', route: '/data-table/paginator' },
        { text: 'iterator', route: '/data-table/iterator', disabled: true },
      ],
    },
    { icon: 'language', text: 'internationalization', route: '/internationalization' },
    { icon: 'fa fa-bar-chart', text: 'interactiveChart', route: '/interactive-chart' },
    { icon: 'verified_user', text: 'authorization', route: '/authorization' },
    { icon: 'fa fa-credit-card', text: 'payment', route: '/payment' },
    {
      icon: 'message',
      text: 'messages',
      disabled: true,
      children: [],
    },
    { icon: 'fa fa-cogs', text: 'machineLearning', disabled: true },
  ],
  drawer: false || null,
  languages: [
    { key: 'en', country: 'us', label: 'English' },
    { key: 'zh', country: 'cn', label: '中文' },
    { key: 'ja', country: 'jp', label: '日本語' },
  ],
};
