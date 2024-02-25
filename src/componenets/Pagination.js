import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Pagination() {
    const {pages,handlepagechange,totalpages}=useContext(AppContext);
  return (
    <div>
        <div>
            {pages>1 &&(<button onClick={()=>handlepagechange(pages-1)}>previous</button>)}
            {pages<totalpages &&(<button onClick={()=>handlepagechange(pages+1)}>Next</button>)}
<p>
    page{pages}of{totalpages}
</p>
        </div>
    </div>
  )
}

export default Pagination;