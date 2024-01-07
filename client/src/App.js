import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";


import CrudAdd from "./components/cruds/CrudAdd";
import CrudTable from "./components/cruds/CrudTable";

import CrudDetails from "./components/cruds/CrudDetails";
import CrudEdit from "./components/cruds/CrudEdit";
import CrudDelete from "./components/cruds/CrudDelete";


function App() {
	return (
		<div className="App">
			<Router>
			

				<Routes>
					
					
					<Route exact path="/" element={<CrudTable />} />					
					
					<Route exact path="/cruds/new" element={<CrudAdd />} />
					<Route exact path="/cruds/:_id" element={<CrudDetails />} />
					<Route exact path="/cruds/:_id/edit" element={<CrudEdit />} />
					<Route exact path="/cruds/:_id/delete" element={<CrudDelete />} />
				</Routes>
				
			</Router>
		</div>
	);
}

export default App;
