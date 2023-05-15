import React from 'react'


function List({item}) {
  return (
    <tr>
        <td className='pb-6'>{item.no}</td>
        <td className='pb-6'>{item.dinas}</td>
        <td className='pb-6'>{item.alamat}</td>
        <td className='pb-6'>{item.pengelola}</td>
    </tr>
  )
}

export default List