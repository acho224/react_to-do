'use strict'
import React from 'react';

export default function TaskList(props){

  return (
    <div className="list-group">
    {Object.keys(props.list)
      .filter(key=> props.f(props.list[key].completed ))
      .map(key=>(
        <button
          type="button"
          className="list-group-item"
          key={key}
          onClick={
            function(){
            props.action(key)
            }

          }>
            <strong>{props.list[key].task_name}</strong> {props.list[key].task_desc}
            </button>
        ))
    }
    </div>
  )
}



//         <button type="button" class="list-group-item">Cras justo odio</button>
//         <button type="button" class="list-group-item">Dapibus ac facilisis in</button>
//         <button type="button" class="list-group-item">Morbi leo risus</button>
//         <button type="button" class="list-group-item">Porta ac consectetur ac</button>
//         <button type="button" class="list-group-item">Vestibulum at eros</button>
//       </div>
//     </article>

//     <article class="col-md-6">
//       <h3>Completed Items</h3>
//       <div class="list-group">
//         <button type="button" class="list-group-item">Cras justo odio</button>
//         <button type="button" class="list-group-item">Dapibus ac facilisis in</button>
//         <button type="button" class="list-group-item">Morbi leo risus</button>
//         <button type="button" class="list-group-item">Porta ac consectetur ac</button>
//         <button type="button" class="list-group-item">Vestibulum at eros</button>
//       </div>
//     </article>
    // )
// }
