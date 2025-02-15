import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
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
import Navbar from "./components/students/Navbar";
import MyEnrollments from "./pages/students/MyEnrollments";

const App = () => {
  const isEducatorRoute = useMatch("/educator/*");
  return (
    <div className="text-default min-h-screen bg-white">
      {!isEducatorRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CourseList />} />
        <Route path="/course-list/:input" element={<CourseList />} />
        <Route path="/course/:id" element={<CoursesDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        <Route path="/educator" element={<Educator />}>
          <Route path="educator" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourses />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="student-enrolled" element={<StudentsEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
