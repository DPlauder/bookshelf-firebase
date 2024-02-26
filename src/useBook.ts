import { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "./firebase/firebaseInit";

type TBook = {
  id: string;
  title: string;
  author: string;
  pages: number;
  read: boolean;
  createdAt: Date;
  imageURL: string;
  uid: string;
};
export default function useBooks() {
  const q = query(collection(db, "books"), orderBy("createdAt", "desc"));
  onSnapshot(q, (snapshot) => {
    setBooks(
      snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as TBook))
    );
  });
  const [books, setBooks] = useState<TBook[]>([]);
  useEffect(() => {
    onSnapshot(collection(db, "books"), (snapshot) => {
      setBooks(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as TBook))
      );
    });
  });
  return [books];
}
