import styles from './table.module.css'

const Table = ({ data, column }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr >
          {column.map((item, index) => <TableHeadItem key={index} item={item} />)}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => <TableRow key={index} item={item} column={column} />)}
      </tbody>
    </table>
  )
}

const TableHeadItem = ({ item }) => <th className={styles.th}>{item.heading}</th>
const TableRow = ({ item, column }) => (
  <tr>
    {column.map((columnItem, index) => {

      if(columnItem.value.includes('.')) {
        const itemSplit = columnItem.value.split('.') //['address', 'city']
        return <td className={styles.td}>{item[itemSplit[0]][itemSplit[1]]}</td>
      }

      return <td className={styles.td} key={index}>{item[`${columnItem.value}`]}</td>
    })}
  </tr>
)

export default Table