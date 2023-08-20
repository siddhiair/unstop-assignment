import React, { useState } from 'react'

export default function SkillsInput({handleChange,skills,skill}) {
	const [skillsList, setSkillsList] = useState(skills);
	const [duplicateError, setDuplicateError] = useState(false)

	const addSkill = () => {
		//check if skill exists
		const skillExists = skillsList.some((el) => el === skill);
		if (!skillExists) {
			setSkillsList((prevList) => [...prevList, skill]);
			setDuplicateError(false)

		} else {
			setDuplicateError(true)
		}
	}

	const removeSkill = (i) => {
		const newList = skillsList.filter((el)=>el !== i);
		setSkillsList(newList);

	}

  return (
    <div className='form-group'>
			<label className='text-xs md:text-sm xl:text-base'>Skills</label>
			{skillsList.length>0 && 
				<div className='skills-wrapper p-4 border border-b-0 border-borderColorLight rounded-t-lg'>
					<div className='flex flex-wrap gap-1'>
						{skillsList.map((el,i)=>(
							<span key={i} className='bg-primarylight rounded-3xl px-3 py-2 text-xs text-secondary font-medium flex items-center gap-x-1'>
								{el}
								<span onClick={()=>removeSkill(el)}  className="cursor-pointer material-icons-outlined text-sm">close</span>
							</span>
						))}
					</div>
					{duplicateError && 
						<span className='text-orange text-xs block mt-1'>Skill already exists in the list.</span>
					}
				</div>
			}
			<div className='relative'>
				<input
					type='text' 
					placeholder='Type here' 
					className={`form-control ${skillsList.length>0?'!rounded-t-none':''}`} 
					name="skill" 
					id="add-skill-input" 
					value={skill} 
					onChange={(e)=>handleChange(e)}
				/>
				{skill!=='' && 
					<button type='button' className="btn text-xs font-medium p-3 absolute right-2 top-0 bottom-0 z-20 cursor-pointer" onClick={addSkill}>Add</button>
				}
			</div>
		</div>
  )
}
