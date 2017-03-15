import React from 'react'
import {
  BrowserRouter,
  HashRouter,
  MemoryRouter,
  StaticRouter,
  NativeRouter, // used for IOS or Android
  Route,
  Link,
} from 'react-router-dom'

import './App.css'

const LinksRoutes = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Route exact path="/" render={() => <h1>Home</h1>} />
    <Route path="/about" render={() => <h1>About</h1>}/>
  </div>
)

const forceRefresh = () => {
  console.log(new Date())
  return true
}

const BrowserRouterApp = () => (
  <BrowserRouter forceRefresh={forceRefresh()}>
    <LinksRoutes />
  </BrowserRouter>
)

const HashRouterApp = () => (
  <HashRouter hashType="hashbang">
    <LinksRoutes />
  </HashRouter>
)

const MemoryRouterApp = () => (
  <MemoryRouter
    initialEntries={['/', '/about']}
    initialIndex={1}
    >
    <LinksRoutes />
  </MemoryRouter>
)

const StaticRouterApp = () => ( //used server side
  <StaticRouter location="/about" context={{}} >
    <LinksRoutes />
  </StaticRouter>
)

export default StaticRouterApp

/*import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Prompt
} from 'react-router-dom'

import './App.css'

const Home = () => (<h1>Home</h1>)
class Form extends React.Component {
  state = {dirty: false}
  setDirty = () => this.setState({dirty: true})
  render(){
    return (
      <div>
        <h1>Form</h1>
        <input type="text" onInput={this.setDirty}/>
        <Prompt
          when={this.state.dirty}
          message="Data will be lost!"
        />
      </div>
    )
  }
}
const App = (props) => (
  <Router>
    <div>
      <Link to="/">Home</Link>
      <Link to="/form">Form</Link>
      <Route exact path="/" component={Home}/>
      <Route path="/form" component={Form}/>
    </div>
  </Router>
)
export default App*/

/*import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import './App.css'

const loggedin = false

const Links = () =>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/old/123">Old</Link>
    <Link to="/new/456">New</Link>
    <Link to="/protected">Protected</Link>
  </nav>

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" render={() => (<h1>Home</h1>)} />
      <Route
        path="/new/:str"
        render={({match}) => (<h1>New: {match.params.str}</h1>)}/>

      <Route
        path="/old/:str" render={({match}) => (
          <Redirect to={`/new/${match.params.str}`}/>
        )} />

      <Route
        path="/protected" render={() => (
          loggedin ? <h1>Welcome to the protected page</h1> : <Redirect to="/new/Login" />
        )} />
    </div>
  </Router>
)

export default App*/


/*import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css'

const Home = () => (<h1>Home</h1>)
const Menu = () => (
  <div>
    <h1>Menu</h1>
    <Link to="/menu/food">Food</Link>
    <Link to="/menu/drink">Drink</Link>
    <Link to="/menu/sides">Sides</Link>
    <Route
      path="/menu/:section"
      render={({match}) => <h2>{match.params.section}</h2>} />
  </div>
)

const App = (props) => (
  <Router>
    <div>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Route exact path="/" component={Home}/>
      <Route path="/menu" component={Menu}/>
    </div>
  </Router>
)

export default App*/

/*import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css'

const Links = () =>
  <nav>
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
  </nav>

  const Header = ({match}) => (
    <div className="header">
      <Route path="/:page" render={({match}) => (
        <h1>{match.params.page} header</h1>
      )} />
    </div>
  )

  const Content = ({match}) => (
    <div className="content">
      <Route path="/:page" render={({match}) => (
        <p>{match.params.page} content</p>
      )} />
    </div>
  )

  const App = (props) => (
    <Router>
      <div>
        <Links />
        <Header />
        <Content />
      </div>
    </Router>
  )

  export default App*/


/*import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import './App.css'

const Links = () =>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </nav>

  class App extends React.Component {
    render(){
      return(
        <Router>
          <div>
            <Links />
            <Switch>
              <Route exact path="/" render={() => <h1>Home</h1>} />
              <Route path="/about" render={() => <h1>About</h1>} />
              <Route path="/contact" render={() => <h1>Contact</h1>} />
              <Route path="/:itemid"
                render={({match}) => <h1> Item: {match.params.itemid}</h1>} />
            </Switch>
          </div>
        </Router>
      )
    }
  }

  export default App*/


/*import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css'

const Links = () => (
  <nav>
    <Link to="/?id=123">Inline</Link>
    <Link to={{pathname: '/', search: 'id=456'}}>Object</Link>
  </nav>
)

const App = (props) => (
  <Router>
    <div>
      <Links />
      <Route path="/" render={({match, location}) => (
        <div>
          <p>root</p>
          <p>{JSON.stringify(match)}</p>
          <p>{JSON.stringify(location)}</p>
          <p>{new URLSearchParams(location.search).get('id')}</p>
        </div>
      )}/>
    </div>
  </Router>
)

export default App*/


/*import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const App = (props) => (
  <Router>
    <div>
      <Route path="/:page?/:subpage?" render={ ({match}) => (
        <h1>
          PAGE: {match.params.page || 'Home'}<br />
          SUBPAGE: {match.params.subpage}
        </h1>
      )} />
    </div>
  </Router>
)

export default App*/


/*import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

import './App.css';


const Links = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/">Home</NavLink>
    <NavLink activeStyle={{color: 'green'}} to={{pathname: '/about'}}>About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </nav>
)

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" render={()=> <h1>Home</h1>} />
      <Route path="/about" render={()=> <h1>About</h1>} />
      <Route path="/contact" render={()=> <h1>Contact</h1>} />
    </div>
  </Router>
);

export default App
*/
