import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_PROFILE, QUERY_ME } from "../../utils/queries";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { Navigate, useParams } from "react-router-dom";

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const SideNavCourses = () => {
  // const { loading, data } = useQuery(QUERY_COURSES);
  // const courses = data?.courses || [];
  const { profileId } = useParams();
  const { loading, data } = useQuery(
    profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
    {
      variables: { profileId: profileId },
    }
  );
  const profile = data?.me || data?.profile || {};

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {profile.courses?.length > 0 && (
            <>
              {profile.courses.map((course) => (
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
      )}
    </>
  );
};

export default SideNavCourses;
