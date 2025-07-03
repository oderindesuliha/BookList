import {test, expect, beforeEach, afterEach} from "vitest"
import {cleanup, fireEvent, render,screen} from "@testing-library/react"
import BookList from "../components/BookList"


test("sum of 2 and 3 is 5", () => {
    const answer = 2 + 3
  expect(answer).toBe(5)
})

const bookList = [
  "Name of the Wind",
  "The Wise Man's Fear",
  "Kafka on the Shore",
  "The Master and the Margarita"
]

beforeEach(()=>{
  render(<BookList books={bookList}/>)

})
afterEach(()=>{
  cleanup()
})

test("Test that 'book collection' is in the document", ()=>{
   const textContent = screen.getByText(/book collection/i)
    expect(textContent).toBeTruthy()
  })

test("Test that 'book' is in the document", ()=>{
   const textContent = screen.getByText(/books to read/i)
    expect(textContent).toBeTruthy()
  })

test("That the mock list displays on my screen", ()=>{
  const books = screen.getAllByRole("listitem")
  expect(books).toHaveLength(bookList.length)
})

test("that I can delete a book", ()=>{
  const deleteBtn = getAllByText(/delete/i)
  // expect(deleteBtn).toBeTruthy()
  fireEvent.click(deleteBtn[0])

  const books = screen.getAllByRole("listitem")
  expect(books).toHaveLength(bookList.length - 1)
})