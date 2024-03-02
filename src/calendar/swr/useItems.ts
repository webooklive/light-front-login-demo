import useSWR from 'swr';

// Define a generic type for the fetcher that specifies the return type
type Fetcher<T> = (props: { startDate: string; endDate: string }) => Promise<Record<string, T[]>>;

type UseItemsProps<T> = {
  startDate: string;
  endDate: string;
  fetcher: Fetcher<T>;
  opId: string;
};

interface Item {
  date?: string;
  id: string;
}

export const useItems = <T extends Item>({ startDate, endDate, fetcher, opId }: UseItemsProps<T>) => {
  const { data, error, isLoading, mutate } = useSWR({ startDate, endDate, opId }, fetcher, {
    refreshInterval: 30000,
  });

  const deleteItem = (itemToDelete: T) => {
    const updatedItems = { ...data };
    const { date } = itemToDelete;
    if (!date) {
      console.error(`${opId} deleteItem has no date`);
      return;
    }
    if (updatedItems[date]) {
      updatedItems[date] = updatedItems[date].filter((item: T) => item.id !== itemToDelete.id);
      void mutate(updatedItems);
    }
  };

  const addItem = (itemToAdd: T) => {
    const updatedItems = { ...data };
    const { date } = itemToAdd;
    if (!data) {
      return;
    }

    if (!date) {
      console.error(`${opId} addItem has no date`);
      return;
    }
    if (data[date]) {
      data[date].push(itemToAdd);
    } else {
      data[date] = [itemToAdd];
    }
    void mutate(updatedItems);
  };
  const addItems = (itemsToAdd: T[]) => {
    const updatedItems = { ...data };

    itemsToAdd.forEach((itemToAdd) => {
      const { date } = itemToAdd;
      if (!data) {
        return;
      }

      if (!date) {
        console.error(`${opId} addItems has no date`);
        return;
      }
      if (updatedItems[date]) {
        updatedItems[date].push(itemToAdd);
      } else {
        updatedItems[date] = [itemToAdd];
      }
    });

    void mutate(updatedItems);
  };
  const updateItem = (itemToUpdate: T) => {
    const updatedItems = { ...data };
    const { date } = itemToUpdate;
    if (!data) {
      return;
    }

    if (!date) {
      console.error(`${opId} updateItem has no date`);
      return;
    }
    updatedItems[date] = (updatedItems[date] || []).map((item) => (item.id === itemToUpdate.id ? itemToUpdate : item));
    void mutate(updatedItems);
  };
  const reFetch = () => {
    return mutate();
  };
  return {
    items: data || {},
    isLoading,
    error,
    deleteItem,
    addItem,
    updateItem,
    addItems,
    reFetch,
  };
};
