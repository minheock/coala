import { ref, uploadBytes } from '@firebase/storage';

import { storage } from './config';

export async function uploadFiles(file) {
  try {
    if (!file) return;

    // 이미지 이름 new Date().getTime() 형식으로 바꾸기.
    const nowtime = new Date().getTime();
    let filename = file.name.split('.');
    filename = `${nowtime}.${filename[filename.length - 1]}`;
    const storageRef = ref(storage, `/content/${filename}`);
    const snapshot = await uploadBytes(storageRef, file);
    const { bucket } = snapshot.metadata;

    // path 변환
    const ethierPath = snapshot.metadata.fullPath.split('/');
    let path = '';
    for (let i = 0; i < ethierPath.length; i++) {
      if (i < ethierPath.length - 1) {
        path += `${ethierPath[i]}%2F`;
      } else {
        path += ethierPath[i];
      }
    }
    const fullpath = `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${path}?alt=media`;
    return fullpath;
  } catch (error) {
    console.error(error);
  }
}

export async function uploadChatFiles(file, room) {
  try {
    if (!file) return;
    // 이미지 이름 new Date().getTime() 형식으로 바꾸기.
    const nowtime = new Date().getTime();
    let filename = file.name.split('.');
    filename = `${nowtime}.${filename[filename.length - 1]}`;
    const storageRef = ref(storage, `chatroom/${room}/${filename}`);
    const snapshot = await uploadBytes(storageRef, file);
    const { bucket } = snapshot.metadata;

    // path 변환
    const ethierPath = snapshot.metadata.fullPath.split('/');
    let path = '';
    for (let i = 0; i < ethierPath.length; i++) {
      if (i < ethierPath.length - 1) {
        path += `${ethierPath[i]}%2F`;
      } else {
        path += ethierPath[i];
      }
    }
    const fullpath = `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${path}?alt=media`;
    return fullpath;
  } catch (error) {
    console.error(error);
  }
}
