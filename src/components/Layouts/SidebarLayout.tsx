import { Sidebar } from '@/components/Elements/Sidebar';

const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className='flex w-screen min-h-screen '>
        <Sidebar />
        <main className='px-5 sm:p-4 w-full z-0'>{children}</main>
      </main>
    </>
  );
};

export default SidebarLayout;
