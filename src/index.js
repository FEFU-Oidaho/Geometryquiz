import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import Header from './components/header';
import Content from './components/content';
import question_list from './data/data';
import {
    BrowserRouter,
    Routes,
    Route,
    useParams
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.body);

let MainComponent = (props) => {
   let { task_id } = useParams();

    return (
        <>
            <Header />
            <Content task={ question_list[0] }/>
        </>
    );
}

const Routing = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/:number"/> { <MainComponent /> }
          </Routes>
        </BrowserRouter>
      );
}

root.render(<MainComponent />);