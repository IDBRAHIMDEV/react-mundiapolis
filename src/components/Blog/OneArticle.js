import React from 'react'

function OneArticle({title, content}) {
    return (
        <div>
            <div className="card my-3">
                
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text">{content}</p>
                </div>
            </div>
        </div>
    )
}

export default OneArticle
