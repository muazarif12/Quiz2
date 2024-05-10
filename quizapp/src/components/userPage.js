import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setData } from "../redux/app.reducer";
const UserPage = () => {
    
    const token = useSelector((state) => state.user.token);
    const dispatch = useDispatch();   
    
    useEffect(() => {
        getData();
    }, []);


    const getData = async () => {
        
        const response = await axios({
            method: "GET",
            url: "https://sandbox.practical.me/api/user/profile",
            headers: { Authorization: `Bearer ${token}` },
          });
          dispatch(setData(response.data.datas));
        };



    
    
    
    return (
        <div>
            <h1>User Page</h1>
        </div>
    );
    
}

export default UserPage;