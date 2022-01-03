import axios from 'axios';
import React from 'react';
import { Redirect } from 'react-router';

class UpdateProducts extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        product_id: props.match.params.product_id,
        description: '',
        imag: '',
        name: '',
        price: '',
        stock: '',
        weigth: '',
        // redirect: null
      }
    }

    componentDidMount(){
      axios.get('http://localhost:3001/yggdrasil/updateproduct/'+this.state.product_id).then(res => {
        let data = res.data.data[0];
        console.log(data);
        this.setState({
          description: data.description,
          imag: data.imag,
          name: data.name,
          price: data.price,
          stock: data.stock,
          weigth: data.weigth,
        });
      }).catch(error => {
        console.log(error);
      });
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
      axios.post('http://localhost:3001/yggdrasil/eatupdateproduct', this.state).then(res => {
        console.log(res.data);
        if(res.data.result){
          this.setState({redirect: '/products'});
        }
      }).catch(error => {
        console.log(error);
      });
    }
    
    render(){
      console.log(this.state)
        if (this.state.redirect) {
          return <Redirect to={this.state.redirect} />
        }
        return(
          <main className="container">
            <div className="row">
              <div className="col-md-6">
              <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                  <label>description</label>
                  <input type="text" name="description"  class="form-control" placeholder="description"  value={this.state.description} onChange={this.handleChange} />
                </div>
                <div class="form-group">
                  <label>image</label>
                  <input type="text" name="image" class="form-control" placeholder="image" value={this.state.image} onChange={this.handleChange} />
                </div>
                <div class="form-group">
                  <label>name</label>
                  <input type="text" name="name" class="form-control" placeholder="name" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div class="form-group">
                  <label>price</label>
                  <input type="text" name="price" class="form-control" placeholder="price" value={this.state.price} onChange={this.handleChange} />
                </div>
                <div class="form-group">
                  <label>stock</label>
                  <input type="text" name="stock" class="form-control" placeholder="stock" value={this.state.stock} onChange={this.handleChange} />
                </div>
                <div class="form-group">
                  <label>weigth</label>
                  <input type="text" name="weigth" class="form-control" placeholder="weigth" value={this.state.weigth} onChange={this.handleChange} />
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

export default UpdateProducts;