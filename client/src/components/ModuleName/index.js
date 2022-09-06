import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_MODULE } from "../../utils/queries";
import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const ModuleName = (props) => {
  const { loading, error, data } = useQuery(QUERY_SINGLE_MODULE, {
    variables: { moduleId: props.moduleId },
  });

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;
  // console.log(data);
  const module = data?.module || [];
  console.log(module);

  const renderTooltip = (props) => (
    <Tooltip id='button-tooltip' {...props}>
      View lectures & activities
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement='auto-start'
      delay={{ show: 250, hide: 100 }}
      overlay={renderTooltip}
    >
      <h4 {...props} className='card-header courseH'>
        <Link className='text-primary' to={`/module/${module._id}`}>
          {module.name}
        </Link>
      </h4>
    </OverlayTrigger>
  );
};

export default ModuleName;
