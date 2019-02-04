import React from 'react'
import styles from './css/Tablelist.css'

function TableList() {
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
                    <th>p</th>
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
                <tr>
                    <td>a</td>
                    <td>b</td>
                    <td>c</td>
                    <td>d</td>
                    <td>e</td>
                    <td>f</td>
                    <td>g</td>
                </tr>
            </tbody>


        </table>


    )
}

export default TableList
