export interface IManufacturer {
  uuid: string;
  name: string;
  description: string;
}

export interface ICreateManufacturerPayload {
  name: string;
  description: string;
}

export interface IUpdateManufacturerPayload {
  uuid: string;
  name: string;
  description: string;
}
