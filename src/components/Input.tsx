type InputProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
  return <input type="text" onChange={props.handleChange} />;
};
