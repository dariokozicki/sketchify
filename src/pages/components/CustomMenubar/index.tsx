import Image from "next/image";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { profile } from "../../../../public";
import styles from "./styles.module.scss";

export const CustomMenubar = () => {
  const items: MenuItem[] = [
    {
      label: "Home",
      command: () => window.location.replace("https://google.com"),
    },
    {
      label: "Work",
      command: () => {},
    },
    {
      label: "Contact",
      command: () => console.log("hola mundo"),
    },
  ].map((item) => ({ ...item, className: styles.MenuItem }));

  return (
    <nav className={styles.Menubar}>
      <ul>
        <li className="-ml-4 mr-auto flex flex-row items-center">
          <Image
            className="mr-4 rounded-full"
            src={profile}
            width={50}
            height={50}
            alt="Profile Picture"
          />
          <span className="Title Small whitespace-nowrap">Dario Kozicki</span>
        </li>
        {items.map((item) => (
          <li key={item.label}>
            <button className={styles.MenuItem}>
              <span className="Title Small">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
