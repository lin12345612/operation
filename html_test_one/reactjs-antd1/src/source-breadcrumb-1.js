import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route ,Link} from "react-router-dom";

const App = () => (<h2>主页</h2>);
const Hot = () =>(<h2>Users Page</h2>);
const Zhuanlan = () => (<h2>专栏</h2>)

const TestApp = () => (<BrowserRouter>
    <div>
        {/* <ul>
            <li><Link to = "/">主页</Link></li>
            <li><Link to = "/hot">热门</Link></li>
            <li><Link to = "/zhuanlan">专栏</Link></li>
        </ul> */}
        <hr />
        <Route exact path = "/" component={App}></Route>
        <Route path = "/hot" component={Hot}></Route>
        <Route path = "/zhuanlan" component={Zhuanlan}></Route>
    </div>
</BrowserRouter>)

// const PrimaryLayout = () => (
//     <div className = "primary-layout">
//         <header>
//             react router 4
//         </header>
//         <main>
//             <Route path="/" exact component = {HomePage} />
//             <Route path="/users"  component={Users} />
//         </main>
//     </div>
// );
// const HomePage = () =><div>HomePage</div>;
// const Users = () => <div>Users Page</div>;

// const TestApp = () => (
//     <BrowserRouter>
//         <PrimaryLayout />
//     </BrowserRouter>
// )

ReactDOM.render(
    <TestApp />,
   document.querySelector("#root")
);
