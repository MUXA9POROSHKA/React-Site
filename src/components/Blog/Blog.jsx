import "./Blog.css";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Component } from "react";
//import {BlogCard} from './Component/BlogCard';
//import {AddPostzForm} from './Component/AddPostForm';
import { AiOutlineGithub} from "react-icons/ai";


export class Blog extends Component {
    state = {
        showBlog: true,
        showAddForm: false,
        blogArr: []
    };
    componentDidMount(){
        axios.get("https://63708fe208218c267e017d80.mockapi.io/ArrDima")
        .then((Response) => {
            this.setState({
                blogArr: Response.data
            })
        })
        .catch((err) =>{
            console.log(err)
        })
        window.addEventListener("keyup", this.handleEscape)
    }
    render() {
        const blogPost = this.state.blogArr.map((item, pos) => {
            return(
                <div className="post">
                    <div className="posthead">
                        <h2>{item.title}</h2>
                        <span className="deleteForteverButton"  >
                            <AiOutlineGithub/>
                        </span>
                    </div>
                    <div className="desc">
                        {item.description}
                        </div>
                        <div className="button">
                        <span className="favoriteButton" >
                          
                        </span>
                    </div>
                </div>
                )

        });


        return(
            <>
            {blogPost}

            </>)
    }
}