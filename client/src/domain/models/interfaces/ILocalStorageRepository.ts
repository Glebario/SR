import { IUser, TypeLocalStorageUserKeys } from './generic-interfaces';


export default interface ILocalStorageRepository {

  addUserData(user: IUser, typeUser: TypeLocalStorageUserKeys): void

  addJwtToken(token: string): void

  removeAllData(): void

  getJWT(): string

  getOwnerUserData(): IUser
  getOtherUserData(): IUser

}
