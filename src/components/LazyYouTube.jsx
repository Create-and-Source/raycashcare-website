import { useState } from 'react'
import { Play } from 'lucide-react'

export default function LazyYouTube({ id, title }) {
  const [loaded, setLoaded] = useState(false)

  if (loaded) {
    return (
      <div className="relative w-full aspect-video bg-dark-2">
        <iframe
          src={`https://www.youtube.com/embed/${id}?rel=0&autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          style={{ border: 'none' }}
        />
      </div>
    )
  }

  return (
    <button
      onClick={() => setLoaded(true)}
      className="relative w-full aspect-video bg-dark-2 border-none cursor-pointer group overflow-hidden p-0"
    >
      <img
        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
        loading="lazy"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-green/90 group-hover:bg-green flex items-center justify-center rounded-full transition-all group-hover:scale-110">
          <Play size={28} className="text-white ml-1" fill="white" />
        </div>
      </div>
    </button>
  )
}
