import clsx from 'clsx';
import * as React from 'react';
import { FieldError } from 'react-hook-form';

type FieldWrapperProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
  description?: string;
  inline?: boolean;
};

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'className' | 'children'>;

export const FieldWrapper = (props: FieldWrapperProps) => {
  const { label, className, error, children, inline = false } = props;
  return (
    <>
      <label
        className={clsx(
          'block text-sm font-medium text-slate-200',
          `${inline && 'flex gap-x-4'}`,
          className
        )}
      >
        {label}
        <div className='mt-1'>{children}</div>
      </label>
      {error?.message && (
        <div role='alert' aria-label={error.message} className='text-sm font-semibold text-red-500'>
          {error.message}
        </div>
      )}
    </>
  );
};
