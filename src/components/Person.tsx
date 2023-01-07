type PersonProps = {
  name: {
    first: String;
    last: String;
  };
};

export const Person = function (props: PersonProps) {
  return (
    <div>
      <h2>
        {props.name.first} {props.name.last}
      </h2>
    </div>
  );
};
