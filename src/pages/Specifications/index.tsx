import React, { useEffect, useState } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ParamsItem } from '../../components/ParamsItem';
import { Button } from '../../ui-kit/Button';
import { ButtonsWrap, ItemsContainer, ItemWrapper, SpecificationsContainer } from './styled';
import { api } from '../../api/api';
import { EditSpecificationForm } from '../../components/EditSpecificationForm';
import { categoriesData } from '../../components/Groups/data';

export interface ISpecifications {
  uuid: string;
  name: string;
  description: string;
  specificationFileUrl: string;
}

export const Specifications: React.FC = () => {
  const [specifications, setSpecifications] = useState<ISpecifications[]>([]);
  const [selected, setSelected] = useState<ISpecifications | null>();

  const getSpecifications = async () => {
    try {
      const res = await api.get<{ data: ISpecifications[] }>('/specification/');
      setSpecifications(res.data.data);
    } catch (e) {}
  };

  const createSpecification = async (
    name: string,
    description: string,
    specificationFileUrl: string,
  ): Promise<ISpecifications | null> => {
    try {
      const res = await api.post('/specification/', {
        name,
        description,
        specificationFileUrl,
      });

      return res.data.data;
    } catch (e) {}

    return null;
  };

  const updateSpecification = async ({ uuid, description, name }: ISpecifications) => {
    try {
      await api.put<{ data: ISpecifications }>(`/specification/${uuid}/`, { description, name });
    } catch (e) {}
  };

  const deleteSpecification = async (uuid: string) => {
    try {
      await api.delete<{ data: ISpecifications }>(`/specification/${uuid}/`);
    } catch (e) {}
    setSelected(null);
  };

  useEffect(() => {
    // createManufacturer('3 group', '3 description').catch(console.error);

    getSpecifications().catch(console.error);
  }, []);

  const addSpecification = () =>
    setSelected({ uuid: '', name: '', description: '', specificationFileUrl: '' });

  const onSelect = (specification: ISpecifications) => {
    setSelected(specification);
  };

  const handleSubmit = async (name: string, description: string, specificationFileUrl: string) => {
    // eslint-disable-next-line no-console
    console.log(name, description);

    if (selected?.uuid) {
      await updateSpecification({ uuid: selected.uuid, name, description, specificationFileUrl });
      setSpecifications(specifications =>
        specifications.map(specification =>
          specification.uuid === selected.uuid
            ? { uuid: specification.uuid, name, description, specificationFileUrl }
            : specification,
        ),
      );
    } else {
      const newSpecification = await createSpecification(name, description, specificationFileUrl);
      // eslint-disable-next-line no-console
      console.log(newSpecification);
      if (newSpecification) {
        setSpecifications(specifications => [
          ...specifications,
          {
            uuid: newSpecification.uuid,
            name: newSpecification.name,
            description: newSpecification.description,
            specificationFileUrl: newSpecification.specificationFileUrl,
          },
        ]);
      }
    }
  };

  const handleDelete = async (uuid: string) => {
    setSpecifications(specifications => specifications.filter(el => el.uuid !== uuid));
    await deleteSpecification(uuid);
  };

  return (
    <>
      <Breadcrumbs data={[categoriesData.specifications]} />
      <ButtonsWrap>
        <Button onClick={addSpecification} width="220px">
          Добавить спецификацию{' '}
        </Button>
      </ButtonsWrap>
      <SpecificationsContainer>
        {specifications.length ? (
          <ItemsContainer>
            {specifications.map((specification, i) => (
              <ItemWrapper
                onClick={() => onSelect(specification)}
                key={`specificationItem-${specification.name}${i}`}
              >
                <ParamsItem>{specification.name}</ParamsItem>
              </ItemWrapper>
            ))}
          </ItemsContainer>
        ) : null}
        {selected && (
          <EditSpecificationForm
            specification={selected}
            handleSubmit={handleSubmit}
            handleDelete={handleDelete}
          />
        )}
      </SpecificationsContainer>
    </>
  );
};
