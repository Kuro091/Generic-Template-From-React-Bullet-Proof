export type Source = {
  connection: string;
  script: string;
  param: string;
};

type SourceFormProps = Source & {
  updateFields: (fields: Partial<Source>) => void;
};

export const SourceForm = ({}: SourceFormProps) => {
  return <div>SourceForm</div>;
};
