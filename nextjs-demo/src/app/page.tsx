import Server from "../components/Server";
import Client from "../components/Client";
import 'bootstrap/dist/css/bootstrap.min.css';

// defines the root page (home page)
export default function Home(){
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Server serverMessage="Hello from the server component"></Server>
      <Client></Client>
    </div>
  )
}