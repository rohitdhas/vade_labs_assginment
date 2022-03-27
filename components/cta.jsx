import { useState } from "react";

export default function CTA({ isConfirm, submitEmail }) {
  const [email, setEmail] = useState("");

  if (isConfirm) {
    return (
      <div>
        <button className="bg-blue-600 rounded-md px-16 py-2 cursor-default text-white hover:bg-blue-700">
          Thank you for your interest!
        </button>
        <div className="text-xs flex">
          <p className="flex align items-center mr-4">
            {" "}
            <span className="material-icons mr-1 text-green-400 font-bold text-sm">
              task_alt
            </span>{" "}
            An email has been sent to your inbox.
          </p>
          <p className="pt-2">
            <div>{`Didn't receive?`}</div>
            <div className="text-red-400 flex align items-center text-xs cursor-pointer hover:text-red-500">
              <span className="material-icons text-sm">restart_alt</span>
              <span>Resend</span>
            </div>
          </p>
        </div>
      </div>
    );
  }
  return (
    <form className="flex">
      <input
        type="email"
        placeholder="email@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="outline-none text-sm placeholder-gray-400 rounded-l-md p-2 border border-blue-500"
      />
      <button
        type="submit"
        onClick={(e) => submitEmail(e, email)}
        className="bg-blue-600 rounded-r-md p-2 text-white text-sm cursor-pointer hover:bg-blue-700"
      >
        Get Early Access
      </button>
    </form>
  );
}
