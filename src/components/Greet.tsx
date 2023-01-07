type GreetProps = {
  name: String;
  messageCount?: Number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${props.messageCount} unread messages`
          : `Welcome Guest`}
      </h2>
    </div>
  );
};

export default Greet;
