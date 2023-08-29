import { nanoid } from "nanoid";
import { toast } from "react-hot-toast";

export const getFromLocalStorage = () => {
  return localStorage.getItem("my-images");
};

export const saveToLocalStorage = (images: string[]) => {
  const storedImageUrls = getFromLocalStorage();
  const existingUrls = storedImageUrls ? JSON.parse(storedImageUrls) : [];

  const data = { images, id: nanoid() };

  const updatedUrls = [...existingUrls, data];
  localStorage.setItem("my-images", JSON.stringify(updatedUrls));
  toast.success("Saved");
};

export const deleteFromLocalStorage = (id: string) => {
  const storedImageUrls = getFromLocalStorage();
  const existingUrls = storedImageUrls ? JSON.parse(storedImageUrls) : [];
  const updatedUrls = existingUrls.filter(
    (item: { id: string }) => item.id !== id
  );
  localStorage.setItem("my-images", JSON.stringify(updatedUrls));
  toast.success("Deleted");
};
