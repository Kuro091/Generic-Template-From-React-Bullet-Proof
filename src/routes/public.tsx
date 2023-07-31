import { lazyImport } from '@/utils/lazyImport';

const { AirFlowRoutes } = lazyImport(() => import('@/features/airflow'), 'AirFlowRoutes');
const { K8SRoutes } = lazyImport(() => import('@/features/k8s'), 'K8SRoutes');
const { MinIORoutes } = lazyImport(() => import('@/features/minio'), 'MinIORoutes');
const { VaultRoutes } = lazyImport(() => import('@/features/vault'), 'VaultRoutes');

export const publicRoutes = [
  {
    path: '/airflow/*',
    element: <AirFlowRoutes />,
  },
  {
    path: '/k8s/*',
    element: <K8SRoutes />,
  },
  {
    path: '/minio/*',
    element: <MinIORoutes />,
  },
  {
    path: '/vault/*',
    element: <VaultRoutes />,
  },
];
