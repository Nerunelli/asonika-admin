import React, { useEffect, useState } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ParamsItem } from '../../components/ParamsItem';
import { Button } from '../../ui-kit/Button';
import { ButtonsWrap, ItemsContainer, ItemWrapper, ReductionsContainer } from './styled';
import { EditReductionForm } from '../../components/EditReductionForm';
import { $measurementGroupsStore } from '../../data/measurement/groups/stores';
import { useEvent, useStore } from 'effector-react';
import {
  createMeasurementGroupFx,
  deleteMeasurementGroupFx,
  loadAllMeasurementGroupsFx,
  updateMeasurementGroupFx,
} from '../../data/measurement/groups/effects';
import { IGroup } from '../../data/measurement/groups/types';

export const Reductions: React.FC = () => {
  const [selected, setSelected] = useState<IGroup | null>();

  const groups = useStore($measurementGroupsStore);

  const loadAllMeasurementGroups = useEvent(loadAllMeasurementGroupsFx);
  const createMeasurementGroup = useEvent(createMeasurementGroupFx);
  const updateMeasurementGroup = useEvent(updateMeasurementGroupFx);
  const deleteMeasurementGroup = useEvent(deleteMeasurementGroupFx);

  useEffect(() => {
    loadAllMeasurementGroups().catch(console.error);
  }, []);

  const addReduction = () => setSelected({ uuid: '', name: '', description: '' });

  const onSelect = (group: { uuid: string; name: string; description: string }) => {
    setSelected(group);
  };

  const handleSubmit = async (name: string, description: string) => {
    // eslint-disable-next-line no-console
    console.log(name, description);

    if (selected?.uuid) {
      updateMeasurementGroup({ uuid: selected.uuid, name, description });
    } else {
      const created = await createMeasurementGroup({ name, description });
      setSelected(created);
    }
  };

  const handleDelete = async (uuid: string) => {
    await deleteMeasurementGroup(uuid);
    setSelected(null);
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
        {groups.length ? (
          <ItemsContainer>
            {groups.map((group, i) => (
              <ItemWrapper onClick={() => onSelect(group)} key={`paramItem-${group.name}${i}`}>
                <ParamsItem>{group.name}</ParamsItem>
              </ItemWrapper>
            ))}
          </ItemsContainer>
        ) : null}
        {selected && (
          <EditReductionForm
            group={selected}
            handleSubmit={handleSubmit}
            handleDelete={handleDelete}
          />
        )}
      </ReductionsContainer>
    </>
  );
};
