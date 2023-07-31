import MainLayout from '@/components/Layouts/MainLayout';
import { serviceConfigs } from '@/config/services';
import { MainForm } from '../components/forms';

const iframeUrl = serviceConfigs.find((service) => service.name.toLowerCase() === 'airflow')?.url;

const AirFlow = () => {
  return (
    <MainLayout>
      <section className='flex flex-1'>
        <div className='grid grid-cols-5 w-full'>
          <div className='col-span-3 p-24 flex flex-col gap-y-11'>
            <h1 className='text-3xl'>AirFlow</h1>
            <iframe className='w-full h-full' src={iframeUrl} />
          </div>
          <div className='col-span-2 pt-24 pr-10'>
            <MainForm />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AirFlow;
