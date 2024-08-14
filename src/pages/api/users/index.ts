// src/app/api/users/route.ts
import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, doc, setDoc, getDoc, deleteDoc, updateDoc } from "firebase/firestore";

// Create User
export async function POST(req: Request) {
  const data = await req.json();
  const docRef = doc(collection(db, "users"));

  await setDoc(docRef, data);
  
  return NextResponse.json({ id: docRef.id, ...data });
}

// Get User
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: "Missing user ID" }, { status: 400 });
  }

  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return NextResponse.json(docSnap.data());
  } else {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
}

// Update User
export async function PUT(req: Request) {
  const { id, ...data } = await req.json();

  if (!id) {
    return NextResponse.json({ error: "Missing user ID" }, { status: 400 });
  }

  const docRef = doc(db, "users", id);
  await updateDoc(docRef, data);

  return NextResponse.json({ id, ...data });
}

// Delete User
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: "Missing user ID" }, { status: 400 });
  }

  const docRef = doc(db, "users", id);
  await deleteDoc(docRef);

  return NextResponse.json({ id, message: "User deleted" });
}
