import Tabs from '@/components/Elements/Tabs/Tabs';
import MainLayout from '@/components/Layouts/MainLayout';
import { serviceConfigs } from '@/config/services';
import { useState } from 'react';

const Landing = () => {
  const services = [...serviceConfigs];
  const [isOpen, setIsOpen] = useState(true);

  return (
    <MainLayout>
      <Tabs data={services} />
    </MainLayout>
  );
};

export default Landing;
