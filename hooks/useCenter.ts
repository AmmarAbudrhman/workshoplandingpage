import api from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
type CentersResponse = {
  data: Center[];
  pagination: Pagination;
};

type Center = {
  id: number;
  name: string;
  managerName: string;
  createdAt: string;
};

type Pagination = {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  search: string;
  shift: string;
};

export const useGetCenters = () => {
  return useQuery<CentersResponse>({
    queryKey: ["centers"],
    queryFn: async () => {
      const res = await api.get("/Center");
      return res.data;
    },
  });
};
