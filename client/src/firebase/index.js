import { ref, uploadBytes } from '@firebase/storage';
import { storage } from './config';

async function uploadFiles(file) {
  try {
    if (!file) return;
    const storageRef = ref(storage, `/file/sub/sub2/${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const { bucket } = snapshot.metadata;

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
