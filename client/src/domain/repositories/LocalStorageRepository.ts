import { injectable } from 'inversify';
import ILocalStorageRepository from '../models/interfaces/ILocalStorageRepository';
import {
  LocalStorageKeys,
  TypeLocalStorageKeys,
  IUser,
  TypeLocalStorageUserKeys,
} from '../models/interfaces/generic-interfaces';

@injectable()
export default class LocalStorageRepository implements ILocalStorageRepository {
  private localStorageAssistant = {
    set(key: TypeLocalStorageKeys, value: IUser | string) {
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    get(key: string) {
      try {
        return JSON.parse(<string>window.localStorage.getItem(key));
      } catch (e) {
        return null;
      }
    },
  };

  public addUserData = (user: IUser, typeUser: TypeLocalStorageUserKeys): void => {
    if (typeUser === LocalStorageKeys.ownerUser) {
      this.localStorageAssistant.set(LocalStorageKeys.ownerUser, user);
    }
    if (typeUser === LocalStorageKeys.otherUser) {
      this.localStorageAssistant.set(LocalStorageKeys.otherUser, user);
    }
  };

  public addJwtToken = (token: string): void => {
    this.localStorageAssistant.set(LocalStorageKeys.jwtToken, token);
  };

  public removeAllData = (): void => {
    localStorage.clear();
  };

  public getJWT = (): string => this.localStorageAssistant.get(LocalStorageKeys.jwtToken);

  public getOwnerUserData = (): IUser => this.localStorageAssistant.get(LocalStorageKeys.ownerUser);

  public getOtherUserData = (): IUser => this.localStorageAssistant.get(LocalStorageKeys.otherUser);

}
