import React, { useEffect } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ParamsItem } from '../../components/ParamsItem';
import { Button } from '../../ui-kit/Button';
import { ButtonsWrap, ItemsContainer, ItemWrapper, ReductionsContainer } from './styled';
import { EditReductionForm } from '../../components/EditReductionForm';
import { $measurementGroupsStore, $selectedGroupStore } from '../../data/measurement/groups/stores';
import { useEvent, useStore } from 'effector-react';
import {
  createMeasurementGroupFx,
  deleteMeasurementGroupFx,
  loadAllMeasurementGroupsFx,
  updateMeasurementGroupFx,
} from '../../data/measurement/groups/effects';
import { loadAllMeasurementUnitsFx } from '../../data/measurement/units/effects';
import { selectGroupEv } from '../../data/measurement/groups/events';

export const Reductions: React.FC = () => {
  const selected = useStore($selectedGroupStore);

  const groups = useStore($measurementGroupsStore);

  const loadAllMeasurementUnits = useEvent(loadAllMeasurementUnitsFx);

  const loadAllMeasurementGroups = useEvent(loadAllMeasurementGroupsFx);
  const createMeasurementGroup = useEvent(createMeasurementGroupFx);
  const updateMeasurementGroup = useEvent(updateMeasurementGroupFx);
  const deleteMeasurementGroup = useEvent(deleteMeasurementGroupFx);
  const selectGroup = useEvent(selectGroupEv);

  useEffect(() => {
    loadAllMeasurementGroups().catch(console.error);
    loadAllMeasurementUnits().catch(console.error);
  }, []);

  const addReduction = () => selectGroup({ uuid: '', name: '', description: '' });

  const onSelect = (group: { uuid: string; name: string; description: string }) => {
    selectGroup(group);
  };

  const handleSubmit = async (name: string, description: string) => {
    if (selected?.uuid) {
      updateMeasurementGroup({ uuid: selected.uuid, name, description });
    } else {
      const created = await createMeasurementGroup({ name, description });
      selectGroup(created);
    }
  };

  const handleDelete = async (uuid: string) => {
    await deleteMeasurementGroup(uuid);
    selectGroup(null);
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
