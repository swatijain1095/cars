import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, updateHighlightStr } from '../store/carSlice';
import { carNameSelector, carValueSelector, changeName, changeValue } from '../store/formSlice';


function CarInput() {
    const [isCarNameEmpty, setIsCarNameEmpty] = useState(false);
    const [isCarValueEmpty, setIsCarValueEmpty] = useState(false);
    const dispatch = useDispatch();
    const carName = useSelector(carNameSelector);
    const carValue = useSelector(carValueSelector);
    

    const getRandomInt = () => {
        return Math.floor(Math.random() * 100000);
    };

      const handleSubmit = (e) => {
        e.preventDefault();
        if(carName === '' || carValue === '') {
            carName === '' && setIsCarNameEmpty(true);
            carValue === '' && setIsCarValueEmpty(true);
        } else {
            dispatch(add({
                id: getRandomInt(),
                name: carName,
                value: parseInt(carValue)}))
            setIsCarNameEmpty(false);
            setIsCarValueEmpty(false);
            dispatch(changeName(''));
            dispatch(changeValue(''));
            dispatch(updateHighlightStr(''));
        }
    };

    console.log()

    return (
            <section className="car-input">
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label">Car Name</label>
                        <div className="control">
                            <input className={`input ${isCarNameEmpty ? 'is-danger' : ''}`} type="text" placeholder="Give Car name here" value={carName} onChange={(e) => {
                                dispatch(changeName(e.target.value))
                                dispatch(updateHighlightStr(e.target.value))}  }/>
                            {isCarNameEmpty && <p className='help is-danger'>Please enter car name</p>}
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Car Value</label>
                        <div className="control">
                            <input className={`input ${isCarValueEmpty ? 'is-danger' : ''}`} type="number" placeholder="Give Car value here" value={carValue} onChange={(e) => 
                                dispatch(changeValue(e.target.value))}/>
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


export default CarInput;