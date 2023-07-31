export type Setting = {
  cpu: number;
  ram: number;
  batch: number;
  schedule: string;
  batchSize: number;
  isActive: boolean;
};

type SettingFormProps = Setting & {
  updateFields: (fields: Partial<Setting>) => void;
};

export const SettingForm = ({}: SettingFormProps) => {
  return <div>SettingForm</div>;
};
