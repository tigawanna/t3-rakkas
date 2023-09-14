import { trpc } from "@/utils/trpc";
import { Head } from "rakkasjs";

export default function UserPage() {
const query = trpc.hello.hey.useQuery();


  
  return (
    <p>
      <Head title="User page" />
      {query.data}
      User page
    </p>
  );
}
