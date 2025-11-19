export default function Post(props) {
    return (
        <div className={"post"}>
            <span>{props.children}</span>
            <h2>{props.postTitle}</h2>
            <hr />
            <p>{props.postContent}</p>
        </div>
    );
}
