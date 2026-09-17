import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { bootstrapWorkspace } from "./api";

export function useWorkspace() {
  return useQuery({
    queryKey: ["workspace"],
    queryFn: () => bootstrapWorkspace(),
    staleTime: 8_000,
  });
}

export function useInvalidateFinance() {
  const qc = useQueryClient();
  return () =>
    qc.invalidateQueries({
      predicate: (q) => {
        const k = q.queryKey[0];
        return typeof k === "string";
      },
    });
}

export function useFinanceMutation<TVars, TOut>(fn: (vars: TVars) => Promise<TOut>) {
  const invalidate = useInvalidateFinance();
  return useMutation({
    mutationFn: fn,
    onSuccess: () => {
      void invalidate();
    },
  });
}
