import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Landing from "./components/layout/Landing";
import Auth from "./views/Auth";
import AuthContextProvider from "./contexts/AuthContext";
import Dashboard from "./views/Dashboard";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import CourseContextProvider from "./contexts/CourseContext";
import Manager from "./views/Manager";
import Test from "./views/Test";
import ChapterContextProvider from "./contexts/ChapterContext";
import LessonContextProvider from "./contexts/LessonContext";
import PublicRoute from "./components/routing/PublicRoute";
import Course from "./views/Course";
import UserManager from "./views/UserManager";

function App() {
  return (
    <>
      <AuthContextProvider>
        <CourseContextProvider>
          <ChapterContextProvider>
            <LessonContextProvider>
              <Router>
                <Switch>
                  <Route exact path="/" component={Landing} />

                  <PublicRoute
                    exact
                    path="/dashboard"
                    component={Dashboard}
                    homeRoute="home"
                  ></PublicRoute>
                  <PublicRoute
                    exact
                    path="/myCourses"
                    component={Dashboard}
                    homeRoute="myCourses"
                  ></PublicRoute>
                  <Route
                    exact
                    path="/login"
                    render={(props) => <Auth {...props} authRoute="login" />}
                  />
                  <Route
                    exact
                    path="/register"
                    render={(props) => <Auth {...props} authRoute="register" />}
                  />
                  <PublicRoute
                    exact
                    path="/courseDetails/id=:id"
                    component={Course}
                    courseRoute="details"
                  ></PublicRoute>
                  <PublicRoute
                    exact
                    path="/search"
                    component={Dashboard}
                    homeRoute="search"
                  ></PublicRoute>
                  <PublicRoute
                    exact
                    path="/allCourse"
                    component={Dashboard}
                    homeRoute="all"
                  ></PublicRoute>
                  <PublicRoute
                    exact
                    path="/allCourseBuy"
                    component={Dashboard}
                    homeRoute="allCourseBuy"
                  ></PublicRoute>
                  <PublicRoute
                    exact
                    path="/allCourseFree"
                    component={Dashboard}
                    homeRoute="allCourseFree"
                  ></PublicRoute>
                  <PublicRoute
                    exact
                    path="/design"
                    component={Course}
                    courseRoute="design"
                  ></PublicRoute>
                  <Route exact path="/addfiles" component={Test}></Route>
                  <ProtectedRoute
                    exact
                    path="/learn/:id/:lessonId"
                    component={Course}
                    courseRoute="learn"
                  ></ProtectedRoute>
                  <ProtectedRoute
                    exact
                    path="/learn/:id/"
                    component={Course}
                    courseRoute="learn"
                  ></ProtectedRoute>
                  <ProtectedRoute
                    exact
                    path="/paySuccess/:cost/:id/:lessonId"
                    component={Dashboard}
                    homeRoute="paySuccess"
                  ></ProtectedRoute>
                  <ProtectedRoute
                    exact
                    path="/payFail"
                    component={Dashboard}
                    homeRoute="payFail"
                  ></ProtectedRoute>

                  <ProtectedRoute
                    exact
                    path="/edit/id=:id"
                    component={Manager}
                    managerRoute="edit"
                  ></ProtectedRoute>
                  <ProtectedRoute
                    exact
                    path="/add"
                    managerRoute="add"
                    component={Manager}
                  ></ProtectedRoute>
                  <ProtectedRoute
                    exact
                    path="/course/id=:id/chapters"
                    managerRoute="chapters"
                    component={Manager}
                  ></ProtectedRoute>
                  <ProtectedRoute
                    exact
                    path="/course/id=:id/addlesson/"
                    managerRoute="addChapter"
                    component={Manager}
                  ></ProtectedRoute>
                  <ProtectedRoute
                    exact
                    path="/course/id=:id/addVideo/:cid"
                    managerRoute="addLesson"
                    component={Manager}
                  ></ProtectedRoute>

                  <ProtectedRoute
                    exact
                    path="/changePassword"
                    userRoute="changePassword"
                    component={UserManager}
                  ></ProtectedRoute>
                  <ProtectedRoute
                    exact
                    path="/changeInfo"
                    userRoute="changeInfo"
                    component={UserManager}
                  ></ProtectedRoute>
                  <ProtectedRoute
                    exact
                    path="/courses"
                    managerRoute="courses"
                    component={Manager}
                  ></ProtectedRoute>
                  <ProtectedRoute
                    exact
                    path="/member"
                    managerRoute="member"
                    component={Manager}
                  ></ProtectedRoute>
                </Switch>
              </Router>
            </LessonContextProvider>
          </ChapterContextProvider>
        </CourseContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
