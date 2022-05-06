export interface ICategoriesLink {
  title: string;
  href: string;
}

export const categoriesData: ICategoriesLink[] = [
  { title: 'Категория', href: '/categories' },
  { title: 'Сокращения', href: '/reductions' },
  { title: 'Параметры', href: '/parameters' },
  { title: 'Производители', href: '/manufacturers' },
  { title: 'ТУ', href: '/specifications' },
  { title: 'Компоненты', href: '/components' },
  { title: 'Пользователи', href: '/users' },
];
