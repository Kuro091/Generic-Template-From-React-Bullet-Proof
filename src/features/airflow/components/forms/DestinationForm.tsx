import { InputField, SelectField } from '@/components/Form';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export type Destination = {
  connection: string;
  format: string[];
  param: string;
};

type DestinationFormProps<T extends FieldValues> = {
  hookFormRegister: UseFormRegister<T>;
};

export function DestinationForm<T extends FieldValues>({
  hookFormRegister,
}: DestinationFormProps<T>) {
  return (
    <div className='flex flex-col gap-y-10'>
      <InputField
        type='text'
        label='Connection'
        registration={hookFormRegister('destination.connection' as any)}
      />
      <SelectField
        options={[
          { label: 'CSV', value: 'csv' },
          { label: 'JSON', value: 'json' },
        ]}
        label='Format'
        registration={hookFormRegister('destination.format' as any)}
      />
      <InputField
        type='textarea'
        label='Param'
        registration={hookFormRegister('destination.param' as any)}
      />
    </div>
  );
}
