import TagButton from "./TagButton";

export default function SideMenu() {
    return (
        <div className={"side-menu"}>
            <TagButton>
                جديدة<span>🌠🌠🌠</span>
            </TagButton>
            <TagButton>
                الأكثر قراءة
                <img
                    style={{ width: "110px" }}
                    src="../public/img-01.png"
                    alt="image"
                />
            </TagButton>

            <TagButton>
                مقالات مميزة
                <p>🔥🔥🔥</p>
                <img
                    style={{
                        width: "100px",
                        height: "110px",
                        marginTop: "10px",
                    }}
                    src="../public/img-01.png"
                    alt="image"
                />
            </TagButton>
        </div>
    );
}
