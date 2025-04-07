import { useParams } from "react-router-dom"
import NavigationBar from "../../components/navbar/navbar"
import { useSelector} from "react-redux";
import {getCaseById} from "../../redux/caseslice"




const Case = () => {
    const { id } = useParams();
    const activeCase = useSelector((state) => getCaseById(state, id));
    return(
        <div>
            <NavigationBar/>
            {activeCase &&
            <div className="container mt-5">
                <h1>{activeCase.id}</h1>
                <p>{activeCase.title}</p>
                <p>{activeCase.description}</p>
                <p>{activeCase.contact}</p>
                <p>{activeCase.status}</p>
                <p>{activeCase.priority}</p>
            </div>
            }
        </div>
        

    )
}

export default Case;