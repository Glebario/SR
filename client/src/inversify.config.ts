import { Container } from 'inversify';
import DependencyType from './inversify.types';
import AuthModel from './domain/models/AuthModel';
import IAuthModel from './domain/models/interfaces/IAuthModel';
import LocalStorageRepository from './domain/repositories/LocalStorageRepository';
import ILocalStorageRepository from './domain/models/interfaces/ILocalStorageRepository';
import AuthRepository from './domain/repositories/AuthRepository';
import IAuthRepository from './domain/models/interfaces/IAuthRepository';

const container = new Container();
container.bind<ILocalStorageRepository>(DependencyType.LocalStorageRepository).to(LocalStorageRepository);
container.bind<IAuthRepository>(DependencyType.AuthRepository).to(AuthRepository);
container.bind<IAuthModel>(DependencyType.AuthModel).to(AuthModel);

export default { container };
