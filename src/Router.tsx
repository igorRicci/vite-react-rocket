import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Note } from "./pages/Note";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
      <Route path="/notes" element={<Note />}/>
    </Routes>
  )
}
