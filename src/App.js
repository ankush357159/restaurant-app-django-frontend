import { Route, Link, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { AddMenu } from "./components/AddMenu";
import { MenuList } from "./components/MenuList";
import { UpdateMenu } from "./components/UpdateMenu";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className='navbar navbar-expand navbar-dark bg-info'>
          <a href='/' className='navbar-brand mx-5'>
            Restaurant Menu
          </a>
          <div className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to={"/add/"} className='nav-link'>
                Add
              </Link>
            </li>
          </div>
        </nav>
        <div className='container m-10'>
          {/* Add routes */}
          <Switch>
            <Route exact path={["/", "/menus"]} component={MenuList} />
            <Route exact path='/add/' component={AddMenu} />
            <Route path='/menu/:id/update/' component={UpdateMenu} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
