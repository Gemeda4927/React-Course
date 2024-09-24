import {
    useMutation,
    useQueryClient,
  } from "@tanstack/react-query";
  import { toast } from "react-hot-toast";
import { createCabin } from "../../services/apiCabins";
  
  export function useCreateCabin() {
    const queryClient = useQueryClient();
  
    const {
      mutate: createNewCabin,
      isLoading: isCreating,
    } = useMutation({
      mutationFn: createCabin,
      onSuccess: () => {
        toast.success(
          "New cabin successfully created"
        );
        queryClient.invalidateQueries({
          queryKey: ["Cabins"],
        });
      },
      onError: (err) => toast.error(err.message),
    });
  
    return { isCreating, createNewCabin };
  }
  