import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_MODULE } from "../../utils/queries";
import { Link } from "react-router-dom";

const ModuleName = (props) => {
  const { loading, error, data } = useQuery(QUERY_SINGLE_MODULE, {
    variables: { moduleId: props.moduleId },
  });

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;
  // console.log(data);
  const module = data?.module || [];
  console.log(module);

  return (
    <>
      <h4 {...props} className='card-header courseH'>
        <Link className='text-primary' to={`/module/${module._id}`}>
          {module.name}
        </Link>
      </h4>
    </>
  );
};

export default ModuleName;
