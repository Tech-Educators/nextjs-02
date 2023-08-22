// client component beacuse it will be updating the DOM based on the
"use client";

// the experimental react hook, renamed to remove the experimental prefix
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function FormStatusButton() {
  // use this hook and extract the current pending status
  // note: useFormStatus must be used my componetns "inside" a <form> tag
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Sending..." : "Send Comment"}
    </button>
  );
}
