import { createContext, useContext } from 'react';
import { WidgetThemeProvider } from '../order_page/theme/Theme';

const initialState = {
  calendarLoading: true,
};

const CalendarContext = createContext(initialState);

export const useCalendar = () => useContext(CalendarContext);

export const CalendarProvider = ({ children }) => {
  // I also have some context provider here
  return <WidgetThemeProvider>{children}</WidgetThemeProvider>;
};
