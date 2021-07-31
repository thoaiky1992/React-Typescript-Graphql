import { UserEntity } from "./user.entity";
import { Entify } from './base.entity'
export interface MessageEntity extends Entify {
  toId: UserEntity
  fromId: UserEntity
  content: string
}