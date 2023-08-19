import React, { useEffect, useState } from 'react'
import AddAssessment from './AddAssessment'
import AssessmentCard from './AssessmentCard'

export default function AssessmentsList() {
  const [assessments, setAssessments] = useState([]);
  useEffect(()=>{
    const asmtList = JSON.parse(localStorage.getItem('assessments')) || [];
    setAssessments(asmtList);
  },[])

  return (
    <div className='flex flex-wrap gap-y-4 xl:gap-y-7 -mx-4 mt-6'>
			<AddAssessment />
      
      {/**loop through assessment list fetched from localStorage and display***/}
      {
        assessments.length>0 && 
        assessments.map((el,i)=>(
            <AssessmentCard key={i} data={el} />
        ))
      }
		</div>
  )
}
