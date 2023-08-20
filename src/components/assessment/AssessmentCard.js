import React from 'react'
import SectionTitle from '../common/titles/SectionTitle';

const Icon = ({children,className}) => {
	return(
		<div className={`shrink-0 w-12 h-12 opaque-bg relative rounded-lg flex items-center justify-center ${className}`}>
			{children}
		</div>
	);
}

export default function AssessmentCard({data}) {

	//sample shared user data
	const shareData = [
		{ id: 1, name: 'SA', color: '#1C4980' },
		{ id: 2, name: 'SS', color: '#E9407A' },
		{ id: 3, name: 'KS', color: '#6548EE' }
	];

	//get random number from 0 to 3
	function getRandomNumber(min, max) {
		//Adding 1 ensures that the range includes both the min and max values.
		return Math.floor(Math.random() * (max - min + 1));
	}
	
	//get random elements from sharedData 
	function getRandomElements(array, numElements) {
		const shuffledArray = array.sort(() => 0.5 - Math.random()); // Shuffle/reorder the array
		return shuffledArray.slice(0, numElements);
	}

	const randomNumElements = getRandomNumber(0, 3);
	const randomElements = getRandomElements(shareData, randomNumElements);

  return (
		<div className='w-full md:w-1/2 xl:w-1/3 px-4'>
			<div 
				className="card bg-white border border-borderColorLight rounded-md h-full w-full p-4 transition hover:border-secondary"
			>
				<div className='flex justify-between mb-2 pb-2 lg:mb-4 lg:pb-4 border-b border-dashed border-b-borderColorLight'>
					<div className='flex gap-x-3 md:block'>
						<Icon className="text-purple"><span className="material-icons-outlined">work_outline</span></Icon>
						<div className='md:mt-2'>
							<SectionTitle text={data.assessment_name} />
							<div className='flex items-center'>
								<span className='font-semibold text-xs xl:text-sm pr-2 mr-2 border-r border-r-borderColorLight'>{data.purpose}</span>
								<div className='flex items-center'>
									<span className="material-icons-outlined text-base">calendar_month</span> <span className='text-lightGray text-xs'>18 Aug, 2023</span>
								</div>
							</div>
						</div>
					</div>
					<div>
						<button className='px-1'>
							<span className="material-icons-outlined">more_vert</span>
						</button>
					</div>
				</div>

				<div className='flex justify-between items-center gap-x-4'>
					<div className='flex gap-x-2 md:gap-x-4'>
						<div>
							<span className='text-xs md:text-sm font-bold block'>00</span>
							<span className='text-[10px] md:text-xs font-semibold block'>Duration</span>
						</div>
						<div>
							<span className='text-xs md:text-sm font-bold block'>00</span>
							<span className='text-[10px] md:text-xs font-semibold block'>Questions</span>
						</div>
					</div>

					<div className='flex items-center gap-x-5'>
						<button className='px-2 md:py-1 h-full border border-secondary rounded-3xl flex items-center gap-x-1 text-xs lg:text-sm font-medium font-base leading-tight'>
							<span className="material-icons-outlined text-base -rotate-45">link</span>
							Share
						</button>
						{randomElements.length>0 && 
							<div className='flex items-center'>
								<div className='sharedList flex'>
								{
									randomElements.map((el)=>{
										return(
											<div key={el.id} className='flex items-center gap-x-1'>
												<div className="w-7 h-7 rounded-full border border-white uppercase font-semibold flex items-center justify-center text-white text-sm -ml-3" style={{'background':el.color}}>
													{el.name}
												</div>
											</div>
										);
									})
								}
								</div>
								<span className='text-xs font-semibold md:hidden'>+231</span>
							</div>
						}
					</div>
				</div>
			</div>
    </div>
  )
}
