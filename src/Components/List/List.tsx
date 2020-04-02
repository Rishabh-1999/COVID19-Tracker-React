import React from "react";

function ListItem(props :any) {
    const ddata =
        props.states.length > 0
            ? props.states.map((state :any) => {
                return (
                    <div
                        className="card m-2"
                        key={state.loc}
                        style={{ width: "300px" }}
                    >
                        {
                            state.high === true ?
                                <h5
                                    className="card-header btn bg-danger text-white"
                                    onClick={() => !state.fav && props.addToFav(state.loc)}
                                >
                                    {state.loc}
                                </h5>
                                :
                                state.medium === true ?
                                    <h5
                                        className="card-header btn bg-warning"
                                        onClick={() => !state.fav && props.addToFav(state.loc)}
                                    >
                                        {state.loc}
                                    </h5>
                                    :
                                    <h5
                                        className="card-header btn bg-primary"
                                        onClick={() => !state.fav && props.addToFav(state.loc)}
                                    >
                                        {state.loc}
                                    </h5>
                        }
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Total
                                    {
                                        state.high === true ?
                                            <span className="badge badge-danger badge-pill">
                                                {state.total}
                                            </span>
                                            :
                                            state.low === true ?
                                                <span className="badge badge-warning badge-pill">
                                                    {state.total}
                                                </span>
                                                :
                                                <span className="badge badge-primary badge-pill">
                                                    {state.total}
                                                </span>
                                    }
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Confirmed Cases Indian
                                    {
                                        state.high === true ?
                                            <span className="badge badge-danger badge-pill">
                                                {state.confirmedCasesIndian}
                                            </span>
                                            :
                                            state.low === true ?
                                                <span className="badge badge-warning badge-pill">
                                                    {state.confirmedCasesIndian}
                                                </span>
                                                :
                                                <span className="badge badge-primary badge-pill">
                                                    {state.confirmedCasesIndian}
                                                </span>
                                    }
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Confirmed Cases Foreign
                                    {
                                        state.high === true ?
                                            <span className="badge badge-danger badge-pill">
                                                {state.confirmedCasesForeign}
                                            </span>
                                            :
                                            state.low === true ?
                                                <span className="badge badge-warning badge-pill">
                                                    {state.confirmedCasesForeign}
                                                </span>
                                                :
                                                <span className="badge badge-primary badge-pill">
                                                    {state.confirmedCasesForeign}
                                                </span>
                                    }
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Discharged
                                    {
                                        state.high === true ?
                                            <span className="badge badge-danger badge-pill">
                                               {state.discharged}
                                            </span>
                                            :
                                            state.low === true ?
                                                <span className="badge badge-warning badge-pill">
                                                    {state.discharged}
                                                </span>
                                                :
                                                <span className="badge badge-primary badge-pill">
                                                    {state.discharged}
                                                </span>
                                    }
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Deaths
                                    {
                                        state.high === true ?
                                            <span className="badge badge-danger badge-pill">
                                               {state.deaths}
                                            </span>
                                            :
                                            state.low === true ?
                                                <span className="badge badge-warning badge-pill">
                                                   {state.deaths}
                                                </span>
                                                :
                                                <span className="badge badge-primary badge-pill">
                                                   {state.deaths}
                                                </span>
                                    }
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
