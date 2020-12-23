import React from 'react';
import { observer } from 'mobx-react';
import { resolve } from 'inversify-react';
import DependencyType from './inversify.types';
import { useRoutes } from './routes';
import IAuthModel from './domain/models/interfaces/IAuthModel';

@observer
class App extends React.Component {
  @resolve(DependencyType.AuthModel)
  private readonly authModel: IAuthModel;

  render(): JSX.Element {
    this.authModel.updateSession();
    const routes: React.ReactNode = useRoutes(false);

    return (
        <div>
          <div>
            {routes}
          </div>
        </div>
    );
  }
}

export default App;
