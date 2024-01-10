import { currentUser } from '@clerk/nextjs'

export default async function DashboardPage() {
  const user = await currentUser();

  console.log(user)

  return <div>DashboardPage</div>;
}
