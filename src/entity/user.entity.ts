export interface UserEntity {
  _id: string;
  email: string;
  username: string
  avatar: string;
  timestamps: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}