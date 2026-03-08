function CustomTable({columns = [], data = []}) {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map(column => (
                        <th key={column}>{column}</th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        {Object.keys(item).filter(key => key !== "id").map(key => (
                            <td key={key}>{item[key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CustomTable;