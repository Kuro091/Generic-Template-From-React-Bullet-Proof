import { Navigation } from '../Elements/UI/Navigation';

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
      <Navigation>{children}</Navigation>
    </main>
  );
};

export default MainLayout;
