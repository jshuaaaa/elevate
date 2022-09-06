import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_COURSES } from "../../utils/queries";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const SideNavCourses = () => {
  const { loading, data } = useQuery(QUERY_COURSES);
  const courses = data?.courses || [];

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {courses.map((course) => (
            <motion.a
              key={course.name}
              whileHover={{ scale: 1.1 }}
              variants={itemVariants}
            >
              <Link to={`/courses/${course._id}`}>{course.name}</Link>
            </motion.a>
          ))}
        </>
      )}
    </>
  );
};

export default SideNavCourses;
