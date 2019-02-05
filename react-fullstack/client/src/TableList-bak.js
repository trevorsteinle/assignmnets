import React from 'react'
import styles from './css/Tablelist.css'
import TableDetail from './TableDetail';
import { withTableContext } from './dataproviders/TableData';

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
        <thead className={styles.tHead}>
            <tr >
                <th className={styles.version}>V</th>
                <th className={styles.driver}>D</th>
                <th>M</th>
                <th>G</th>
                <th>name</th>
                <th>loc</th>
                <th>IP</th>
                <th>b</th>
                <th>m</th>
                <th>rx</th>
                <th>tx</th>
                <th>L</th>
                <th>C</th>
                <th>H</th>
                <th>hashes</th>
                <th>temps</th>
                <th>rw</th>
                <th>watts</th>
                <th>fans</th>
                <th>core</th>
                <th>mem</th>
            </tr>
        </thead>
        <tbody>
            {rigs}
        </tbody>
    </table>
)
}

export default withTableContext(TableList)
