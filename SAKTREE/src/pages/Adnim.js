import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


// const api = axios.create({
//   baseURL: "http://localhost:3001/yggdrasil/searchproduct"
// })

// require("es6-promise").polyfill();
// require("isomorphic-fetch");
// const [data,setData] = useState([]);
// const [q, setQ] = useState("");
export default class Adnim extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          data: [{
            _id: "",
            description: "",
            imag: "",
            name: "",
            price: "",
            stock: "",
            weigth: "",
            // type: [],
          }]
        }
      //   api.get('/').then(res => {
      //     console.log (res.data)
      //     this.setState({ courses: res.data })
      //   })
      }

    componentDidMount(){
      this.getData()
    }

    getData = () => {
      axios.get("http://localhost:3001/yggdrasil/searchproduct")
      .then((res) => {
        // this.setState({data: res.data});
        // this.setState({data: res.data.data});
        this.setState({data: res.data.response.data});
        // console.log(this.state.data);
        // alert(JSON.stringify(this.state.data[0]))
        // alert(JSON.stringify(res.data))
      // .then(
        // (result) => {
          // this.setState({data: result.data.response.data})
          // alert(this.state)
          // alert(JSON.stringify(result.data.response.data))

      }).catch((error) => {
        console.log(error);
      });
    }

    handleDelete = (product_id) => {
      console.log(product_id);
      axios.get('http://localhost:3001/yggdrasil/deleteproduct/'+product_id).then(res => {
        console.log(res.data);
        if(res.data.result){
          this.getData();
        }
      }).catch(error => {
        console.log(error);
      });
    }
      render(){  
        console.log(this.state.data);
          return (
            <main>
            <div className="row">
              <div className="col-md-12">
                <Link to="/create-products" className="btn btn-info">New Create</Link>
                <table className="table">
                  <tr>
                    <th>#</th>
                    <th>description</th>
                    <th>image</th>
                    <th>name</th>
                    <th>price</th>
                    <th>stock</th>
                    <th>weigth</th>
                    {/* <th>typeName</th> */}
                    <th></th>
                  </tr>

                  {this.state.data.map(item => (
                    <tr>
                      <td>{item._id}</td>
                      <td>{item.description}</td>
                      <td>{item.image}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.stock}</td>
                      <td>{item.weigth}</td>
                      {/* <td>{item.type.typeName}</td> */}
                      <td>
                        <Link to={"/update-products/"+item._id} className="btn btn-info">Update</Link> 
                        <button className="btn btn-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.handleDelete(item._id) } }>Delete</button>
                      </td>
                    </tr>
                  ))}
                  
                </table>
              </div>
            </div>
          </main>
        );
      }
}