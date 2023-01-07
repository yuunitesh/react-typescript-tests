import "./App.css";
import { Container } from "./components/Container";
import { Toast } from "./components/Toast";
// import { Button } from "./components/Button";
// import { Container } from "./components/Container";
// import { Box } from "./components/context/Box";
// import { ThemeContextProvider } from "./components/context/ThemeContext";
// import Greet from "./components/Greet";
// import { Input } from "./components/Input";
// import { Heading } from "./components/Heading";
// import { Oscar } from "./components/Oscar";
// import { Person } from "./components/Person";
// import { PersonList } from "./components/PersonList";
// import { Status } from "./components/Status";

function Application() {
  // const singleName = {
  //   first: "Nitesh",
  //   last: "Tudu",
  // };
  // const nameList = [
  //   {
  //     first: "Bruce",
  //     last: "Wayne",
  //   },
  //   {
  //     first: "Clark",
  //     last: "Kent",
  //   },
  //   {
  //     first: "Princess",
  //     last: "Diana",
  //   },
  // ];
  return (
    <div>
      <Toast position="center" />
    </div>
  );
}

export default Application;

// <Person name={singleName} />
// <PersonList names={nameList} />
// <Status status="error" />
// <Oscar>
//   <Heading children="Placeholder Text" />
// </Oscar>
//
// <Button
//   handleClick={(event, id) => console.log("Button Clicked!", event, id)}
// />
// <Input handleChange={(event) => console.log(event.target.value)} />
// <Greet name="Nitesh" isLoggedIn={false} />
// <Container styles={{ border: "1px solid black", padding: "1rem" }} />
// <ThemeContextProvider>
//   <Box />
// </ThemeContextProvider>
