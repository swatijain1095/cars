import PropTypes from 'prop-types';
import CarList from "./CarList";

function CarDashboard({ cars, setCars }) {

    const totalCarValue =() => {
        return cars.reduce((acc, cur) => {
            return acc + cur.value
        }, 0);
    }

    return (
        <section className='dashboard'>
            <header>
                <h2>My Cars</h2>
                <div className='field'>
                    <div className='control'>
                        <input className="input" placeholder='Search'/>
                    </div>
                </div>
            </header>
            <CarList cars={cars} setCars={setCars}/>
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