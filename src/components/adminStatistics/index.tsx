import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const AdminStatistics = () => {
  return (
    <Card className="bg-brand-yellow">
      <CardHeader>
        <CardTitle className="text-white">Total de Leitores</CardTitle>
      </CardHeader>
      <CardContent className="text-6x1 font-bold text-white">1</CardContent>
    </Card>
  );
};

export default AdminStatistics;
