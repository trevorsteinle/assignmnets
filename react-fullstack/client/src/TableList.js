import React from 'react'
import './css/Tablelist.css'
import TableDetail from './TableDetail';
import { withTableContext } from './dataproviders/TableData';
import { withHovering } from './Hovering';

function TableList(props) {
    const rigs = []
    if (props.farm) {
        for (let i in props.farm) {
            // console.log(props.farm[i])
            rigs.push(<TableDetail key={i}{...props.farm[i]} hostname={i} />)
        }
    }
    return (
        <table>
            <thead>
                <tr>
                    <th className="l"><a className="hid" href="#">V<span>ethos version</span></a></th>
                    <th className="l"><a className="hid" href="#">D<span>rig gpu driver</span></a></th>
                    <th className="l"><a className="hid" href="#">M<span>current running miner on rig</span></a></th>
                    <th className="l"><a className="hid" href="#">G<span>live rig gpu's / detected rig gpu's</span></a></th>
                    <th className="l"><a className="hid" href="#">name<span>rig hostname</span></a></th>
                    <th className="l"><a className="hid" href="#">loc<span>location and/or name of rig</span></a></th>
                    <th className="r"><a className="hid" href="#">ip<span>ip address of rig</span></a></th>
                    <th className="r"><a className="hid" href="#">b<span>elapsed time since rig booted (rig uptime)</span></a></th>
                    <th className="r"><a className="hid" href="#">m<span>elapsed time since miner instance started (miner uptime)</span></a></th>
                    <th className="r"><a className="hid" href="#">rx<span>10 minute average of kbps received by rig (if high value, may indicate your rig is compromised)</span></a></th>
                    <th className="r"><a className="hid" href="#">tx<span>10 minute average of kbps sent by rig (if high value, may indicate your rig is compromised</span></a></th>
                    <th className="r"><a className="hid" href="#">L<span>5 minute average cpu load</span></a></th>
                    <th className="r"><a className="hid" href="#">C<span>cpu temp in celcius</span></a></th>
                    <th className="r"><a className="hid" href="#">H<span>total rig hash</span></a></th>
                    <th className="r"><a className="hid" href="#">hashes<span>hashrates per gpu</span></a></th>
                    <th className="r"><a className="hid" href="#">temps<span>temperature per gpu in celcius</span></a></th>
                    <th className="r"><a className="hid" href="#">rw<span>watts per rig</span></a></th>
                    <th className="r"><a className="hid" href="#">watts<span>estimated watts per gpu</span></a></th>
                    <th className="r"><a className="hid" href="#">fans<span>fan speed in percent</span></a></th>
                    <th className="r"><a className="hid" href="#">core<span>gpu coreclock in Mhz</span></a></th>
                    <th className="r"><a className="hid" href="#">mem<span>gpu memory in Mhz</span></a></th>
                </tr>
            </thead>
            <tbody>
                {rigs}
            </tbody>
        </table>
    )
}

export default withTableContext(TableList)
