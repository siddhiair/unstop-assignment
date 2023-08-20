import React, { useState } from 'react'
import SubmitButton from '../common/buttons/SubmitButton';
import SkillsInput from './SkillsInput';
import { useMyAssessmentContext } from '@/context/MyAssessmentContext';

export default function AddAssessmentForm({modalRef}) {
	function getTodayDate() {
		const today = new Date();
		const options = { day: '2-digit', month: 'short', year: 'numeric' };
		return today.toLocaleDateString('en-US', options);
	}
	
	const TodayDate = getTodayDate();

	const [values, setValues] = useState({
		assessment_name:'',
		purpose: '',
		description:'',
		skill: '',
		skills:[],
		duration:'',
		date: TodayDate
	})

	const [errors, setErrors] = useState({
		assessment_name:null,
		purpose: null,
		description:null,
		duration:null
	})

	const [formSuccess, setFormSuccess] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const {addAssessment} = useMyAssessmentContext({})

	const handleInputChange = (e) => {
		//get name and value attr values from e.target object using destructuring
		const {name, value} = e.target; 
		setValues({
			...values,
      [name]: value,
		});

		//set error stage on input change
		if(value !== ""){
			setErrors({
				...errors,
				[name]: false,
			})
		}
		else{
			setErrors({
				...errors,
				[name]: true,
			})
		}
	}

	const handleFormSubmit = async(e) => {
		e.preventDefault(); //prevent page refresh
		setIsSubmitting(true);

		// Simulate an async operation to delay 
		await showDelay();

		let newErrors = {}; // Create a new object to track updated errors
  
		for (let x in errors) {
			if (values[x] === '' || values[x] === undefined) {
				newErrors[x] = true;
			} else {
				newErrors[x] = false; // Clear the error if value is provided
			}
		}
		
		setErrors({
			...errors,
			...newErrors, // Update the errors with the new error values
		});

		// Scroll to the top of the error container div if there are errors
		const modalContainer = modalRef.current;
		const hasErrors = Object.values(newErrors).some((error) => error);
		if (hasErrors) {
			if (modalContainer) {
				modalContainer.scroll({
					behavior: 'smooth',
					top: 0,
				});
			}
			setIsSubmitting(false);
		}
		//if no error, reset form values
		else{
			addAssessment(values)

			setValues({
				assessment_name:'',
				purpose: '',
				description:'',
				skill: '',
				skills:[],
				duration:''
			})
			setFormSuccess(true);
			setIsSubmitting(false);
		}
	}

	const showDelay = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 500); // Simulating a .5-second delay
    });
  };

  return (
    <>
			{/** show error alert if validation fails **/}
			{Object.values(errors).includes(true) &&
				<span className='opaque-bg relative py-1 px-4 rounded text-orange block my-5 text-sm'>Please fill the required fields.</span>
			}
			
			<form className='' onSubmit={handleFormSubmit} noValidate>
				<div className='form-group'>
					<label className='text-xs md:text-sm xl:text-base'>Name of assessment</label>
					<input
						type='text' 
						placeholder='Type here' 
						className={`form-control ${errors.assessment_name?"has-error":""}`} 
						name="assessment_name" 
						value={values.assessment_name} 
						onChange={handleInputChange} 
						required
					/>
				</div>

				<div className='form-group'>
					<label className='text-xs md:text-sm xl:text-base'>Purpose of the test is</label>
					<select
						className={`form-control ${errors.purpose?"has-error":""}`} 
						name="purpose" 
						value={values.purpose} 
						onChange={handleInputChange} 
						required
					>
						<option value='' disabled>Select</option>
						<option value="Job">Job</option>
					</select>
				</div>

				<div className='form-group'>
					<label className='text-xs md:text-sm xl:text-base'>Description</label>
					<select
						className={`form-control ${errors.description?"has-error":""}`}  
						name="description" 
						value={values.description} 
						onChange={handleInputChange} 
						required
					>
						<option value='' disabled>Select</option>
						<option value="Job">Job</option>
					</select>
				</div>

				<SkillsInput handleChange={handleInputChange} skills={values.skills} skill={values.skill} />

				<div className='form-group'>
					<label className='text-xs md:text-sm xl:text-base'>Duration of assessment</label>
					<input
						type='time' 
						placeholder='HH:MM:SS' 
						className={`form-control ${errors.duration?"has-error":""}`} 
						name="duration" 
						value={values.duration} 
						onChange={handleInputChange} 
						required
					/>
				</div>

				<input type="hidden" value={TodayDate} />

				<SubmitButton text={isSubmitting ? "Adding Assignment..." : "Save"} disabled={isSubmitting} />
				{/** show error alert if validation fails **/}
				{formSuccess &&
					<span className='opaque-bg relative py-1 px-4 rounded text-green block my-5 text-sm'>Assessment added successfully.</span>
				}
			</form>
		</>
  )
}
