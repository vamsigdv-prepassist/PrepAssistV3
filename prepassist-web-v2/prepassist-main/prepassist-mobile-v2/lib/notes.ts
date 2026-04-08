import { storage } from "./firebase";
import { ref, uploadString, getDownloadURL, listAll } from "firebase/storage";

export const uploadNoteToVault = async (userId: string, title: string, content: string) => {
  try {
    const noteRef = ref(storage, `users/${userId}/notes/${title}.md`);
    await uploadString(noteRef, content);
    return await getDownloadURL(noteRef);
  } catch (error) {
    console.error("Failed to upload note to Firebase Storage:", error);
    throw error;
  }
};

export const fetchCloudNotes = async (userId: string) => {
  try {
    const folderRef = ref(storage, `users/${userId}/notes`);
    const result = await listAll(folderRef);
    
    const notes = await Promise.all(
      result.items.map(async (item) => {
        const url = await getDownloadURL(item);
        return { name: item.name, url };
      })
    );
    return notes;
  } catch (error) {
    console.error("Failed to fetch cloud notes.", error);
    throw error;
  }
};
