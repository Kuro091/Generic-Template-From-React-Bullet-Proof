import MainLayout from '@/components/Layouts/MainLayout';
import { serviceConfigs } from '@/config/services';

const iframeUrl = serviceConfigs.find((service) => service.name.toLowerCase() === 'minio')?.url;

const MinIO = () => {
  return (
    <MainLayout>
      <section className='flex flex-1'>
        <div className='grid grid-cols-5 w-full'>
          <div className='col-span-3 p-24 flex flex-col gap-y-11'>
            <h1 className='text-3xl'>MinIO</h1>
            <iframe className='w-full h-full' src={iframeUrl} />
          </div>
          <div className='col-span-2 p-24'>Configs here</div>
        </div>
      </section>
    </MainLayout>
  );
};

export default MinIO;
