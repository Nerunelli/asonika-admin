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

  const handleSubmit = async (name: string, description: string) => {
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
      <Breadcrumbs
        data={[
          {
            link: '/manufacturers',
            title: 'Производители',
          },
        ]}
      />
      <ButtonsWrap>
        <Button onClick={addProducer} width="220px">
          Добавить производителя
        </Button>
      </ButtonsWrap>
      <ProducersContainer>
        {manufacturers.length ? (
          <ItemsContainer>
            {manufacturers.map((manufacturer, i) => (
              <ItemWrapper
                onClick={() => onSelect(manufacturer)}
                key={`manufacturerItem-${manufacturer.name}${i}`}
              >
                <ParamsItem>{manufacturer.name}</ParamsItem>
              </ItemWrapper>
            ))}
          </ItemsContainer>
        ) : null}
        {selected && (
          <EditProducerForm
            group={selected}
            handleSubmit={handleSubmit}
            handleDelete={handleDelete}
          />
        )}
      </ProducersContainer>
    </>
  );
};