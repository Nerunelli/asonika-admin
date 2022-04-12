import React, { useEffect, useState } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ParamsItem } from '../../components/ParamsItem';
import { EditForm } from '../../components/EditForm';
import { Button } from '../../ui-kit/Button';
import { ButtonsWrap, ItemsContainer, ItemWrapper, ReductionsContainer } from './styled';
import { api } from '../../api/useApi';

export interface IGroup {
  uuid: string;
  name: string;
  description: string;
}

export const Reductions: React.FC = () => {
  const [groups, setGroups] = useState<IGroup[]>([]);
  const [selected, setSelected] = useState<IGroup | null>();

  const getMeasurementGroups = async () => {
    try {
      const res = await api.get<{ data: IGroup[] }>('/measurement/group/');
      setGroups(res.data.data);
    } catch (e) {}
  };

  const createMeasurementGroup = async (
    name: string,
    description: string,
  ): Promise<IGroup | null> => {
    try {
      const res = await api.post('/measurement/group/', {
        name,
        description,
      });

      return res.data.data;
    } catch (e) {}

    return null;
  };

  const updateMeasurementGroup = async ({ uuid, description, name }: IGroup) => {
    try {
      await api.patch<{ data: IGroup }>(`/measurement/group/${uuid}/`, { description, name });
    } catch (e) {}
  };

  const deleteMeasurementGroup = async (uuid: string) => {
    try {
      await api.delete<{ data: IGroup }>(`/measurement/group/${uuid}/`);
    } catch (e) {}
    setSelected(null);
  };

  useEffect(() => {
    // createMeasurementGroups('3 group', '3 description').catch(console.error);
    getMeasurementGroups().catch(console.error);
  }, []);

  const addReduction = () => setSelected({ uuid: '', name: '', description: '' });

  const onSelect = (group: { uuid: string; name: string; description: string }) => {
    setSelected(group);
  };

  const handleSubmit = async (name: string, description: string) => {
    // eslint-disable-next-line no-console
    console.log(name, description);

    if (selected?.uuid) {
      await updateMeasurementGroup({ uuid: selected.uuid, name, description });
      setGroups(groups =>
        groups.map(group =>
          group.uuid === selected.uuid ? { uuid: group.uuid, name, description } : group,
        ),
      );
      // getMeasurementGroups().catch(console.error);
    } else {
      const newGroup = await createMeasurementGroup(name, description);
      // eslint-disable-next-line no-console
      console.log(newGroup);
      if (newGroup) {
        setGroups(groups => [
          ...groups,
          { uuid: newGroup.uuid, name: newGroup.name, description: newGroup.description },
        ]);
      }
    }
  };

  const handleDelete = async (uuid: string) => {
    setGroups(groups => groups.filter(el => el.uuid !== uuid));
    await deleteMeasurementGroup(uuid);
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
        <Button onClick={addReduction} width="220px">
          Добавить сокращение
        </Button>
      </ButtonsWrap>
      <ReductionsContainer>
        <ItemsContainer>
          {groups.map((group, i) => (
            <ItemWrapper onClick={() => onSelect(group)} key={`paramItem-${group.name}${i}`}>
              <ParamsItem>{group.name}</ParamsItem>
            </ItemWrapper>
          ))}
        </ItemsContainer>
        {selected && (
          <EditForm
            group={selected}
            handleSubmit={handleSubmit}
            handleDelete={handleDelete}
            reductions
          />
        )}
      </ReductionsContainer>
    </>
  );
};
