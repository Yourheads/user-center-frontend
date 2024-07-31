import request  from '@/plugins/globalRequest';
import type {BaseResponse, CurrentUser, GeographicItemType, UpdateResult, updateParms} from './data';

export async function queryCurrent(): Promise<{ data: BaseResponse<CurrentUser> }> {
  return request('/api/user/current');
}

// export async function updateUser(): Promise<{ data: BaseResponse<UpdateResult> }> {
//   return request('/api/user/updateuserbyaccount');
// }
export async function updateUser(body: updateParms, options?: { [key: string]: any }) {
  return request<BaseResponse<UpdateResult>>('/api/user/updateuserbyaccount', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function queryCity(province: string): Promise<{ data: GeographicItemType[] }> {
  return request(`/api/geographic/city/${province}`);
}

export async function query() {
  return request('/api/users');
}
