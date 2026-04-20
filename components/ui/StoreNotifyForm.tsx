"use client";

import { useState } from "react";
import styles from "@/app/store/store.module.css";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function StoreNotifyForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          formData as unknown as Record<string, string>,
        ).toString(),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className={styles.formSuccess}>
        You are on the list. I will be in touch.
      </p>
    );
  }

  return (
    <form name="store-notify" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="store-notify" />
      <div className={styles.formRow}>
        <input
          className={styles.emailInput}
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          aria-label="Email address"
          disabled={status === "submitting"}
        />
        <button
          className={styles.submitButton}
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Notify me"}
        </button>
      </div>
      {status === "error" && (
        <p className={styles.formError}>Something went wrong. Try again.</p>
      )}
    </form>
  );
}
