import prisma from '@repo/db/client';
import React from 'react'

type User = {
  id: string;
  email: string;
}

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user: User) => <li key={user.id}>{user.email}</li>)}
      </ul>
    </div>
  )
}

export const revalidate = 60;