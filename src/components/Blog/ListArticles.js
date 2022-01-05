import React, { useEffect, useState } from 'react'
import OneArticle from './OneArticle'
import { Link } from 'react-router-dom'
import axios from "axios"

function ListArticles() {

    const [articles, setArticles] = useState([])

    const getAllArticles = () => {
        axios.get("http://localhost:4000/articles")
             .then(response => setArticles(response.data))
             .catch(err => console.error(err))
    } 

    const deleteArticle = (id) => {

        if(!window.confirm("You want delete this article ")) {
            return
        }

        axios.delete(`http://localhost:4000/articles/${id}`)
             .then(() => {
                 setArticles(articles.filter(article => article.id != id))
             })
             .catch(err => console.error(err))
    }

    useEffect(() => {
        getAllArticles()
    }, [])

    return (
        <div>
        <div className="row my-4">
            <div className="col-md-6">
                <div className="h1">List of articles</div>
            </div>
            <div className="col-md-6 text-end"><Link to="/article/create" className="btn btn-link">Add article</Link></div>
        </div>
        <div className="row my-3">
            {articles && articles.map(article => (

                <div className="col-md-6">
                   <OneArticle title={article.title} content={article.content} />
                   <button onClick={() => deleteArticle(article.id)} className='btn btn-danger'>Delete</button>
                </div>

            ))}
        </div>
    </div>
    )
}

export default ListArticles
