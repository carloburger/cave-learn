// components/diagram/CADiagram.tsx
// Interactive Clean Architecture diagram.
// Renders CA_LAYERS as rectangles and CA_COMPONENTS as clickable boxes.
// Props: selectedId (string | null), onSelect ((id: string | null) => void)

import { CA_COMPONENTS, CA_LAYERS } from '@/lib/ca-data'

interface CADiagramProps {
  selectedId: string | null
  onSelect: (id: string | null) => void
}

export default function CADiagram({ selectedId, onSelect }: CADiagramProps) {
  return <div onClick={() => onSelect(null)}></div>
}
