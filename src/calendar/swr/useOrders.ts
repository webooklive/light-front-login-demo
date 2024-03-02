import { CalendarService } from '../../api';
import { useItems } from './useItems';

const fetcher = async ({ startDate, endDate }: { startDate: string; endDate: string }) =>
  CalendarService.getCalendarOrders(startDate, endDate);

type UseOrdersProps = { startDate: string; endDate: string };

export const useOrders = ({ startDate, endDate }: UseOrdersProps) => {
  const { items, error, isLoading, deleteItem, addItem, updateItem, reFetch } = useItems({
    startDate,
    endDate,
    opId: 'getCalendarOrders',
    fetcher,
  });

  return {
    items: items || {},
    isLoading,
    isError: error,
    deleteItem,
    addItem,
    updateItem,
    reFetch,
  };
};
