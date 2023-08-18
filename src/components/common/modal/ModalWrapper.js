'use client';

import { useEffect, useState } from "react";

export default function ModalWrapper({children, title, handleModalShown}) {
	const [shownClass,setShownClass] = useState(false)

  //add shown class when component is mounted/rendered
	useEffect(()=>{
		setShownClass(true);
	},[])

  return(
		<>
			<div className={`modal ${shownClass ? 'shown' : ''}`}>
				<div className="modal-dialog">
					<div className='modal-content'>
            <div className='modal-header flex items-center justify-between gap-x-6'>
              <h3 className="text-base md:text-lg lg:text-xl text-secondary font-semibold">{title}</h3>
              <button type="button" onClick={()=>handleModalShown(false)} className="close-modal">
                <span className="material-icons-outlined">close</span>
              </button>
            </div>
            <div className="modal-body">
              {children}
            </div>
          </div>
				</div>

        <div className="modal-backdrop" style={{ display: shownClass ? 'block' : 'none' }} onClick={()=>handleModalShown(false)}></div>
			</div>
		</>
	);
}