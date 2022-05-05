import React, { useEffect, useState } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ParamsItem } from '../../components/ParamsItem';
import { Button } from '../../ui-kit/Button';
import { ButtonsWrap, ItemsContainer, ItemWrapper, ProducersContainer } from './styled';
import { api } from '../../api/useApi';
import { EditProducerForm } from '../../components/EditProducerForm';

export interface IManufacturer {
  uuid: string;
  name: string;
  description: string;
}

export const Producers: React.FC = () => {
  const [manufacturers, setManufacturers] = useState<IManufacturer[]>([]);
  const [selected, setSelected] = useState<IManufacturer | null>();

  const getManufacturer = async () => {
    try {
      const res = await api.get<{ data: IManufacturer[] }>('/manufacturer/');
      setManufacturers(res.data.data);
    } catch (e) {}
  };

  const createManufacturer = async (
    name: string,
    description: string,
  ): Promise<IManufacturer | null> => {
    try {
      const res = await api.post('/manufacturer/', {
        name,
        description,
      });

      return res.data.data;
    } catch (e) {}

    return null;
  };

  const updateManufacturer = async ({ uuid, description, name }: IManufacturer) => {
    try {
      await api.put<{ data: IManufacturer }>(`/manufacturer/${uuid}/`, { description, name });
    } catch (e) {}
  };

  const deleteManufacturer = async (uuid: string) => {
    try {
      await api.delete<{ data: IManufacturer }>(`/manufacturer/${uuid}/`);
    } catch (e) {}
    setSelected(null);
  };

  useEffect(() => {
    // createManufacturer('3 group', '3 description').catch(console.error);

    getManufacturer().catch(console.error);
  }, []);

  const addProducer = () => setSelected({ uuid: '', name: '', description: '' });

  const onSelect = (manufacturer: { uuid: string; name: string; description: string }) => {
    setSelected(manufacturer);
  };

  const handleSubmit = async (name: string, description: string) => {
    // eslint-disable-next-line no-console
    console.log(name, description);

    if (selected?.uuid) {
      await updateManufacturer({ uuid: selected.uuid, name, description });
      setManufacturers(manufacturer =>
        manufacturer.map(manufacturer =>
          manufacturer.uuid === selected.uuid
            ? { uuid: manufacturer.uuid, name, description }
            : manufacturer,
        ),
      );
    } else {
      const newManufacturer = await createManufacturer(name, description);
      // eslint-disable-next-line no-console
      console.log(newManufacturer);
      if (newManufacturer) {
        setManufacturers(manufacturers => [
          ...manufacturers,
          {
            uuid: newManufacturer.uuid,
            name: newManufacturer.name,
            description: newManufacturer.description,
          },
        ]);
      }
    }
  };

  const handleDelete = async (uuid: string) => {
    setManufacturers(manufacturers => manufacturers.filter(el => el.uuid !== uuid));
    await deleteManufacturer(uuid);
  };

  return (
    <>
      <Breadcrumbs
        data={[
          {
            link: '/producers',
            title: 'Производители',
          },
        ]}
      />
      <ButtonsWrap>
        <Button onClick={addProducer} width="220px">
          Добавить производителя{' '}
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
