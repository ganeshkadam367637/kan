import React ,{ useState, useEffect } from "react";
import '../src_css/style.css';
import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router-dom";



function Edit_user(){
    const [data1,setData]=useState();
    const [f_name,setFname]=useState();
    const [m_name,setMname]=useState();
    const [l_name,setLname]=useState();
    const [employee_id,setEmployee_id]=useState();
    const [mobile,setMobile]=useState();
    const [email,setEmail]=useState();
    const [employee_city,setEmployee_city]=useState();
    const [role,setRole]=useState();
    const [start_date,setStart_date]=useState();
    const [last_w_date,setLast_w_date]=useState();
    const [password,setPassword]=useState();
    const [confirm_password, setConfirm_password] = useState();
    
    const pa=useParams();
    const re=useNavigate();

    useEffect(()=>{
        loaddata();
    },[])
    var loaddata=async()=>{
        var re =await axios.get(`http://localhost:5000/user_management/${pa.id}`);
        setData(re.data);
        setFname(re.data.f_name);
        setMname(re.data.m_name);
        setLname(re.data.l_name);
        setEmployee_id(re.data.employee_id);
        setMobile(re.data.mobile);
        setEmail(re.data.email);
        setEmployee_city(re.data.employee_city);
        setRole(re.data.role);
        setStart_date(re.data.start_date);
        setLast_w_date(re.data.last_w_date);
        setPassword(re.data.password);
        setConfirm_password(re.data.password); 
    }
    const submitform=async(id)=>{
        await axios.put(`http://localhost:5000/user_management/${id}`,{
            f_name:f_name,
            m_name:m_name,
            l_name:l_name,
            employee_id:employee_id,
            mobile:mobile,
            email:email,
            employee_city:employee_city,
            role:role,
            start_date:start_date,
            last_w_date:last_w_date,
            password:password,
            confirm_password: confirm_password,
        })
        .then(response=>{
         alert("successfully Updated..")
         re('//user-management')
        })
        .catch(error=>{
         alert("Data Not Updated...")
        })
     }

    return(
        <>
        <div className="midde_cont">
            <div className="container-fluid">
                <div className="row column_title">
                    <div className="col-md-12">
                        <div className="page_title">
                            <div className="row">
                                <div className="col-md-">
                                   <NavLink to='/user-management'><button className="btn text-white"style={{ backgroundColor: 'rgb(33, 65, 98)',height:'30px',width:'40px' }}><i class="fa-sharp fa-solid fa-arrow-left"></i></button></NavLink>
                                </div>
                                <div className="col-md-2 mt-1">
                                    <h2>Edit User</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row column_title">
                    <div className="col-md-12">
                        <div className="page_title">
                            <form action="" method="POST">
                                <p style={{ fontWeight: 'bold' }}>Name - {f_name+' '+m_name+' '+l_name}</p>
                                <div className="row">
                                    <div className="mt-2 col-md-4">
                                       <label>First Name :</label>
                                       <input type="text" name="f_name" className="form-control" onChange={(e)=>setFname(e.target.value)} required defaultValue={f_name}></input>
                                    </div>
                                    <div className="mt-2 col-md-4">
                                       <label>Middle Name :</label>
                                       <input type="text" name="m_name" className="form-control"onChange={(e)=>setMname(e.target.value)} required defaultValue={m_name}></input>
                                    </div>
                                    <div className="mt-2 col-md-4">
                                       <label>Last Name :</label>
                                       <input type="text" name="l_name" className="form-control"onChange={(e)=>setLname(e.target.value)} required defaultValue={l_name}></input>
                                    </div>
                                    <div className="mt-4 col-md-4">
                                       <label>Employee ID :</label>
                                       <input type="text" name="employee_id" className="form-control"onChange={(e)=>setEmployee_id(e.target.value)} required defaultValue={employee_id}></input>
                                    </div>
                                    <div className="mt-4 col-md-4">
                                       <label>Mobile :</label>
                                       <input type="number" name="mobile" className="form-control"onChange={(e)=>setMobile(e.target.value)}  required defaultValue={mobile}></input>
                                    </div>
                                    <div className="mt-4 col-md-4">
                                       <label>Email :</label>
                                       <input type="email" name="email" className="form-control"onChange={(e)=>setEmail(e.target.value)}  required defaultValue={email}></input>
                                    </div>
                                    <div className="mt-4 col-md-4">
                                       <label>Employee City :</label>
                                       <input type="text" name="employee_city" className="form-control"onChange={(e)=>setEmployee_city(e.target.value)}  required defaultValue={employee_city}></input>
                                    </div>
                                    <div className="mt-4 col-md-4">
                                       <label>Role :</label>
                                       <select type="text" name="role" className="form-control"onChange={(e)=>setRole(e.target.value)}  required value={role}>
                                          <option>Select...</option>
                                          <option>Accessories Manager</option>
                                          <option>Account Manager</option>
                                          <option>Cashier</option>
                                          <option>Finance Manager</option>
                                          <option>PDI Manager</option>
                                          <option>RTO Manager</option>
                                          <option>Coating Manager</option>
                                          <option>Fast Tag</option>
                                          <option>True Value Manager</option>
                                          <option>Security / Clearance Manager</option>
                                       </select>
                                    </div>
                                    <div className="mt-4 col-md-4">
                                       <label>Start Date:</label>
                                       <input type="date" name="start_date" className="form-control"onChange={(e)=>setStart_date(e.target.value)}   required defaultValue={start_date}></input>
                                    </div>
                                    <div className="mt-4 col-md-4">
                                       <label>Last Working Date:</label>
                                       <input type="date" name="last_w_date" className="form-control"onChange={(e)=>setLast_w_date(e.target.value)}   defaultValue={last_w_date}></input>
                                    </div>
                                    <div className="mt-4 col-md-4">
                                       <label>Password:</label>
                                       <input type="text" name="password" className="form-control"onChange={(e)=>setPassword(e.target.value)}  required defaultValue={password}></input>
                                    </div>
                                    <div className="mt-4 col-md-4">
                                       <label>Confirm Password:</label>
                                       <input type="text" name="confirm_password" className="form-control"onChange={(e)=>setConfirm_password(e.target.value)}  required defaultValue={password}></input>
                                    </div>
                                    <div class="col-md-12 text-center mt-5">
                                        <div className="row">
                                            <div className="col-md-6 d-flex justify-content-end">
                                              <NavLink to='/user-management'><button className="btn btn-outline-primary">Cancel</button></NavLink>
                                            </div>
                                            <div className="col-md-6 d-flex justify-content-start">
                                                <button className="btn text-white" style={{backgroundColor:'rgb(33, 65, 98)'}} onClick={()=>submitform(data1.id)}>Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Edit_user;