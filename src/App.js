import './style.css'
import CarDashboard from "./components/CarDashboard";
import CarInput from "./components/CarInput";
import { useState } from 'react';


    const carSample = [
        {
            id: 1,
            name: 'Kia Sonet',
            value: 15000
        }
    ];
function App () {
    const [cars, setCars] = useState(carSample);

    return (
        <div className="container">
            <CarInput cars={cars} setCars={setCars} />
            <CarDashboard  />
        </div>
    )
}
export default App;