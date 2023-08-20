import AddAssessment from './AddAssessment'
import AssessmentCard from './AssessmentCard'
import {  useMyAssessmentContext } from '@/context/MyAssessmentContext';

export default function AssessmentsList() {

  const {assessmentList} = useMyAssessmentContext();

  return (
    <div className='flex flex-wrap gap-y-4 xl:gap-y-7 -mx-4 mt-6'>
      <AddAssessment />
      
      {/**loop through assessment list and display***/}
      {
        assessmentList.length>0 && 
        assessmentList.map((el,i)=>(
            <AssessmentCard key={i} data={el} />
        ))
      }
    </div>
  )
}
