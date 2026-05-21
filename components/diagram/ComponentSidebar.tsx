// components/diagram/ComponentSidebar.tsx
// Right-hand panel on the diagram page.
// Shows component details when selectedId is set, otherwise shows an empty state.
// Look up the selected component with CA_COMPONENTS.find(c => c.id === selectedId).

import { CA_COMPONENTS, CA_LAYERS } from '@/lib/ca-data'

interface ComponentSidebarProps {
  selectedId: string | null
}

export default function ComponentSidebar({ selectedId }: ComponentSidebarProps) {
  const component = CA_COMPONENTS.find((c) => c.id === selectedId) ?? null

  return <aside></aside>
}
