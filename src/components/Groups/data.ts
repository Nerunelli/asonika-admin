export interface ICategoriesLink {
  title: string;
  href: string;
}

export const categoriesData: Record<string, ICategoriesLink> = {
  categories: { title: 'Категория', href: '/categories' },
  reductions: { title: 'Единицы измерения', href: '/reductions' },
  parameters: { title: 'Параметры', href: '/parameters' },
  manufacturers: { title: 'Производители', href: '/manufacturers' },
  specifications: { title: 'ТУ', href: '/specifications' },
  components: { title: 'Компоненты', href: '/components' },
  users: { title: 'Пользователи', href: '/users' },
};
