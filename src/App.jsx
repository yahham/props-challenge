import "./App.css";

// components
import Header from "./Header";
import PostSection from "./PostSection";
import SideMenu from "./SideMenu";

function App() {
    return (
        <div className={"layout"}>
            <Header />
            <PostSection />
            <SideMenu />
        </div>
    );
}

export default App;
