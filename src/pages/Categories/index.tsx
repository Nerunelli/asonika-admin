import React, { useState } from 'react';
import { Button } from '../../ui-kit/Button';
import { ButtonsWrap, ItemsContainer, ParamsContainer } from './styled';
// import { ParamsItem } from '../../components/ParamsItem';
import { Breadcrumbs } from '../../components/Breadcrumbs';
// import { api } from '../../api/useApi';
import { Input } from '../../ui-kit/Input';
import { Accordion } from '../../ui-kit/Accordion';

export interface ICategory {
  uuid: string;
  name: string;
  description: string;
  parent: string;
  children: string;
}

export const Categories: React.FC = () => {
  // eslint-disable-next-line no-unused-vars
  const [categories, setCategories] = useState<ICategory[]>([]);

  // const getParams = async () => {
  //   try {
  //     const res = await api.get<{ data: IParam[] }>('/parameter/');
  //     setParams(res.data.data);
  //   } catch (e) {}
  // };

  // const createParam = async (
  //   name: string,
  //   description: string,
  //   measurement_group: string,
  //   type: number,
  // ): Promise<IParam | null> => {
  //   try {
  //     const res = await api.post('/parameter/', {
  //       name,
  //       description,
  //       measurement_group,
  //       type,
  //     });
  //
  //     return res.data.data;
  //   } catch (e) {}
  //
  //   return null;
  // };

  // useEffect(() => {
  //   // createParam('3 group', '3 description', 'd96818c1-8432-42ac-9967-b4594d6c8372', 1).catch(
  //   //   console.error,
  //   // );
  //
  //   getParams().catch(console.error);
  // }, []);

  // const addParam = () =>
  //   setSelected({
  //     uuid: '',
  //     name: '',
  //     description: '',
  //     type: 1,
  //     measurement_group: { uuid: '', name: '', description: '' },
  //   });

  return (
    <>
      <Breadcrumbs
        data={[
          {
            link: '/categories',
            title: 'Категории',
          },
        ]}
      />
      <ButtonsWrap>
        <Input isSearch placeholder="Поиск по категориям" />
        <Button width="220px">Добавить категорию</Button>
      </ButtonsWrap>
      <ParamsContainer>
        {/* {categories.length ? ( */}
        {/*  <ItemsContainer> */}
        {/*    {categories.map((category, i) => ( */}
        {/*      // eslint-disable-next-line @typescript-eslint/no-empty-function */}
        {/*      <ItemWrapper onClick={() => {}} key={`categoriesItem-${category.name}${i}`}> */}
        {/*        <ParamsItem>{category.name}</ParamsItem> */}
        {/*      </ItemWrapper> */}
        {/*    ))} */}
        {/*  </ItemsContainer> */}
        {/* ) : null} */}
        <ItemsContainer>
          <Accordion>Категория 1</Accordion>
          <Accordion>Категория 2</Accordion>
        </ItemsContainer>
      </ParamsContainer>
    </>
  );
};
