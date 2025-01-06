import StateComponent from "../components/StateComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css"
export default function Home(){
  return (
    <div>
      <h1>State Management</h1>
      <StateComponent></StateComponent>
    </div>
  );
}