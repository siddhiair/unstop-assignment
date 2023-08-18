import SectionTitle from '@/components/common/titles/SectionTitle';
import PageTitle from "@/components/common/titles/PageTitle";
import React from 'react'
import Wrapper from '@/components/common/Wrapper';
import AssessmentOverview from '@/components/assessment/AssessmentOverview';
import AssessmentsList from '@/components/assessment/AssessmentsList';

export default function Assessments() {
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

  return (
    <>
      <Wrapper classes="border-b border-b-primarylight">
        <PageTitle text="Assessment" />
      </Wrapper>
      <Wrapper>
        <SectionTitle text="Assessments Overview" />
        <AssessmentOverview data={overviewData} />
      </Wrapper>
      <Wrapper>
        <SectionTitle text="My Assessment" />
        <AssessmentsList />
      </Wrapper>
    </>
  )
}
