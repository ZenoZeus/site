import { Heart } from "lucide-react";

const mockdata = {
  image:
    "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?auto=format&fit=crop&w=600&q=80",
  title: "Verudela Beach",
  country: "Croatia",
  description:
    "Completely renovated for the season 2020, Arena Verudela Beach Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
  badges: [
    { emoji: "☀️", label: "Sunny weather" },
    { emoji: "🦓", label: "Onsite zoo" },
    { emoji: "🌊", label: "Sea" },
    { emoji: "🌲", label: "Nature" },
    { emoji: "🤽", label: "Water sports" },
  ],
};

export default function BadgeCard({title,badges}) {
//   const { image, title, description, country, badges } = mockdata;
    
  return (
    <div className="min-w-sm max-w-sm rounded-md  text-white bg-white dark:bg-zinc-900 shadow-md overflow-hidden">

      {/* Image */}
      {/* <img src={image} alt={title} className="w-full h-[180px] object-cover" /> */}

      {/* Section 1 */}
      <div className="border-b text-green-500 px-4 py-3">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium">{title}</h2>
          {/* <span className="text-sm bg-gray-100 dark:bg-zinc-800 px-2 py-1 rounded">
            {country}
          </span> */}
        </div>
        {/* <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
          {description}
        </p> */}
      </div>

      {/* Section 2 */}
      <div className="px-4 py-3">
        

        <div className="flex flex-wrap gap-2 mt-2">
          {badges.map((badge) => (
            <span
              key={badge.label}
              className=" text-sm bg-gray-100 dark:bg-zinc-800 px-2 py-1 rounded flex items-center gap-1 hover:border hover:text-green-300"
            >
              {/* <span>{badge.emoji}</span> */}
              {badge.label}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      {/* <div className="flex items-center gap-2 px-4 py-3">
        <button className="flex-1 bg-gray-200 dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700 transition rounded-md py-2">
          Show details
        </button>

        <button className="w-9 h-9 flex items-center justify-center border rounded-md">
          <Heart className="text-red-500 w-5 h-5" />
        </button>
      </div> */}
    </div>
  );
}