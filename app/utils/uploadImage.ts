import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../libs/firebase";
import { toast } from "react-hot-toast";

const uploadImage = (file: File, setURL: (url: string) => void) => {
  const name = new Date().getTime() + file.name;
  const storageRef = ref(storage, name);

  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      progress === 100 && toast.success(`Progress is ${progress}%`);
      switch (snapshot.state) {
        case "paused":
          break;
        case "running":
          break;
      }
    },
    (error) => {
      console.log(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setURL(downloadURL);
      });
    }
  );
};

export default uploadImage;
