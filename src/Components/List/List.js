import React from "react";

function ListItem(props) {
    console.log(props.states)
  const ddata =
    props.states.length > 0
      ? props.states.map(state => {
          return (
            <div className="card" key={state.loc} style={{margin:"auto"}}>
            <h5 className="card-header bg-primary">{state.loc}</h5>
            <div className="card-body">
            <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
            Total
                <span className="badge badge-primary badge-pill">{state.total}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
            Confirmed Cases Indian
                <span className="badge badge-primary badge-pill">{state.confirmedCasesIndian}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Confirmed Cases Foreign
                <span className="badge badge-primary badge-pill">{state.confirmedCasesForeign}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
            Discharged
                <span className="badge badge-primary badge-pill">{state.discharged}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
            Deaths
                <span className="badge badge-primary badge-pill">{state.deaths}</span>
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
