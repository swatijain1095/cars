import { useDispatch, useSelector } from 'react-redux';
import { add, edit } from '../store/carSlice';
import { carFormSelector, changeFormValue, resetForm } from '../store/formSlice';


function CarInput() {
    const dispatch = useDispatch();
    const { name, id, value, isNameError, isValueError } = useSelector(carFormSelector);

    const getRandomInt = () => {
        return Math.floor(Math.random() * 100000);
    };

      const handleSubmit = (e) => {
        e.preventDefault();
        if(name === '' || value === '') {
            dispatch(changeFormValue({isNameError: name === '', isValueError : value === ''}));
        } else {
            if (id === null) {
                dispatch(add({
                    id: getRandomInt(),
                    name,
                    value: parseInt(value)
                }));
            } else {
               dispatch(edit({ id, name, value: parseInt(value)})); 
            }
            dispatch(resetForm());
        }
    };

    return (
            <section className="car-input">
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label">Car Name</label>
                        <div className="control">
                            <input className={`input ${isNameError ? 'is-danger' : ''}`} type="text" placeholder="Give Car name here" value={name} onChange={(e) => dispatch(changeFormValue({name: e.target.value}))}/>
                            {isNameError && <p className='help is-danger'>Please enter car name</p>}
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Car Value</label>
                        <div className="control">
                            <input className={`input ${isValueError ? 'is-danger' : ''}`} type="number" placeholder="Give Car value here" value={value} onChange={(e) => 
                                dispatch(changeFormValue({ value: e.target.value}))}/>
                            {isValueError && <p className='help is-danger'>Please enter car value</p>}
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