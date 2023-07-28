import { Navbar } from '../Elements/Navbar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Navbar />
      {children}
    </main>
  );
};

export default MainLayout;
