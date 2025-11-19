import Post from "./Post";

export default function PostSection() {
    return (
        <div className={"post-section"}>
            <Post
                postTitle="أكاديمية ترميز"
                postContent="أكاديمية مخصصة لتعليم البرمجة بمختلف لغاتهاو تقنياتها"
            >
                20
            </Post>
            <Post
                postTitle="hello world"
                postContent="this is the hello world article"
            />
            <Post postTitle="Post 3" postContent="this is the body of post 3" />
        </div>
    );
}
