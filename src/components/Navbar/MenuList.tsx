"use client";

interface MenuItemProps {
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label }) => {
  return (
    <div
      className="
        py-2 
        pointer
        transition
        font-semibold
        uppercase
        cursor-pointer

        hover:text-blue-500
      "
    >
      {label}
    </div>
  );
};

export default MenuItem;
