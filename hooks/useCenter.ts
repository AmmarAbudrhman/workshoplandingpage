import api from "@/lib/axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

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
      const res = await api.get("/dashboards/all-centers");
      return res.data;
    },
  });
};

export const useCreateCenter = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await api.post("/Center", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["centers"] });
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast.error(error.response?.data.message || "فشل إرسال الطلب");
    },
  });
};
