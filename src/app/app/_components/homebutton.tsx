'use client'

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ButtonDemo() {
  const router = useRouter();
  return <Button onClick={() => router.push("/app")}>Redirect</Button>;
}
