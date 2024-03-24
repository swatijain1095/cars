import CarList from "./CarList";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { carSelector } from '../store/carSlice';

function CarDashboard() {
    const [searchCar, setSearchCar] = useState('');
    const cars = useSelector(carSelector);
    const [filteredCars, setFilteredCars] = useState(cars);

    useEffect(() => {
        setFilteredCars(cars);
    }, [cars]);

    const handleSearch = (event) => {
        setSearchCar(event.target.value);

        const _filteredCars = cars.filter((car) => {
            return car.name.toLowerCase().includes(event.target.value.toLowerCase()) 
        })
        setFilteredCars(_filteredCars);
    };

    const totalCarValue =() => {
        return filteredCars.reduce((acc, cur) => {
            return acc + cur.value
        }, 0);
    }

    return (
        <section className='dashboard'>
            <header>
                <h2>My Cars</h2>
                <div className='field'>
                    <div className='control'>
                        <input className="input" placeholder='Search' value={searchCar} onChange={handleSearch}/>
                    </div>
                </div>
            </header>
            <CarList cars={filteredCars} />
            <footer>Total Value: ${totalCarValue()}</footer>
        </section>
    )
}


export default CarDashboard;