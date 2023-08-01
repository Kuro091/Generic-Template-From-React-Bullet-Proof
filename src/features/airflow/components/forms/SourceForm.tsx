import { FieldValues, UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';
import { InputField } from '@/components/Form';

export type Source = {
  connection: string;
  script: string;
  param: string;
};

type SourceFormProps<T extends FieldValues> = {
  hookFormRegister: UseFormRegister<T>;
  onTestConnection: () => void;
};

export function SourceForm<T extends FieldValues>({
  hookFormRegister,
  onTestConnection,
}: SourceFormProps<T>) {
  return (
    <div className='flex flex-col gap-y-10'>
      <InputField
        type='text'
        label='Connection'
        registration={hookFormRegister('source.connection' as any)}
      />
      <InputField
        type='textarea'
        label='Script'
        registration={hookFormRegister('source.script' as any)}
      />
      <InputField
        type='textarea'
        label='Param'
        registration={hookFormRegister('source.param' as any)}
      />

      <button
        onClick={(e) => {
          e.preventDefault();
          onTestConnection();
        }}
        className='btn btn-primary'
      >
        Test Connection
      </button>
    </div>
  );
}
