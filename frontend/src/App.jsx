import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/students/Home";
import CourseList from "./pages/students/CourseList";
import CoursesDetails from "./pages/students/CoursesDetails";
import Player from "./pages/students/Player";
import Loading from "./components/students/Loading";
import Educator from "./pages/educators/Educator";
import Dashboard from "./pages/educators/Dashboard";
import MyCourses from "./pages/educators/MyCourses";
import StudentsEnrolled from "./pages/educators/StudentsEnrolled";
import AddCourses from "./pages/educators/AddCourses";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CourseList />} />
        <Route path="/course-list/:input" element={<CourseList />} />
        <Route path="/course/:id" element={<CoursesDetails />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        <Route path="/educator" element={<Educator />}>
          <Route path="/educator" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourses />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="student-enrolled" element={<StudentsEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
