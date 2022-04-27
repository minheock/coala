import { ref, uploadBytes } from '@firebase/storage';
import { storage } from './config';

async function uploadFiles(file) {
  try {
    if (!file) return;

    // 이미지 이름 new Date().getTime() 형식으로 바꾸기.
    const nowtime = new Date().getTime();
    let filename = file.name.split('.');
    filename = `${nowtime}.${filename[filename.length - 1]}`;
    const storageRef = ref(storage, `/file/sub/sub2/${filename}`);
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
  // https://firebasestorage.googleapis.com/v0/b
  // const uploadTask = uploadBytesResumable(storageRef);

  // uploadTask.on(
  //   'state_changed',
  //   snapshot => {
  //     const prog = Math.round(
  //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
  //     );
  //     console.log(prog);
  //   },
  //   error => console.log(error),
  //   () => {
  //     getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
  //       console.log('File available at', downloadURL);
  //     });
  //   },
  // );
}

export default uploadFiles;
