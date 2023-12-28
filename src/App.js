import logo from './logo.svg';
import './App.css';
import Header from './Header';
import ShipmentsTable from './Shipment';
import NewShipmentForm from './CreateShipment';
import UpdateLocation from './UpdateLocation';
import GenerateReciept from './GenerateReciept';

function App() {
  return (
    <div className="App">
      < Header />
      <ShipmentsTable />
      <NewShipmentForm />
      <UpdateLocation />
      <GenerateReciept />
      <GenerateReciept />

    </div>
  );
}

export default App;
