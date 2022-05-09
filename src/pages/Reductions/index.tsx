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
import { clearStoreEv, selectGroupEv } from '../../data/measurement/groups/events';
import { categoriesData } from '../../components/Groups/data';

export const Reductions: React.FC = () => {
  const selectedGroup = useStore($selectedGroupStore);

  const groups = useStore($measurementGroupsStore);

  const loadAllMeasurementUnits = useEvent(loadAllMeasurementUnitsFx);
  const clearStore = useEvent(clearStoreEv);

  const loadAllMeasurementGroups = useEvent(loadAllMeasurementGroupsFx);
  const createMeasurementGroup = useEvent(createMeasurementGroupFx);
  const updateMeasurementGroup = useEvent(updateMeasurementGroupFx);
  const deleteMeasurementGroup = useEvent(deleteMeasurementGroupFx);
  const selectGroup = useEvent(selectGroupEv);

  useEffect(() => {
    loadAllMeasurementGroups().catch(console.error);
    loadAllMeasurementUnits().catch(console.error);
    return clearStore;
  }, []);

  const addReduction = () => selectGroup({ uuid: '', name: '', description: '' });

  const onSelect = (group: { uuid: string; name: string; description: string }) => {
    selectGroup(group);
  };

  const handleSubmit = async (name: string, description: string) => {
    if (selectedGroup?.uuid) {
      updateMeasurementGroup({ uuid: selectedGroup.uuid, name, description });
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
      <Breadcrumbs data={[categoriesData.reductions]} />
      <ButtonsWrap>
        <Button onClick={addReduction} width="260px">
          Добавить единицу измерения
        </Button>
      </ButtonsWrap>
      <ReductionsContainer>
        {groups.length ? (
          <ItemsContainer>
            {groups.map((group, i) => (
              <ItemWrapper key={`paramItem-${group.name}${i}`}>
                <ParamsItem
                  onClick={() => onSelect(group)}
                  active={selectedGroup?.uuid === group.uuid}
                >
                  {group.name}
                </ParamsItem>
              </ItemWrapper>
            ))}
          </ItemsContainer>
        ) : null}
        {selectedGroup && (
          <EditReductionForm
            group={selectedGroup}
            handleSubmit={handleSubmit}
            handleDelete={handleDelete}
          />
        )}
      </ReductionsContainer>
    </>
  );
};
