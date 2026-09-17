import { createFileRoute } from "@tanstack/react-router";
import { BillsPage } from "@/components/bills-page";

export const Route = createFileRoute("/_app/contas-a-pagar")({ component: Page });

function Page() {
  return <BillsPage kind="payable" />;
}
