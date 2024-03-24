import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { remove } from '../store/carSlice';

function CarList({ cars }) {
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(remove(id))
    }

    const renderedList = cars.map(({ id, name, value }) => {
        return (
            <tr key={id} className='data'>
                <td>{`${name} - $${value}`}</td>
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