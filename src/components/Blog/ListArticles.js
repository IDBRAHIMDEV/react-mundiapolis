import React from 'react'
import { Link } from 'react-router-dom'

function ListArticles() {
    return (
        <div>
        <div className="row my-4">
            <div className="col-md-6">
                <div className="h1">List of articles</div>
            </div>
            <div className="col-md-6 text-end"><Link to="/article/create" className="btn btn-link">Add article</Link></div>
        </div>
        <div className="row my-3">
            <div className="col-md-8 mx-auto">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vero praesentium qui, quia pariatur aspernatur doloribus error, provident ex facilis eligendi consectetur quibusdam asperiores modi, voluptas expedita velit sed quis minus. Quo est, vitae molestiae nobis deleniti ab magni aliquam rem? Tenetur voluptas officiis incidunt ab corporis, maiores architecto magnam perferendis voluptatem. Explicabo, provident illo aliquid culpa mollitia error facere maiores harum. Dolorum reiciendis est quaerat ducimus consequatur laboriosam, nemo quo a explicabo deleniti ipsum placeat vero voluptatem labore repellat rem culpa numquam sapiente dignissimos cupiditate perspiciatis laudantium repellendus aliquam inventore? Nostrum inventore veritatis ipsa quae vero mollitia ipsum et veniam eum rerum quaerat reprehenderit suscipit, similique quas, pariatur porro voluptate consequuntur culpa? Et labore debitis aspernatur perferendis, hic, maxime ab accusantium, praesentium animi est quia accusamus rem possimus odio ratione in similique assumenda exercitationem eligendi doloremque rerum qui recusandae quasi? Nisi non facere recusandae molestias, commodi reiciendis unde blanditiis distinctio cupiditate exercitationem ullam quaerat corporis laborum sed saepe provident libero sit fuga debitis corrupti dolor consectetur nemo. Ipsum doloremque hic iste, culpa distinctio repellendus incidunt, ad tenetur illo accusamus, corrupti deleniti eveniet! Magni error optio, corrupti recusandae cupiditate accusantium suscipit similique nulla maiores explicabo, molestiae quam sequi facilis porro?
            </div>
        </div>
    </div>
    )
}

export default ListArticles
