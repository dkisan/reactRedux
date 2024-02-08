import { render } from "@testing-library/react"
import App from "./App"
import CartButton from "./components/Cart/CartButton"

test('render',()=>{
    render(<App/>)
    const text = screen.getByText('Redux Cart')
    expect(text).toBeInTheDocument()
})

test('renders "Changed!" if the button was clicked', () => {
    // Arrange
    render(<CartButton />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)

    // Assert
    const outputElement = screen.getByText('Sending!');
    expect(outputElement).toBeInTheDocument();
  });



//   describe('Async component', () => {
//     test('renders posts if request succeeds', async () => {
//       render(<Async />)
  
//       const listItemElements = await screen.findAllByRole('listitem');
//       expect(listItemElements).not.toHaveLength(0);
//     });
//   });