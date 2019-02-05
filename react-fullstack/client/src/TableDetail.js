import React from 'react'

// import { withTableContext } from './dataproviders/TableData'

function TableDetail({ hostname, version, driver, miner, gpus, rack_loc, ip, uptime, miner_secs, rx_kbps, tx_kbps, load, cpu_temp, hash, miner_hashes, temp, rig_watts, watts, miner_instance, fanpercent, core, mem }) {
    // const upTimeDays = Math.trunc(uptime / 60 / 60 / 24) + 'd';
    // const upTimeHours =Math.trunc(uptime / 60 / 60 ) + 'h';
    const unixTimeConversion = time => {
        if (time > 86400) {
            return Math.trunc(time / 60 / 60 / 24) + 'd';
        } else if (time < 3600) {
            return Math.trunc(time / 60) + 'm'
        } else {
            return Math.trunc(time / 60 / 60 ) + 'h'
        }
    }
    const removeIndexOne = num => {
        
    }
    return (
        <tr>
            <td>{version}</td>
            <td>{driver}</td>
            <td>{miner}</td>
            <td>{miner_instance}/{gpus}</td>
            <td>{hostname}</td>
            <td>{rack_loc}</td>
            <td>{ip}</td>
            {/* <td>{uptime > 86400 ? upTimeDays : upTimeHours}</td> */}
            <td>{unixTimeConversion(uptime)}</td>
            <td>{unixTimeConversion(miner_secs)}</td>
            <td>{rx_kbps}</td>
            <td>{tx_kbps}</td>
            <td>{load}</td>
            <td>{cpu_temp}</td>
            <td>{hash}</td>
            <td>{miner_hashes}</td>
            <td>{temp}</td>
            <td>{rig_watts ? rig_watts : '0'}</td>
            <td>{watts}</td>
            <td>{fanpercent}</td>
            <td>{core}</td>
            <td>{mem}</td>
        </tr>
    )
}
export default TableDetail;

// export default withTableContext(TableDetail)
