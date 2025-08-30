import React from "react";

export default function ValueAddedCharges() {
    return (
        <div className="container mb-5">
            <h3 className="mb-3">Charges for optional value added services</h3>
            <table className="table table-bordered align-middle">
                <thead className="table-light">
                    <tr>
                        <th>Service</th>
                        <th>Billing Frquency</th>
                        <th>Charges</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tickertape</td>
                        <td>Monthly / Annual</td>
                        <td>Free: 0 | Pro: 249/2399</td>
                    </tr>
                    <tr>
                        <td>Smallcase</td>
                        <td>Per transaction</td>
                        <td>Buy & Invest More: 100 | SIP: 10</td>
                    </tr>
                    <tr>
                        <td>Kite Connect</td>
                        <td>Monthly</td>
                        <td>Connect: 500</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}
