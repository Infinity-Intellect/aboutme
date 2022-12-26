import React from 'react'
import Accordion, { IAccordionProps } from '../generic-components/Accordion';
import Title from '../generic-components/Title';

function WorkAndEducation() {

  const DATA: IAccordionProps[] = [
    {
      title: "BUDDI AI",
      description: "Junior Research Engineer",
      subtitle: "Jan 2021 - Present",
      body: "Develop web applications using Angular, Play Framework and Scala",
      iconPath: "buddi.png"
    },
    {
      title: "Baroqe",
      description: "Web Developer (Intern)",
      subtitle: "Sep 2020 - Feb 2021",
      body: "Contributed to the development of a mobile application using React Native, that enabled art instructors to take classes.",
    },
    {
      title: "Mepco Schlenk Engineering College",
      description: "B.E CSE",
      subtitle: "Aug 2017 - Apr 2021",
      body: "University First Rank Holder | CGPA: 9.25",
      iconPath: "msec.png"
    }
  ]
  return (
    <section id="workAndEducation">
      <Title title="Work and Education" />
      <div className="section-body">
        {DATA.map((accordionData: IAccordionProps, idx) => <Accordion key={idx} {...accordionData} expanded={idx === 0 ? true : false} />)}
      </div>
    </section>
  )
}

export default WorkAndEducation;