import {  HashRouter  as Router ,  Routes,  Route,  Link  } from "react-router-dom"
import './assets/css/reset.css'
import './assets/css/common.css'
import Layout from "./components/Layout";
import UserPage from "./components/users/UserPage";
import UsersList from "./pages/users/UsersList";
import Post from "./pages/post/Post";
import Contents from "./components/Contents"; 


const App = () => {
  return (
    <>
     <Router>
     <Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Contents />} />

				<Route path="/post" element={<Post />} />
			
            	<Route path="/user">
					<Route index element={<UsersList />} />
					<Route path=":userId" element={<UserPage />} />
			    </Route>			

			</Route>
		</Routes>
     </Router>
    </>
  );
};

export default App;