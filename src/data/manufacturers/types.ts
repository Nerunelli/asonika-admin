export interface IManufacturer {
  uuid: string;
  name: string;
  description: string;
}

export type ICreateManufacturerPayload = Omit<IManufacturer, 'uuid'>;
