import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload, message, Form } from 'antd';
import ProForm, {
  ProFormText,
  ProFormSelect,
} from '@ant-design/pro-form';

import styles from './BaseView.less';
import {useModel} from "@@/plugin-model/useModel";
import {updateUser} from "@/pages/AccountSettings/service";

// 头像组件 方便以后独立，增加裁剪之类的功能
const AvatarView = ({ avatar }: { avatar: string }) => (
  <>
    <div className={styles.avatar_title}>头像</div>
    <div className={styles.avatar}>
      <img src={avatar} alt="" />
    </div>
    <Upload showUploadList={false}>
      <div className={styles.button_view}>
        <Button>
          <UploadOutlined />
          更换头像
        </Button>
      </div>
    </Upload>
  </>
);

const BaseView: React.FC = () => {
  const {  refresh,initialState } = useModel('@@initialState');
  const { currentUser } = initialState;
  if(currentUser){
    if(currentUser.gender){
      if(currentUser.gender != '男' && currentUser.gender != '女'){
        currentUser.gender = currentUser.gender == 0 ? '男' : '女';
      }
    }
  }
  // const fetchInitialValues = async () => {
  //   // 发起异步请求获取数据
  //   const response = await fetch('api/user/current');
  //   const data = await response.json();
  //   return data;
  // };
  // const acc = fetchInitialValues();
  // acc.then(result => {
  //   // 处理 Promise 结果
  //   if(currentUser){
  //     if(currentUser.gender){
  //       if(currentUser.gender != '男' && currentUser.gender != '女'){
  //         currentUser.gender = result.date.gender == 0 ? '男' : '女';
  //       }
  //     }
  //
  //   }
  // }).catch(error => {
  //   // 处理 Promise 错误
  //   console.error(error);
  // });
  console.log(currentUser);
  const genderOptions = [
    { value: 0, label: '男' },
    { value: 1, label: '女' },
  ]

  const getAvatarURL = () => {
    if(currentUser){
      if (currentUser.avatarUrl) {
        if (currentUser.avatarUrl) {
          return currentUser.avatarUrl;
        }
        const url = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';
        return url;
      }
    }
    return '';
  };
  // if(currentUser){
  //   if(currentUser.gender != 2){
  //     currentUser.gendername = currentUser.gender == 0 ? '男' : '女';
  //
  //   }
  // }
  // currentUser.gender = currentUser.gendername;
  const handleFinish = async (values) => {
    const update = await updateUser(values);

    if(update){
      message.success('更新基本信息成功');
      // currentUser.gender = values.gender === '0' ? '男' : '女';
      // console.log(currentUser.gender);
      // 刷新页面
      await refresh();
    }else {
      message.error('更新基本信息失败');
    }
    // message.success(values.username);


  };
  const loading = null;
  const [form] = Form.useForm()
  // @ts-ignore
  return (

    <div className={styles.baseView}>
      {loading ? null : (
        <>
          <div className={styles.left}>
            <ProForm
              form = {form}
              layout="vertical"
              onFinish={handleFinish}
              submitter={{
                resetButtonProps: {
                  style: {
                    display: 'none',
                  },
                },
                submitButtonProps: {
                  children: '更新基本信息',
                },
              }}
              initialValues={{
                ...currentUser,
              }}
              hideRequiredMark
            >
              <ProFormText
                width="md"
                name="username"
                label="昵称"
                rules={[
                  {
                    required: true,
                    message: '请输入您的昵称!',
                  },
                ]}
              />
              <ProFormText
                width="md"
                name="userAccount"
                label="账号"
                rules={[
                  {
                    required: true,
                    message: '请输入您的账号!',
                  },
                ]}
              />
              <ProFormSelect
                name="gender"
                label="性别"
                options={genderOptions}
                placeholder="请选择性别"
                rules={[
                  {
                    required: true,
                    message: '请选择性别',
                  },
                ]}
              />

              <ProFormText
                width="md"
                name="phone"
                label="电话"
                rules={[
                  {
                    required: true,
                    message: '请输入您的电话!',
                  },
                ]}
              />
              <ProFormText
                width="md"
                name="email"
                label="邮箱"
                rules={[
                  {
                    required: true,
                    message: '请输入您的邮箱!',
                  },
                ]}
              />
              <ProFormText
                width="md"
                name="studyNumber"
                label="学号"
                rules={[
                  {
                    required: true,
                    message: '请输入您的学号!',
                  },
                ]}
              />
            </ProForm>
          </div>
          <div className={styles.right}>
            <AvatarView avatar={getAvatarURL()} />
          </div>
        </>
      )}
    </div>
  );
};

export default BaseView;
