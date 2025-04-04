import { CreateUserDto } from "../user/dtos/create-user.dto";
import { CheckUserValueType } from "../types/enum.type";
import { UpdateUserProfileDto } from "../user/dtos/update-user.dto";
import { ChatUser, UserWithProfile } from "../user/dtos/response.dto";
import {
  CheckNicknameDto,
  GetChatParticipantsDto,
} from "../user/dtos/get-user.dto";
import { User } from "@prisma/client";
export interface IUserService {
  createUser(dto: CreateUserDto): Promise<User>;
  checkUser(key: CheckUserValueType, value: string): Promise<boolean>;
  checkNickname(dto: CheckNicknameDto): Promise<boolean>;
  getUserByEmail(email: string): Promise<User>;
  getUserProfileById(id: string): Promise<UserWithProfile>;
  updateUserProfile(
    id: string,
    dto: UpdateUserProfileDto
  ): Promise<UserWithProfile>;
  blockUser(id: string, reasonId: number): Promise<void>;
  getChatParticipants(userIds: GetChatParticipantsDto): Promise<ChatUser[]>;
}
