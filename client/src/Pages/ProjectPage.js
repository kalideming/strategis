import React, { useState, useEffect } from "react";
import MemberList from "../Components/MemberList";
import TaskList from "../Components/TaskList";
import ProjectInfo from "../Components/ProjectInfo";
import UpdateProjectButton from "../Components/UpdateProjectButton";
import { useParams } from "react-router-dom";

function ProjectPage({ user }){

    // const currentUser = user[0];
    const [ project, setProject ] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`/projects/${id}`)
        .then((r) => r.json())    
        .then((project) => setProject(project))    
    }, []);

    let projectMembers = project.project_roles
    let projectTasks = project.tasks 

    return (
        <div>
            <ProjectInfo project={project}/>
            <MemberList projectMembers={projectMembers} project={project}/>
            <TaskList tasks={projectTasks}/>
            <UpdateProjectButton project={project} user={user}/>
        </div>
    );

};

export default ProjectPage;