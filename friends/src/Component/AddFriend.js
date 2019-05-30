import React, { Component } from 'react';
class AddFriend extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: "",
      id: "",
      bestfriend: "",
    };
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleAdd= () => {
    const newHomie= this.state
    this.props.handleSubmits(newHomie)
    this.props.history.push('/');
    this.setState({
      name: "",
      age: "",
      email: "",
      bestfriend: "",
    })
  }

  componentDidMount(){
    console.log("on componentDidMount:",this.props.forUpdates)
    let id = this.props.forUpdates;
    if(id !== undefined){
      this.setState({
        name: id.name,
        age: id.age,
        email: id.email,
        id: id.id,
        bestfriend: id.bestfriend
      })
    } 

  }

  render() {

    return(
      <div className="col-12 row">
          <div className="col-5 mt-5">
            <form>
              <label for="friendName">Name</label>
              <input type="text" name="name" id="friendName" placeholder="New Name" value={this.state.name} onChange={this.handleInput}/>
            </form>
            <form>
              <label for="friendAge">Age</label>
              <input type="text" name="age" id="friendAge" placeholder="New Age" value={this.state.age} onChange={this.handleInput}/>
            </form>
            <form>
              <label for="friendEmail">Email</label>
              <input type="email" name="email" id="friendEmail" placeholder="New email" value={this.state.email} onChange={this.handleInput}/>
            </form>
            <form>
              <label for="bestfriend">bestfriend</label>
              <input type="text" name="bestfriend" id="bestfriend" placeholder="Best Friend" value={this.state.bestfriend} onChange={this.handleInput}/>
            </form>
            <button onClick={this.handleAdd}>Submit</button>
          </div>

      </div>
    )
  }


}

export default AddFriend;