// import axios from "axios";
// import { useEffect, useState } from "react";


// const api = import.meta.env.VITE_URL;
// const ListItem = () => {
//     const [data,setData] = useState([])

//     const listProduct = async () => {
//         const { data } = await axios.get(`${api}/api/v1/products/get`, {
//           withCredentials: true,
//         });
//         setData(data.results);
//       };
//       console.log(data);
    
//       useEffect(() => {
//         listProduct();
//       }, []);
//     return (
//         <div>
//                <div className="block">
//         {data.map((el,index) => (
//         <div key={index} className="list">
//             <h3>{el.title}</h3>
//         </div>
//         ))}
//       </div>
//         </div>
//     );
// };

// export default ListItem;