"use client";

import clsx from "clsx";

interface MenuItemProps {
  label: string;
  active?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, active = false }) => {
  return (
    <div
      className={clsx(
        "py-2 pointer transition font-semibold uppercase cursor-pointer hover:text-blue-500",
        { "text-blue-500": active }
      )}
    >
      {label}
    </div>
  );
};

export default MenuItem;
