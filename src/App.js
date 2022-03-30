
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';

import FriendDetail from './component/FriendDetail/FriendDetail';
import Friends from './component/Friends/Friends';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import Post from './component/Post/Post';
import PostDetail from './component/PostDetail/PostDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/friends' element={<Friends />}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/friends/:friendId' element={<FriendDetail />} />
        <Route path='/posts' element={<Post></Post>}>

          <Route path=':postId' element={<PostDetail />}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
