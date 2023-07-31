import MainLayout from '@/components/Layouts/MainLayout';
import { serviceConfigs } from '@/config/services';

const iframeUrl = serviceConfigs.find((service) => service.name === 'vault')?.url;

const Vault = () => {
  return <MainLayout>Vault</MainLayout>;
};

export default Vault;
