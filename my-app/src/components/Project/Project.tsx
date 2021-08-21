import React, { useEffect, useState } from 'react';

interface ProjectProps {
    projectId: number;
}

interface ProjectData {
   name: string;
   student1 : string;
   student2 : string;
   status : number;
}

const Project =(props: ProjectProps)=>{

const [projectData, setProjectData] = useState<ProjectData>();

useEffect (()=>{
  //todo replace with rest api - send projectId and get  project data 
    const data : ProjectData= {name: 'managment projects', student1: 'Ruth', student2: 'Ester' , status: 1 }
    setProjectData(data);

}, [props.projectId]);

return(
  
    <div> 
    {projectData ?
    <>
    <h1>{projectData.name}</h1> 
    <p>{projectData.student1}</p>
    <p>{projectData.student2}</p>
    </> : null
    }
    </div>

);

};


export default Project
