import api from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
type CentersResponse = {
  isSuccess: boolean;
  statusCode: number;
  message: string;
  data: Data;
  errors: string;
};

type Data = {
  data: Daum[];
  pagination: Pagination;
};

type Daum = {
  name: string;
  description: string;
  studentsCount: number;
  teachersCount: number;
  ceneterLogo: string;
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
type Props = {
  page?: number;
  pageSize?: number;
  search?: string;
  shift?: string;
};
export const useGetCenters = (props?: Props) => {
  return useQuery<CentersResponse>({
    queryKey: ["centers", props],
    queryFn: async () => {
      const res = await api.get("/Center/dashboard", { params: props });
      return res.data;
    },
  });
};

type StatsResponse = {
  isSuccess: boolean;
  statusCode: number;
  message: string;
  data: {
    studentsCount: number;
    teachersCount: number;
    memorizersCount: number;
    centersCount: number;
  };
  errors: string;
};

export const useGetStats = () => {
  return useQuery<StatsResponse>({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await api.get("/dashboards/all centers");
      return res.data;
    },
  });
};
