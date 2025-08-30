import React from "react";

export default function DematAMC() {
    return (
        <div className="container mb-5">
            <h3 className="mb-3">Demat AMC (Annual Maintenance Charge)</h3>
            <table className="table table-bordered align-middle">
                <thead className="table-light">
                    <tr>
                        <th>Value of holdings</th>
                        <th>AMC</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Up to ₹4 lakh</td>
                        <td><span className="badge bg-success">FREE*</span></td>
                    </tr>
                    <tr>
                        <td>₹4 lakh – ₹10 lakh</td>
                        <td>₹ 100 per year, charged quarterly*</td>
                    </tr>
                    <tr>
                        <td>Above ₹10 lakh</td>
                        <td>₹ 300 per year, charged quarterly</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
