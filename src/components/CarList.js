import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { remove, } from '../store/carSlice';
import { carFormSelector, changeFormValue } from '../store/formSlice';

function CarList({ cars }) {
    const dispatch = useDispatch();
    const { name: carName } = useSelector(carFormSelector);

    const handleDelete = (id) => {
        dispatch(remove(id))
    }

    const handleEdit = (id, name, value) => {
        dispatch(changeFormValue({name, value, id}));
    }

    const renderedList = cars.map(({ id, name, value }) => {
        return (
            <tr key={id} className={`data ${( carName !== '' && name.toLowerCase().includes(carName.toLowerCase())) ? 'is-selected' : ''}`}>
                <td>{`${name} - $${value}`}</td>
                <td className='edit-btn'><button className='button is-light' type='Edit' onClick={() => handleEdit(id, name, value)}>Edit</button></td>
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