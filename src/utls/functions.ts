import { BreadcrumbsData } from './types';

export const breadcrumbsData = {
  params: [
    {
      link: '/parameters',
      title: 'Параметры',
    },
    {
      link: '/parameters/params',
      title: 'Параметр 1',
    },
  ],
  categories: [
    {
      link: '/categories',
      title: 'Категории',
    },
  ],
  reductions: [
    {
      link: '/reductions',
      title: 'Сокращения',
    },
  ],
  producers: [
    {
      link: '/manufacturers',
      title: 'Производители',
    },
  ],
  TU: [
    {
      link: '/TU',
      title: 'ТУ',
    },
  ],
};

export const getBreadcrumbs = (path: string[]): BreadcrumbsData[] => {
  return breadcrumbsData[path[path.length - 1] as keyof typeof breadcrumbsData];
};
