
// cet composant comprondra la liste des projects Frontend???

import CardProject, { DataProject } from "./CardProject"
import react from './assets/react.png'
import reduux from './assets/reduux.jpeg'
import cssModules from './assets/cssModules.jpeg'

const projects : DataProject[] = [
  {
    id: 1,
    title: "note-app",
    description: "CRUD react-toolkit project",
    github_url: "https://github.com/ledemkam/notes-app",
    status: "released",
    website_url: "https://minions-redux.netlify.app",
    technos: [
      {
        title: "react",
        foto_url: react,
      },
      {
        title: "redux-toolkit",
        foto_url: reduux,
      }
    ]
  },
  {
    id: 1,
    title: "minions",
    description: "react-toolkit project",
    github_url: "https://github.com/ledemkam/redux-minions",
    status: "released",
    technos: [
      {
        title: "react",
        foto_url: react,
      },
      {
        title: "redux-toolkit",
        foto_url: reduux,
      },
      {
        title: "css modules",
        foto_url: cssModules,
      }
    ]
  }
]

const FrontendProjects = () => {


  return (
    <div>
      {projects.map(project => (
        <CardProject key={project.id} project={project}/>
      ))

      }
    </div>
  )
}
export default FrontendProjects