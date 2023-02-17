import React, { useState, useEffect } from "react";
import LogInPage from "./Pages/LogInPage";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import AccountPage from "./Pages/AccountPage";
import MyProjectsPage from "./Pages/MyProjectsPage";
import ProjectPage from "./Pages/ProjectPage";
import CompanyProjectsPage from "./Pages/CompanyProjectsPage";
import NewProjectPage from "./Pages/NewProjectPage";



function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/home").then((r)=> {
      if(r.ok){
        r.json().then((user) => setUser(user))
      }
    })
  }, []);

  if(!user) return <LogInPage onLogin={setUser}/>

  return(
    <div>
      <NavBar user={user} setUser={setUser}/>
      <Switch>
        <Route path="/login">
          <LogInPage user={user} setUser={setUser}/>
        </Route>
        <Route path="/home">
          <HomePage user={user} setUser={setUser}/>
        </Route>
        <Route path="/myaccount">
          <AccountPage user={user} setUser={setUser}/>
        </Route>
        <Route path="/myprojects">
          <MyProjectsPage user={user} setUser={setUser}/>
        </Route>
        <Route path="/companyprojects">
          <CompanyProjectsPage user={user} setUser={setUser}/>
        </Route>
        <Route path="/newproject">
          <NewProjectPage user={user}/>
        </Route>
        <Route path="/projects/:id">
          <ProjectPage user={user} setUser={setUser}/>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
