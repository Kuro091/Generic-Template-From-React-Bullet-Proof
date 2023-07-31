export type Destination = {
  connection: string;
  format: string[];
  param: string;
};

type DestinationFormProps = Destination & {
  updateFields: (fields: Partial<Destination>) => void;
};

export const DestinationForm = ({}: DestinationFormProps) => {
  return <div>DestinationForm</div>;
};
