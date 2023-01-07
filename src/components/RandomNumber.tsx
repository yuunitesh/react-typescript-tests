type RandomNumberType = {
  value: number;
};

type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: boolean;
  isZero?: boolean;
};

type NegativeNumber = RandomNumberType & {
  isPositive?: boolean;
  isNegative: boolean;
  isZero?: boolean;
};
type Zero = RandomNumberType & {
  isPositive?: boolean;
  isNegative?: boolean;
  isZero: boolean;
};
type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;

export const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      <h2>
        {value} is {isPositive && "Positive"} {isNegative && "negative"}{" "}
        {isZero && "Zero"}
      </h2>
    </div>
  );
};
