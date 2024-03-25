import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { remove, edit } from '../store/carSlice';
import { carNameSelector } from '../store/formSlice';
import { useState } from 'react';

function CarList({ cars }) {
    const [isEdit, setIsEdit] = useState(null);
    const [nameEdit, setNameEdit] = useState('');
    const [valueEdit, setValueEdit] = useState('');
    const dispatch = useDispatch();
    const carName = useSelector(carNameSelector)

    const handleDelete = (id) => {
        dispatch(remove(id))
    }

    const handleEdit = (id, name, value) => {
        setIsEdit(id);
        setNameEdit(name);
        setValueEdit(value);
    }

    const handleSubmit = (id) => {
        dispatch(edit({ id, name: nameEdit, value: parseInt(valueEdit) }));
        setIsEdit(null);
        setNameEdit('');
        setValueEdit('');
    }



    const renderedList = cars.map(({ id, name, value }) => {
        return (
            <tr key={id} className={`data ${( carName !== '' && name.toLowerCase().includes(carName.toLowerCase())) ? 'is-selected' : ''}`}>
                <td>{isEdit === id ? (<span>
                        <input value={nameEdit} onChange={(e) => setNameEdit(e.target.value)} />
                        <input value={valueEdit} onChange={(e) => setValueEdit(e.target.value)} />
                    </span>
                ) : `${name} - $${value}`}</td>
                {isEdit === id ? (<td className='edit-btn'><button className='button is-light' type='Submit' onClick={() => handleSubmit(id)}>
                    Submit</button></td>) 
                    :
                    (<td className='edit-btn'><button className='button is-light' type='Edit' onClick={() => handleEdit(id, name, value)}>Edit</button></td>)}
                <td className='delete-btn'><button className="button is-light" type='Delete' onClick={() => handleDelete(id)}>Delete</button></td>
            </tr>
        )
    })
    return (
        <div className='table'>
            <table>
                <tbody>
                    {renderedList}
                </tbody>
            </table>
        </div>
    )
}

CarList.propTypes = {
    cars: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
    })).isRequired
}


export default CarList;