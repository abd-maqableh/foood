import React, { Component } from 'react'
import axios from 'axios'
export default class PostItem extends Component {
  state = {
    posts: []
  };

  componentWillMount() {
    axios
      .get("http://localhost:9000/post/all")
      .then(res => {
        this.setState({ posts: res.data });
        console.log('Post', this.state.posts)
      })
      .catch(err => {
        console.log(err);
      });
  }


  render() {
    return (
      <div className="row"  >
       
        {this.state.posts.map(post => {
          return (
            <div className="col-3" style={{margin:"20px" }} >
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{post.namefood}</h5>
                <p className="card-text">{post.description}</p>

                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">{post.amount}</li>
                <li class="list-group-item">{post.location}</li>
                <li class="list-group-item">Vestibulum at eros</li>
                </ul>
                <div class="card-body">
                <a href="#" class="card-link">{post.booking}</a>
               <a href="#" class="card-link">Another link</a>
                </div>
                </div>

              </div>
          )
        })
        }
        </div>
    )
  }
}
