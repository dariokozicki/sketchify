import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";

export const CustomMenubar = () => {
  const items: MenuItem[] = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => window.location.replace("https://google.com"),
    },
    {
      label: "About us",
      icon: "pi pi-question-circle",
      command: () => console.log("hola mundo"),
    },
  ];

  return (
    <div className="mx-auto w-2/4">
      <Menubar model={items} />;
    </div>
  );
};
