// App.tsx
import { useState, useEffect } from "react";
import PhonesList from "./components/PhonesList";
import { fetchPhones } from "./api/phone";

import Form from "./components/Form";
import type { IPhone } from "./types";
import styles from "./App.module.css";

type Tab = "form" | "display";

function App() {
  const [activeTab, setActiveTab] = useState<Tab>("form");
  const [err, setErr] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<IPhone[]>([]);

  useEffect(() => {
    setLoading(true);
    fetchPhones()
      .then((data: IPhone[]) => setData(data))
      .catch((err: Error) => setErr(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <h1>Device Catalog</h1>
        <p>restful-api.dev/objects</p>
      </div>

      <div className={styles.tabBar}>
        <button
          className={`${styles.tabBtn} ${activeTab === "form" ? styles.active : ""}`}
          onClick={() => setActiveTab("form")}
        >
          Form
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === "display" ? styles.active : ""}`}
          onClick={() => setActiveTab("display")}
        >
          Phones
        </button>
      </div>

      <div className={styles.tabContent}>
        {activeTab === "form" && <Form />}
        {activeTab === "display" && (
          <>
            {loading && <div className={styles.loadingState}>Loading...</div>}
            {err && <div className={styles.errorState}>{err}</div>}
            {!loading && !err && data.length === 0 && (
              <div className={styles.emptyState}>No data.</div>
            )}
            {!loading && !err && data.length > 0 && (
              <PhonesList phoneList={data} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
