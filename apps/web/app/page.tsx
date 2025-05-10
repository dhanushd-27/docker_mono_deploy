import prisma from '@repo/db/client';
import React from 'react'

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => <li key={user.id}>{user.email}</li>)}
      </ul>
    </div>
  )
}
