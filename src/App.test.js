import { render } from "@testing-library/react"
import App from "./App"

test('render',()=>{
    render(<App/>)
    const text = screen.getByText('Redux Cart')
    expect(text).toBeInTheDocument()
})