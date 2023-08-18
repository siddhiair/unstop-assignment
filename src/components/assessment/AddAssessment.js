'use client';  //serve as client component to handle click events and states

import React, { useState } from 'react'
import SectionTitle from '../common/titles/SectionTitle'
import ModalWrapper from '../common/modal/ModalWrapper';

export default function AddAssessment() {
	const [modalShown,setModalShown] = useState(false)

	const toggleModal = () => {
		setModalShown(!modalShown)
	}
  return (
		<>
			<div className='w-full md:w-1/2 xl:w-1/3 px-4 xl:px-7 flex items-center justify-center'>
				<div 
					className={`card bg-primarylight flex flex-col gap-y-3 items-center border border-dashed border-borderColorLight rounded-md h-100 w-full text-center p-5 cursor-pointer`} 
					onClick={toggleModal}
				>
					<div className='w-16 h-16 inline-flex items-center justify-center bg-white rounded-full'>
						<span className="material-icons-outlined text-primary">add</span>
					</div>
					<SectionTitle text="New Assessment" />
					<p className='text-xs sm:w-11/12'>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</p>
				</div>
			</div>
			{modalShown && 
				<ModalWrapper handleModalShown={toggleModal} title="Add Assessment">
					<h3>this is modal body</h3>
				</ModalWrapper>
			}
		</>
  )
}
