import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Student from "./Students.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import EmploymentStatus from "./EmploymentStatus.jsx";
import Delivery from "./Delivery.jsx";
import HandleClickButton from "./HandleClickButton.jsx";
import ProfilePicture from "./profilePicture.jsx";
import Counter from "./Counter.jsx";
import ColorPicker from "./ColorPicker.jsx";
import UpdaterFunctionCounter from "./UpdaterFunctionCounter.jsx";
import Car from "./Car.jsx";
import ArrayFoods from "./ArrayFoods.jsx";
import Cars from "./Cars.jsx";
import ToDoList from "./ToDoList.jsx";

function App() {
  const fruits = [{id: 1, name:"apple", calories: 95}, 
                  {id: 2, name: "orange", calories: 45}, 
                  {id: 3, name: "banana", calories: 105}, 
                  {id: 4, name: "coconut", calories: 159}, 
                  {id: 5, name: "pineapple", calories: 37}];

  const vegetables = [{id: 1, name:"potatoes", calories: 110}, 
                      {id: 2, name: "celery", calories: 15}, 
                      {id: 3, name: "carrots", calories: 25}, 
                      {id: 4, name: "corn", calories: 63}, 
                      {id: 5, name: "broccoli", calories: 50}];

  return (
    <>
      <Header />
      <ArrayFoods />
      <Button />
      <Card />
      <Card />
      <Car />
      <Cars />
      <Counter />
      <ColorPicker />
      <Delivery />
      <EmploymentStatus />
      <Food />
      <HandleClickButton />
      {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
      <ProfilePicture />
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Squiddward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student />
      <ToDoList />
      <UpdaterFunctionCounter />
      <UserGreeting isLoggedIn={true} username="IamSHIUBA" />
      <Footer />
    </>
  );
}

export default App;
