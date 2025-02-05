import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface NowCardProps {
  name: string;
  description: string;
  imageUrl: string;
  website: string;
}

const NowCard = ({ name, description, imageUrl, website }: NowCardProps) => {
  return (
    <Card className="bg-slate-900 text-white border border-gray-700 shadow-md p-4 flex items-center gap-6">
      {/* Clickable Project Screenshot */}
      <a href={website} target="_blank" rel="noopener noreferrer">
        <img
          src={imageUrl}
          alt={name}
          className="w-32 h-32 rounded-lg object-cover border border-gray-600 shadow-sm hover:scale-105 transition-transform"
        />
      </a>

      {/* Project Info */}
      <CardContent className="flex-1">
        <CardHeader className="p-0">
          <CardTitle className="text-lg font-semibold">{name}</CardTitle>
        </CardHeader>
        <p className="text-sm text-gray-300">{description}</p>
      </CardContent>
    </Card>
  );
};

export default NowCard;
