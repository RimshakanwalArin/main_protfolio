"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function RotatingRole({ roles }: { roles: string[] }) {
  const reduceMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState(roles[0] ?? "Web Developer");
  const [deleting, setDeleting] = useState(false);
  const role = roles[roleIndex] ?? roles[0] ?? "Web Developer";

  useEffect(() => {
    if (reduceMotion) return;

    const timeout = window.setTimeout(() => {
      if (!deleting && text.length < role.length) {
        setText(role.slice(0, text.length + 1));
      } else if (!deleting) {
        setDeleting(true);
      } else if (text.length > 0) {
        setText(role.slice(0, text.length - 1));
      } else {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
      }
    }, !deleting && text === role ? 1050 : deleting ? 34 : 72);

    return () => window.clearTimeout(timeout);
  }, [deleting, reduceMotion, role, roles, text]);

  return (
    <span className="typed-role" aria-label={role}>
      <span aria-hidden="true">{text}</span><span className="typing-cursor" aria-hidden="true" />
    </span>
  );
}