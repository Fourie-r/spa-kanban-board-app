import {IUserModel} from '../../_models/IUserModel';

export class UserLoginMessage {
  constructor(public user: IUserModel) {
  }
}
