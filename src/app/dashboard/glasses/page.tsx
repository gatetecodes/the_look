import Glasses from "@/components/glasses/Glasses";
import { getGlasses } from "@/lib/actions/glass.action";

export default async function GlassesPage() {
  const glasses = await getGlasses();

  return (
    <div className="container mx-auto py-10">
      <Glasses glasses={glasses} />
    </div>
  );
}
