export interface IEyeDiagnosis {
  sphere: number;
  cylinder: number;
  axis: number;
  add: number;
}

export interface IPatient {
  id: number;
  name: string;
  email?: string;
  dateOfBirth: string;
  phone: string;
  address: string;
  rightEye: IEyeDiagnosis;
  leftEye: IEyeDiagnosis;
  createdAt: string;
  updatedAt: string;
}

export interface ICreatePatientParams {
  name: string;
  email: string;
  dateOfBirth: string;
  phone: string;
  address: string;
  rightEye: IEyeDiagnosis;
  leftEye: IEyeDiagnosis;
}
