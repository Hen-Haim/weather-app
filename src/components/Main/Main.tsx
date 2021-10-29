import "./Main.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home } from '../Home/Home';
import { Favorites } from '../Favorites/Favorites';
import { Search } from '../Search/Search';
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const Main = () => {
    return (
        <div>
            <Route render={({location})=>(
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={300}
                        classNames="fade"
                    >
                        <Switch location={location}>
                            <Route exact path="/home"><Home /></Route>
                            <Route exact path="/weather"><Search /></Route>
                            <Route exact path="/favorites"><Favorites /></Route>
                            <Redirect from="/" to="/home" exact />
                            <Route><Home /></Route>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )}/>            
        </div>
    )
}
