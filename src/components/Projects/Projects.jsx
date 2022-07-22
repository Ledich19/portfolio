import React, { useEffect, useState } from 'react'
import Project from './Project'
import './Projects.scss'
import project01img from'./../../img/Project_01_img.jpg'


const Projects = ({ className, toglable }) => {
  const [column1, setColumn1] = useState([])
  const [column2, setColumn2] = useState([])
  const [column3, setColumn3] = useState([])
  const [projectWidth, setProjectWidth] = useState([])
  const projects = [
    {
      title: 'my first project',
      image: project01img,
      tehnologies: ['html', 'css', 'js'],
      descriptionTitle: 'my first project',
      description: 'Here I used java script html and css. Make tabs, slider, calculator, timer and modal window with timeout and the ability to close ESK. Only javascript was used',
      gitLink: 'https://github.com/Ledich19/Project_01',
      showLink: 'ledich19.github.io/projects/Project_01',
    },
    {
      title: 'title',
      image: 'https://drom.org.mk/wp-content/uploads/2021/02/project-planning-header@2x.png',
      tehnologies: ['react', 'css', 'node'],
      description: 'shgsdhfgjmtiktyutyukty',
      gitLink: 'dfhdfgbh',
      showLink: 'bfgjtg',
    },
    {
      title: 'title',
      image: 'https://drom.org.mk/wp-content/uploads/2021/02/project-planning-header@2x.png',
      tehnologies: ['react', 'css', 'node'],
      description: 'shgsdhfgjmtiktyutyukty',
      gitLink: 'dfhdfgbh',
      showLink: 'bfgjtg',
    },
    {
      title: 'title',
      image: 'https://drom.org.mk/wp-content/uploads/2021/02/project-planning-header@2x.png',
      tehnologies: ['react', 'css', 'node'],
      description: 'shgsdhfgjmtiktyutyukty',
      gitLink: 'dfhdfgbh',
      showLink: 'bfgjtg',
    },
    {
      title: 'title',
      image: 'https://drom.org.mk/wp-content/uploads/2021/02/project-planning-header@2x.png',
      tehnologies: ['react', 'css', 'node'],
      description: 'shgsdhfgjmtiktyutyukty',
      gitLink: 'dfhdfgbh',
      showLink: 'bfgjtg',
    },
    {
      title: 'title',
      image: 'https://drom.org.mk/wp-content/uploads/2021/02/project-planning-header@2x.png',
      tehnologies: ['react', 'css', 'node'],
      description: 'shgsdhfgjmtiktyutyukty',
      gitLink: 'dfhdfgbh',
      showLink: 'bfgjtg',
    },
    {
      title: 'title',
      image: 'https://drom.org.mk/wp-content/uploads/2021/02/project-planning-header@2x.png',
      tehnologies: ['react', 'css', 'node'],
      description: 'shgsdhfgjmtiktyutyukty',
      gitLink: 'dfhdfgbh',
      showLink: 'bfgjtg',
    },
    {
      title: 'title',
      image: 'https://drom.org.mk/wp-content/uploads/2021/02/project-planning-header@2x.png',
      tehnologies: ['react', 'css', 'node'],
      description: 'shgsdhfgjmtiktyutyukty',
      gitLink: 'dfhdfgbh',
      showLink: 'bfgjtg',
    },
    {
      title: 'title',
      image: 'https://drom.org.mk/wp-content/uploads/2021/02/project-planning-header@2x.png',
      tehnologies: ['react', 'css', 'node'],
      description: 'shgsdhfgjmtiktyutyukty',
      gitLink: 'dfhdfgbh',
      showLink: 'bfgjtg',
    },
    {
      title: 'title',
      image: 'https://drom.org.mk/wp-content/uploads/2021/02/project-planning-header@2x.png',
      tehnologies: ['react', 'css', 'node'],
      description: 'shgsdhfgjmtiktyutyukty',
      gitLink: 'dfhdfgbh',
      showLink: 'bfgjtg',
    },
    {
      title: 'title',
      image: 'https://drom.org.mk/wp-content/uploads/2021/02/project-planning-header@2x.png',
      tehnologies: ['react', 'css', 'node'],
      description: 'shgsdhfgjmtiktyutyukty',
      gitLink: 'dfhdfgbh',
      showLink: 'bfgjtg',
    },
    {
      title: 'title',
      image: 'https://drom.org.mk/wp-content/uploads/2021/02/project-planning-header@2x.png',
      tehnologies: ['react', 'css', 'node'],
      description: 'shgsdhfgjmtiktyutyukty',
      gitLink: 'dfhdfgbh',
      showLink: 'bfgjtg',
    },
    {
      title: 'title',
      image: 'https://drom.org.mk/wp-content/uploads/2021/02/project-planning-header@2x.png',
      tehnologies: ['react', 'css', 'node'],
      description: 'shgsdhfgjmtiktyutyukty',
      gitLink: 'dfhdfgbh',
      showLink: 'bfgjtg',
    },
    {
      title: 'title',
      image: 'https://drom.org.mk/wp-content/uploads/2021/02/project-planning-header@2x.png',
      tehnologies: ['react', 'css', 'node'],
      description: 'shgsdhfgjmtiktyutyukty',
      gitLink: 'dfhdfgbh',
      showLink: 'bfgjtg',
    },
    {
      title: 'title',
      image: 'https://drom.org.mk/wp-content/uploads/2021/02/project-planning-header@2x.png',
      tehnologies: ['react', 'css', 'node'],
      description: 'shgsdhfgjmtiktyutyukty',
      gitLink: 'dfhdfgbh',
      showLink: 'bfgjtg',
    },
    {
      title: 'title',
      image: 'https://drom.org.mk/wp-content/uploads/2021/02/project-planning-header@2x.png',
      tehnologies: ['react', 'css', 'node'],
      description: 'shgsdhfgjmtiktyutyukty',
      gitLink: 'dfhdfgbh',
      showLink: 'bfgjtg',
    },
    {
      title: 'title',
      image: 'https://drom.org.mk/wp-content/uploads/2021/02/project-planning-header@2x.png',
      tehnologies: ['react', 'css', 'node'],
      description: 'shgsdhfgjmtiktyutyukty',
      gitLink: 'dfhdfgbh',
      showLink: 'bfgjtg',
    },
  ]

  useEffect(() => {
    const projectSpyse = document.querySelector('.app-projects')
    setProjectWidth(projectSpyse.offsetWidth)
    const countColumn = (Math.floor(projectWidth / 500) > 3) ? 3 : Math.floor(projectWidth / 500)
    const itemsCount = Math.ceil(projects.length / countColumn)

    const sliseArr = (arr, array_size) => {

      const sliced_array = [];
      for (let i = 0; i < arr.length; i += array_size) {
        sliced_array.push(arr.slice(i, i + array_size));
      }
      console.log(sliced_array);
      return sliced_array
    }

    if (countColumn === 3 || countColumn > 3) {
      const arr = sliseArr(projects, itemsCount)
      setColumn1(arr[0])
      setColumn2(arr[1])
      setColumn3(arr[1])
    } else if (countColumn === 2) {
      const arr = sliseArr(projects, itemsCount)
      setColumn1(arr[0])
      setColumn2(arr[1])
      setColumn3([])

    } else {
      setColumn1(projects)
      setColumn2([])
      setColumn3([])
    }

    window.addEventListener('resize', function () {
      const projectSpyse = document.querySelector('.app-projects')
      setProjectWidth(projectSpyse.offsetWidth)
      console.log(projectSpyse.offsetWidth)
    })
  }, [projectWidth])

  return (
    <div onClick={toglable} className={`app-projects ${className}`}>
      <div className="app-projects__column">
        <div className="app-projects__title">
          my works
        </div>
        {column1.map((p, i) => {
          return <Project
            key={i}
            title={p.title}
            image={p.image}
            tehnologies={p.tehnologies}
            description={p.description}
            gitLink={p.gitLink}
            showLink={p.showLink}
          />
        })}
      </div>

      <div style={column2.length !== 0 ? {} : {display: 'none'}} className="app-projects__column">{column2.map((p, i) => {
        return <Project
          key={i}
          title={p.title}
          image={p.image}
          tehnologies={p.tehnologies}
          description={p.description}
          gitLink={p.gitLink}
          showLink={p.showLink}
        />
      })}</div>

      <div style={column3.length !== 0 ? {} : {display: 'none'}} className="app-projects__column">
      <div className="app-projects__height">
          
        </div>
        {column3.map((p, i) => {
        return <Project
          key={i}
          title={p.title}
          image={p.image}
          tehnologies={p.tehnologies}
          description={p.description}
          gitLink={p.gitLink}
          showLink={p.showLink}
        />
      })}
      </div>


    </div>
  )
}

export default Projects