import React, { useEffect, useState } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ParamsItem } from '../../components/ParamsItem';
import { Button } from '../../ui-kit/Button';
import { ButtonsWrap, ItemsContainer, ItemWrapper, ProducersContainer } from './styled';
import { EditProducerForm } from '../../components/EditProducerForm';
import { IManufacturer } from '../../data/manufacturers/types';
import { useEvent, useStore } from 'effector-react';
import { $manufacturersStore } from '../../data/manufacturers/stores';
import {
  createManufacturerFx,
  deleteManufacturerFx,
  loadManufacturerFx,
  updateManufacturerFx,
} from '../../data/manufacturers/effects';
import { categoriesData } from '../../components/Groups/data';

export const Manufacturers: React.FC = () => {
  const [selected, setSelected] = useState<IManufacturer | null>();

  const manufacturers = useStore($manufacturersStore);
  const getAllManufacturers = useEvent(loadManufacturerFx);
  const deleteManufacturer = useEvent(deleteManufacturerFx);
  const updateManufacturer = useEvent(updateManufacturerFx);
  const createManufacturer = useEvent(createManufacturerFx);

  useEffect(() => {
    getAllManufacturers().catch(console.error);
  }, []);

  const addProducer = () => setSelected({ uuid: '', name: '', description: '' });

  const onSelect = (manufacturer: { uuid: string; name: string; description: string }) => {
    setSelected(manufacturer);
  };

  const handleSubmit = async ({ name, description }: Omit<IManufacturer, 'uuid'>) => {
    if (selected?.uuid) {
      await updateManufacturer({ uuid: selected.uuid, name, description });
    } else {
      const res = await createManufacturer({ name, description });
      setSelected(res);
    }
  };

  const handleDelete = async (uuid: string) => {
    deleteManufacturer(uuid).catch(console.error);
    setSelected(null);
  };

  return (
    <>
      <Breadcrumbs data={[categoriesData.manufacturers]} />
      <ButtonsWrap>
        <Button onClick={addProducer} width="220px">
          Добавить производителя
        </Button>
      </ButtonsWrap>
      <ProducersContainer>
        {manufacturers.length ? (
          <ItemsContainer>
            {manufacturers.map((manufacturer, i) => (
              <ItemWrapper key={`manufacturerItem-${manufacturer.name}${i}`}>
                <ParamsItem
                  onClick={() => onSelect(manufacturer)}
                  active={manufacturer.uuid === selected?.uuid}
                >
                  {manufacturer.name}
                </ParamsItem>
              </ItemWrapper>
            ))}
          </ItemsContainer>
        ) : null}
        {selected && (
          <EditProducerForm group={selected} onSubmit={handleSubmit} onDelete={handleDelete} />
        )}
      </ProducersContainer>
    </>
  );
};
