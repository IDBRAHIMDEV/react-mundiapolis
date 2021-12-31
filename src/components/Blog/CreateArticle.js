import React from 'react'

function CreateArticle() {
    return (
        <div>
            <div className="row my-4">
                <div className="col-md-6">
                    <div className="h1">Create article</div>
                </div>
                <div className="col-md-6 text-end"><a href="" className="btn btn-link">Back to list</a></div>
            </div>
            <div className="row my-3">
                <div className="col-md-8 mx-auto">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Title</label>
                            <input type="text" name="" id="" placeholder='Title of article' className="form-control" />
                        </div>
                        <div className="form-group my-4">
                            <label htmlFor="" className="form-label">Content</label>
                            <textarea name="" id="" rows="4" className="form-control"></textarea>
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-primary" type="button">Add article</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateArticle
