import './style.css'
import CarDashboard from "./components/CarDashboard";
import CarInput from "./components/CarInput";
import { useState } from 'react';


    const carSample = [
        {
            id: 1,
            name: 'Kia Sonet',
            value: 15000
        },
        {
            id: 2,
            name: 'Kia Seltos',
            value: 20000
        },
        {
            id: 3,
            name: 'Kia Carens',
            value: 25000
        }
    ];
function App () {
    const [cars, setCars] = useState(carSample);

    return (
        <div className="container">
            <CarInput cars={cars} setCars={setCars} />
            <hr></hr>
            <CarDashboard cars={cars} setCars={setCars} />
        </div>
    )
}
export default App;