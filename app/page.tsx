import Search from "@/components/Search"
import UsersTable from "@/components/UsersTable"
import { Card, Title, Text } from "@tremor/react";


type Props = searchParams: {
  b?:string
}

export default async function Home(boitmann) {
  console.log(boitmann)


  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Text>A table of users retrieve from our database.</Text>
      <Search />
      <Card className="mt-6">
        <UsersTable />
      </Card>
    </main>
  );
}
