import { FormEvent, useState } from 'react';
import { Source, SourceForm } from './SourceForm';
import { Destination, DestinationForm } from './DestinationForm';
import { Setting, SettingForm } from './SettingForm';
import { useMultistepForm } from '@/hooks/useMultiStepForm';
import { Form } from '@/components/Form';

type FormData = Source & Destination & Setting;

const defaultValues: FormData = {
  connection: '',
  script: '',
  param: '',
  format: [],
  cpu: 1,
  ram: 1,
  batch: 1,
  schedule: '',
  batchSize: 1,
  isActive: false,
};

export const MainForm = () => {
  // switch to use zustand later
  const [formData, setFormData] = useState<FormData>(defaultValues);
  function updateFields(fields: Partial<FormData>) {
    setFormData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <SourceForm {...formData} updateFields={updateFields} />,
    <DestinationForm {...formData} updateFields={updateFields} />,
    <SettingForm {...formData} updateFields={updateFields} />,
  ]);

  function onSubmit(e: FormData) {
    if (!isLastStep) return next();
    alert('Done!!');
  }

  return (
    <>
      <Form<FormData>
        onSubmit={(val) => {
          onSubmit(val);
        }}
      >
        {({ register }) => (
          <>
            <div>
              {currentStepIndex + 1} / {steps.length}
            </div>
            {step}
            <div
              style={{
                marginTop: '1rem',
                display: 'flex',
                gap: '.5rem',
                justifyContent: 'flex-end',
              }}
            >
              {!isFirstStep && (
                <button type='button' onClick={back}>
                  Back
                </button>
              )}
              <button type='submit'>{isLastStep ? 'Finish' : 'Next'}</button>
            </div>
          </>
        )}
      </Form>
    </>
  );
};
