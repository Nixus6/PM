import React, { Component } from 'react';

export const LoginBox = () => {
    return (
        <div className="row">
            <div className="col-md-4">
                <form onSubmit={handlesubmit} className="card card body">
                    <div className="form-group">
                        <input
                            type="text"
                            onChange={e => setName(e.target.value)}
                            value={name}
                            className="form-control"
                            placeholder="Name Product"
                            autoFocus
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            onChange={e => setImage(e.target.value)}
                            value={image}
                            className="form-control"
                            placeholder="Image Product"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            onChange={e => setPrice(e.target.value)}
                            value={price}
                            className="form-control"
                            placeholder="Price Product"
                        />
                    </div>
                    <button className="btn btn-primary btn-block">
                        {editing ? 'update' : 'create'}
                    </button>
                </form>
            </div>
            <div className="col-md-6">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product._id}>
                                <td>{product.name}</td>
                                <td>{product.image}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button
                                        className="btn btn-primary btn-sm btn-block"
                                        onClick={() => updateProduct(product._id)}>
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm btn-block"
                                        onClick={() => deleteProduct(product._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}