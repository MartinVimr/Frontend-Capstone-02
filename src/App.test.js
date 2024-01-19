import { fireEvent, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BookingForm from './components/BookingForm';
import Header from './components/Header';
import Main from './components/Main'

test('Renders the Header heading', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();


    const headingElementNew = screen.getByText("Little Lemon");
    expect(headingElementNew).toBeInTheDocument();
})

test('Initialize/Update Times', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const reserveButton = screen.getByText("Reserve a Table");
  fireEvent.click(reserveButton);
})

test('confirm reservation button', () => {
  render(<BrowserRouter><BookingForm /><App /><Main /></BrowserRouter>);
  const confirmButton = screen.getByText("Confirm Reservation");
  fireEvent.click(confirmButton);
})