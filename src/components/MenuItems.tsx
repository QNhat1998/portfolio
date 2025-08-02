interface MenuItemsProps {
  onItemClick: (sectionId: string) => void;
}

export default function MenuItems({ onItemClick }: MenuItemsProps) {
  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skill", label: "Skills" },
    { id: "project", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="p-4 space-y-2">
      {menuItems.map((item) => (
        <button key={item.id} onClick={() => onItemClick(item.id)} className="w-full text-left text-white dark:text-black hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white px-4 py-2 rounded-lg transition-colors duration-200">
          {item.label}
        </button>
      ))}
    </div>
  );
}
