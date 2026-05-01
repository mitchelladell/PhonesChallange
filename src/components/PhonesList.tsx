// components/PhonesList.tsx
import type { PhoneListProps } from "../types";
import Phone from "./PhoneComponent";
import styles from "./PhonesList.module.css";

const PhonesList = ({ phoneList }: PhoneListProps) => {
  return (
    <div className={styles.grid}>
      {phoneList.map((phone) => (
        <Phone key={phone.id} phone={phone} />
      ))}
    </div>
  );
};

export default PhonesList;
