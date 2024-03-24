import PropTypes from 'prop-types';
import { useState } from 'react';

function CarInput({ cars, setCars }) {
    const [carName, setCarName] = useState('');
    const [carValue, setCarValue] = useState(0);
    const [isCarNameEmpty, setIsCarNameEmpty] = useState(false);
    const [isCarValueEmpty, setIsCarValueEmpty] = useState(false);

    const getRandomInt = () => {
        return Math.floor(Math.random() * 100000);
    };

    const handleSubmit = (e) => {
        //Generate new random id
        //construct a new car object
        //
        e.preventDefault();
        if(carName === '' || isNaN(carValue)) {
            carName === '' && setIsCarNameEmpty(true);
            isNaN(carValue) && setIsCarValueEmpty(true);
        } else {
            setIsCarNameEmpty(false)
            setIsCarValueEmpty(false)
        setCars([...cars, {
            id: getRandomInt(),
            name: carName,
            value: carValue
        }])}
    };

    console.log()

    return (
            <section className="car-input">
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label">Car Name</label>
                        <div className="control">
                            <input className={`input ${isCarNameEmpty ? 'is-danger' : ''}`} type="text" placeholder="Give Car name here" value={carName} onChange={(e) => setCarName(e.target.value)}/>
                            {isCarNameEmpty && <p className='help is-danger'>Please enter car name</p>}
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Car Value</label>
                        <div className="control">
                            <input className={`input ${isCarValueEmpty ? 'is-danger' : ''}`} type="number" placeholder="Give Car value here" value={carValue} onChange={(e) => setCarValue(parseInt(e.target.value))}/>
                            {isCarValueEmpty && <p className='help is-danger'>Please enter car value</p>}
                        </div>
                    </div>
                    <div className="field submit-btn">
                        <div className="control">
                             <button className="button is-link" type='Submit'>Submit</button>
                        </div>
                    </div>
                </form>
            </section>
    )
};

CarInput.propTypes = {
    cars: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
    })).isRequired,
    setCars: PropTypes.func.isRequired
}

export default CarInput;