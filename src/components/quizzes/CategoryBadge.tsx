
function CategoryBadge({category}: {category: string}) {
  const colours: any = {
    Entertainment: "bg-blue-600",
    Gaming: "bg-purple-500",
    Geography: "bg-green-700",
    History: "bg-yellow-900",
    Holiday: "bg-red-600",
    "Just For Fun": "bg-yellow-400 text-black",
    Language: "bg-teal-600",
    Literature: "bg-gray-700",
    Miscellaneous: "bg-slate-600",
    Movies: "bg-red-400",
    Music: "bg-emerald-600",
    Religion: "bg-indigo-900",
    Science: "bg-blue-500",
    Sports: "bg-orange-600",
    Television: "bg-fuchsia-600",
  };
  const colour = colours[category] || "bg-gray-400 text-white";

  return (
    <span className={`ml-2 px-2 py-1 text-xs rounded-full ${colour}`}>
      {category}
    </span>
  );
}

export { CategoryBadge }