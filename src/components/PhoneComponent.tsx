// components/PhonesComponent.tsx
import type { IPhone } from "../types";
import styles from "./Phone.module.css";

const Phone = ({ phone }: { phone: IPhone }) => {
  const dataEntries = phone.data ? Object.entries(phone.data).slice(0, 3) : [];

  return (
    <div className={styles.card}>
      <p className={styles.name}>{phone.name}</p>
      <p className={styles.id}>#{phone.id}</p>
      {dataEntries.length > 0 && (
        <div className={styles.data}>
          {dataEntries.map(([key]) => (
            <div className={styles.dataRow} key={key}>
              <span>{key}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Phone;
