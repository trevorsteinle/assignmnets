import React from 'react'
import './css/Tablelist.css'

// import { withTableContext } from './dataproviders/TableData'

function TableDetail({ hostname, version, driver, miner, gpus, rack_loc, ip, uptime, miner_secs, rx_kbps, tx_kbps, load, cpu_temp, hash, miner_hashes, temp, rig_watts, watts, miner_instance, fanpercent, core, mem }) {

    const unixTimeConversion = time => {
        if (time > 86400) {
            return Math.trunc(time / 60 / 60 / 24) + 'd';
        } else if (time < 3600) {
            return Math.trunc(time / 60) + 'm'
        } else {
            return Math.trunc(time / 60 / 60) + 'h'
        }
    }
    const miners = minerName => {
        if (minerName === 'claymore') {
            return 'cl'
        } else if (minerName === 'bminer') {
            return 'bm'
        } else if (minerName === 'xmr-stak') {
            return 'xm-s'
        } else if (minerName === 'ethminer') {
            return 'et'
        } else if (minerName === 'sgminer-gm') {
            return 'sg-g'
        } else if (minerName === 'claymore-zcash') {
            return 'cl-z'
        } 
    }

    const driverName = driver => {
        if (driver === 'amdgpu') {
            return 'A'
        } else if (driver === 'fglrx') {
            return 'F'
        } else {
            return 'N'
        }
    }

    const stripDec = num => {
        num = num.split(" ");
        var x = 0;
        var len = num.length;
        while (x < len) {
            num[x] = Math.trunc(num[x]);
            x++
        }
        num = num.join(' ');
        return num
    }

    const round = (value, precision) => {
        const multipler = Math.pow(10, precision || 0);
        return Math.round(value * multipler) / multipler
    }
    const hashConversion = num => {
        num = num.split(" ");
        var x = 0;
        var len = num.length;
        while (x < len) {
            if (num[x] > 99 ){
                num[x] = round(num[x], 0)
            } else{
            num[x] = round(num[x], 1).toFixed(1);
            }
            x++
        }
        num = num.join(' ');
        return num
    }

    if (driver === 'amdgpu' || driver === 'fglrx') {
        temp = stripDec(temp)
    }
    miner_hashes = hashConversion(miner_hashes)

    return (
        <tr>
            <td className="l">{version}</td>
            <td className="l">{driverName(driver)}</td>
            <td className="l">{miners(miner)}</td>
            <td className="l">{miner_instance}/{gpus}</td>
            <td className="l">{hostname}</td>
            <td className="l">{rack_loc}</td>
            <td className="r">{ip}</td>
            <td className="r">{unixTimeConversion(uptime)}</td>
            <td className="r">{unixTimeConversion(miner_secs)}</td>
            <td className="r">{round(rx_kbps, 1).toFixed(1)}</td>
            <td className="r">{round(tx_kbps, 1).toFixed(1)}</td>
            <td className="r">{round(load, 1).toFixed(1)}</td>
            <td className="r">{cpu_temp}</td>
            <td className="r">{round(hash, 0)}</td>
            <td className="r">{miner_hashes}</td>
            <td className="r">{temp}</td>
            <td className="r">{rig_watts ? rig_watts : '0'}</td>
            <td className="r">{watts ? watts : 'n/a'}</td>
            <td className="r">{fanpercent}</td>
            <td className="r">{core}</td>
            <td className="r">{mem}</td>
        </tr>
    )
}
export default TableDetail;

// export default withTableContext(TableDetail)
