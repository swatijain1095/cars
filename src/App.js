import './style.css'
import CarDashboard from "./components/CarDashboard";
import CarInput from "./components/CarInput";


function App () {

    return (
        <div className="container">
            <CarInput />
            <hr></hr>
            <CarDashboard />
        </div>
    )
}
export default App;