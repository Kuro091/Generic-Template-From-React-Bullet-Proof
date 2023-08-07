import { useState } from 'react';
import { Source, SourceForm } from './SourceForm';
import { Destination, DestinationForm } from './DestinationForm';
import { Setting, SettingForm } from './SettingForm';
import { Form } from '@/components/Form';
import { FieldValues, UseFormRegister, useForm } from 'react-hook-form';
import { DaisyTabs } from '@/components/Elements/UIWithLib/DaisyTabs';

type FormData = {
  source: Source;
  destination: Destination;
  setting: Setting;
};

const defaultValues: FormData = {
  source: {
    connection: '',
    script: '',
    param: '',
  },
  destination: {
    connection: '',
    format: [],
    param: '',
  },
  setting: {
    cpu: 0,
    ram: 0,
    batch: 0,
    schedule: '',
    batchSize: 0,
    isActive: false,
  },
};

export const MainForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { register, watch, handleSubmit, reset, getValues } = useForm<FormData>({
    defaultValues,
  });

  const renderTabsWithHookForm: <T extends FieldValues>(register: UseFormRegister<T>) => Tab[] = (
    register
  ) => {
    return [
      {
        name: 'Source',
        active: activeTab === 0,
        onClick: () => changeTab(0),
        render: () => (
          <SourceForm hookFormRegister={register} onTestConnection={handleTestSourceConnection} />
        ),
      },
      {
        name: 'Destination',
        active: activeTab === 1,
        onClick: () => changeTab(1),
        render: () => <DestinationForm hookFormRegister={register} />,
      },
      {
        name: 'Setting',
        active: activeTab === 2,
        onClick: () => changeTab(2),
        render: () => <SettingForm hookFormRegister={register} />,
      },
    ];
  };

  const tabs = renderTabsWithHookForm(register);

  function changeTab(index: number) {
    setActiveTab(index);
  }

  const handleTestSourceConnection = () => {
    const values = getValues();
    alert(`Gonna test with these values: \n ${JSON.stringify(values.source, null, 2)}`);
  };

  function onSubmit(e: FormData) {
    alert(`Recorded values: \n ${JSON.stringify(e, null, 2)}`);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DaisyTabs tabs={tabs} />
        <div className='flex gap-x-2'>
          <button
            className='btn btn-primary mt-10 font-bold py-12 grid place-content-center text-2xl rounded-md  flex-1'
            type='submit'
          >
            Save changes
          </button>
          <button
            className='btn btn-accent mt-10 font-bold py-12 grid place-content-center text-2xl rounded-md  flex-1'
            type='reset'
            onClick={() => {
              reset();
            }}
          >
            Cancel/Clear
          </button>
        </div>
      </form>
    </>
  );
};
