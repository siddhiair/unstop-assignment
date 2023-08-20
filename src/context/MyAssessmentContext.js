'use client'; //because context api only works in client components

import React, { createContext, useContext, useState, useEffect } from 'react';

const MyAssessmentContext = createContext();

export function MyAssessmentContextProvider({ children }) {
  const [assessmentList, setAssessmentList] = useState([]);


  //add assessment to localstorage and update state
	const addAssessment = (val) => {
		const asmtList = JSON.parse(localStorage.getItem('assessments')) || [];
		asmtList.unshift(val); //add as first element
		localStorage.setItem("assessments",JSON.stringify(asmtList));
		setAssessmentList(asmtList)
	}

  //fetch assessments from localstorage and set state
  useEffect(()=>{
    const asmtList = JSON.parse(localStorage.getItem('assessments')) || [];
    setAssessmentList(asmtList);
  },[])

  return (
    <MyAssessmentContext.Provider value={{assessmentList,addAssessment}}>
      {children}
    </MyAssessmentContext.Provider>
  );
}

export const useMyAssessmentContext = () => useContext(MyAssessmentContext);
