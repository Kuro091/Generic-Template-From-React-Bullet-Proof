import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: 'text' | 'email' | 'password' | 'textarea' | 'number' | 'checkbox';
  className?: string;
  registration?: Partial<UseFormRegisterReturn>;
  checkboxLabel?: string;
  parentClassName?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputField = (props: InputFieldProps) => {
  const {
    type = 'text',
    label,
    className,
    registration,
    error,
    parentClassName,
    placeholder,
    value,
    onChange,
  } = props;
  return (
    <>
      {type !== 'textarea' && type !== 'checkbox' && (
        <FieldWrapper className={parentClassName} label={label} error={error}>
          <input
            value={value}
            type={type}
            className={clsx(
              'appearance-none text-gray-900 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm',
              className
            )}
            placeholder={placeholder}
            onChange={onChange}
            {...registration}
          />
        </FieldWrapper>
      )}
      {type == 'textarea' && (
        <FieldWrapper className={parentClassName} label={label} error={error}>
          <textarea
            rows={5}
            className={clsx(
              'appearance-none text-gray-900 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm',
              className
            )}
            {...registration}
          />
        </FieldWrapper>
      )}
      {type == 'checkbox' && (
        <FieldWrapper inline className={parentClassName} label={label} error={error}>
          <input type={type} className={clsx('', className)} {...registration} />
        </FieldWrapper>
      )}
    </>
  );
};
