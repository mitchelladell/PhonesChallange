import { useState } from "react";
import { addPhone } from "../api/phone";
import type { IPhone } from "../types";
import styles from "./Form.module.css";

const Form = () => {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload: Omit<IPhone, "id"> = {
      name: formData.get("name") as string,
      data: {
        year: Number(formData.get("year")),
        price: Number(formData.get("price")),
        color: formData.get("color") as string,
        capacity: formData.get("storage") as string,
      },
    };

    setSubmitting(true);
    setError("");
    setSuccess(false);

    addPhone(payload)
      .then(() => {
        setSuccess(true);
        form.reset();
      })
      .catch((err: Error) => setError(err.message))
      .finally(() => setSubmitting(false));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.card}>
      <p className={styles.sectionLabel}>New entry</p>
      <div className={styles.field}>
        <label>Device name</label>
        <input
          name="name"
          type="text"
          placeholder="e.g. Apple iPhone 15 Pro"
          required
        />
      </div>
      <div className={styles.field}>
        <label>Year</label>
        <input name="year" type="number" placeholder="2024" />
      </div>
      <div className={styles.field}>
        <label>Price (USD)</label>
        <input name="price" type="number" placeholder="999" />
      </div>
      <div className={styles.field}>
        <label>Color</label>
        <input name="color" type="text" placeholder="Natural Titanium" />
      </div>

      {error && <p className={styles.errorState}>{error}</p>}
      {success && <p className={styles.successState}>Device added.</p>}
      <button className={styles.submitBtn} disabled={submitting}>
        {submitting ? "Adding..." : "Add to catalog →"}
      </button>
    </form>
  );
};

export default Form;
