import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Authentication from "./app/pages/authentication";
import Content from "./app/pages/content";
import Dashboard from "./app/pages/content/dashboard";
import Project from "./app/pages/content/project";
import DetailProject from "./app/pages/content/project/partials/detail";
import AccessProject from "./app/pages/content/project/partials/detail/partials/access";
import BacklogProject from "./app/pages/content/project/partials/detail/partials/backlog";
import BoardProject from "./app/pages/content/project/partials/detail/partials/board";
import CodeProject from "./app/pages/content/project/partials/detail/partials/code";
import FeatureProject from "./app/pages/content/project/partials/detail/partials/feature";
import InfoProject from "./app/pages/content/project/partials/detail/partials/info";
import NotificationProject from "./app/pages/content/project/partials/detail/partials/notification";
import TimelineProject from "./app/pages/content/project/partials/detail/partials/timeline";
import { PrivateRoute } from "./app/routes/private-route";

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/login" element={<Authentication />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Content />
              </PrivateRoute>
            }
          >
            <Route>
              <Route path="dashboard" element={<Dashboard />}></Route>
              <Route path="project" element={<Project />}></Route>
              <Route path="project/:code" element={<DetailProject />}>
                <Route path="timeline" element={<TimelineProject />}>
                  <Route
                    path="timeline/:issueId"
                    element={<TimelineProject />}
                  ></Route>
                </Route>
                <Route path="backlog" element={<BacklogProject />}>
                  <Route path=":issueId"></Route>
                </Route>
                <Route path="board" element={<BoardProject />} />
                <Route path="details" element={<InfoProject />} />
                <Route path="notifications" element={<NotificationProject />} />
                <Route path="access" element={<AccessProject />} />
                <Route path="features" element={<FeatureProject />} />
                <Route path="code" element={<CodeProject />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
