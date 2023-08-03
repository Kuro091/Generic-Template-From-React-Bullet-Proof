import { lazyImport } from '@/utils/lazyImport';

const { AirFlowRoutes } = lazyImport(() => import('@/features/airflow'), 'AirFlowRoutes');
const { K8SRoutes } = lazyImport(() => import('@/features/k8s'), 'K8SRoutes');
const { MinIORoutes } = lazyImport(() => import('@/features/minio'), 'MinIORoutes');
const { VaultRoutes } = lazyImport(() => import('@/features/vault'), 'VaultRoutes');
const { JenkinsRoutes } = lazyImport(() => import('@/features/jenkins'), 'JenkinsRoutes');
const { GitLabRoutes } = lazyImport(() => import('@/features/gitlab'), 'GitLabRoutes');

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
  {
    path: '/gitlab/*',
    element: <GitLabRoutes />,
  },
  {
    path: '/jenkins/*',
    element: <JenkinsRoutes />,
  },
];
