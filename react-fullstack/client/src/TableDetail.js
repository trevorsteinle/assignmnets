import React from 'react'

import TableData, { withTableContext } from './dataproviders/TableData'

function TableDetail(value) {
    console.log(JSON.stringify(value))
    // const TableRow = ({row}) => (
    //     <tr>
    //       <td key={row.rack_loc}>{row.name}</td>
    //       <td key={row.ip}>{row.id}</td>
    //       <td key={row.uptime}>{row.price}</td>
    //     </tr>
    //   )

    //   const Table = ({farm}) = (
    //     <table>
    //       {farm.map(row => {
    //         <TableRow row={row} />
    //       })}
    //     </table>
    //   )
    return (
        <TableData value={value}>
            {/* {value} */}
        </TableData>
    )
}

export default withTableContext(TableDetail)
