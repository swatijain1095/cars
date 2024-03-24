import PropTypes from 'prop-types';
import CarList from "./CarList";
import { useState } from 'react';

function CarDashboard({ cars, setCars }) {
    const [searchCar, setSearchCar] = useState('');
    const [filteredCars, setFilteredCars] = useState(cars);

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
            <CarList cars={filteredCars} setCars={setCars}/>
            <footer>Total Value: ${totalCarValue()}</footer>
        </section>
    )
}
CarDashboard.propTypes = {
    cars: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
    })).isRequired,
    setCars: PropTypes.func.isRequired
}


export default CarDashboard;