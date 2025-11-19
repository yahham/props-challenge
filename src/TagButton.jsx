import { Children } from "react";

export default function TagButton(props) {
    return (
        <button className={"tag-btn"}>
            {props.title}
            {props.children}
        </button>
    );
}
