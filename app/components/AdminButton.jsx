import React from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export function AdminButton({ btnSize }) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/admin")}
      color="primary"
      size={btnSize}
      className="text-sm"
    >
      Admin
    </Button>
  );
}
