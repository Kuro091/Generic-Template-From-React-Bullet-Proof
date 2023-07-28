import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { NavigationItem } from './types';

interface NavigationProps {
  children: React.ReactNode;
}

const testLinks: NavigationItem[] = [
  {
    label: 'Home',
    onClick: () => {},
  },
  {
    label: 'About',
    onClick: () => {},
  },
];

const Navigation = ({ children }: NavigationProps) => {
  const drawerId = 'my-drawer';

  return (
    <>
      <div className='drawer'>
        <input id={drawerId} type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex flex-col'>
          <Navbar items={testLinks} drawerId={drawerId} />
          {children}
        </div>
        <Sidebar items={testLinks} drawerId={drawerId} />
      </div>
    </>
  );
};

export default Navigation;
