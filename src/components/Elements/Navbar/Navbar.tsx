import { PiListDashesBold } from 'react-icons/pi';

interface NavbarProps {}

const Navbar = () => {
  return (
    <>
      <div className='navbar bg-black'>
        <div className='flex-none'>
          <button className='btn btn-square btn-ghost'>
            <PiListDashesBold size={30} />
          </button>
        </div>
        <div className='flex-1'>
          <a className='btn btn-ghost normal-case text-xl'>Dashboard</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
