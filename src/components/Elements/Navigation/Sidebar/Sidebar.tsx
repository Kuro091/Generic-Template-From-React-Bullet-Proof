import { NavigationItem } from '../types';

interface DefaultSidebarProps {
  items: NavigationItem[];
  drawerId: string;
}

const DefaultSidebar = ({ items, drawerId }: DefaultSidebarProps) => {
  return (
    <>
      <div className='drawer-side'>
        <label htmlFor={drawerId} className='drawer-overlay'></label>
        <ul className='menu font-medium text-3xl pt-10 gap-y-10 p-4 w-80 h-full bg-slate-800'>
          {/* Sidebar content here */}
          {items.map((item) => (
            <li key={item.label}>
              <a className='text-white hover:text-blue-200' onClick={item.onClick}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DefaultSidebar;
