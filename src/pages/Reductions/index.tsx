import React, { useEffect, useState } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ParamsItem } from '../../components/ParamsItem';
import { ReductionForm } from '../../components/ReductionForm';
import { Button } from '../../ui-kit/Button';
import { ButtonsWrap, ItemsContainer, ItemWrapper, ReductionsContainer } from './styled';
import { api } from '../../api/useApi';

interface IGroup {
  uuid: string;
  name: string;
  description: string;
}

export const Reductions: React.FC = () => {
  // const createMeasurementGroups = async (name: string, description: string) => {
  //   try {
  //     await api.post('/measurement/group/', {
  //       name,
  //       description,
  //     });
  //   } catch (e) {}
  // };

  const [groups, setGroups] = useState<IGroup[]>([]);

  const getMeasurementGroups = async () => {
    try {
      const res = await api.get<{ data: IGroup[] }>('/measurement/group/');
      setGroups(res.data.data);
    } catch (e) {}
  };

  useEffect(() => {
    // createMeasurementGroups('3 group', '3 description').catch(console.error);
    getMeasurementGroups().catch(console.error);
  }, []);

  const handleSubmit = (name: string, description: string, mark: string) => {
    // eslint-disable-next-line no-console
    console.log(name, description, mark);
  };

  return (
    <>
      <Breadcrumbs
        data={[
          {
            link: '/reductions',
            title: 'Сокращения',
          },
        ]}
      />
      <ButtonsWrap>
        <Button width="220px">Добавить сокращение</Button>
      </ButtonsWrap>
      <ReductionsContainer>
        <ItemsContainer>
          {groups.map(({ name }, i) => (
            <ItemWrapper key={`paramItem-${name}${i}`}>
              <ParamsItem>{name}</ParamsItem>
            </ItemWrapper>
          ))}
        </ItemsContainer>
        <ReductionForm handleSubmit={handleSubmit} />
      </ReductionsContainer>
    </>
  );
};
