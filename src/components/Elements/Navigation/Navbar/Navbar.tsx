import { PiListDashesBold } from 'react-icons/pi';
import { NavigationItem } from '../types';

interface NavbarProps {
  items: NavigationItem[];
  drawerId: string;
}

const Navbar = ({ items, drawerId }: NavbarProps) => {
  return (
    <>
      <div className='w-full navbar bg-black'>
        <div className='flex-none lg:hidden'>
          <label htmlFor={drawerId} className='btn btn-square btn-ghost'>
            <PiListDashesBold size={30} />
          </label>
        </div>
        <div className='flex-1 px-2 mx-2'>Dashboard Combinator</div>
        <div className='flex-none hidden lg:block '>
          <ul className='menu menu-horizontal text-white'>
            {/* Navbar menu content here */}
            {items.map((item) => (
              <li key={item.label}>
                <a className='text-white hover:text-blue-200 ' onClick={item.onClick}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
