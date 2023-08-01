import { FieldValues, UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';
import { InputField } from '@/components/Form';

export type Setting = {
  cpu: number;
  ram: number;
  batch: number;
  schedule: string;
  batchSize: number;
  isActive: boolean;
};

type SettingFormProps<T extends FieldValues> = {
  hookFormRegister: UseFormRegister<T>;
};

export const SettingForm = <T extends FieldValues>({ hookFormRegister }: SettingFormProps<T>) => {
  return (
    <div className='grid grid-cols-2 gap-x-7'>
      <div className='grid grid-cols-2 gap-y-5 gap-x-12 items-center'>
        <InputField
          type='number'
          label='CPU Input Number'
          registration={hookFormRegister('setting.cpu' as any)}
        />
        <InputField
          type='number'
          label='RAM Input Number'
          registration={hookFormRegister('setting.ram' as any)}
        />
        <InputField
          type='number'
          label='BATCH Input Number'
          registration={hookFormRegister('setting.batch' as any)}
        />
        <InputField
          type='number'
          label='BATCH Size Input Number'
          registration={hookFormRegister('setting.batchSize' as any)}
        />
      </div>

      <div className='flex flex-col gap-y-5'>
        <InputField
          type='text'
          label='Schedule'
          registration={hookFormRegister('setting.schedule' as any)}
        />
        <InputField
          parentClassName=''
          type='checkbox'
          label='Is Active'
          registration={hookFormRegister('setting.isActive' as any)}
        />
      </div>
    </div>
  );
};
