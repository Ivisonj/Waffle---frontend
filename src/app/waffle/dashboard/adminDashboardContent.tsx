import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const readersRaking = [
  {
    email: "test@test.com",
    current_streak: 6,
  },
  {
    email: "test2@test.com",
    current_streak: 1,
  },
];

const AdminDashboardContent = () => {
  return (
    <div className="w-[100%] h-[100%] p-3 flex-col">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-1xl font-bold">Dashboard</h1>
      </header>
      <section>
        <Table className="border border-gray-300 rounded-[15px] mb-5">
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>E-mail</TableHead>
              <TableHead>Streak Atual</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {readersRaking.map((item, index) => (
              <TableRow key={item.email}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.current_streak}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  );
};

export default AdminDashboardContent;
