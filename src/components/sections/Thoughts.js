import React, { useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';

import Card from '../elements/Card';
import posts from '../../assets/Dummy';


function Thoughts() {
  const [page, setPage] = useState(1)


  return (
    <div>
      <h1>Thoughts</h1>
      <div className="container">
        <div className="row align-items-start">
          <div className="row">
            <Card />
          </div>
        </div>
        <PaginationControl
          page={page}
          between={3}
          total={30}
          limit={6}
          changePage={(page) => {
            setPage(page);
            console.log(page)
          }}
          ellipsis={1}
        />
      </div>
    </div>
  )
}

export default Thoughts;
