import { useParams } from "react-router-dom"
import NavigationBar from "../../components/navbar/navbar"
import { useSelector, useDispatch} from "react-redux";
import {fetchCaseById} from "../../redux/caseslice"
import { useEffect } from "react";



const Case = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const selectedCase = useSelector((state) => state.cases.selectedItem);
    console.log("id: " + id)
    console.log("case: " + selectedCase)

    useEffect(() => {
        if (id) {
            dispatch(fetchCaseById(id))
        }
    }, [id, dispatch]) 
    
    if(!selectedCase) {
        return (
            <div className="container mt-5 mb-5">
                <h5 className="text-info">Loading...</h5>
            </div>
        )
    }
    return(
        <div>
            <NavigationBar/>
            {selectedCase &&
            <div className="container mt-5 mb-5">
                <h5 className="text-info">{selectedCase.title}</h5>
                <div className="row">
                    <div className="col-sm-7 rounded border border-1 border-primary p-3 me-3">
                        <p>{selectedCase.description}</p>
                    </div>
                    <div className="col-sm-4 rounded border border-1 border-primary p-3">
                        <p>Case Number: {selectedCase.id}</p>
                        <p>Title: {selectedCase.title}</p>
                        <p>Created: {selectedCase.created}</p>
                        <p>Contact: {selectedCase.contact}</p>
                        <p>Status: {selectedCase.status}</p>
                        <p>Priority: {selectedCase.priority}</p>
                    </div>
                </div>
            </div>
            }
        </div>
        

    )
}

export default Case;