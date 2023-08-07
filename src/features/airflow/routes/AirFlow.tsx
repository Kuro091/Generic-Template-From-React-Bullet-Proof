import MainLayout from '@/components/Layouts/MainLayout';
import { serviceConfigs } from '@/config/services';
import { MainForm } from '../components/forms';
import { formatDate } from '@/utils/formatDate';
import { DataTable } from '@/components/Elements/UIWithLib/DataTable/DataTable';
import React from 'react';
import { ColumnDef } from 'unstyled-table';

const iframeUrl = serviceConfigs.find((service) => service.name.toLowerCase() === 'airflow')?.url;

interface TestData {
  title: string;
  description: string;
  date: Date;
}

const data: TestData[] = [
  {
    title: 'Airflow',
    description: 'Airflow is a platform to programmaticaly author, schedule and monitor workflows.',
    date: new Date(),
  },
  {
    title: 'Apache Spark',
    description: 'Apache Spark is a unified analytics engine for large-scale data processing.',
    date: new Date(),
  },
  {
    title: 'Apache Kafka',
    description:
      'Apache Kafka is an open-source distributed event streaming platform used by thousands of companies for high-performance data pipelines, streaming analytics, data integration, and mission-critical applications.',
    date: new Date(),
  },
  {
    title: 'Apache Superset',
    description:
      'Apache Superset is a modern, enterprise-ready business intelligence web application.',
    date: new Date(),
  },
  {
    title: 'Apache Hadoop',
    description:
      'The Apache Hadoop software library is a framework that allows for the distributed processing of large data sets across clusters of computers using simple programming models.',
    date: new Date(),
  },
  {
    title: 'Apache Hive',
    description:
      'Apache Hive is a data warehouse infrastructure built on top of Hadoop for providing data summarization, query, and analysis.',
    date: new Date(),
  },
  {
    title: 'Apache Druid',
    description:
      "Apache Druid is a high performance real-time analytics database. Druid's column orientation and inverted index design supports fast aggregation queries on petabyte sized data sets.",
    date: new Date(),
  },
  {
    title: 'Apache Flink',
    description:
      'Apache Flink is an open source stream processing framework with powerful stream- and batch-processing capabilities.',
    date: new Date(),
  },
  {
    title: 'Apache Kylin',
    description:
      'Apache Kylin is an open source Distributed Analytics Engine designed to provide SQL interface and multi-dimensional analysis (OLAP) on Hadoop supporting extremely large datasets.',
    date: new Date(),
  },
  {
    title: 'Apache Beam',
    description:
      'Apache Beam is an open source, unified model and set of language-specific SDKs for defining and executing data processing workflows, and also data ingestion and integration flows, supporting Enterprise Integration Patterns (EIPs) and Domain Specific Languages (DSLs).',
    date: new Date(),
  },
  {
    title: 'Apache NiFi',
    description:
      'Apache NiFi supports powerful and scalable directed graphs of data routing, transformation, and system mediation logic.',
    date: new Date(),
  },
  {
    title: 'Apache Oozie',
    description: 'Apache Oozie is a workflow scheduler system to manage Apache Hadoop jobs.',
    date: new Date(),
  },
];

const AirFlow = () => {
  const columns = React.useMemo<ColumnDef<TestData, unknown>[]>(
    () => [
      {
        accessorKey: 'title',
        header: 'Title',
        enableSorting: false,
        cell: ({ cell }) => {
          const val = cell.getValue() as string;
          return <div>Value is {val}</div>;
        },
      },
      {
        accessorKey: 'desc',
        header: 'Description',
        cell: ({ cell }) => {
          const desc = cell.getValue() as string;

          return <div>{desc}</div>;
        },
      },
      {
        accessorKey: 'errorCount',
        header: 'Errors',
      },
      {
        accessorKey: 'createdAt',
        header: 'Date',
        cell: ({ cell }) => {
          const date = cell.getValue() as Date;

          return <span> {formatDate(date)}</span>;
        },
      },
    ],
    []
  );

  return (
    <MainLayout>
      <section className='flex flex-col flex-1 mx-auto gap-y-10'>
        <DataTable columns={columns} data={data} pageCount={data.length} />
        <MainForm />
      </section>
    </MainLayout>
  );
};

export default AirFlow;
