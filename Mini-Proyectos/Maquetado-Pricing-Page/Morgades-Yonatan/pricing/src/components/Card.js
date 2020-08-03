import React from 'react';

function Card({price,type,popular}){
    return (
            <div className="col-md-4">
                <div className="card mb-4 box-shadow ">
                    <div className="card-header bg-light d-flex-column">
                        {popular &&
                            <div className="d-flex align-items-end flex-column">
                                <svg className="bi bi-star"  width="25px" height="25px" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></svg>
                            </div>
                        }
                        <h4 className="my-0 font-weight-normal">{type}</h4>
                        {popular &&
                            <span className="text-muted">Most popular</span>
                        }
                    </div>
                    <div className="card-body">
                        <h1><b>${price} </b><small className="text-muted">/ mo</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>20 users included</li>
                            <li>10 GB of storage</li>
                            <li>Priority email support</li>
                            <li>Help center access</li>
                        </ul>
                        {popular &&
                            <button type="button" className="btn btn-block btn-primary">Get started</button>
                        }
                        {!popular &&
                            <button type="button" class="btn w-100 text-uppercase btn-outline-primary">Sign up for free</button>
                        }
                    </div>
                </div>
            </div>
)
}
export default Card;