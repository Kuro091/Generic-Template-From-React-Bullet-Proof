import { serviceConfigs } from '@/config/services';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { NavigationItem } from './types';

interface NavigationProps {
  children: React.ReactNode;
}

const Navigation = ({ children }: NavigationProps) => {
  const drawerId = 'my-drawer';
  const links: NavigationItem[] = serviceConfigs.map((service) => ({
    label: service.name,
    to: service.route,
    url: service?.url ?? '',
    onClick: () => {},
  }));

  return (
    <>
      <div className='drawer h-full'>
        <input id={drawerId} type='checkbox' className='drawer-toggle' />
        <div className='drawer-content h-full flex flex-col'>
          <Navbar items={links} drawerId={drawerId} />
          {children}
        </div>
        <Sidebar items={links} drawerId={drawerId} />
      </div>
    </>
  );
};

export default Navigation;
