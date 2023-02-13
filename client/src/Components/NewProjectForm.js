import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserProvider";
import { ManagerContext } from "../Context/ManagerProvider";
import { UpperManagContext } from "../Context/UpperManagProvider";
import { ProjectContext } from "../Context/ProjectProvider";

function NewProjectForm({ onClose }) {

    const { user } = useContext(UserContext);
    let [ isManag ] = useContext(ManagerContext)
    let [ isUpperManag ] = useContext(UpperManagContext);
    let [ projects, setProjects ] = useContext(ProjectContext);

    const [ projectTitle, setProjectTitle ] = useState("");
    const [ projectDescription, setProjectDescription ] = useState("");
    const [ projectDeadline, setProjectDeadline ] = useState("");
    const [ projectPhoto, setProjectPhoto ] = useState("");


    function handleNewProject(e) {
        e.preventDefault();

        const formData = {
            company_id: user.company_id,
            title: projectTitle,
            description: projectDescription,
            deadline: projectDeadline,
            photo: projectPhoto
        };

        if (user) {
            fetch(`projects`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            .then((r) => r.json())
            .then((newProject) => {
                setProjects((prevProjects) => [...prevProjects, newProject])
            });
            onClose();
        };
    };

    return (
        <div>
            <h1>New Project</h1>
            <form onSubmit={handleNewProject}>
                <div>
                    <label>Project Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={projectTitle}
                        onChange={(e) => setProjectTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Project Description:</label>
                    <input
                        type="text"
                        name="description"
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label>Project Deadline:</label>
                    <input
                        type="text"
                        name="description"
                        value={projectDeadline}
                        onChange={(e) => setProjectDeadline(e.target.value)}
                    />
                </div>
                <div>
                    <label></label>
                </div>
            </form>
        </div>
    );
};

export default NewProjectForm;