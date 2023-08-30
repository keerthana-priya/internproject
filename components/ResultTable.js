import React from "react"

export default function ResultTable(){
    return (
        <div>
            <table>
                <thead className="table-header">
                    <tr className="table-row">
                        <td>Name</td>
                        <td>Attempts</td>
                        <td>Earn Points</td>
                        <td>Result</td>
                    </tr>

                </thead>
                <tbody>
                    <tr className="table-body">
                        <td>Keerthana Priya</td>
                        <td>05</td>
                        <td>40</td>
                        <td>Passed</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}