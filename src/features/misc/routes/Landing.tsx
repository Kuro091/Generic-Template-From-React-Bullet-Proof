import MainLayout from '@/components/Layouts/MainLayout';
import { serviceConfigs } from '@/config/services';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <MainLayout>
      <div className='flex flex-col w-full h-full items-center gap-y-20 justify-center '>
        <h1 className='text-3xl'>Get Started with these links</h1>
        <div className='flex flex-wrap w-full px-16'>
          {serviceConfigs.map((service) => (
            <div className='w-1/4 p-4' key={service.name}>
              <Link to={service.route} rel='noreferrer'>
                <div className='bg-gray-900 rounded-lg p-4'>
                  <h2 className='text-xl'>{service.name}</h2>
                  <p>{service.description}</p>
                  {service.route}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Landing;
