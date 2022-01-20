import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// key={html.id}
// id={html.id}
// title={html.title}
// desc1={html.desc1}
// desc2={html.desc2}
// element={html.element}
// tag={html.tag}
// version={html.version}
// view={html.view}
// use={html.use}
// definition={html.definition}
// link={html.link}

function ReferInfo({ id, title, desc1, desc2,tag, element, version, view, use, definition, link}) {
    return (
        <li>
            <Link to = {{ pathname: "refer-detail", state: {id, title, desc1, desc2, tag, element, version, view, use, definition, link }}}>
                <span className="num">{id}</span>
                <span className="attr">{title}</span>
                <span className="desc">{desc2}</span>
                <span className="Inline">{element}</span>
            </Link>
        </li>
    )
}

ReferInfo.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    desc1: PropTypes.string.isRequired,
    desc2: PropTypes.string.isRequired,
    element: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
    use: PropTypes.string.isRequired,
    definition: PropTypes.array.isRequired,
    
};

export default ReferInfo;