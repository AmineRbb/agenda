import React from 'react'

function NotAuthorized() {
    return (
        <div className="p-1 m-1">
            <div className="card">
                <div className="card-body">
                    <h6>Vous n'avez pas l'autorisation pour ouvrir cette page.</h6>
                </div>
            </div>
        </div>
    )
}

export default NotAuthorized