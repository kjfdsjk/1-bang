import {useEffect, useState} from "react";
import axios from "axios";

export default function Students() {
    // let [list, setList] = useState([])
    // let [o, setO] = useState({});
    // let [idEdit, setIdEdit] = useState(-1);
    // useEffect(() => {
    //     loadList()
    // }, [])
    // const loadList = () => {
    //     axios.get('http://localhost:3000/students').then((res) => {
    //         setList(res.data)
    //     })
    // }
    // const handleChange = (e) => {
    //     setO({...o, [e.target.name]: e.target.value})
    // }
    // return (
    //     <>
    //         {list.map(item => (
    //             <h5>{item.name}, {item.description}, {item.score}, {item.action}
    //                 <button onClick={() => {
    //                     axios.get('http://localhost:3000/students/' + item.id).then((res) => {
    //                         setO(res.data)
    //                     })
    //                 }}>Edit
    //                 </button>
    //                 <button onClick={() => {
    //                     axios.delete('http://localhost:3000/students/' + item.id).then((res) => {
    //                         loadList()
    //                     })
    //                 }}>Xóa
    //                 </button>
    //             </h5>
    //         ))}
    //         <hr/>
    //         <input type="text" name={'name'} onChange={handleChange} value={o.name}/>
    //         <input type="text" name={'description'} onChange={handleChange} value={o.description}/>
    //         <input type="text" name={'score'} onChange={handleChange} value={o.score}/>
    //         <input type="text" name={'action'} onChange={handleChange} value={o.action}/>
    //         <button onClick={() => {
    //             axios.post('http://localhost:3000/students', o).then((res) => {
    //                 alert('Thành công')
    //                 loadList()
    //             })
    //         }}>Tạo
    //         </button>
    //         <button onClick={() => {
    //             axios.put('http://localhost:3000/students/' + o.id, o).then((res) => {
    //                 alert('Thành công')
    //                 loadList()
    //             })
    //         }}>Lưu
    //         </button>
    //         <hr/>
    //     </>
    // )
}