import { useState } from "react";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

export default function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      <div className="flex bg-blue-200 dark:bg-gray-700 p-2 rounded-xl w-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-4 py-2 rounded-lg text-white font-medium transition-all cursor-pointer
              ${activeTab === tab.id ? "bg-blue-600" : "hover:bg-blue-400 dark:hover:bg-gray-600"}
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4 text-dark dark:text-white">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
