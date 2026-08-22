import React, { useState } from 'react'

type Person = {
  id: string
  firstName?: string
  lastName?: string
}

export default function App() {
  const [people, setPeople] = useState<Person[]>([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  function addPerson() {
    const p: Person = { id: crypto.randomUUID(), firstName, lastName }
    setPeople((s) => [p, ...s])
    setFirstName('')
    setLastName('')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <h1 className="text-lg font-semibold">Genealogy Table (Tauri Scaffold)</h1>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-indigo-600 text-white rounded">New Project</button>
            <button className="px-3 py-1 bg-gray-200 rounded">Import</button>
            <button className="px-3 py-1 bg-gray-200 rounded">Export</button>
          </div>
        </div>
      </header>

      <main className="p-6 grid grid-cols-4 gap-6">
        <aside className="col-span-1 bg-white p-4 rounded shadow">
          <h2 className="font-medium mb-2">People</h2>
          <div className="space-y-2">
            <div className="flex">
              <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="First" className="flex-1 border p-1 mr-1" />
              <input value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="Last" className="flex-1 border p-1 mr-1" />
              <button onClick={addPerson} className="bg-indigo-600 text-white px-3">Add</button>
            </div>
            <div className="max-h-96 overflow-auto">
              {people.map(p => (
                <div key={p.id} className="p-2 border-b">{p.firstName} {p.lastName}</div>
              ))}
            </div>
          </div>
        </aside>

        <section className="col-span-3 bg-white p-4 rounded shadow">
          <h2 className="font-medium mb-2">Canvas</h2>
          <div className="h-[600px] border rounded bg-gray-50 flex items-center justify-center text-gray-400">Interactive family tree will appear here (React Flow)</div>
        </section>
      </main>
    </div>
  )
}
