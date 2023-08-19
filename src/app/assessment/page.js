'use client';  //serve as client component to handle click events and states

import SectionTitle from '@/components/common/titles/SectionTitle';
import PageTitle from "@/components/common/titles/PageTitle";
import React, { useEffect, useState } from 'react'
import Wrapper from '@/components/common/Wrapper';
import AssessmentOverview from '@/components/assessment/AssessmentOverview';
import AssessmentsList from '@/components/assessment/AssessmentsList';
import Loader from '@/components/common/Loader';

const TabLink = ({text,isActive,btnKey,changeTab}) => {
  return(
    <li className='w-full md:w-auto text-center'>
      <button 
        className={`py-4 lg:py-5 text-sm w-full font-medium ${isActive?"border-b-[3px] border-current text-primary":""}`} 
        datakey={btnKey} 
        onClick={changeTab}
      >
          {text}
      </button>
    </li>
  )
}

export default function Assessments() {
  const [activeTab, setActiveTab] = useState('my_assessments');
  const [activeTabClass, setActiveTabClass] = useState('active');
  const [loading,isLoading] = useState(false)

  const overviewData = {
    total_assessments:{
      label: 'Total Assessments',
      count: 34,
      icon: <span className="material-icons-outlined">view_agenda</span>
    },
    candidates:{
      label: 'Candidates',
      icon: <span className="material-icons-outlined">group</span>,
      details: [
        {
          label: 'Total Candidates',
          count: 11145,
          increased: true,
          increasedBy: 89,
          decreased: false
        },
        {
          label: 'Who Attempted',
          count: 114,
          increased: true,
          increasedBy: 89,
          decreased: false
        }
      ]
    },
    candidates_source:{
      label: 'Candidates Source',
      icon: <span className="material-icons-outlined">language</span>,
      details: [
        {
          label: 'E-Mail',
          count: 11000,
          increased: true,
          increasedBy: 89,
          decreased: false
        },
        {
          label: 'Social Share',
          count: 114,
          increased: true,
          increasedBy: 89,
          decreased: false
        },
        {
          label: 'Unique Link',
          count: 131,
          increased: true,
          increasedBy: 89,
          decreased: false
        }
      ]
    },
    total_purpose:{
      label: 'Total Purpose',
      count: 29,
      icon: <span className="material-icons-outlined">insert_link</span>
    }
  };

  const handleTabChange = async(e) => {
    setActiveTabClass('')
    isLoading(true)
    await delayShow();
    setActiveTab(e.target.getAttribute('datakey'));
    setActiveTabClass('active');
    isLoading(false)
  }

  const delayShow = () => {
    return new Promise((resolve)=>{
      setTimeout(resolve,100)
    })
  }

  return (
    <>
      {loading && 
        <Loader />
      }
      <Wrapper className="border-b border-b-primarylight !py-0">
        <div className='md:flex items-center'>
          {window.innerWidth>767 &&
            <PageTitle text="Assessment" className="md:border-r border-borderColorRight pr-5 mr-5" />
          }
          <div className='tabs-wrapper'>
            <ul tole="tablist" className='flex md:gap-x-5'>
              <TabLink text="My Assessments" btnKey="my_assessments" isActive={activeTab==='my_assessments'?true:false} changeTab={handleTabChange} />
              <TabLink text="Unstop Assessments" btnKey="unstop_assessments" isActive={activeTab==='unstop_assessments'?true:false} changeTab={handleTabChange} />
            </ul>
          </div>
        </div>
      </Wrapper>

      {activeTab === 'my_assessments' && 
        <div className={`tab-panel ${activeTabClass}`}>
          <Wrapper>
            <SectionTitle text="Assessments Overview" />
            <AssessmentOverview data={overviewData} />
          </Wrapper>
          <Wrapper>
            <SectionTitle text="My Assessment" />
            <AssessmentsList />
          </Wrapper>
        </div>
      }

      {activeTab === 'unstop_assessments' && 
        <div className={`tab-panel ${activeTabClass}`}>
          <Wrapper>
            <SectionTitle text="Unstop Assessment content goes here..." />
          </Wrapper>
        </div>
      }
    </>
  )
}
