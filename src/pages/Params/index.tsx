import React, { useEffect, useState } from 'react';
import { Button } from '../../ui-kit/Button';
import { ButtonsWrap, ItemsContainer, ItemWrapper, ParamsContainer } from './styled';
import { ParamsItem } from '../../components/ParamsItem';
// import { ParamForm } from '../../components/ParamForm';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { api } from '../../api/useApi';
import { EditForm } from '../../components/EditForm';

export interface IParam {
  uuid: string;
  measurement_group?: string;
  type?: number;
  name: string;
  description: string;
}

export const Params: React.FC = () => {
  const [params, setParams] = useState<IParam[]>([]);
  const [selected, setSelected] = useState<IParam | null>();

  const getParams = async () => {
    try {
      const res = await api.get<{ data: IParam[] }>('/parameter/');
      setParams(res.data.data);
    } catch (e) {}
  };

  const createParam = async (
    name: string,
    description: string,
    measurement_group?: string,
    type?: number,
  ): Promise<IParam | null> => {
    try {
      const res = await api.post('/parameter/', {
        name,
        description,
        measurement_group,
        type,
      });

      return res.data.data;
    } catch (e) {}

    return null;
  };

  const updateParam = async ({ uuid, description, name, type }: IParam) => {
    try {
      await api.patch<{ data: IParam }>(`/parameter/${uuid}/`, {
        description,
        name,
        type,
      });
    } catch (e) {}
  };

  const deleteParam = async (uuid: string) => {
    try {
      await api.delete<{ data: IParam }>(`/parameter/${uuid}/`);
    } catch (e) {}
    setSelected(null);
  };

  useEffect(() => {
    // createParam('3 group', '3 description', '50247ee4-d508-4b2b-9845-c9d5ea640718', 1).catch(
    //   console.error,
    // );

    getParams().catch(console.error);
  }, []);

  const addParam = () =>
    setSelected({ uuid: '', name: '', description: '', type: 1, measurement_group: '' });

  const onSelect = (param: {
    uuid: string;
    name: string;
    description: string;
    measurement_group?: string;
    type?: number;
  }) => {
    setSelected(param);
    // eslint-disable-next-line no-console
    console.log(param);
  };

  const handleSubmit = async (
    name: string,
    description: string,
    measurement_group?: string,
    type?: number,
  ) => {
    // eslint-disable-next-line no-console
    console.log(name, description);

    if (selected?.uuid) {
      await updateParam({ uuid: selected.uuid, name, description, type });
      setParams(param =>
        param.map(param =>
          param.uuid === selected.uuid ? { uuid: param.uuid, name, description, type } : param,
        ),
      );
    } else {
      const newParam = await createParam(name, description, measurement_group, type);
      // eslint-disable-next-line no-console
      console.log(newParam);
      if (newParam) {
        setParams(params => [
          ...params,
          {
            uuid: newParam.uuid,
            name: newParam.name,
            description: newParam.description,
            measurement_group: newParam.measurement_group,
            type: newParam.type,
          },
        ]);
      }
    }
  };

  const handleDelete = async (uuid: string) => {
    setParams(params => params.filter(el => el.uuid !== uuid));
    await deleteParam(uuid);
    await handleSubmit('', '', '', 1);
  };

  return (
    <>
      <Breadcrumbs
        data={[
          {
            link: '/params',
            title: 'Параметры',
          },
        ]}
      />
      <ButtonsWrap>
        <Button onClick={addParam} width="220px">
          Добавить параметр
        </Button>
        <Button variant="danger" width="220px">
          Удалить выбранные
        </Button>
      </ButtonsWrap>
      <ParamsContainer>
        {params.length ? (
          <ItemsContainer>
            {params.map((param, i) => (
              <ItemWrapper onClick={() => onSelect(param)} key={`paramItem-${param.name}${i}`}>
                <ParamsItem>{param.name}</ParamsItem>
              </ItemWrapper>
            ))}
          </ItemsContainer>
        ) : null}
        {/* <ParamForm /> */}
        {selected && (
          <EditForm
            group={selected}
            handleSubmit={handleSubmit}
            handleDelete={handleDelete}
            params
          />
        )}
      </ParamsContainer>
    </>
  );
};
