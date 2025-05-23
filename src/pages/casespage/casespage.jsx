import { Table } from "react-bootstrap";
import NavigationBar from "../../components/navbar/navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCases} from "../../redux/caseslice"

const CasesPage = () => {
    const navigate = useNavigate();
    const loading  = useSelector((state) => state.cases.loading);
    const error = useSelector((state) => state.cases.error);
    const items = useSelector((state) => state.cases.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCases())
    }, [dispatch])


    return(
        <div>
            <NavigationBar/>
            
            <div className="container mt-5 mb-5">
                <button className="btn btn-primary mb-3 float-end" onClick={() => navigate("/cases/new")}>Create New Case</button>
                {loading && <p>loading...</p>}
                {error && <p>{error}</p>}
                {!loading && 
                <Table striped bordered hover variant="dark" size="sm">
                    <thead>
                        <tr>
                            <th>Case</th>
                            <th>Title</th>
                            <th>Contact</th>
                            <th>Account</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Created</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(cs => (
                        <tr key={cs.id} onClick={() => navigate(`/cases/${cs.id}`)}>
                            <td>{cs.id}</td>
                            <td>{cs.title}</td>
                            <td>{cs.contact}</td>
                            <td>{cs.account}</td>
                            <td>{cs.priority}</td>
                            <td>{cs.status}</td>
                            <td>{cs.created}</td>
                            <td>{cs.updated}</td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
                }
            </div>
        </div>
    )
}

export default CasesPage;