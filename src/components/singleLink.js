import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants'
import { timeDifferenceForDate } from '../utils'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

export const FEED_QUERY = gql`
query{
  feed {
    links {
      id
      createdAt
      url
      description
      postedBy {
        id
        name
      }
      votes {
        id
        user {
          id
        }
      }
    }
  }
}
`

class singleLink extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    console.log(this.props.match.params.id)
    return (
    <div className="container">
        <div className="row">
            <h1 class="mt-4">Logo Nav by Start Bootstrap</h1>
            <p>The logo in the navbar is now a default Bootstrap feature in Bootstrap 4! Make sure to set the width and height of the logo within the HTML or with CSS. For best results, use an SVG image as your logo.</p>
            <p>Contact number: </p>
            <a class="float-right btn text-white btn-danger"> <i class="fa fa-heart"></i> Like</a>
        </div>
        <div className="row">
            <form className="col">
                <label for="exampleFormControlTextarea1">Post a response</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <label for="exampleFormControlFile1">Upload Resume as a pdf attachment</label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
                <button type="submit" class="btn btn-primary">Submit</button>
			</form>
        </div>
        <div className="row">
        <div className="col-md-10">
            <h1>Responses:</h1>
            <p><a href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>Maniruzzaman Akash</strong></a></p>
            <p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>
            </p>
            </div>
        </div>       	        
    </div>
    )
  }
}

export default singleLink