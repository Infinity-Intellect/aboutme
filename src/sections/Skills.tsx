import React from 'react'
import CardWrapper from '../generic-components/Card';
import Icon from '../generic-components/Icon';
import Title from '../generic-components/Title';

interface ISkill {
  title: string;
  data: { title: string; icon: string }[];
}

function About() {

  const SKILLS: ISkill[] = [
    {
      title: "Languages",
      data: [
        {
          title: "C++",
          icon: "cpp.png"
        },
        {
          title: "Javascript",
          icon: "js.png"
        },
        {
          title: "Typescript",
          icon: "ts.png"
        },
        {
          title: "Scala",
          icon: "scala.png"
        },
        {
          title: "Java",
          icon: "java.png"
        },
        {
          title: "HTML",
          icon: "html.png"
        },
        {
          title: "CSS",
          icon: "css.png"
        }
      ]
    },
    {
      title: "Frameworks",
      data: [
        {
          title: "Angular",
          icon: "angular.png"
        },
        {
          title: "React",
          icon: "react.png"
        },
        {
          title: "Play",
          icon: "play.png"
        },
        {
          title: "Tailwind",
          icon: "tailwind.png"
        }
      ]
    },
    {
      title: "Database",
      data: [
        {
          title: "PostgreSQL",
          icon: "postgresql.png"
        },
        {
          title: "MongoDB",
          icon: "mongodb.png"
        }
      ]
    },
    {
      title: "Others",
      data: [
        {
          title: "DSA",
          icon: "dsa.png"
        },
        {
          title: "Git",
          icon: "git.png"
        },
        {
          title: "Docker",
          icon: "docker.png"
        }
      ]
    }
  ]
  return (
    <section id="skills">
      <Title title="Skills" />
      <div className="section-body">
        <div id="cardGrid" className="grid sm:grid-cols-1 md2:grid-cols-2 md3:grid-cols-4">
          {SKILLS.map((skill: ISkill, idx) => (
            <CardWrapper key={idx} colorClass="bg-white">
              <h2 className="font-bold">{skill.title}</h2>
              <div className="grid xs:grid-cols-2 md2:grid-cols-2 lg1:grid-cols-3 gap-4 my-4">
                {skill.data.map((technology: { title: string; icon: string }, idx) => (
                  <div key={idx} className="flex flex-col justify-center items-center whitespace-pre-wrap">
                    <Icon url={technology.icon} />{technology.title}
                  </div>
                ))}
              </div>
            </CardWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About;