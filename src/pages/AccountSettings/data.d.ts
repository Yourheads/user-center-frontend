export type TagType = {
  key: string;
  label: string;
};

export type GeographicItemType = {
  name: string;
  id: string;
};

export type GeographicType = {
  province: GeographicItemType;
  city: GeographicItemType;
};

export type NoticeType = {
  id: string;
  title: string;
  logo: string;
  description: string;
  updatedAt: string;
  member: string;
  href: string;
  memberLink: string;
};

export type CurrentUser = {
  id: number;
  username: string;
  userAccount: string;
  avatarUrl?: string;
  gender: number;
  phone: string;
  email: string;
  studyNumber: string;
  userStatus: number;
  createTime: Date;
  userRole: number;
};

export type BaseResponse<T> = {
  code: number;
  data: T;
  message: string;
  description: string;
};

export type updateParms = {
    username: string;
    userAccount: string;
    gender: number;
    phone: string;
    email: string;
    studyNumber: string;
};

export type UpdateResult = number;
