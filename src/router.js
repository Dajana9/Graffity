import {BrowserRouter, Route} from 'react-router-dom';
import React from 'react';
import {Gallery} from './gallery/gallery';
import {Game} from './game/game';
import {Workshop} from './workshop/workshop';
import {Webshop} from './webshop/webshop';

export class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    {/* <Route exact path="/" component={Home} /> */}
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/workshop" component={Workshop} />
                    <Route path="/webshop" component={Webshop} />
                    <Route path="/game" component={Game} />

                    {/* <Route path="/gallery/addAritcle" component={AddArticle} /> */}
                    {/* <Route path={`/gallery/?`} component={BaseModal} /> */}
                </div>
            </BrowserRouter>
        );
    }
}
