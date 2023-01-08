import { Route, Routes } from "react-router-dom";
import './App.css';
import Nav from "./conponent/Nav";
import Home from "./conponent/Home";
import About from "./conponent/About"
import Board from "./conponent/Board";
import PostDetail from "./conponent/PostDetail";
import Edit from "./conponent/Edit";
import New from "./conponent/New";

function App() {
  return (
      <div className="page">
          <Nav></Nav>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/Board" element={<Board/>}/>
              <Route exact path="/About" element={<About/>}/>

              <Route exact path="/Posts/:id" element={<PostDetail/>}/> {/* 게시물 상세보기 */}
              <Route exact path="/Posts/:id/edit" element={<Edit/>}/>  {/* 게시물 수정 페이지 */}
              <Route exact path="/Posts/new" element={<New/>}/>        {/* 게시물 작성 페이지 */}
          </Routes>
      </div>
  );
}

export default App;
