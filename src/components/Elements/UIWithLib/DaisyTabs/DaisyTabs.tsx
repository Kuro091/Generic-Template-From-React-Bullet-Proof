import { memo } from 'react';

export interface Tab {
  name: string;
  active: boolean;
  onClick: () => void;
  render?: () => JSX.Element;
}

interface DaisyTabsProps {
  tabs: Tab[];
}

export const DaisyTabs = memo(({ tabs }: DaisyTabsProps) => {
  const activeTab = tabs.find((tab) => tab.active);

  return (
    <>
      {/* HEADER */}
      <div className='tabs gap-x-2'>
        {tabs.map((tab) => (
          <a
            key={tab.name}
            className={`tab tab-bordered text-white border-white font-bold ${
              tab.active ? 'tab-active !border-blue-400' : ''
            }`}
            onClick={tab.onClick}
          >
            {tab.name}
          </a>
        ))}
      </div>
      <div className='mt-5'>{activeTab?.active && activeTab.render && activeTab.render()}</div>
    </>
  );
});
