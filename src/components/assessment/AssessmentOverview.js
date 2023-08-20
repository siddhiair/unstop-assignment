import React from 'react';
import styles from './AssessmentOverview.module.css'

const CardTitle = ({text}) => {
	return(
		<h5 className='text-sm font-semibold mb-4'>{text}</h5>
	);
}

const Icon = ({children,className}) => {
	return(
		<div className={`shrink-0 w-10 h-10 opaque-bg relative rounded-lg flex items-center justify-center ${className}`}>
			{children}
		</div>
	);
}

const Num = ({count,increased,increasedBy,decreased,decreasedBy}) => {
	return(
		<div className='flex items-center gap-x-1'>
			<span className='text-base md:text-lg xl:text-xl font-bold'>{count}</span>
			{increased && 
				<span className='text-green text-[10px] sm:text-xs lg:text-sm'>+{increasedBy}</span>
			}
			{decreased && 
				<span className='text-pink text-[10px] sm:text-xs lg:text-sm'>-{decreasedBy}</span>
			}
		</div>
	);
}

export default function AssessmentOverview({data}) {
  return (
    <div className={`mt-4 flex flex-wrap xl:flex-nowrap ${styles.itemsWrap}`}>
      <div className={`w-1/2 md:w-1/3 md:order-1 xl:w-auto whitespace-nowrap border-r border-b xl:border-b-0 ${styles.item}`}>
        <CardTitle text={data.total_assessments.label} />
				<div className='flex gap-x-4 xl:gap-x-5 items-center'>
					<Icon className="text-purple">{data.total_assessments.icon}</Icon>
					<div>
						<Num count={data.total_assessments.count} />
					</div>
				</div>
      </div>

      <div className={`w-1/2 md:w-1/3 md:order-4 xl:w-auto 2xl:basis-[190px] whitespace-nowrap border-b md:border-b-0 ${styles.item}`}>
				<CardTitle text={data.total_purpose.label} />
				<div className='flex gap-x-4 xl:gap-x-5 items-center'>
					<Icon className="text-primary">{data.total_purpose.icon}</Icon>
					<div>
						<Num count={data.total_purpose.count} />
					</div>
				</div>
			</div>

      <div className={`w-full md:w-2/3 md:order-2 xl:w-auto xl:grow border-b xl:border-b-0 xl:border-r ${styles.item}`}>
				<CardTitle text={data.candidates.label} />
				<div className='flex gap-x-2 md:gap-x-4 xl:gap-x-5 items-center'>
					<Icon className="text-purple">{data.candidates.icon}</Icon>
					<div className={`${styles.details} flex gap-x-4 xl:gap-x-5`}>
						{data.candidates.details?.map((el,i)=>{
							return(
								<div key={i}>
									<Num count={el.count} increased={el.increased} increasedBy={el.increasedBy} />
									<p className='text-[10px] sm:text-xs lg:text-sm'>{el.label}</p>
								</div>
							);
						})
						}
					</div>
				</div>
			</div>

      <div className={`w-full md:w-2/3 md:order-3 xl:w-auto xl:grow md:border-r ${styles.item}`}>
				<CardTitle text={data.candidates_source.label} />
				<div className='flex gap-x-2 md:gap-x-4 xl:gap-x-5 items-center'>
					<Icon className="text-pink">{data.candidates_source.icon}</Icon>
					<div className={`${styles.details} flex gap-x-4 xl:gap-x-5`}>
						{data.candidates_source.details?.map((el,i)=>{
							return(
								<div key={i}>
									<Num count={el.count} increased={el.increased} increasedBy={el.increasedBy} />
									<p className='text-[10px] sm:text-xs lg:text-sm'>{el.label}</p>
								</div>
							);
						})
						}
					</div>
				</div>
			</div>
    </div>
  )
}
