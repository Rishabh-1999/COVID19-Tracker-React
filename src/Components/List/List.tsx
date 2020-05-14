import React from "react";

function ListItem(props: any) {
  const ddata =
    props.states.length > 0
      ? props.states.map((state: any) => {
          return (
            <div
              className="card m-1"
              key={state.loc}
              style={{ width: "300px" }}
            >
              {state.high === true ? (
                <div className="card-header btn bg-danger font-weight-bolder d-flex">
                  <h5
                    style={{ flex: 3 }}
                    onClick={() => !state.fav && props.addToFav(state.loc)}
                  >
                    {state.loc}
                  </h5>
                  <p style={{ flex: 1 }}>
                    <i className="fa fa-arrow-up" style={{ color: "red" }}></i>{" "}
                    &nbsp;
                    {state.increase}
                  </p>
                </div>
              ) : state.medium === true ? (
                <div className="card-header btn bg-warning font-weight-bolder d-flex">
                  <h5
                    style={{ flex: 3 }}
                    onClick={() => !state.fav && props.addToFav(state.loc)}
                  >
                    {state.loc}
                  </h5>
                  <p style={{ flex: 1 }}>
                    <i
                      className="fa fa-arrow-up"
                      style={{ color: "orange" }}
                    ></i>
                    &nbsp;
                    {state.increase}
                  </p>
                </div>
              ) : (
                <div className="card-header btn bg-primary font-weight-bolder d-flex">
                  <h5
                    style={{ flex: 3 }}
                    onClick={() => !state.fav && props.addToFav(state.loc)}
                  >
                    {state.loc}
                  </h5>
                  <p style={{ flex: 1 }}>
                    <i
                      className="fa fa-arrow-up"
                      style={{ color: "green" }}
                    ></i>
                    &nbsp;
                    {state.increase}
                  </p>
                </div>
              )}

              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Total
                    {state.high === true ? (
                      <span className="badge badge-danger badge-pill">
                        {state.totalConfirmed}
                      </span>
                    ) : state.low === true ? (
                      <span className="badge badge-warning badge-pill">
                        {state.totalConfirmed}
                      </span>
                    ) : (
                      <span className="badge badge-primary badge-pill">
                        {state.totalConfirmed}
                      </span>
                    )}
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Recovered
                    {state.high === true ? (
                      <span className="badge badge-danger badge-pill">
                        {state.discharged}
                      </span>
                    ) : state.low === true ? (
                      <span className="badge badge-warning badge-pill">
                        {state.discharged}
                      </span>
                    ) : (
                      <span className="badge badge-primary badge-pill">
                        {state.discharged}
                      </span>
                    )}
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Deaths
                    {state.high === true ? (
                      <span className="badge badge-danger badge-pill">
                        {state.deaths}
                      </span>
                    ) : state.low === true ? (
                      <span className="badge badge-warning badge-pill">
                        {state.deaths}
                      </span>
                    ) : (
                      <span className="badge badge-primary badge-pill">
                        {state.deaths}
                      </span>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          );
        })
      : "";

  return (
    <div className="container">
      <div className="row w-100 mt-2">{ddata}</div>
    </div>
  );
}

export default ListItem;
