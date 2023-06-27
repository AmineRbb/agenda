import React from 'react'

function Logout() {
  return (
    <div className="p-1 m-1">
            <div className="card">
                <div className="card-body">
                    <h6>Êtes vous sur de vouloir vous déconnecter ?</h6>
                    <h6>
                    <button className="btn btn-outline-success">Oui
          </button>
          {"      "}
          <button className="btn btn-outline-danger">
          Non
          </button>

                    </h6>
                </div>
            </div>
        </div>
  );
}

export default Logout