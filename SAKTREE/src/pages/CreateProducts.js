import axios from 'axios';
import React from 'react';
import { Redirect } from 'react-router';

class CreateProducts extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        description: "",
        imag: "",
        name: "",
        price: "",
        stock: "",
        weigth: "",
        redirect: null
      }
    }

    handleChange = (e) => {
      console.log(e.target.name, e.target.value);
      let name = e.target.name;
      let value = e.target.value;
      this.setState({
        [name]: value
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3001/yggdrasil/insertproduct', this.state).then(res => {
        console.log(res.data);
        if(res.data.result){
          this.setState({redirect: '/product'});
        }
      }).catch(error => {
        console.log(error);
      });
    }
    
    render(){
      console.log(this.state);
      if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
      }
        return(
          <main className="container text-white">
            <div className="row">
              <div className="col-md-6">
              <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                  <label>description</label>
                  <input type="text" name="description" class="form-control" placeholder="description" onChange={this.handleChange} />
                </div>
                <div class="form-group">
                  <label>image</label>
                  <input type="text" name="image" class="form-control" placeholder="image" onChange={this.handleChange} />
                </div>
                <div class="form-group">
                  <label>name</label>
                  <input type="text" name="name" class="form-control" placeholder="name" onChange={this.handleChange} />
                </div>
                <div class="form-group">
                  <label>price</label>
                  <input type="text" name="price" class="form-control" placeholder="price" onChange={this.handleChange} />
                </div>
                <div class="form-group">
                  <label>stock</label>
                  <input type="text" name="stock" class="form-control" placeholder="stock" onChange={this.handleChange} />
                </div>
                <div class="form-group">
                  <label>weigth</label>
                  <input type="text" name="weigth" class="form-control" placeholder="weigth" onChange={this.handleChange} />
                </div>
                {/* <div class="form-group">
                  <label>type</label>
                  <input type="text" name="type.typeName" class="form-control" placeholder="type" onChange={this.handleChange} />
                </div> */}
                <button type="submit" class="btn btn-primary">บันทึก</button>
              </form>
              <br />
              </div>
            </div>
          </main>
        )
    }
}

export default CreateProducts;