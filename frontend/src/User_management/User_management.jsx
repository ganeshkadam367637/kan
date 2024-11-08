import React,{ useState, useEffect } from "react";
import axios from "axios";
import '../src_css/style.css';
import { NavLink } from "react-router-dom";



function User_management(){
    const [data1,setData]=useState([]);
    useEffect(()=>{
        loaddata();
    },[])
    
    const loaddata=async()=>{
        const result=await axios.get('http://localhost:5000/user_management')
        setData(result.data);
    }
    console.log(data1);

    return(
        <>
        <div className="midde_cont">
            <div className="container-fluid">
                <div className="row column_title">
                    <div className="col-md-12">
                        <div className="page_title">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2>User Management</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row column_title">
                    <div className="col-md-12">
                        <div className="page_title">
                           <h4>List</h4>
                           <div className=" d-flex justify-content-start mb-2">
                             <input type="text" placeholder="Search..."style={{padding: '4px',fontSize: '13px',borderRadius: '4px',border: '1px solid #ccc', width: '100%',maxWidth: '300px'}}></input>
                           </div>
                           <div className=" d-flex justify-content-end mb-2">
                               <NavLink to='/add-user'><button className="btn text-white"style={{ backgroundColor: 'rgb(33, 65, 98)' }}><i class="fa-solid fa-plus"></i> Add New User</button></NavLink>
                           </div>
                            <table className="table table-info table-bordered table-striped table-hover">
                                <thead>
                                <tr>
                                    <th>Sr.No</th>
                                    <th>Name</th>
                                    <th>Mobile</th>
                                    <th>Emp Id</th>
                                    <th>Email</th>
                                    <th>Roles</th>
                                    <th>Active</th>
                                    <th>Start Date</th>
                                    <th>Last Working Date</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                {data1.map((item,index)=>
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{item.f_name + ' ' + item.l_name}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.employee_id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td className={item.status.toLowerCase() === "inactive" ? "text-danger" : "text-success"}>{item.status}</td>
                                    <td>{item.start_date}</td>
                                    <td>{item.last_w_date}</td>
                                    <td>
                                        <NavLink to={`/edit-user/${item.user_id}`}><button className="btn btn-info">Edit</button></NavLink>
                                        <button className="btn btn-danger ml-2">Delete</button>
                                    </td>
                                </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        </>
    )
}
export default User_management;